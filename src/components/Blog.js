import React from 'react'
import styled, { } from 'styled-components'

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

const ListElem = styled.li`
    list-style-type: none;
    display: inline-block;
    margin: 0 5px;
    padding: 3px;
    font-size: 12px;
    color: #D6739D;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
`

const ListDiv = styled.ul`
    padding-left: 0px;
`

const Title = styled.h3`
    font-family: 'Bungee Shade', cursive;
    font-size: 1.5rem;
`



export default function Blog(props) {
    // console.log(props.tags)
    const oneTag = (post) => post.tags.map(tag => {
                return (
                    <ListElem>{tag}</ListElem>
                )
            })


    // manipulate the response
    const renderPosts = props.posts.map((post, index) => {
        return (

            <PostDivs key={index}>  
                <Title><a href={`/blog/${post._id}`} style={{textDecoration: "none", color: "black"}}>{post.name}</a></Title>
                <ListDiv>{ oneTag(post) }</ListDiv>
            </PostDivs>
        )
    })

    return (
        <Container>
            {renderPosts}
        </Container>
    )
}

