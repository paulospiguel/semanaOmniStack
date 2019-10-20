// Metodos HTTP »» GET, POST, PUT, DELETE
// req.query = Utilizado para acessar as query params (para filtros)
// req.params = Acessa os paremetros do sistema (edição e delete)
// req.body = Acessa os parametros do corpo da requisição(criação, edição)

const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const router = express.Router();
const upload = multer(uploadConfig);

router.post("/sessions", SessionController.store);

router.get("/spots", SpotController.index);
router.post("/spots", upload.single("thumbnail"), SpotController.store);

router.post("/spots/:spot_id/bookings", BookingController.store);

router.get("/dashboard", DashboardController.show);

module.exports = router;
