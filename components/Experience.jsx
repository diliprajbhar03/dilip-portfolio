export default function Experience({items}) {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          {items.map((e,i)=>(
            <div key={i} className="p-4 rounded-lg border bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{e.role} — {e.company}</div>
                  <div className="text-sm text-gray-600">{e.period}</div>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
