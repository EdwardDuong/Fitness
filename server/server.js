require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items,
      mode: "payment",
      success_url: `${process.eventNames.SERVER_URL}/success`,
      cancel_url: `${process.eventNames.SERVER_URL}/cancle`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
app.listen(3001);
