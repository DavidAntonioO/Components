const impura = () => new Date().toLocaleDateString()

console.log(impura())

//Funcion pura nunca cambia su valor de retorno

const MiComponente = ({ miProp }) => {
  
  return(
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'arriba las chivas'} />
  )
}

export default App
