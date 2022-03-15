import { getData } from "./getData.js";
import { renderList } from "./render.js";

const display = document.querySelector("section");

export function router() {
  // const cors = `https://cors-anywhere.herokuapp.com/`;
  const endpoint = `https://zoeken.oba.nl/api/v1/search/?q=`;
  const query = "digid";
  const key = `1e19898c87464e239192c8bfe422f280`;
  // const secret = "4289fec4e962a33118340c888699438d";
  const detail = "Default";
  const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  // const localUrl = "./js/digidSearch.json"
  //  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  // https://zoeken.oba.nl/api/v1/search/?q=digid&authorization=166270b1475823ac569dab2a55e8aa3a&detaillevel=Default&output=json
  // const config = {
  //   Authorization: `Bearer ${secret}`,
  // };

  routie({
    overview: async () => {
      const getOverview = await getData(`${url}`);
      console.log("i work");
      return renderList(getOverview, display);
    },
    "": async () => {
      const getOverview = await getData(`${url}`);
      console.log(url);
      console.log("hi, i'm a wildcard");
      return renderList(getOverview, display);
    },
  });
}
