var express = require("express"); //importation du module express qui est  un framework pour créer des applications web
var router = express.Router(); //creation d'une instance du routeur

// Créer une instance de categorie. route -->controller -->model -->mongodbi
const Categorie = require("../models/categorie"); //model interoger a mongodbi

// afficher la liste des categories. async & await permet d'attendre que la reponse de la base de donnee soit recue  maye5dem ken ki tjih data khater el database mta3na bel cloud
router.get("/", async (req, res) => {
  try {
    const cat = await Categorie.find({}, null, { sort: { _id: -1 } });
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// créer un nouvelle catégorie
router.post("/", async (req, res) => {
  const { nomcategorie, imagecategorie } = req.body; // les donner eli bech yjouna men body bech nasna3 bihom categorie jdida
  const newCategorie = new Categorie({
    //nou9sod el model categorie w n3adiw l variable
    nomcategorie: nomcategorie,
    imagecategorie: imagecategorie,
  });
  try {
    await newCategorie.save(); //  kima save fi mongodbi tconnecter avec la base de donnee w t3adi l data
    res.status(200).json(newCategorie); //  3adiw l newCategorie  200 ok
  } catch (error) {
    res.status(404).json({ message: error.message }); // 404 error 404
  }
});

// chercher une catégorie
router.get("/:categorieId", async (req, res) => {
  try {
    const cat = await Categorie.findById(req.params.categorieId);
    res.status(200).json(cat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/:categorieId", async (req, res) => {
  try {
    const cat1 = await Categorie.findByIdAndUpdate(
      req.params.categorieId,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(cat1);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// Supprimer une catégorie
router.delete("/:categorieId", async (req, res) => {
  const id = req.params.categorieId;
  await Categorie.findByIdAndDelete(id);
  res.json({ message: "categorie deleted successfully." });
});
module.exports = router;
