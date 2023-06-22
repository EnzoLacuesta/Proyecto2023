import style from '../page.module.css'
import { LikeButton } from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
    return  fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json()
            )}
            
export default async function PostPage({params}) {
    const posts = await fetchPosts()

    return( 
            <div className={style.posts}>
                <section >
                    {posts.map(post =>(
                        <article key={post.id} style={{'background-color':"black","margin":"0.1rem"}}>
                            <Link href={`/post/${post.id}/comments`} as={`/post/${post.id}`}>
                                <h2 style={{color:"#09f"}}>{post.title}</h2>
                                <p style={{color:"white"}}>{post.body}</p>
                            </Link>
                            <LikeButton id={post.id}></LikeButton>                           
                        </article>
                        ))} 
                </section>
             </div>

        )
}