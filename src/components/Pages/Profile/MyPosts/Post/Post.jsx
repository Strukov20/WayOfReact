import React from "react";
import './Post.scss'

function Post( props) {
    return (
        <div className='posts'>
            <div className='posts__item'>
                <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" alt="post_img"/>
                <div className='posts__item_desc'>{props.message}</div>
                <button>Likes: {props.likeCounts}</button>
            </div>
        </div>
    );
}
export default Post;