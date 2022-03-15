export const renderList = (response, element) => {
  console.log(response);
  const libraryCollection = [];

  response.results.forEach((obj) => {
    libraryCollection.push({
      title: obj.titles,
      author: obj.authors ? obj.authors : "geen author",
      genres: obj.genres,
      summary: obj.summaries[0],
      isbn: obj.isbn,
      cover: obj.coverimages[0],
    });
  });
  showCollection(libraryCollection);
  console.log(libraryCollection);
};

function showCollection(data) {
  const main = document.getElementById("collections");
  //controle als er al een element met class collection bestaat, zoniet voeg toe
  const createCollection = document.createElement("section");
  createCollection.setAttribute("class", "collection");
  main.appendChild(createCollection);
  // bestaat de detail section? verwijder dit dan
  // if(document.getElementById('detail')) {
  //   const detail = document.getElementById('detail')
  //   main.removeChild(detail)
  // }

  data.forEach((item) => {
    const article = document.createElement("article");

    let output = `
      <a href=""
        <p>${item.title[0]}</p>
        <p>${item.author}</p>
        <p>${item.genres}</p>
        <p>${item.summary}</p>
        <img src="${item.cover}" />
        <p>${item.isbn}</p>
      </a>
        `;

    article.innerHTML = output;
    document.querySelector(".collection").appendChild(article);
  });
}
