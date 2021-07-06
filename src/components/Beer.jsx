import {Link} from 'react-router-dom'

export default function Beer(props) {
    console.log(props, "HOME PAGE ")
    let beers = props.beer.map(item => {
        return (
        <li key={item._id}>
            <Link to={`/beer/${item._id}`}>{item.name}</Link>
        </li>
        )
    })
    return(
        <div>
            <h4>Learn more about our beers</h4>
        <ul>
           {beers}
        </ul>
        {/* <form>
                <label htmlFor='name'>Add your fav beer to our website</label>
                <input 
                id='name'
                type='text'
                placeholder='name...'
                onChange={e => setUser({...user, name:e.target.value})}
                // you need to spread the user object and then we override the name key with the second value 
                // you can spread objects into objects and arrays into arrays 
                // you can not spread objects into arrays vice versa 
                />
            </form> */}
        </div>
       
    )
}