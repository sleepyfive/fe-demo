import { Middleware } from "koa";
import { resolve } from "path";
import { readFileSync } from "fs";

const resolveMid: Middleware = (ctx,next) => {
    const { path } = ctx
    const realPath = resolvePath(path)
    const  suffix = path.substring(path.lastIndexOf('.'))
    const content =  readFileSync(realPath,{encoding:'utf-8'})
    switch(suffix){
        case 'ts':
            resolveJSDialects(content)
        case 'js':
            resolveJS(content)
            break
        case 'css':
            resolveCSS(content)
            break   
    }
}

const read = (path) => {

}

const resolvePath:Str2StrType = (path) => {
    const virtuanPath = path.substring(1)
    let realPath = ''
    if(!virtuanPath.startsWith('.')){//node_modules
        realPath = resolve(__dirname,'node_modules',virtuanPath)
    }else{
        realPath = resolve(__dirname,virtuanPath)
    }
    return realPath

}

const resolveJS = (content:string)=>{

}

const resolveJSDialects = (content:string)=>{

}

const resolveCSS = (content:string)=>{

}