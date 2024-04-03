const grid = document.getElementById('grid');

fetch(
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a8199c34d54e488fb831fa643cad6c4a"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    [data].forEach((element) => {
      element.articles.forEach((article) => {
        const card = document.createElement("div");
        card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "p-3", "border");
        card.innerHTML = `
            <div class="card border-0">
            <img class="card-img-top object-fit-cover " src="${article.urlToImage}" alt="Card image" />
            <div class="card-body border-0">
              <h4 class="card-title">${article.author}</h4>
              <p class="card-text">${article.description}</p>
              <a href="${article.url}" class="btn btn-primary">See More</a>
            </div>
          </div>
            `;
        grid.appendChild(card);
      });
    });
  });