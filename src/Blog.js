export default function Blog(props) {
    console.log(props)
    return (
        <div>
            {props.location.pathname}
            {/* <h3>{props.title}</h3>
            <h6>{props.subTitle}</h6>
            <p>{props.content}</p> */}
        </div>
    )
}