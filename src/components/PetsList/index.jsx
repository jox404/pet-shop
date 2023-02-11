import "../../assets/styles/petsList.scss";
import { useEffect, useState } from "react";
import CardPet from "../CardPet";
import { getPets, removePet } from "../../services/api/index";
import PetEdit from "../PetEdit";

export default function PetsList({ children }) {
  const [petData, setPetData] = useState([]);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [dataCardInModal, setDataCardModal] = useState(undefined);
  const removePetFromList = (id) => {
    removePet.fetchData(`${id}`).then(async (res) => {
      await setPetData([]);
      getData();
    });
  };
  const editPetFromList = (data) => {
    if (!openModalEdit) {
      setOpenModalEdit(true);
    }
    setDataCardModal(data);
  };

  const getData = async () => {
    const data = await getPets.fetchData();
    setPetData(data);
  };

  useEffect(() => {
    getData();
  }, [openModalEdit]);
  return (
    <>
      {openModalEdit ? (
        <PetEdit
          isOpen={openModalEdit}
          setOpen={setOpenModalEdit}
          data={dataCardInModal}
        />
      ) : (
        <></>
      )}
      <div id="petsList">
        {petData && petData.length > 0 ? (
          petData.map((pet, index) => {
            return (
              <CardPet
                data={pet}
                key={index}
                functions={removePetFromList}
                remove={removePetFromList}
                edit={editPetFromList}
              />
            );
          })
        ) : (
          <strong>Não existem pets cadastrados!</strong>
        )}
      </div>
    </>
  );
}
