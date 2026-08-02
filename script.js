const movies = [
  {
    title: "Avatar",
    image: "https://picsum.photos/220/320?random=1"
  },
  {
    title: "John Wick",
    image: "https://picsum.photos/220/320?random=2"
  },
  {
    title: "Interstellar",
    image: "https://picsum.photos/220/320?random=3"
  }
];

function loadMovies(id) {
  const row = document.getElementById(id);

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
    `;

    row.appendChild(card);
  });
}

loadMovies("trending");
loadMovies("popular");
loadMovies("top");