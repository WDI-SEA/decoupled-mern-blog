// router
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

// styling
import './App.css';

// components
import Blog from './components/Blog'
import Post from './components/Post'
import Edit from './components/Edit'
import Header from './components/Header'

const App = () => {
    const [apiRes, setApiRes] = useState()
    const apiUrl = 'http://localhost:3001/blog'

    async function getPosts() {
        try {
            const response = await axios.get(apiUrl)
            setApiRes(response.data.allPosts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="container">
            <Header />
            <Router>
                <Route exact path="/" render={() => <Blog posts={ apiRes } /> } />

                <Route
                    path="/post/:id"
                    render={(props) => {
                        if(apiRes) {
                            const post = apiRes.find(post => post._id.toString() === props.match.params.id)
                            props = {...props, ...post}
                        }
                        return <Post {...props} />
                    } }
                />

                <Route
                    path="/edit/:id"
                    render={(props) => {
                        if(apiRes) {
                            const post = apiRes.find(post => post._id.toString() === props.match.params.id)
                            props = {...props, ...post}
                        }
                        return <Edit {...props} />
                    } }
                />
            </Router>
        </div>
    );
}

export default App;
