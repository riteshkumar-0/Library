import {Schema, model} from "mongoose"
import mongoose from "mongoose";


const bookrequest = mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    image: Buffer

    
  });
  
  const Bookrequest = mongoose.model('Bookreq', bookrequest);
  
  export default Bookrequest;
