import Koa from 'koa'
import { printLogo } from './logo'

const app = new Koa()

app.use((ctx,next)=>{
    if(ctx.path===''){
        ctx.set('Content-Type','text/html')
        ctx.body = '<h1>Success!😭😭😭😭</h1>'
    }else{
        next()
    }
    
})

printLogo()

app.listen(8848)
