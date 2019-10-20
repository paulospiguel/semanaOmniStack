// index - show - store - update - destroy
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      const { email } = req.body;

      // Procura usuário
      let user = await User.findOne({ email });

      // Cria usuário novo
      if (!user) {
        user = await User.create({ email });
      }
      return res.json(user);
    } catch (error) {
      return error;
    }
  }
};
