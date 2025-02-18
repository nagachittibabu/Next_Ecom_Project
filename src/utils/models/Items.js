
const { default: mongoose } = require("mongoose");

const ItemsSChema =new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    }
})

const ItemsModel =mongoose.models.item ||  mongoose.model('item',ItemsSChema)

export default ItemsModel