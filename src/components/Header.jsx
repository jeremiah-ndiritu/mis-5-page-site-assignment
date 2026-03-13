import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-lg font-semibold">
          Q&A Hub
        </h1>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/questions" className="hover:underline">Questions</Link>
          <Link to="/ask" className="hover:underline">Ask</Link>
          <Link to="/media" className="hover:underline">Media Answers</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

      </div>
    </header>
  )
}