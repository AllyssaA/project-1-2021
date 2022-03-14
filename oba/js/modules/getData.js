export const getData = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("finished loading");
    });
};
