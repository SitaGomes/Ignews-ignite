import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import {signOut, signIn, useSession} from 'next-auth/client'

import style  from './style.module.scss'

export const SingInButton: React.FC = () => {
    const [session] = useSession()  
    
    return session ? (
        <button 
            className={style.button}
            onClick={() => signOut()}
        >
            <FaGithub color="#04D361"/>
            <span> {session.user.name} </span>
            <FiX />
        </button>

    ) : (

        <button 
            className={style.button}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EBA417"/>
            <span>Sign in with Github </span>
        </button>
    ) 
}