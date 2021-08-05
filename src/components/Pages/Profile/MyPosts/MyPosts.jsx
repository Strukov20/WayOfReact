import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

function MyPosts(props) {

    const postsElements = props.postsData.map((post) => <Post key={post.id} message={post.message} likeCounts={post.likes}/>)

    const newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className='posts'>
            <div className="posts_share">
                <input ref={newPostElement} type="text" placeholder='Type your post...'/>
                <button onClick={addPost}>Share</button>
            </div>
            {postsElements}
        </div>

    );
}
export default MyPosts;