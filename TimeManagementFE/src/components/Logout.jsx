import { useNavigate } from "react-router-dom"
import { useAuth } from "../services/AuthProvider"
import { useEffect } from "react"

const Logout = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setToken('');
      navigate("/", { replace: true })
    }, 3000)
  }, [])

  return (
    <h1>
      Sinut on kirjattu ulos
    </h1>
  )
}

export default Logout;
