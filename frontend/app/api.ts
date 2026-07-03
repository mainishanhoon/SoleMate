export async function smartFetch(path: string, options?: RequestInit) {
    if (typeof window !== "undefined") {
        return fetch(path, options);
    }

    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:8080";

    const absoluteUrl = `${host}${path}`;
    return fetch(absoluteUrl, options);
}
