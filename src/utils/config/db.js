import mongoose from "mongoose"


const DBConnect = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("DB successfullt connected");
    } catch (error) {
        console.log(error);
    }
}
export default DBConnect