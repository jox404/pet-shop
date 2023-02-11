import "../../assets/styles/cardPet.scss";
import IconButton from "../IconButton";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import petImages from "./petsImages";

export default function CardPet(params) {
  const { name, sex, age, race, weight, height, species, id, ownsName } =
    params.data;
  const { remove, edit } = params;
  var petImage = petImages[species];

  return (
    <div className="cardPet">
      <div className="petImage">
        <img src={petImage} alt={`imagem de um(a)${species}`} />
      </div>
      <div>
        <div>
          <p>{name}</p>
          <p>{sex === "M" ? "Macho" : "Fêmea"}</p>
        </div>
        <div className="petInfo">
          <ul>
            <li>
              <strong>Idade:</strong> {`${age} ${age > 1 ? "anos" : "ano"}`}
            </li>
            {race !== null ? (
              <li>
                <strong>Raça:</strong> {race}
              </li>
            ) : (
              <></>
            )}
            <li>
              <strong>Peso:</strong> {`${weight} kg`}
            </li>
            <li>
              <strong>Altura:</strong> {`${height} cm`}
            </li>
            <li>
              <strong>Especie:</strong> {`${species}`}
            </li>
            <li>
              <strong>Dono:</strong> {`${ownsName}`}
            </li>
          </ul>
        </div>
        <div className="petManager">
          <IconButton>
            <FiEdit3
              onClick={() => {
                console.log("teste02");
                edit(params.data);
              }}
            />
          </IconButton>
          <IconButton>
            <MdOutlineClose
              onClick={() => {
                console.log("teste02");
                remove(id);
              }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
