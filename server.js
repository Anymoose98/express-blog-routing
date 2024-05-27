const express = require('express')
const app = express();
app.use(express.static('public'))
const port = 3000;

const posts = require('./routers/posts')


app.use("/posts", posts)

app.listen(port, () => {
})