import { BrowserRouter} from "react-router-dom"
import NavBar from "./header/navBar"
import SubHeader from "./header/subHeader"
import CustomRoutes from "./Routes"
import Footer from "./footer"

function App() {

  return (
   <>
   <BrowserRouter>
     <NavBar/>
    <SubHeader/>
    <CustomRoutes/>
    <Footer/>

   </BrowserRouter>

   </>
  )
}

export default App
