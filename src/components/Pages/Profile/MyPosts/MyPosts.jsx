import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

function MyPosts(props) {
    debugger;
    const postsElements = props.posts.map((post) => <Post key={post.id} message={post.message} likeCounts={post.likes}/>)

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='posts'>
            <div className="posts_share">
                <input onChange={onPostChange}
                       type="text"
                       placeholder='Type your post...'
                       value={props.newPostText}/>
                <button onClick={onAddPost}>Share</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;