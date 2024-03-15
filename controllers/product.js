const item = require("../models/productSchema");

const getAllProducts = async (req, res) => {
  try {
    const products = await item.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSearchData = async (req, res) => {
  try {
    const products = await item.find(req.query);
    console.log(req.query);
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSortData = async (req, res) => {
  try {
    let query = item.find();

    if (req.query) {
      let sortObject = {};

      for (const key in req.query) {
        if (req.query.hasOwnProperty(key)) {
          const value = req.query[key].toLowerCase();
          sortObject[key] = value === '1' ? 1 : value === '-1' ? -1 : 1;
        }
      }

      query = query.sort(sortObject);
    }

    const products = await query;
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllPagination = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;

    let skip = (page - 1) * limit;

    const products = await item.find().skip(skip).limit(limit);

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllProducts, getSearchData, getSortData,getAllPagination };
