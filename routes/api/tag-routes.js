const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    //included associated Product data
    include: [{model:Product, through: ProductTag}],
 })
   .then((Tag) => res.status(200).json(Tag))
   .catch((err) => res.status(400).json(err));
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id:req.params.id
    },
    // included its associated Product data
    include: [Product, { model:Product, through: ProductTag }]
  })

  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(400).json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((tag) => res.status(200).json("Tag updated successfully"))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
