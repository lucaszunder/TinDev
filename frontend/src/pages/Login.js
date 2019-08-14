import React, {useState} from 'react'
import './Login.css'
import api from '../services/api'
import Logo from '../assets/logo.svg'


export default function Login({history}){
  const [username, setUsername] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('/devs',{
      username
    })
    const {_id } = response.data
    console.log(response)
    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">    
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <img src={Logo} alt="Tindev"/>
        <input 
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Digite seu usuário do Github"
        type="text"/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
