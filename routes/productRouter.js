const express = require("express")
const router = express.Router();
const {getAllProducts,getSearchData,getSortData,getAllPagination} = require('../controllers/product')


router.route("/").get(getAllProducts);
router.route("/search").get(getSearchData);
router.route("/sort").get(getSortData);
router.route("/pagination").get(getAllPagination);
module.exports = router;
