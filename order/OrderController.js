var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Order = require('./Order');

// CREATES A NEW ORDER
router.post('/', function (req, res) {
    Order.create({
          name: req.body.name,
          phone: req.body.phone,
          address: req.body.address,
          amount: req.body.amount,
          items: JSON.parse(req.body.items),
          accepted: false
        }, 
        function (err, order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(order);
        });
});

router.get('/acceptbyid/:id', function (req, res) {
  Order.findByIdAndUpdate(req.params.id, {accepted: true}, {new: true}, function (err, order) {
      if (err) return res.status(500).send("There was a problem accepting the order.");
      res.status(200).send(order);
  });
});

router.get('/:id', function (req, res) {
    Order.findById(req.params.id, function (err, order) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!order) return res.status(404).send("No user found.");
        res.status(200).send(order);
    });
});
// RETURNS ALL THE Orders IN THE DATABASE
router.get('/', function (req, res) {
    Order.find({}, null, {sort: {created: -1}}, function (err, orders) {
        if (err) return res.status(500).send("There was a problem finding the orders.");
        res.status(200).send(orders);
    });
});

// // GETS A SINGLE USER FROM THE DATABASE
// router.get('/:id', function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!user) return res.status(404).send("No user found.");
//         res.status(200).send(user);
//     });
// });

// // DELETES A USER FROM THE DATABASE
// router.delete('/:id', function (req, res) {
//     User.findByIdAndRemove(req.params.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem deleting the user.");
//         res.status(200).send("User: "+ user.name +" was deleted.");
//     });
// });

// // UPDATES A SINGLE USER IN THE DATABASE
// router.put('/:id', function (req, res) {
//     User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//         if (err) return res.status(500).send("There was a problem updating the user.");
//         res.status(200).send(user);
//     });
// });


module.exports = router;
