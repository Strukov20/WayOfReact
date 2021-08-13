import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    debugger;
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}/>;
}
export default MyPostsContainer;