//import { useState, useEffect } from 'react'


import { Link } from "react-router-dom"

export default function Blog(props) {
 //console.log(props.blogPosts)
 const blogLinks = props.blogPosts.map((post) => {
   return(
     <li key={`${post.title}-${post.name}`}>
       <Link to={`/blog/${post._id}`} >{post.name}</Link>
     </li>
   )
 })
  return(
    <div>
      <h2>Todays blogs::</h2>
      <ul>
        {blogLinks}
      </ul>
    </div>
  )
}