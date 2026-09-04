"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchGitHubProfile, fetchGitHubRepos, type GitHubProfile, type GitHubRepo } from "../lib/github";

export default function GitHubDashboard({ username = "sandeep776580" }: { username?: string }) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetchGitHubProfile(username)
      .then((p) => setProfile(p))
      .catch(() => null);
    fetchGitHubRepos(username)
      .then((r) => setRepos(r))
      .catch(() => []);
  }, [username]);

  return (
    <section id="github" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">GitHub</h2>
        {profile ? (
          <div className="flex items-center gap-4">
            <Image src={profile.avatar_url} alt={profile.login} width={64} height={64} className="h-16 w-16 rounded-full" />
            <div>
              <div className="font-medium">{profile.name || profile.login}</div>
              <div className="text-sm text-zinc-500">{profile.public_repos} repositories</div>
            </div>
          </div>
        ) : (
          <div>Loading profile...</div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 6).map((r) => (
            <a key={r.id} href={r.html_url} className="p-4 border rounded-md hover:shadow">
              <div className="font-semibold">{r.name}</div>
              <div className="text-sm text-zinc-500">{r.language || "—"}</div>
              <p className="text-sm mt-2 text-zinc-600">{r.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
