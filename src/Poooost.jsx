import './post.css';
export default function Poooost({post}){
    const postStyle = {
        width : '300px',
        border: '3px solid maroon',
        borderRadius: '10px',
        margin: '20px 20px',
    }
    const {title, body} = post
    return(
        <div style={postStyle}>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    )
}