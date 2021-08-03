import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className='posts'>
            <div className="posts_share">
                <input type="text" placeholder='Type your post...'/>
                <button>Share</button>
            </div>
            <Post message='Hi, it is my first post' likeCounts='15'/>
            <Post message='It is my second post' likeCounts='22'/>
        </div>

    );
}
export default MyPosts;