import TodoApp from "./components/ToDo"
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import ContactLists from "./components/ContactLists";
import ShoppingCart from "./components/ShoppingCart";


const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
 const imageUrls = ['https://robbreport.com/wp-content/uploads/2019/12/9863701f.jpg?w=1000',
  'https://robbreport.com/wp-content/uploads/2019/12/9370122a.jpg?w=1000',
  'https://robbreport.com/wp-content/uploads/2019/12/ssc-tuatara.jpg?w=1000',
  'https://robbreport.com/wp-content/uploads/2021/12/2-24.jpg?w=1000',
  'https://robbreport.com/wp-content/uploads/2022/11/10-w-Sterrato.jpg?w=1000',
  'https://robbreport.com/wp-content/uploads/2022/11/13-w-Revuelto.jpg?w=1000'
]

const contactList = [
  {cID: 1, cName:'Rudraksh Tumane', cPhone:'9763584104', cEmail:'rudra@gmail.com'},
  {cID: 2, cName:'Shriya Sorte', cPhone:'7499924541', cEmail:'shriya@gmail.com'},
  {cID: 3, cName:'Rugved Asre', cPhone:'9384643922', cEmail:'rugved@gmail.com'},
  {cID: 4, cName:'Mayank Gode', cPhone:'8734653278', cEmail:'mayank@gmail.com'},

]

  return (
    <>
     <TodoApp></TodoApp>
     <hr/><br/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr/>

      <Gallery images = {imageUrls}/>
      <hr/>
      <ContactLists contacts={contactList}/>
      <hr/>
      <ShoppingCart/>
    </>
  )
}

export default App
