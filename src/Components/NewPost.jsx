
import React from 'react'

const NewPost = () => {

  return (
  <div className="container pt-3 newPost">
    <h1>New Blog Post</h1>
    
      <div className="wrapper pt-3">
          <form id="new-form" action="http://localhost:3001/newpost" method="post">
              <div className="form-group">
                  <label htmlFor="name">Title</label>
                  <input type="text" className="form-control" name="title"/>
              </div>
              <div className="form-group">
                  <label htmlFor="name">Author</label>
                  <input type="text" className="form-control" name="author"/>
              </div>
              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea className="form-control" name="content"/>
              </div>
              <button className="btn btn-dark" >Create</button>
          </form>
      </div>
  </div>
  )
}

export default NewPost;