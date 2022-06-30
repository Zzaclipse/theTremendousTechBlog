const router = require('express').Router();

// const userRoutes = require('./user-routes');
// const categoryRoutes = require('./category-routes');
const recipeRoutes = require('./recipe-routes');
// const commentRoutes = require('./comment-routes');
// const cookbookRoutes = require('./cookbook-routes');

// router.use('/users', userRoutes);
// router.use('/categories', categoryRoutes);
router.use('/recipes', recipeRoutes);
// router.use('/comments', commentRoutes);
// router.use('/cookbooks', cookbookRoutes);

module.exports = router;
