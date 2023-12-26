const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide your name."] },
    email: {
      type: String,
      required: [true, "Please provide an email."],
      unique: [true, "The email address is already in use."],
    },
    password: { type: String, required: [true, "Please provide a password"] },
    previouslyBoughtItems: [
      {
        id: Number,
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        rating: Number,
        brand: String,
        category: String,
        thumbnail: String,
        images: [{ type: String }],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
