import React from 'react';
import { useState } from 'react';
import '../Style/Add.css';

const Add = (props) => {

const[product,setProduct]= useState({id:"",title:"",description:"",price:"",stock:"",brand:"",category:"",thumbnail:""});

const changeProduct=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
}

const addProduct=()=>{
    props.setData([...props.data,product])
    setProduct({title:"",description:"",price:"",brand:"",category:"",thumbnail:""})
}

    return (
        <>

            <form>
                <div className='container'>
                                     <h3>ADD PRODUCT</h3><br />
                    <div name='tittle'>
                        <label>TITLE:</label><br />
                        <input onChange={changeProduct} type="text"  name='title' value={product.title} placeholder='title' />
                    </div><br />
                    <div name='description'>
                        <label>DESCRIPTION:</label><br />
                        <input onChange={changeProduct} type="text"name='description' value={product.description} placeholder='description' />
                    </div><br />
                    <div name='price'>
                        <label>PRICE:</label><br />
                        <input onChange={changeProduct} type="text"name='price' value={product.price} placeholder='price' />
                    </div><br />
                    <div name='brand'>
                        <label>BRAND:</label><br />
                        <select onChange={changeProduct}>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Huawei</option>
                            <option>Oppo</option>
                            <option>Infinix</option>
                            <option>Microsoft surface</option>
                        </select>
                    </div><br />
                    <div name='category'>
                        <label>CATEGORY:</label><br />
                        <select onChange={changeProduct}>
                            <option>Laptop</option>
                            <option>Smartphone</option>
                            <option>Spray</option>
                            <option>Lotion</option>
                            <option>Tea tree oil</option>
                        </select>
                    </div><br />
                    <div name='thumbnail'>
                        <label>THUMBNAIL:</label><br />
                        <input onChange={changeProduct} type="url" name='thumbnail' value={product.thumbnail} placeholder='http ....' />
                    </div><br />
                    <div>
                        <button onClick={addProduct} >Save</button> 
                    </div>
                </div>
            </form>
        </>
    );
}

export default Add;





