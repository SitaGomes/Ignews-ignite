import { useState } from 'react'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import style  from './style.module.scss'

export const SingInButton: React.FC = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    
    return isUserLoggedIn ? (
        <button className={style.button}>
            <FaGithub color="#04D361"/>
            <span> Arthur Sita Gomes </span>
            <FiX />
        </button>

    ) : (

        <button className={style.button}>
            <FaGithub color="#EBA417"/>
            <span>Sign in with Github </span>
        </button>
    ) 
}