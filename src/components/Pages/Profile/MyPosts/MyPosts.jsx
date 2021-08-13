import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../../Redux/Reducers/profile-reducer";

function MyPosts(props) {

    const postsElements = props.postsData.map((post) => <Post key={post.id} message={post.message} likeCounts={post.likes}/>)

    const addPost = () => {
        props.dispatch(addPostAC());
    }
    const onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className='posts'>
            <div className="posts_share">
                <input onChange={onPostChange}
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