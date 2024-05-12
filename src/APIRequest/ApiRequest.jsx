import axios from "axios";


const BASE_URL="https://basic-blog.teamrabbil.com/api";

export async function postCategory(){
    let res=await axios.get(BASE_URL+"/post-categories")
    if (res.status===200){
        return res.data
    }else {
        return []
    }
}
export async function PostLatest(){
    let res=await axios.get(BASE_URL+"/post-newest")
    if (res.status===200){
        return res.data
    }else {
        return []
    }
}

export async function PostByCategory(id){
    let res=await axios.get(BASE_URL+"/post-list/"+id)
    if (res.status===200){
        return res.data
    }else {
        return []
    }
}
export async function PostByBlogDetaills(id){
    let res=await axios.get(BASE_URL+"/post-details/"+id)
    if (res.status===200){
        return res.data
    }else {
        return []
    }
}