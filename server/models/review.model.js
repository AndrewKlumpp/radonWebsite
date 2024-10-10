import { model, Schema } from 'mongoose';
const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [1, "Name must be at least 1 character long!"],
      maxlength: [50, "Name must be less than 50 characters long"]
    },
    city: {
      type: String,
      required: [true, "City is required!"],
      minlength: [2, "City must be at least 2 characters long!"],
      maxlength: [50, "City must be less than 50 characters long"]
    },
    stars: {
      type: Number,
      required: [true, "Star rating is required!"],
      min: [1, "Please select 1-5 stars!"],
      max: [5, "Please select 1-5 stars!"]
    },
    review: {
      type: String,
      required: [true, "Review is required!"],
      minlength: [2, "Review must be at least 2 characters long!"],
      maxlength: [500, "Review must be less than 500 characters long"]
    }
  },
  { timestamps: true }
);
const Review = model("Review", ReviewSchema);
export default Review;
