import Navbar from "./components/Navbar"
import {ThemeProvider} from "./context/ThemeContext"
import ProductList from "./customHooks/ProductList"


const App = () => {
  return (
    <div>
      <ThemeProvider>
      <Navbar/>
      <ProductList></ProductList>
      </ThemeProvider>
    </div>
  )
}

export default App