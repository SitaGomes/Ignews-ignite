import style from './style.module.scss'
import {FaGithub} from 'react-icons/fa'

export const SingInButton: React.FC = () => {
    return(
        <button className={style.button}>
            <FaGithub className={style.icon}/>
            <span>Sign in with Github </span>
        </button>
    )
}