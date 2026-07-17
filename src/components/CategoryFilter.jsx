const categories = [
  "All",
  "Packaging Machines",
  "Filling Machines",
  "Dough & Bakery Machines",
  "Flour Mill Machines",
  "Juice Machines",
  "Commercial Kitchen Equipment",
  "Food Processing Machines",
  "Vegetable Processing Machines",
  "Dry Fruit Processing Machines",
  "Oil Processing Machines",
  "Pulverisers",
  "Snack Making Machines",
  "Customized Machines",
];

export default function CategoryFilter({
  selected,
  setSelected,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
            selected === category
              ? "bg-emerald-500 border-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30"
              : "bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}