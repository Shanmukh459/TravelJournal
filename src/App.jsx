import React from "react"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import travelPlaces from "./assets/data.jsx"

function App() {
  const dataElements = travelPlaces.map((item) => {
    return (
      <Body key={item.title} item={item} />
    )
  })
  return (
    <>
      <Header />
      <main>
        {dataElements}
      </main>
      
    </>
  )
}

export default App
