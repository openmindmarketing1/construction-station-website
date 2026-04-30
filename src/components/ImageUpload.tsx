"use client";

import { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { CS } from "@/lib/constants";

const MAX_FILES = 5;
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

type FileEntry = {
  id: string;
  file: File;
  preview: string;
  progress: number;
  url?: string;
  error?: string;
};

export default function ImageUpload({
  onChange,
}: {
  onChange?: (urls: string[]) => void;
}) {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const supabase = CS.supabaseUrl && CS.supabaseAnonKey
    ? createClient(CS.supabaseUrl, CS.supabaseAnonKey)
    : null;

  function pushUrls(next: FileEntry[]) {
    const urls = next.map((f) => f.url).filter(Boolean) as string[];
    onChange?.(urls);
  }

  async function uploadOne(entry: FileEntry, batchIndex: number) {
    if (!supabase) {
      // Mock progress when no Supabase configured
      for (let p = 20; p <= 100; p += 20) {
        await new Promise((r) => setTimeout(r, 80));
        setFiles((curr) =>
          curr.map((f) => (f.id === entry.id ? { ...f, progress: p } : f))
        );
      }
      const mockUrl = `local://${entry.file.name}`;
      setFiles((curr) => {
        const next = curr.map((f) =>
          f.id === entry.id ? { ...f, progress: 100, url: mockUrl } : f
        );
        pushUrls(next);
        return next;
      });
      return;
    }

    const ts = Date.now();
    const safeName = entry.file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const path = `estimates/${ts}_${batchIndex}/${safeName}`;
    const { error } = await supabase.storage
      .from("estimate-photos")
      .upload(path, entry.file, { upsert: false });

    if (error) {
      setFiles((curr) =>
        curr.map((f) =>
          f.id === entry.id
            ? { ...f, error: error.message, progress: 0 }
            : f
        )
      );
      return;
    }

    const { data } = supabase.storage
      .from("estimate-photos")
      .getPublicUrl(path);

    setFiles((curr) => {
      const next = curr.map((f) =>
        f.id === entry.id
          ? { ...f, progress: 100, url: data.publicUrl }
          : f
      );
      pushUrls(next);
      return next;
    });
  }

  function handleFiles(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list);
    const slots = MAX_FILES - files.length;
    const accepted = incoming.slice(0, slots);

    const newEntries: FileEntry[] = [];
    accepted.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        newEntries.push({
          id: crypto.randomUUID(),
          file,
          preview: "",
          progress: 0,
          error: "Not an image file",
        });
        return;
      }
      if (file.size > MAX_SIZE_BYTES) {
        newEntries.push({
          id: crypto.randomUUID(),
          file,
          preview: "",
          progress: 0,
          error: `File exceeds ${MAX_SIZE_MB}MB`,
        });
        return;
      }
      newEntries.push({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
        progress: 5,
      });
    });

    setFiles((curr) => [...curr, ...newEntries]);
    newEntries.forEach((entry, i) => {
      if (!entry.error) uploadOne(entry, i);
    });
  }

  function removeFile(id: string) {
    setFiles((curr) => {
      const next = curr.filter((f) => f.id !== id);
      pushUrls(next);
      return next;
    });
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed transition-colors p-6 text-center ${
          dragOver
            ? "border-gold bg-gold/5"
            : "border-navy/20 hover:border-gold/60"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <svg
          className="w-10 h-10 text-gold mx-auto mb-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 6l-4-4m0 0L8 6m4-4v12" />
        </svg>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="font-display text-navy text-lg hover:text-gold transition-colors"
        >
          Drop photos here or click to browse
        </button>
        <div className="text-xs text-navy/60 mt-2">
          Up to {MAX_FILES} images · max {MAX_SIZE_MB}MB each · JPG, PNG, HEIC
        </div>
      </div>

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((f) => (
            <li
              key={f.id}
              className="flex items-center gap-3 border border-navy/10 p-2 bg-white"
            >
              <div className="w-14 h-14 bg-cream flex items-center justify-center overflow-hidden shrink-0">
                {f.preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={f.preview}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-navy/40 text-xs">!</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-navy truncate">{f.file.name}</div>
                {f.error ? (
                  <div className="text-red-700 text-xs mt-1">{f.error}</div>
                ) : (
                  <div className="h-1 bg-navy/10 mt-1 overflow-hidden">
                    <div
                      className="h-full bg-gold transition-all duration-300"
                      style={{ width: `${f.progress}%` }}
                    />
                  </div>
                )}
                <div className="text-xs text-navy/50 mt-1">
                  {f.url
                    ? "Uploaded"
                    : f.error
                    ? "Failed"
                    : `Uploading ${f.progress}%`}
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(f.id)}
                aria-label="Remove"
                className="text-navy/50 hover:text-red-700 px-2"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
