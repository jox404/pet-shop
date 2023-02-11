import { petModel } from "../model/index.js";

async function findAllpets(req, res) {
  try {
    const query = await petModel.findAll();
    res.json({
      data: query,
    });
  } catch (error) {
    res.status(404).json({ messege: "query failed", error: error });
  }
}

export default findAllpets;
