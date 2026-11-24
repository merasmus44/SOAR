import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextPath = requestUrl.searchParams.get("next");
  const destination =
    nextPath?.startsWith("/") && !nextPath.startsWith("//") && !nextPath.includes("\\")
      ? nextPath
      : "/dashboard";

  try {
    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        return NextResponse.redirect(new URL(destination, request.url));
      }
    }
  } catch {
    // Do not expose tokens or provider internals in the browser URL.
  }

  return NextResponse.redirect(new URL("/login?error=confirmation", request.url));
}
