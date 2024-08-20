import React from 'react';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'

function ProductDetail() {
    let [details,setDetails]= useState({})
    console.log("details",details)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`).then(response=>response.json()).then((item)=>{
            console.log(item)
            setDetails(item)
        })
    },[])
  return (
    <div className='container'>
        <h4 className='text-center'>Product Details</h4>
            {details ? <div className='border border-2 p-3'>
                <img src={details.thumbnail} alt="" height={150} width={150} />
                <h5>{details.title}</h5>
                <span>{details.category}</span>
                <p>{details.description}</p>
                <span>₹{details.price}</span>
            </div>: ""}
       
    </div>
  )
}

export default ProductDetail