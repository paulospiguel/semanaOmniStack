const Booking = require("../models/Booking");
module.exports = {
  async store(req, res) {
    const { spot_id } = req.params;
    const { date } = req.body;
    const { user_id } = req.headers;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    // Faz o relacinamento das tabelas trazendo as informações
    await booking
      .populate("user")
      .populate("spot")
      .execPopulate();

    return res.json(booking);
  }
};
