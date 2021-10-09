import Header from "next/head"


export default function Home() {
  return (
    <>
      {/* All the code goes to the <head /> inside _document.tsx */}
      <Header> 
        <title>Home | Ig.News</title>
      </Header>

    </>
  )
}
