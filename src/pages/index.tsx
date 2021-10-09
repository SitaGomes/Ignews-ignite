import Header from "next/head"

import style from "style/home.module.scss"

export default function Home() {
  return (
    <>
      {/* All the code goes to the <head /> inside _document.tsx */}
      <Header> 
        <title>Home | Ig.News</title>
      </Header>

      <h1 className={style.title}>I'm Back</h1>
    </>
  )
}
