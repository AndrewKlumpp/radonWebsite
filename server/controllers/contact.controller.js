import Contact from '../models/contact.model.js';

async function create(req, res) {
    try {
        const newContact = await Contact.create(req.body);
        return res.status(201).json(newContact);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

async function getAll(req, res) {
  try {
      const allContacts = await Contact.find();
      return res.status(200).json(allContacts);
  } catch (error) {
      console.log(error);
      return res.status(500).json(error);
  }
}

async function getOne(req, res) {
  try {
      const foundContact = await Contact.findById(req.params.id);
      return res.status(200).json(foundContact);
  } catch (error) {
      console.log(error);
      return res.status(500).json(error);
  }
}

async function deleteOne(req, res) {
  try {
      const deletedContact= await Contact.findByIdAndDelete(req.params.id);
      return res.status(204).json(deletedContact);
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
      const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, options);
      res.status(200).json(updatedContact);
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
