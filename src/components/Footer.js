import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DarkMode, Language } from '../stores/site'
import { logout } from '../stores/auth'

export default function Footer() {

    const {dark,language} =useSelector(state => state.site)    
    const {user} = useSelector(state=> state.auth)
    const languages=["tr","en"]
     const dispatch = useDispatch()

    const handleLanguage= lang=>{
        dispatch(Language(lang))
    }

    const handleDarkMode = () => {
        dispatch(DarkMode())
    }

    const handleLogout= () =>{
        dispatch(logout())
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang,index)=>(
                    <button onClick={()=> handleLanguage(lang)} className={lang===language ? 'active' : ''} key={index}>{lang}</button>
                ))}
            </div>

            <button onClick={()=> handleDarkMode()} >
                {dark? "Light mode " : "Dark Mode"}
                </button>

               {
                   user && (
                       <div> 
                           <button onClick={()=> handleLogout()}> Çıkış Yap</button>
                       </div>

                   )
               }         



        </div>
    )
}
