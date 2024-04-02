import { useState, useMemo } from "react"
import { Box, TextField, Button, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../services/AuthProvider"
import AlertMessage from './AlertMessage';
import Register from "./Register"
import { login } from "../services/AppUserService"

const Login = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState({ username: '', password: '' })
  const [alert, setAlert] = useState(null)
  const alertMessage = useMemo(() => {
    switch (alert) {
      case 'success': {
        return <AlertMessage alert={alert} alertMessage="Käyttäjä rekisteröity onnistuneesti" setAlert={setAlert} />
      }
      case 'error': {
        return <AlertMessage alert={alert} alertMessage="Käyttäjän rekisteröinti epäonnistui" setAlert={setAlert} />
      }

      default: {
        return <></>
      }
    }
  }, [alert]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const fetchToken = () => {
    login(user)
      .then(response => {
        if (response.ok) {
          setToken(response.headers.get('Authorization'))
          navigate("/", { replace: true })
        } else {
          alert('Wrong username or password');
          throw new Error("Error in fetch:" + response.statusText)
        }
      })
      .catch(err => console.error(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchToken()
  }

  return (
    <Box>
      {alertMessage}
      <Box component='form' onSubmit={handleSubmit} sx={{ margin: 2 }}>
        <TextField
          autoFocus
          required
          name="username"
          label="Username"
          id="username"
          autoComplete="username"
          value={user.username}
          onChange={e => handleChange(e)}
        />
        <TextField
          required
          name="password"
          label="Password"
          id="password"
          type="password"
          autoComplete="current-password"
          value={user.password}
          onChange={e => handleChange(e)}
        />
        <Button type="submit">
          Login
        </Button>
      </Box>
      <Box sx={{ margin: 2, marginTop: 8 }}>
        <Register setAlert={setAlert} />
      </Box>
    </Box>
  )
}

export default Login;