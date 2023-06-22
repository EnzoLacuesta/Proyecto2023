

export default async function Post ({params}){
const fetchComments = ({id})=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())}

    const { id } = params;
    const comments = await fetchComments(id)


    return ( 
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h1>{comment.name}</h1>
                        <p>{comment.body}</p>
                    </li>               
                ))}
            </ul>
        </div>

    )
}