import style from './header.module.scss'
import { SingInButton } from './SingInButton'

export const Header: React.FC = () => {

    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <img src="/svg/logo.svg" alt="ig.news"/>
                <nav>
                    <a className={style.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SingInButton />
            </div>
        </header>
    )
}