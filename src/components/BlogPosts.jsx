export default function BlogPost(props){
        
    
    
    return(
        <div style={{color: 'white'}}>
            <h1>😎</h1>
            
            
            <h3>{props.name}</h3>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
            
        </div>
    )
}