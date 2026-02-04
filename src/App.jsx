
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import { withLogging } from './hoc/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
const FetchApiConHOC = withLogging(FetchApi)
const Contadorhoc= withLogging(ItemCount)
console.log('App')
  return (
    <>
    <NavBarBS/>
    {/* <Contadorhoc stock={5}/> */}
    {/* <FetchApi/> */}
    {/* <FetchCountry/> */}
    {/* <ItemListContainer mensaje='Bienvenidos a mi App! 🥳'/> */}
    <ItemDetailContainer/>
    {/* <ItemCount stock={15}/> */}
      
    </>
  )
}

export default App
