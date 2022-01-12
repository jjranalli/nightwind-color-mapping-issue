import "./styles.css"
import React from "react"

function App() {
  return (
    <div className="bg flex flex-col">
      <div className="bg-primary grow flex">
        <p className="m-auto text-contrast-primary font-bold text-3xl">
          This is a colored text
        </p>
      </div>
      <div className="bg-blue-900 grow flex">
        <p className="m-auto text-white font-bold text-3xl">
          This is a colored text
        </p>
      </div>
    </div>
  )
}

export default App;
