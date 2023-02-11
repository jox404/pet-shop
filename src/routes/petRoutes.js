import express from "express";
import db from "../../config/database.js";
import {
  registerPet,
  findAllpets,
  removePet,
  updatePet,
} from "../controllers/index.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await db.authenticate();
    res.json({
      status: "ok",
      dbConnection: "Connection has been established successfully.",
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    res.json({
      status: "ok",
      dbConnection: error,
    });
  }
});

router.get("/findAllPets", findAllpets);

router.post("/registerPet", registerPet);

router.patch("/updatePet/:id", updatePet);

router.delete("/removePet/:id", removePet);

export default router;
