export type GitHubProfile = { avatar_url: string; login: string; name: string | null; public_repos: number };
export type GitHubRepo = { id: number; html_url: string; name: string; language: string | null; description: string | null };

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("GitHub profile fetch failed");
  return res.json();
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  if (!res.ok) throw new Error("GitHub repos fetch failed");
  return res.json();
}
