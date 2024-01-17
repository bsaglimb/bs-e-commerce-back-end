const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// find all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Catergory.findAll({

  //include associated Products
include: Product,
    });

 // Send the categories as a JSON response
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});




// find one category by its `id` value
router.get('/:id', async (req, res) => {
try {
const category = await Category.findByPk(req.params.id, {
//include associated Products
include: Product,
});

 // If the category is not found, return a 404 response
 if (!category) {
  return res.status(404).json({ error: 'Category not found' });
}

// Send the category as a JSON response
res.json(category);
} catch (error) {
console.error(error);
res.status(500).json({ error: 'Server error' });
}
});


// create a new category
router.post('/', async (req, res) => {
try{ 
  const newCategory = await Category.create(req.body);
 // Send the new category as a JSON response
 res.status(201).json(newCategory);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Server error' });
}
});






 // update a category by its `id` value
 router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  if (!updatedCategory[0]) {
    return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});






// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where:{
        id: req.params.id,
      }
    });
if (!deleteCategory) { return res.status(404).json({ error: 'Category not found'});
  }
res.json({ message: 'Category deleted successfully'});
  } catch (error){
    console.error(error);
    res.status(500).json({ error: 'Server error'});
  }
});

module.exports = router;
