export default function Hero({data}) {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">{data.name} <span className="text-indigo-600">— {data.role}</span></h1>
          <p className="mt-4 text-lg text-gray-600">{data.about}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-md bg-indigo-600 text-white">See projects</a>
            <a href="/public/resume.pdf" className="px-5 py-2 rounded-md border" download>Download Resume</a>
            <a href={`mailto:${data.email}`} className="px-5 py-2 rounded-md border">Email</a>
          </div>
          <ul className="mt-6 flex gap-3 text-sm text-gray-600 flex-wrap">
            <li>📍 {data.location}</li>
            <li>✉️ {data.email}</li>
          </ul>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg">
          <h3 className="font-semibold">Top skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.skills.slice(0,8).map((s,i)=>(<span key={i} className="px-3 py-1 rounded-full border text-sm">{s.name}</span>))}
          </div>
        </div>
      </div>
    </section>
  );
}
