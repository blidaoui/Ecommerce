const mongoose =require("mongoose")
//create schema for categorie tous les doc  de cettte famille sont de type string et avec les champs obligatoires  et uniques  categorieModel 
const categorieSchema=mongoose.Schema({ 
    nomcategorie:{ type: String, required: true,unique:true }, 
    imagecategorie :{ type: String, required: false } 
    }) 
//create model for categorie 
module.exports=mongoose.model('categorie',categorieSchema) 
