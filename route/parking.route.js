module.exports = app => {
    const parking = require("../controllers/parking.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", parking.create);
  
    // Retrieve all Tutorials
    router.get("/parkings", parking.findAll);
  
    // Retrieve all published Tutorials
    router.get("/Douala", parking.findAllDouala);
  
    // Retrieve a single Tutorial with id
    router.get("/parkings/:id", parking.findOne);
  
    // Update a Tutorial with id
    router.put("/parkings/:id", parking.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", parking.delete);
  
    // Create a new Tutorial
    router.delete("/", parking.deleteAll);
  
    app.use('/', router);
};