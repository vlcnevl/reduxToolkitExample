import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../stores/auth'
import { useHistory } from 'react-router'

export default function Login() {

    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogin = () => {
        const data={
            id:1,
            name:"velican",
            token:"adasdasd23"
        }
        dispatch(login(data))
        history.push("/")
    } 
    return (
        <div>
            <h3>Giriş Yap</h3>
            <button onClick={handleLogin}>
                Giriş Yapmak için basın
            </button>
        </div>
    )
}
