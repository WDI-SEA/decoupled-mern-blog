import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'

const DIV = styled.div`

  padding-bottom: 1.5rem;

  color: #000;

  h3 {
    font-size: 1.3rem;
    margin: .5rem 0;
  }
  h4 {
    margin: 0;
  }


  a {
    text-decoration: none;
    color:#000;
  }
  a:hover, a:visited {
    color: #000;
  }
`;

const Blogs = (props) => {

  const postData = props.blog.map((post, index) => {
    return (
      <DIV key={index}>
        <h3> <Link to={`/blog/${post._id}`}>{post.title}</Link> </h3>
        <h4> Name: {post.name} </h4>
        {/* <p> Content: {blog.content} </p> */}
      </DIV>
    )
  })

  //console.log(blog)
  return (
    <>
      {postData}
    </>
  )
}

export default Blogs