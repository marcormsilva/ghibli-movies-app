import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"
import { FilmsProvider } from "./contexts/FilmProvider";

function App() {

  return (
    <>
      <BrowserRouter>
        <FilmsProvider>
        <Router />
        </FilmsProvider>
      </BrowserRouter>

    </>
  )
}

export default App
