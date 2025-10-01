import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;