import { model, Schema } from 'mongoose';
const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required!"],
      minlength: [1, "First name must be at least 1 character long!"],
      maxlength: [50, "First name must be less than 50 characters long"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
      minlength: [1, "Last name must be at least 1 character long!"],
      maxlength: [50, "Last name must be less than 50 characters long"]
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      minlength: [5, "Email must be at least 5 characters long!"],
      maxlength: [50, "Email must be less than 50 characters long"]
    },
    phone: {
      type: String,
      required: [true, "Phone is required!"],
      minlength: [10, "Phone must be entered as 0000000000!"],
      maxlength: [10, "Phone must be entered as 0000000000!"]
    },
    city: {
      type: String,
      required: [true, "City is required!"],
      minlength: [2, "City must be at least 2 characters long!"],
      maxlength: [50, "City must be less than 50 characters long"]
    },
    zipCode: {
      type: String,
      required: [true, "Zip code is required!"],
      minlength: [5, "Zip Code must be a length of 5"],
      maxlength: [5, "Zip Code must be a length of 5"]
    },
    services: {
      type: String,
      required: [true, "Description of desired services is required!"],
      minlength: [2, "Description of desired services must be at least 2 characters long!"],
      maxlength: [500, "Description of desired services must be less than 500 characters long"]
    }
  },
  { timestamps: true }
);
const Contact = model("Contact", ContactSchema);
export default Contact;
