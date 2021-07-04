export default function BlogPost(props){
        
    function cLog(){
        console.log(props.name)
    }
    
    return(
        <div>
            <h1>😎</h1>
            {cLog()}
            
            <h3>{props.name}</h3>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
        </div>
    )
}