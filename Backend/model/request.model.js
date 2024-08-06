import mongoose from "mongoose";

// Book Request Schema and Model
const bookrequestSchema = new mongoose.Schema({
  bookName: String,
  authorName: String,
  category: String,
  image: String,
});

const Bookrequest = mongoose.model('Bookrequest', bookrequestSchema);

// Article Schema and Model
const articleSchema = new mongoose.Schema({
  title: String,
  publisher: String,
  category: String,
});

const Article = mongoose.model('Article', articleSchema);

// Magazine Schema and Model
const magazineSchema = new mongoose.Schema({
  magazinename: String,
  publishercompany: String,
  category: String,
  image: String,
});

const Magazine = mongoose.model('Magazine', magazineSchema);

export { Bookrequest, Article, Magazine };