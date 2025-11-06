export default function Skills({skills}) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {skills.map((s, i)=>(
            <div key={i} className="p-4 rounded-lg border bg-white">
              <div className="flex justify-between">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-600">{s.level}%</div>
              </div>
              <div className="mt-3 h-2 bg-gray-200 rounded">
                <div style={{width: s.level + '%'}} className="h-2 rounded bg-indigo-600 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
