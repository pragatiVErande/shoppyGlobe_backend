import Cart from '../models/cartModel.js';

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const cartItem = new Cart({ productId, quantity, userId: req.user._id });
  await cartItem.save();
  res.status(201).json(cartItem);
};

export const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const cartItem = await Cart.findById(id);
    if (!cartItem) return res.status(404).json({ error: "Cart item not found" });

    if (cartItem.userId !== req.user._id) {
      return res.status(403).json({ error: "Forbidden: You do not own this cart item" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update cart item" });
  }
};

export const deleteCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await Cart.findById(id);
    if (!cartItem) return res.status(404).json({ error: "Cart item not found" });

    if (cartItem.userId !== req.user._id) {
      return res.status(403).json({ error: "Forbidden: You do not own this cart item" });
    }

    await Cart.findByIdAndDelete(id);
    res.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cart item" });
  }
};
