import { petModel } from "../model/index.js";

async function updatePet(req, res) {
  try {
    const petExists = await petModel.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (petExists) {
      try {
        await petExists.update(req.body);
      } catch (error) {
        res.status(404).json({ messege: "pet update failed", error: error });
      }
    } else {
      res.status(404).json({ messege: "pet dont exists" });
    }

    res.json({ petExists: petExists, body: req.body });
  } catch (error) {
    res.status(404).json({ messege: "pet update failed", error: error });
  }
}

export default updatePet;
