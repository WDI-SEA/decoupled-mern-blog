import { useEffect, useState } from 'react'

export default function Blog(props) {
    const [stuff, setStuff] = useState([])
    console.log(props)

    useEffect(() => {
        fetch(`http://localhost:3001/blogs/${props.match.params.id}`)
        .then(response => response.json())
        .then(stuffData => {
            console.log(stuffData.pickedBlog)
            setStuff(stuffData.pickedBlog)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2>{stuff.title}</h2>
            <h4>{stuff.subTitle}</h4>
            <p>{stuff.content}</p>
        </div>
    )
}