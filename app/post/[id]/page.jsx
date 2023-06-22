import Link from "next/link";
const fetchSingelPosts = (id) => {
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
}

export default async function PostPage({ params }) {
    const {id} = params;
    const post = await fetchSingelPosts(id)
    return( 
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link 
                    style={{color:"black"}} 
                    href={`/posts/${id}/comments`}>
                        Ver comentarios
                </Link>
            </div>
        )
}