import { INTEGER, Sequelize, STRING, ENUM } from "sequelize";

import db from "../../config/database.js";

const petModel = db.define("pet", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING },
  species: { type: STRING },
  height: { type: STRING },
  weight: { type: STRING },
  age: { type: INTEGER },
  sex: { type: ENUM("M", "F") },
  ownsName: { type: STRING },
  race: { type: STRING, allowNull: true },
});
petModel.sync();

export default petModel;
