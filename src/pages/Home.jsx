import React from 'react'
import Movielist from '../components/Movielist'
import Searchform from '../components/Searchform'
import axios from 'axios';
import { apiKey } from '../constants';
import { useLoaderData } from 'react-router-dom';

export async function loader({request}){
  const url=new URL(request.url);
  const searchTerm = url.searchParams.get('search') || 'rose';
try {
  
  const endpoint= `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
  const response=await axios.get(endpoint)
  return {moviesApiResponse:response.data,searchTerm,isError:false,errorMsg:""}


} catch (error) {
  const errorMsg = error?.response?.data?.Error || error.message || "something went wrong";

  return {moviesApiResponse:null,searchTerm,isError:true,errorMsg}

  
}

 

}


function Home() {
 const data= useLoaderData()
  return <>
  <Searchform searchTerm={data.searchTerm}/>
   <Movielist data={data}  />

  </>
}

export default Home