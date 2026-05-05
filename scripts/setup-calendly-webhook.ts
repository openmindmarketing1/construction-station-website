import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local so this can be run standalone without a global dotenv setup
const envPath = resolve(process.cwd(), ".env.local");
const envLines = readFileSync(envPath, "utf-8").split("\n");
for (const line of envLines) {
  const eq = line.indexOf("=");
  if (eq === -1 || line.trimStart().startsWith("#")) continue;
  const key = line.slice(0, eq).trim();
  const val = line.slice(eq + 1).trim();
  if (key && !(key in process.env)) process.env[key] = val;
}

const TOKEN = process.env.CALENDLY_API_TOKEN;
if (!TOKEN) {
  console.error("Missing CALENDLY_API_TOKEN in .env.local");
  process.exit(1);
}

// Decode user_uuid from JWT payload (no users:read scope required)
const jwtPayload = JSON.parse(
  Buffer.from(TOKEN.split(".")[1], "base64url").toString("utf-8")
) as { user_uuid: string };
const userUri = `https://api.calendly.com/users/${jwtPayload.user_uuid}`;
console.log(`User URI (from token): ${userUri}`);

const WEBHOOK_URL = "https://openmindmarketing.ai/api/webhooks/calendly";
const CALENDLY_BASE = "https://api.calendly.com";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

async function main() {
  // Step a — get organization URI from /users/me (requires users:read scope)
  console.log("Fetching user info…");
  const meRes = await fetch(`${CALENDLY_BASE}/users/me`, { headers });
  if (!meRes.ok) {
    const body = await meRes.text();
    console.error(`GET /users/me failed (${meRes.status}): ${body}`);
    process.exit(1);
  }
  const me = (await meRes.json()) as {
    resource: { current_organization: string; uri: string };
  };
  const orgUri = me.resource.current_organization;
  console.log(`Organization URI: ${orgUri}`);

  // Step b — create webhook subscription (user scope; org required by API)
  console.log("Creating webhook subscription…");
  const webhookRes = await fetch(`${CALENDLY_BASE}/webhook_subscriptions`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      url: WEBHOOK_URL,
      events: ["invitee.created"],
      organization: orgUri,
      user: userUri,
      scope: "user",
    }),
  });

  const webhookBody = (await webhookRes.json()) as Record<string, unknown>;

  if (!webhookRes.ok) {
    console.error(`POST /webhook_subscriptions failed (${webhookRes.status}):`);
    console.error(JSON.stringify(webhookBody, null, 2));
    process.exit(1);
  }

  // Step c — log subscription URI
  const sub = (webhookBody as { resource: { uri: string } }).resource;
  console.log("\nWebhook subscription created successfully.");
  console.log(`Subscription URI: ${sub.uri}`);
  console.log(`Listening for: invitee.created → ${WEBHOOK_URL}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
