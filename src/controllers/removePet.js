import { petModel } from "../model/index.js";

async function removePet(req, res) {
  try {
    await petModel
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        res.json({
          removedItemCount: result,
          message: "pet removal successful",
        });
      });
  } catch (error) {
    res.status(404).json({ messege: "pet removal failed", error: error });
  }
}

export default removePet;
