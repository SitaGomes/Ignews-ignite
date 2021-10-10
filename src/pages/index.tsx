import { GetServerSideProps, GetStaticProps } from "next"
import Header from "next/head"
import { SubscribeButton } from "../components/SubscribeButton"
import { stripe } from "../services/stripe"

import style from "./home.module.scss"

interface HomeProps {
  product:{
    id: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
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
              <span>for {product.amount} month</span>
            </p>

            <SubscribeButton />
          </section>
        </div>
      </main>

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const allProductData = await stripe.prices.retrieve('price_1JitgWDPqecVYF0f9OQovo1w', {
    expand: ['product']
  }) // Grabs all tha data from the product

  const product = {
    id: allProductData.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(allProductData.unit_amount / 100) // The price comes in decimals
  }

  return{
    props: {product},
    revalidate: 60 * 60 * 24 //24 h
  }

}