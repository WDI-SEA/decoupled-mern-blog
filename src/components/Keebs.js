
import { Link } from 'react-router-dom'
import React from 'react'

export default function Keebs (props) {
    console.log(props, "HI")
    const showKeebs = props.moarKeebs.map ( show => {
        return <div><Link to={`/keebs/${show._id}`}>{show.name}</Link></div>
    })

    return (
        <div>
            <h4>The Latest Custom Keyboards</h4>
            {showKeebs}
        </div>
    )
}
