"use client";

import { useState } from "react";

export function ProfileAvatar({ name, url }: { name: string; url: string | null }) {
  const [failed, setFailed] = useState(false);

  return (
    <span aria-hidden="true" className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-soft text-xs font-semibold text-accent">
      {name.slice(0, 1).toUpperCase()}
      {url && !failed && (
        // Google supplies the image URL at sign-in. Load it directly in the browser.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt=""
          className="absolute inset-0 size-full object-cover"
          onError={() => setFailed(true)}
          referrerPolicy="no-referrer"
          src={url}
        />
      )}
    </span>
  );
}
