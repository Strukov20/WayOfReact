import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

function MyPosts() {
    const postsData = [
        { id: 1, message:'Hi, it is my first post', likes: 15},
        { id: 2, message:'It is my second post', likes: 45},
        { id: 3, message:'It is my third post', likes: 73}
    ]

    const postsElements = postsData.map((post) => <Post id={post.id} message={post.message} likeCounts={post.likes}/>)

    return (
        <div className='posts'>
            <div className="posts_share">
                <input type="text" placeholder='Type your post...'/>
                <button>Share</button>
            </div>
            {postsElements}
        </div>

    );
}
export default MyPosts;