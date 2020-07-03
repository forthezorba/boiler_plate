if(process.env.NODE_ENV ==='production'){
    console.log('now mode is prod')
    module.exports= require('./prod')
}else{
    console.log('now mode is dev')
    module.exports= require('./dev')
}