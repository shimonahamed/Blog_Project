import React, {useEffect, useState} from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import {useParams} from "react-router-dom";
import {PostByCategory} from "../APIRequest/ApiRequest.jsx";
import Loader from "../component/Loader.jsx";
import BlogList from "../component/BlogList.jsx";

const ByCategoryPage = () => {
    let {categoryID}=useParams();
    let [list,setList]=useState();

    useEffect(() => {
        (async ()=>{
           let res = await PostByCategory(categoryID)
            setList(res)
        })()
    }, [categoryID]);
    return (
        <MasterLayout>
            {list==null?<Loader/>:<BlogList list={list}/>}

        </MasterLayout>
    );
};

export default ByCategoryPage;