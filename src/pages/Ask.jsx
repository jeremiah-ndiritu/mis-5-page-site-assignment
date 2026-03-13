export default function Questions() {
  const questions = [
    {
      id: 1,
      title: "What is a database?",
      image: "https://placehold.co/500x300",
      desc: "Understanding structured data storage.",
    },
    {
      id: 2,
      title: "What is cloud computing?",
      image: "https://placehold.co/500x300",
      desc: "How data is stored and accessed over the internet.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Questions</h2>

      <div className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="border rounded p-4 flex gap-4">
            <img src={q.image} className="w-40 rounded" />

            <div>
              <h3 className="font-semibold">{q.title}</h3>
              <p className="text-gray-600 text-sm">{q.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
