import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"

import Home  from "./pages/Home.jsx"
import Questions  from "./pages/Questions.jsx"
import Ask  from "./pages/Ask.jsx"
import MediaAnswers  from "./pages/MediaAnswers.jsx"
import About  from "./pages/About.jsx"

function App() {
  return (
      <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/ask" element={<Ask/>}/>
        <Route path="/media" element={<MediaAnswers/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </>
  )
}

export default App