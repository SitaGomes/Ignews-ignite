import Header from "next/head"
import { GetStaticProps } from "next"

import { getPrismicClient } from "../../services/prismic"
import Prismic from "@prismicio/client"

import style from "./style.module.scss"

export default function Posts() {

    return(
        <>
            <Header>
                <title>
                    Posts | Ignews
                </title>
            </Header>
            <main className={style.container}>
                <div className={style.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient()

    const response = await prismic.query(
        Prismic.Predicates.at("document.type", "post_normal" )
    ,
        { 
            fetch: ["post_normal.title", "post_normal.content"],
            pageSize: 100
        }
    )


    console.log(JSON.stringify(response, null, 2))

    return { 
        props: {}
    }

}

