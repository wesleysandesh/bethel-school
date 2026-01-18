const features = [
  {
    title: "Experienced & Caring Teachers",
    description:
      "Dedicated educators who nurture every child’s academic and personal growth.",
  },
  {
    title: "Value-Based Education",
    description: "Strong focus on discipline, respect, and moral values.",
  },
  {
    title: "Safe & Supportive Environment",
    description:
      "A secure campus where children feel safe, cared for, and confident.",
  },
  {
    title: "Nursery to High School",
    description:
      "Complete schooling journey under one roof for consistent learning.",
  },
];

export default function WhyBethel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Why Bethel High School?
        </h2>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
