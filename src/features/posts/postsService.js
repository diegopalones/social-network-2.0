import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {

const res = await axios.get(API_URL + "/posts");

return res.data;

};
const getById = async (_id)=>{
    const res = await axios.get(API_URL +"/posts/id/" + _id)
    return res.data
};
const getPostByName = async (title) => {
    const res = await axios.get(API_URL + "/posts/search/" + title);
    return res.data;
  };

const postsService = {

    getAllPosts,
    getById,
    getPostByName
    
    
    };
    
    export default postsService;