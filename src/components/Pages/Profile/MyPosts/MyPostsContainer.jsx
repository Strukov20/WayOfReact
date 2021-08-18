import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

function MyPostsContainer(props) {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    const addPost = () => {
                        store.dispatch(addPostAC());
                    }
                    const onPostChange = (text) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.postsData}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )


}
export default MyPostsContainer;