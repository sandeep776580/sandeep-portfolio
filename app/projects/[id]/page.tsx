import { projects } from "../../../src/data/projects";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="text-sm text-zinc-500 mb-4">{project.category}</div>
      <div className="mb-6">{project.description}</div>
      <div className="mb-4">
        <strong>Technologies:</strong> {project.tech?.join(", ")}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="underline">GitHub</a>
        {project.demo && <a href={project.demo} className="underline">Live Demo</a>}
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Architecture & Challenges</h2>
        <p className="text-zinc-700">Add architecture overview, challenges, and lessons learned here.</p>
      </section>
    </main>
  );
}
