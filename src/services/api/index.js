class PetAPI {
  constructor(url, method = "") {
    this._url = url;
    this._method = method;
  }

  async fetchData(paramsUrl, body = undefined) {
    var result = undefined;
    const url = paramsUrl ? `${this._url + "/" + paramsUrl}` : `${this._url}`;
    try {
      await fetch(
        `http://localhost:9000/${url}`,

        this._method === "PATCH" || this._method === "POST"
          ? {
              method: this._method,
              Accept: "*/*",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          : {
              method: this._method,
              Accept: "*/*",
            }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            result = res.data;
          } else {
            result = res;
          }
        });
    } catch (error) {
      window.alert(error);
      console.log(error);
    }
    console.log(result, body);
    return result;
  }
}

const getPets = new PetAPI("findAllPets", "get");
const updatePet = new PetAPI("updatePet", "PATCH");
const removePet = new PetAPI("removePet", "delete");
const registerPet = new PetAPI("registerPet", "POST");

export { getPets, updatePet, removePet, registerPet };
