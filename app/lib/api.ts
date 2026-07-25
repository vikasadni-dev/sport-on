const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT?.replace(/\/+$/, "");

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  if (!API_URL) {
    throw new Error(
      "Missing NEXT_PUBLIC_API_URL environment variable. Set NEXT_PUBLIC_API_URL in .env."
    );
  }

  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const res = await fetch(`${API_URL}${normalizedEndpoint}`, {
    ...options,
    cache: options?.cache ?? "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${normalizedEndpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      // ignore invalid JSON in error response
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  if (!API_ROOT) {
    throw new Error(
      "Missing NEXT_PUBLIC_API_ROOT environment variable. Set NEXT_PUBLIC_API_ROOT in .env."
    );
  }

  return `${API_ROOT}/${path.replace(/^\/+/, "")}`;
}
