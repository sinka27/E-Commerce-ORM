const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    //include its associated Products
    include: [Product],
  }).then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
  
});

router.get('/:id', (req, res) => {
  //console.log(req.params)
// find one category by its `id` value
  Category.findOne({
    where: {
      id:req.params.id
    },
    // included its associated Products
    include: [Product]
  })

  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((category) => res.status(200).json("Category updated successfully"))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((category) => res.status(200).json("Category deleted"))
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
