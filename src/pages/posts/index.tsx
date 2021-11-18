import Header from "next/head"
import { GetStaticProps } from "next"

import { getPrismicClient } from "../../services/prismic"
import Prismic from "@prismicio/client"
import {RichText} from "prismic-dom"

import style from "./style.module.scss"

type Post = {
    slug: string,
    title: string,
    updatedAt: string,
    excerpt: string,    
}

interface PostProps {
    posts: Post[];
}

export default function Posts({posts}: PostProps) {



    return(
        <>
            <Header>
                <title>
                    Posts | Ignews
                </title>
            </Header>
            <main className={style.container}>
                <div className={style.posts}>
                    {posts.map(post => (
                        <a key={post.slug} href="#">
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.excerpt}</p>
                        </a>
                        
                    ))}
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

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? "", //? Find the first paragraph * if not found return ""
            updatedAt: new Date(post.last_publication_date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long", 
                year: "numeric"
            })
        }
    })


    return { 
        props: { posts }
    }

}

