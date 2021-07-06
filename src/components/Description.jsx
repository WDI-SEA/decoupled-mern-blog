export default function Description(props){
    console.log(props, "DESCRIP PROPS")
    return(
        <div>
            <h3>{props.name}</h3>
            <p>Description: {props.description}</p> <span>Rating: {props.rating}</span>
        </div>
    )
}