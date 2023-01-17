import Link from 'next/link'
import Head from 'next/head'
import { getPosts } from '../lib/posts'
export async function getStaticProps(){
    const posts=await getPosts()
    return {
        props:{posts}
    }
}

function HomePage({posts}){
    return<>
    <Head>
       <title> My Blog</title>
       <meta name="description" value='This is nextjs blog'/>

    </Head>
    
    
    <main>
    <h1>My Blog Home </h1>
    <ul>
    {posts.map(post=>{
        return  <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
                {post.title}
            </Link>
        </li>
    })}
       
    </ul>
    </main>
            </>
}
export default HomePage