import Header from "next/head"

import style from "./home.module.scss"

export default function Home() {
  return (
    <>
      {/* All the code goes to the <head /> inside _document.tsx */}
      <Header> 
        <title>Home | Ig.News</title>
      </Header>

      <main className={style.Container}>
        <div className={style.Content}>
          <img src="/svg/avatar.svg" alt="Girl Coding" />
          <section>
            <span>👏 Hey, Welcome</span>
            <h1>
              News about the <span>React</span> world
            </h1>
            <p>
              Get acess to all the publications
              <br />
              <span>for $9.90 month</span>
            </p>

            <button>
              Subscribe now
            </button>
          </section>
        </div>
      </main>

    </>
  )
}
