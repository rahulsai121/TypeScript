import express from 'express'

import todosRoutes from './routes/todos'

const app=express();

app.use(express.json())

app.use(todosRoutes)


app.listen(3000,()=>{
    console.log('server is running ')
})