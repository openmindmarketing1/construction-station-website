"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body style={{ margin: 0, background: "#faf8f3", fontFamily: "sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 400 }}>
            <p style={{ color: "#c9a227", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16 }}>
              Critical Error
            </p>
            <h1 style={{ color: "#1a2744", fontSize: 40, marginBottom: 16, fontWeight: 400 }}>
              Something went wrong
            </h1>
            <p style={{ color: "#666", marginBottom: 24, lineHeight: 1.7 }}>
              We&apos;re sorry — a critical error occurred. Please call us at{" "}
              <a href="tel:9097976333" style={{ color: "#c9a227" }}>
                909-797-6333
              </a>{" "}
              if the issue persists.
            </p>
            <button
              onClick={reset}
              style={{
                background: "#c9a227",
                color: "#1a2744",
                border: "none",
                padding: "12px 32px",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
