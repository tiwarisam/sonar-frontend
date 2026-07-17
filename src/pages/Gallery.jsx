export default function Gallery() {
  return (
    <section className="bg-slate-950 min-h-screen">

      {/* Hero */}

      <div className="border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold">
            GALLERY
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
            Our Gallery
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            Explore our collection of industrial machines, manufacturing
            excellence, and completed installations.
          </p>

        </div>

      </div>

      {/* Placeholder */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-72 rounded-3xl border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500"
            >
              Image {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}