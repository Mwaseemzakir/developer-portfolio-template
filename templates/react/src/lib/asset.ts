// Resolve a public asset path (e.g. "/profile_picture.png") against Vite's
// configured base URL so it works both locally ("/") and on sub-path deploys
// like GitHub Pages project sites ("/my-repo/react/").
export function asset(path: string): string {
  // Absolute URLs (e.g. an external placeholder avatar) are returned as-is.
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL; // always ends with "/"
  return `${base}${path.replace(/^\//, '')}`;
}
