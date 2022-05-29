const {response}=require('express')


const usuariosGet=(req,res=response) => {
    const {nombre}=req.query;
    res.json({
        msj: 'get-API contolador',
        nombre
    })
}
const usuariosPost=(req,res=response) => {
    const body = req.body;
    res.json({
        msj: 'Post-API contolador',
        body
    })
} 
const usuariosPut=(req,res=response) => {
    const {id}= req.params;
    res.json({
        msj: 'Put-API contolador',
        id
        
    })
}
const usuariosPatch=(req,res=response) => {
    res.json({
        msj: 'Patch-API contolador'
    })
}
const usuariosDelete=(req,res=response) => {
    res.json({
        msj: 'Delete-API contolador'
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}