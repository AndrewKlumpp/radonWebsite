import Review from '../models/review.model.js';

async function create(req, res) {
    try {
        const newReview = await Review.create(req.body);
        return res.status(201).json(newReview);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

async function getAll(req, res) {
  try {
      const allReviews = await Review.find();
      return res.status(200).json(allReviews);
  } catch (error) {
      console.log(error);
      return res.status(500).json(error);
  }
}

async function getOne(req, res) {
  try {
      const foundReview = await Review.findById(req.params.id);
      return res.status(200).json(foundReview);
  } catch (error) {
      console.log(error);
      return res.status(500).json(error);
  }
}

async function deleteOne(req, res) {
  try {
      const deletedReview= await Review.findByIdAndDelete(req.params.id);
      return res.status(204).json(deletedReview);
  } catch (error) {
      console.log(error);
      return res.status(500).json(error);
  }
}

async function updateOne(req, res) {
  const options = {
      new: true,
      runValidators: true,
  };
  try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, options);
      res.status(200).json(updatedReview);
  } catch (error) {
      console.log(error);
      res.status(500).json(error);
  }
}

export {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne
};
