import React from 'react'
import styled, { css } from 'styled-components'

const PostDivs = styled.div`
    background-color: white;
    width: 40%;
    padding: 20px;
    margin: 10px auto;
    border-radius: 15px;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function Blog(props) {
    // console.log(props.tags)
    const oneTag = (post) => post.tags.map(tag => {
                return (
                    <li className="tags">{tag}</li>
                )
            })


    // manipulate the response
    const renderPosts = props.posts.map((post, index) => {
        return (

            <PostDivs key={index}>  
                 <h3><a href={`/blog/${post._id}`}>{post.name}</a></h3>
                <h6>{ oneTag(post) }</h6>
            </PostDivs>
        )
    })

    return (
        <Container>
            {renderPosts}
        </Container>
    )
}

