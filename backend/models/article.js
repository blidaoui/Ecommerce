const  mongoose  =require("mongoose") //connection avec mongodb 
const Scategorie =require("./scategorie.js"); //importation du model scategorie 
const articleSchema=mongoose.Schema({ //creation du schema article tous les docs  de cette famille sont de type string et avec les champs obligatoires  et uniques  articleModel 
    reference:{ type: String, required: true,unique:true }, //reference de l article doit etre unique 
    designation:{ type: String, required: true,unique:true }, //designation de l article doit etre unique 
    prix:{ type: Number, required: false }, //prix de l article doit etre un nombre 
    marque:{ type: String, required: true }, 
    qtestock:{ type: Number, required: false }, 
    imageart:{ type: String, required: false }, 
    scategorieID: {type:mongoose.Schema.Types.ObjectId, 
    ref:Scategorie} 
 }) 
 //cree le model article 
module.exports=mongoose.model('article',articleSchema)