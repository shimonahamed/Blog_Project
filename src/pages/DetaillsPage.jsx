import React, {useEffect, useState} from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import BlogDetaills from "../component/BlogDetaills.jsx";
import Loader from "../component/Loader.jsx";
import {useParams} from "react-router-dom";
import {PostByBlogDetaills} from "../APIRequest/ApiRequest.jsx";


const DetaillsPage = (props) => {

    let {postID}=useParams()
    let [list,setList]=useState(null)

    useEffect(() => {
        (async ()=>{
            let res=await PostByBlogDetaills(postID)
            setList(res)
        })()
    }, []);

    return (
        <MasterLayout>
            {list==null?<Loader/>:<BlogDetaills list={list}/>}
        </MasterLayout>
    );
};

export default DetaillsPage;