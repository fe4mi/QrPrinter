import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
    {
      category: {
        type: String,
        required: true,
        unique: false,
      },
      marke: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      img: {
        type: String,
      },
      color: {
        type: String,
      },
      milage: {
        required: true,
        type: Number,
      }
    },
    { timestamps: true }
  );

 const Product = mongoose.models.Product || mongoose.model("Product", CarSchema);

export default Product;