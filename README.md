# Mini-Project: Decoupled MERN Blog
Up until now in the class we have either been developing React frontends, or had a chance to develop an API using Express, Mongoose, and Mongo Atlas. Today we will be connecting these two ideas and building a fullstack, decoupled MERN blogging web app!

## What is a decoupled MERN App? 
A decoupled MERN app utilizes the MERN stack (Mongo, Express, React, and Node) for building full stack applications. In these applications frontends are designed and crafted using React, and those frontends "speak" to the backend through traditional API calls (think axios!). The data for the application is stored in a MongoDB database, and the Express API is what handles requests and responses to from the DB. 

![MERN Stack example](https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_943/https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack-1.png)
*Image credit: https://www.bocasay.com/how-does-the-mern-stack-work/*

## Lab Requirements
For this lab you will be building a React frontend using `create-react-app`, React Router (if you want), and any React styling library or npm package you want. This frontend should utilize the Express Blog API you wrote to get blog post data and render it to the frontend. 

**Your final project should (at minimum) include the following:**
1. A front page that displays some amount of blog posts from your db
2. The ability to click on an individual blog post and have it render to its own page. 

## Getting Started
This project involves a lot of seperate steps, but first and foremost we need to practice working with decoupled apps. 

1. Fork and clone this repository. 
2. CD into this Github project folder and run `create-react-app .` to create a React app in this same folder. 
3. Run `npm i axios` to install Axios in your React project folder. 
4. Spool up your Express API (if it is not already running). 
5. In your new React app on the home page make a call to your Express API using Axios (just like we did in Postman!) and have it return some of your blog data back. 
6. Great - you now have a React app that can speak to your Express API! Take a moment to step back and plan out what Frontend views you want your blogging app to have, and then get to building those in React. 

## Turning In
We will be starting this mini-project as a lab, but your deliverable for this weekend is to finish any remaining pieces you did not have a chance to finish during class. On Tuesday we will be learning about different ways to style React applications, and you will style this blog come Tuesday. 
