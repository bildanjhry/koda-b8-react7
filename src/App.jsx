import Days from "./components/Days"

function App() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 h-140 bg-(--content-bg) flex flex-col overflow-scroll">
        <ul className="flex flex-col h-full overflow-scroll">
          <Days day={"Sunday"}>
            <h1 className="relative top-1.5">SUNDAY</h1>
          </Days>
          <Days  day={"Monday"}>
            <h1 className="relative top-1.5">MONDAY</h1>
          </Days>
          <Days  day={"Tuesday"}>
            <h1 className="relative top-1.5">TUESDAY</h1>
          </Days>
          <Days  day={"Wednesday"}>
            <h1 className="relative top-1.5">WEDNESSDAY</h1>
          </Days>  
          <Days  day={"Thursday"}>
            <h1 className="relative top-1.5">THURSDAY</h1>
          </Days>
          <Days  day={"Friday"}>
            <h1 className="relative top-1.5">FRIDAY</h1>
          </Days>                            
        </ul>
      </div>
    </div>
  )
}

export default App
