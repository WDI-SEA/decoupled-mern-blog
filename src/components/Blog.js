import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Blogs = (props) => {

  const postData = props.blog.map((post, index) => {
    return (
      <div key={index}>
        <h3> <Link to={`/blog/${post._id}`}>{post.title}</Link> </h3>
        <h4> Name: {post.name} </h4>
        {/* <p> Content: {blog.content} </p> */}
      </div>
    )
  })

  //console.log(blog)
  return (
    <div>
      {postData}
    </div>
  )
}

export default Blogs