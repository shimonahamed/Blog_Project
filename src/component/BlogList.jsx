import React from 'react';
import {Link} from "react-router-dom";

const BlogList = (props) => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        props.list.map((item,index)=>{
                            return(
                                <Link key={index.toString()} to={"/detaills/"+item['id']} className="card w-100 glass">
                                    <figure><img src={item['img']} alt="car!"/></figure>
                                    {/*<figure><img src="https://images.prothomalo.com/prothomalo-bangla%2F2024-03%2F296e71ac-6f29-49fe-9b3f-c0df02f67475%2FUntitled_6.jpg?rect=217%2C0%2C1166%2C777&auto=format%2Ccompress&fmt=webp&w=300&dpr=1.0" alt="Car!"/></figure>*/}
                                    <div className="card-body">
                                        <h2 className="card-title">{item['title']}</h2>
                                        <p>{item['short']}</p>
                                    </div>

                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogList;