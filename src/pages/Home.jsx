export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Interactive Questions & Answers
      </h2>

      <p className="mb-6 text-gray-700">
        This platform allows people to ask questions and receive answers that
        may include images, videos or audio explanations.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-4 rounded">
          <img src="https://placehold.co/400x250" className="mb-3 rounded" />
          <h3 className="font-semibold">
            What is Management Information Systems?
          </h3>
          <p className="text-sm text-gray-600">
            Discussion about how information systems support organizations.
          </p>
        </div>

        <div className="border p-4 rounded">
          <img src="https://placehold.co/400x250" />
          <h3 className="font-semibold mt-3">How does cloud storage work?</h3>
        </div>

        <div className="border p-4 rounded">
          <img src="https://placehold.co/400x250" />
          <h3 className="font-semibold mt-3">Benefits of data analytics?</h3>
        </div>
      </div>
    </main>
  );
}
