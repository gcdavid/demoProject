import './App.css';
import CategoryList from './components/categoryList/CategoryList';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import MenuList from './components/menulist/MenuList';
import Navbar from './components/navbar/Navbar';
import Product from './components/product/Product';
import Topbar from './components/topbar/Topbar';
import Stylish from './stylish/Stylish';

function App() {
  return (
  <>
    <Topbar/>
    <Navbar/>    
    <Featured/> 
    <MenuList/> 
    <Stylish/>
    <CategoryList/>   
    <Footer/>
    </>
  );
}

export default App;
