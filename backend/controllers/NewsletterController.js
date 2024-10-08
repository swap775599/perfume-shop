// controllers/newsletterController.js
const Subscription = require('../models/Subscription');

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  try {
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Already subscribed' });
    }
    const subscription = new Subscription({ email });
    await subscription.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
