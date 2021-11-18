import {ActiveLink} from "./ActiveLink"
import style from './header.module.scss'
import { SingInButton } from './SingInButton'

export const Header: React.FC = () => {

    return(
        <header className={style.headerContainer}>
            <div className={style.headerContent}>
                <img src="/svg/logo.svg" alt="ig.news"/>
                <nav>
                    <ActiveLink activeClassName={style.active} href="/">           
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={style.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SingInButton />
            </div>
        </header>
    )
}