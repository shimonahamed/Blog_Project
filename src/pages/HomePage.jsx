import React, {useEffect, useState} from 'react';
import MasterLayout from "../Layout/MasterLayout.jsx";
import BlogList from "../component/BlogList.jsx";
import {PostLatest} from "../APIRequest/ApiRequest.jsx";
import Loader from "../component/Loader.jsx";

const HomePage = () => {

    let [list,setList]=useState(null)

    console.log(list)

    useEffect(() => {
        (async ()=>{
            let res = await PostLatest()
            setList(res)
        })()
    }, []);
    return (
        <MasterLayout>
            {list==null?<Loader/>:<BlogList list={list}/>}
        </MasterLayout>
    );
};

export default HomePage;