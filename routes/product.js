const express = require("express");

const router = express.Router();

const productApi = require("../controller/product");
//URLs mapping
router.get("/", productApi.getProduct);
router.post("/create", productApi.addProduct);
router.post("/:id/update_quantity", productApi.updateProduct);
router.delete("/:id", productApi.deleteProduct);


module.exports = router;