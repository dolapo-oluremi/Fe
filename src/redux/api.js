import axios from "axios";

export const loadPostsApi = async () =>
    await axios.get("http://localhost:4990");


// define put api to update post by id
    export const updatePostApi = async (postInfo) =>
    await axios.patch(`http://localhost:4990/posts/${postInfo.id}`, postInfo);




