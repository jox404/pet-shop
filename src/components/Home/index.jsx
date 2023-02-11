import { useState } from "react";
import "../../assets/styles/home.scss";
import PetRegister from "../PetRegister";

export default function Home() {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <>
      <PetRegister
        isOpen={openModalEdit}
        setOpen={setOpenModalEdit}
        typeForm={"edit"}
      />

      <div
        id="home"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/8498519/pexels-photo-8498519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            consequatur, animi doloribus eius veritatis soluta voluptatum
            voluptatem iste obcaecati quaerat non consectetur voluptas vel
            excepturi deserunt dicta. Ratione, aperiam inventore.
          </p>
          <button
            className="btnWhite"
            onClick={() => {
              setOpenModalEdit(true);
            }}
          >
            Cadastrar Pet
          </button>
        </div>
      </div>
    </>
  );
}
