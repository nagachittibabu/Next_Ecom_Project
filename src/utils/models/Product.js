const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    }
});

const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

export default ProductModel;
