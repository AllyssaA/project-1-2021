const secret = "4289fec4e962a33118340c888699438d";
const config = {
  Authorization: `Bearer ${secret}`,
};

export const getData = async (url) => {
  return await fetch(url, config)
    .then((response) => response.json())
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("Finished loading.");
    });
};
