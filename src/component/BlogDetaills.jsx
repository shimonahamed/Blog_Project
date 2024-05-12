import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";
// import {PostByBlogDetaills} from "../APIRequest/ApiRequest.jsx";
// import Loader from "./Loader.jsx";
// import DetaillsPage from "../pages/DetaillsPage.jsx";

const BlogDetaills = (props) => {

    return (
        <div>

            <div className="container mx-auto my-16 p-9">
                <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card w-100 glass">
                        <figure><img src={props.list["postDetails"]['img']} alt="car!"/></figure>
                        {/*<figure><img*/}
                        {/*    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F296e71ac-6f29-49fe-9b3f-c0df02f67475%2FUntitled_6.jpg?rect=217%2C0%2C1166%2C777&auto=format%2Ccompress&fmt=webp&w=300&dpr=1.0"*/}
                        {/*    alt="Car!"/></figure>*/}

                        <div className="card-body">
                            <h2 className="card-title">{props.list["postDetails"]['title']}</h2>
                            <p>{props.list["postDetails"]['content']}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetaills;