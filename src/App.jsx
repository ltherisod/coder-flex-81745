// import BotonMultiuso from "./examples/BotonMultiuso"
import NavBar from './components/NavBar'
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'


function App() {
// const saludar = ()=> {
//   alert('Hola')
// }

// const despedir = ()=> {
//   alert('Chau')
// }
console.log('App')
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a mi App! 🥳'/>
    {/* <ItemCount stock={15}/> */}
      {/* <BotonMultiuso color="red" disabled={true} onClickHandler={saludar}>Holis</BotonMultiuso>
      <BotonMultiuso color="green" disabled={false} onClickHandler={despedir}>Chau 🤭</BotonMultiuso>
      <BotonMultiuso color="green" disabled={false} onClickHandler={despedir}><span>Guardar</span></BotonMultiuso> */}
    </>
  )
}

export default App
