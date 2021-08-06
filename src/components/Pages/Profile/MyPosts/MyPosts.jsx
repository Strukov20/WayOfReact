import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

function MyPosts(props) {

    const postsElements = props.postsData.map((post) => <Post key={post.id} message={post.message} likeCounts={post.likes}/>)

    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className='posts'>
            <div className="posts_share">
                <input ref={newPostElement}
                       onChange={onPostChange}
                       type="text"
                       placeholder='Type your post...'
                       value={props.newPostText}/>
                <button onClick={addPost}>Share</button>
            </div>
            {postsElements}
        </div>

    );
}
export default MyPosts;