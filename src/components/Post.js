import React from 'react'
import styled, {} from 'styled-components'

const Title = styled.h3`
    font-family: 'Bungee Shade', cursive;
    font-size: 1.5rem;
`

const Container = styled.div`
    background: white;
    width: 45%;
    border-radius: 15px;
    margin: 0 auto;
    padding: 30px;
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

const TagUl = styled.ul`
    padding-left: 0px;
`

const Content = styled.p `
    font-family: 'Open Sans', sans-serif;
`

export default function Post(props) {
    console.log(props)
    const oneTag = props.tags.map(tag => {
        return (
            <ListElem className="tags">{tag}</ListElem>
        )
    })

    return (
        <Container>
            <Title>{ props.name }</Title>
            <TagUl>{ oneTag }</TagUl>
            <Content>{ props.content }</Content>
        </Container>
    )
}
