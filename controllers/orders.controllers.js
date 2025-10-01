import Order from "../models/orders.js";

export const createOrder = async (req, res) => {
    try {
        const orderData = await Order.create({ ...req.body });
        res.status(201).json({ message: "Order created successfully", order: orderData });
    } catch (error) {
        res.status(500).json({ message: { "Failed to create order": error.message } });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('bookId');
        res.status(200).json({ message: "Orders retrieved successfully", orders });
    } catch (error) {
        res.status(500).json({ message: { "Failed to retrieve orders": error.message } });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        await Order.findByIdAndDelete(orderId);
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: { "Failed to delete order": error.message } });
    }
};
