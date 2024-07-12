import Bookrequest from "../model/bookreq.model.js"

export const bookrequest = async(req, res) => {
    try {
        const bookrequest = new Bookrequest({
          bookName: req.body.bookName,
          authorName: req.body.authorName,
          category: req.body.category,
          image: req.file.buffer
        });
        await bookrequest.save();
        res.status(201).send({ message: ' successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error adding book!' });
      }
};