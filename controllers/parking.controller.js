const db = require("../models/index.js"); // models path depend on your structure
const Parking = db.parking;
parking1=Parking.build({
  id:1,
  name:'paul',
  type:'car',
  city:'Douala'
})
console.log('la ville du parking 1 est: '+parking1.city);

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Parking
  const parking = {
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    city: req.body.city 
  };

  // Save Parking in the database
  Parking.create(parking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the parking."
      });
    });
};


//show all parking
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { title: { [Op.name]: `%${name}%` } } : null;

  Parking.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};



//show one parking
exports.findOne = (req, res) => {
  const id = req.params.id;

  // Parking.findByPk(id)
  //   .then(data => {

  //     if(!data){
  //       return next(new Error('Data not found.'));
  //     }
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error retrieving Parking with id=" + id
  //     });
  //   });


  Parking.findAll({
    where: {
      id: id
    }
  }).then(data => {

    if(!data){
        return next(new Error('Data not found.'));
    }
     res.send(data);
  })
    .catch(err => {
       res.status(500).send({
       message: "Error retrieving Parking with id=" + id
     });
     });


};



//Update parking
exports.update = (req, res) => {
  const id = req.params.id;

  Parking.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Parking was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Parking with id=${id}. Maybe Parking was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Parking with id=" + id
      });
    });
};



//Update Parking
exports.delete = (req, res) => {
  const id = req.params.id;

  Parking.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Parking was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Parking with id=${id}. Maybe Parking was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Parking with id=" + id
      });
    });
};


//Delete all parkings
exports.deleteAll = (req, res) => {
  Parking.destroy({
    where: {},
    truncate: 0
  })
    .then(nums => {
      res.send({ message: `${nums} parkings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all parkings."
      });
    });
};





//Find all object by condition
exports.findAllDouala = (req, res) => {

  Parking.findAll({ where: { city: 'Douala' } })
  .then(data => {
  
  res.send(data);
  
  })
  .catch(err => {
  
  res.status(500).send({
  
  message:
  
  err.message || "Some error occurred while retrieving parkings."
  
  });
  
  });
  
};