import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


const Blog = () => {

  const [blog, setBlog] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:3001/blog')
      
      .then((response) => {
        setBlog(response.data)
        console.log(response)
      })
      .catch((err) => console.log(err))
    }, [])

    
  const entryData = blog.map((blogs, i) => {
    // console.log('🚀 blog author: ' + blogs.author )
    // console.log('🚀 blog title: ' + blogs.title )

    return (
      
      <div key={i}>
            <div className="cardBlock">
                    <Link to={`/blog/${blogs._id}`} >
                      <div className="title">{blogs.title}</div>
                    </Link>
                <div className="wrapper row" id='author'>
                      <h6 classNamed="col">by: {blogs.author} </h6>
                </div>

                <div className="wrapper row" id='content'>   
                      <p classNamed="col">{blogs.content}</p>
                </div>
                      <br/>
          </div>
        </div>
    )

  })


  return (
    
    <div className="gridContainer p-1">
      {entryData}
    </div>
  );
}

export default Blog;
