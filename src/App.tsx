import React from "react"
import "./App.css"
import useData from "./hooks/useData"

function App() {
  const [siteData] = useData()
  console.log(siteData, "siteData")
  return (
    <div className="App">
      <h1> Hello, World!3d </h1>
    </div>
  )
}

export default App
