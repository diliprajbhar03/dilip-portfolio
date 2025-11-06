export default function Projects({projects}) {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map((p, idx)=>(
            <article key={idx} className="p-6 rounded-2xl border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.summary}</p>
              {p.link && <a className="mt-3 inline-block text-indigo-600" href={p.link} target="_blank">View →</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
