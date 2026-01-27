
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';


function App() {

console.log('App')
  return (
    <>
    <NavBarBS/>
    <ItemListContainer mensaje='Bienvenidos a mi App! 🥳'/>
    {/* <ItemCount stock={15}/> */}
      
    </>
  )
}

export default App
