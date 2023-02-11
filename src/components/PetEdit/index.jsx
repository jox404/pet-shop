import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import "../../assets/styles/petForm.scss";
import { updatePet } from "../../services/api";
import IconButton from "../IconButton";

export default function PetEdit(params) {
  const { isOpen, setOpen } = params;
  const [formData, setFormData] = useState(params.data);
  const { name, sex, age, race, weight, height, species, id, ownsName } =
    formData;

  const validationForm = async () => {
    var response = false;
    if (
      name !== "" &&
      species !== "" &&
      height !== 0 &&
      weight !== 0 &&
      age !== "" &&
      sex !== "" &&
      ownsName !== ""
    ) {
      if (species === "cachorro" || (species === "gato" && race !== "")) {
        response = true;
      } else {
        setFormData((prev) => ({ ...prev, race: null }));
        response = true;
      }
    } else {
      response = false;
    }
    return response;
  };

  const onChangeForm = (e) => {
    const target = e.target.id;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [target]: value }));
  };

  return (
    <div id="petForm" style={{ display: isOpen ? "block" : "none" }}>
      <div id="containerBtnClose">
        <IconButton>
          <MdOutlineClose onClick={() => setOpen(false)} />{" "}
        </IconButton>
      </div>
      <h1>Editar</h1>
      <form
        action=""
        method="post"
        onSubmit={async (e) => {
          e.preventDefault();

          validationForm().then((res) => {
            if (res) {
              updatePet.fetchData(`${id}`, formData);
              window.alert(`Informações Atualizadas`);
              setOpen(false);
            } else {
              window.alert(
                "O formulario não pode ser enviado porque existem campos vazios"
              );
            }
          });
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onChangeForm(e)}
        />
        <label htmlFor="weight">Peso</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => onChangeForm(e)}
        />
        <label htmlFor="species">Especie</label>
        <select
          type="text"
          id="species"
          value={species}
          onChange={(e) => onChangeForm(e)}
        >
          <option value=""></option>
          <option value="gato">gato</option>
          <option value="cachorro">cachorro</option>
          <option value="tartaruga">tartaruga</option>
          <option value="peixe">peixe</option>
          <option value="raposa">raposa</option>
        </select>

        <label htmlFor="age">Idade</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => onChangeForm(e)}
        />
        <label htmlFor="height">Altura</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => onChangeForm(e)}
        />
        <label htmlFor="sex">Sexo</label>
        <select
          type="text"
          id="sex"
          value={sex}
          onChange={(e) => onChangeForm(e)}
        >
          <option value=""></option>
          <option value="M">Macho</option>
          <option value="F">Fêmea</option>
        </select>

        <label htmlFor="ownsName">Nome do Dono</label>
        <input
          type="text"
          id="ownsName"
          value={ownsName}
          onChange={(e) => onChangeForm(e)}
        />
        <label htmlFor="race">Raça</label>

        <input
          type="text"
          id="race"
          value={race}
          onChange={(e) => onChangeForm(e)}
          disabled={species === "cachorro" || species === "gato" ? false : true}
        />
        <button type="submit" className="btnWhite">
          Atualizar
        </button>
      </form>
    </div>
  );
}
