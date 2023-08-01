import React, { useEffect,useState } from 'react';
import {  fetchArticles } from '../../services/ArticleService';
import ArticleList from './ArticleList';

const ArticlesApp = () => {
const [products,setProducts]=useState([])
const listproduits=()=>{
    fetchArticles()
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
    }
useEffect(() => { //zidna react snippets   dima nektbou methode
    listproduits()
}, [])
  return (
    <div>
        <ArticleList products={products}/>
    </div>
  )
}

export default ArticlesApp
