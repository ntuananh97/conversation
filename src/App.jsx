import { useEffect } from "react"
import CommentBox from "./components/CommentBox"
import CommentSection from "./components/CommentSection"
import Header from "./components/Header"
import useStore from "./store/useStore";


function App() {
  const {getComments} = useStore((state) => state);

  useEffect(() => {
    getComments()
  }, [])
  
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
