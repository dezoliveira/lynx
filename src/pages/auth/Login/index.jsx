import styles from '../../admin/styles.module.css'
import NavigateButton from '../../../components/NavigateButton'
import useLogin from '../../../hooks/useLogin'
import { useState } from 'react'

export default function Login() {
  const { login, error, loading } = useLogin()
  const [success, setSuccess] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(email, password)

    console.log(result)

    if (result.success) {
      alert('suceess')
    } else {
      alert('error')
    }
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

        {success && 
          <Message activeMessage={activeMessage} show={show} timeOut={3000}>
            { success }
          </Message>
        }
        {error && 
          <Message activeMessage={activeMessage} show={show} timeOut={3000}>
            { error }
          </Message>
        }

      </form>
    </>
  )
}