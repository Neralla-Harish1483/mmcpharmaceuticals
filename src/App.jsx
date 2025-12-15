import { HashRouter} from "react-router-dom"
import NavBar from "./header/navBar"
import SubHeader from "./header/subHeader"
import CustomRoutes from "./Routes"
import Footer from "./footer"

function App() {

  return (
   <>
   <HashRouter>
     <NavBar/>
    <SubHeader/>
    <CustomRoutes/>
    <Footer/>

   </HashRouter>

   </>
  )
}

export default App
