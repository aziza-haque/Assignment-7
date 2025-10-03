import React, { useEffect, useState } from 'react';
import Item from './activity/Item';

const Activities = ({handleFavouriteItems}) => {
    const [items,setitems]=useState([])

    useEffect(()=>{
        fetch("items.json")
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[])

    return (
        <div>
            <div className="all-items grid grid-cols-2  m-4">
               {
                items.map(item=><Item key={item.id} item={item}
                    handleFavouriteItems={handleFavouriteItems} ></Item>)
               }
            </div>
        </div>
    );
};

export default Activities;