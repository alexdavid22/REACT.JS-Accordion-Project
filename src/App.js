import Main from "./main"
import { accordionData } from "./utils/content"

function App() {
  return (
    <>
      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => {
            return <Main title={title} content={content} key={Math.random()} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
