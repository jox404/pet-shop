import { petModel } from "../model/index.js";

async function registerPet(req, res) {
  try {
    await petModel
      .create({
        name: req.body.name,
        species: req.body.species,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        sex: req.body.sex,
        ownsName: req.body.ownsName,
        race: req.body.race,
      })
      .then((result) => {
        res.status(201).json({
          message: "pet add successful",
          result: result,
        });
      });
  } catch (error) {
    res.status(404).json({ message: error });
  }
}
export default registerPet;
