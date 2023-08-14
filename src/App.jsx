import { useState } from 'react'
import './App.css'

function App() {

  const [usuario, setUsuario] = useState("")
//      variavel  funcao(setUsuario() ) //

function handleUsuario(evento) {
  setUsuario(evento.target.value)

}

console.log(usuario)
  return (
    <>
      <header>
      <h1> Faceboook</h1>
      </header>
    
    <main>
    <form action="">
      <div>
        <label htmlFor="usuario">Usuario</label>
      <input type="text" id='usuario' placeholder='Digite seu usuario' onChange={handleUsuario} />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id='senha' placeholder='Digite sua senha'/>
      </div>
      <button>entrar</button>
    </form>
    </main>

    </>
  )
}

export default App
