const jsonServer=require('json-server')
const server=jsonServer.create()
const middlewares=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT=3000 || process.env.PORT

server.use(middlewares)
server.use(router)
server.listen(PORT,()=>{
    console.log(`JSON Server is running at port ${PORT}`)
})