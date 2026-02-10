
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {


  return (
    <>
    <NavBarBS/>
    
    <ItemListContainer mensaje='Bienvenidos a mi App! 🥳'/>
    <ItemDetailContainer/>
   
      
    </>
  )
}

export default App
