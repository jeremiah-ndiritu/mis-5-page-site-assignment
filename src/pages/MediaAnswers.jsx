export default function MediaAnswers() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-bold text-blue-700 mb-6">
        Media Based Answers
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Example Image Explanation</h3>

          <img src="https://placehold.co/500x300" className="rounded" />
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold mb-2">Video Explanation</h3>

          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
