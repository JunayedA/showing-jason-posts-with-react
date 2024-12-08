import { useEffect, useState } from "react"
import singlePost from "./singlePost";
import Poooost from "./Poooost";


export default function Post(){
    const [posts, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div>
            <h3> Total post: {posts.length} </h3>
            <singlePost></singlePost>
            {/* {
                posts.map( post => <Post post={post}></Post>)
            } */}
            {
                posts.map(post => <Poooost post ={post}></Poooost>)
            }
        </div>
    )
}