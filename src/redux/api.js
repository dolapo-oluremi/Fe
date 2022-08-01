import axios from "axios";

export const loadPostsApi = async () =>
    await axios.get("http://localhost:4678");


// define put api to update post by id
    export const updatePostApi = async (postId, postInfo) =>
    await axios.put(`http://localhost:4678/post/${postId}`, postInfo);




