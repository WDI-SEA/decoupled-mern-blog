// Required modules
let cors = require('cors')
let express = require('express')
const db = require('./models')
db.connect()

// Express instance
let app = express()
const PORT = 3001

// Set up body-parser and cors
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.json({msg:`hello from the 🗣 Blog api 💬`})
})

//GET ~ INDEX '/blog' --- list all blog posts
app.get('/blog', async (req, res) => {
    try {
        const posts = await db.Blog.find()
        res.json({ posts })
    } catch(err) {
        console.log(err)
    }
})

//POST ~ CREATE '/blog' --- add a new blog post
app.post('/blog', (req, res) => {
    db.Blog.create({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    })
    .then(() => {
        res.redirect('/blog')
    })
    .catch(err => console.log(err))
})


//GET ~ DETAIL/SHOW '/blog/:id' -- show ONE blog post
app.get('/blog/:id', async (req, res) => {
    try{
        const foundBlog = await db.Blog.findById(req.params.id)
        res.json({ foundBlog })
    } catch(err) {
        console.log(err)
    }
})

//PUT ~ UPDATE  '/blog/:id' -- update one blog post
app.put('/blog/:id', (req, res) => {
    db.Blog.findById(req.params.id)
    .then(foundBlog =>{
        foundBlog.name = req.body.name
        foundBlog.title = req.body.title
        foundBlog.content = req.body.content

        foundBlog.save()
        .then(() => {
            res.redirect('/blog')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

//DELETE ~ DELETE '/blog/:id' -- delete one blog post
app.delete('/blog/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
        console.log(deletedItem)
        res.redirect('/drinks')
    })
    .catch(err => console.log(err))
})



// Attach to port
app.listen(PORT, () => console.log(`welcome to the smooth sounds of port ${PORT} 🏄🏼`))