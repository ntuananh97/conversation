import CommentBox from "./components/CommentBox"
import CommentSection from "./components/CommentSection"
import Header from "./components/Header"



function App() {

  return (
   <div className="app-container w-[810px] mx-auto">
    <div className="conversation">
      <Header />
      <CommentBox />
      <CommentSection />
    </div>
   </div>
  )
}

export default App
