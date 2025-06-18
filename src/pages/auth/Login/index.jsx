import styles from '../../admin/styles.module.css'
import NavigateButton from '../../../components/NavigateButton'
import useLogin from '../../../hooks/useLogin'
import { useEffect, useState } from 'react'
import Message from '../../../components/Message'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const { login, loading } = useLogin()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setShow(false)

    const result = await login({ email, password })

    if (result.success) {
      setMessage("Logado com sucesso")
      setMessageType("success")
      setShow(true)
      navigate('/admin')
      
    } else {
      setMessage(`Erro: ${result.error}`)
      setMessageType("error")
      setShow(true)
    }
  }

  const activeMessage = (active) => {
    setShow(active)
  }

  return (
    <>
      <NavigateButton link={'/'} text="Voltar"/>
      <div>
        <h1 className={styles.pageLink}>Fazer Login</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.formInput} />
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.formInput} />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="px-[15px] py-[10px] bg-green-500 text-slate-50 hover:cursor-pointer hover:opacity-[.9] hover:scale-[1.02] transition-all hover:duration-[.3s] shadow-md rounded-md">Logar</button>
        </div>

        {message && 
          <Message activeMessage={activeMessage} show={show} timeOut={3000} type={messageType}>
            { message }
          </Message>
        }

      </form>
    </>
  )
}