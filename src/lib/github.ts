export async function fetchGitHubProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("GitHub profile fetch failed");
  return res.json();
}

export async function fetchGitHubRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
  if (!res.ok) throw new Error("GitHub repos fetch failed");
  return res.json();
}
