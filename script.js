const movies = [
  {
    title: "Avatar",
    image: "https://picsum.photos/220/320?random=1"
  },
  {
    title: "John Wick 4",
    image: "https://picsum.photos/220/320?random=2"
  },
  {
    title: "Interstellar",
    image: "https://picsum.photos/220/320?random=3"
  },
  {
    title: "Dune",
    image: "https://picsum.photos/220/320?random=4"
  },
  {
    title: "Oppenheimer",
    image: "https://picsum.photos/220/320?random=5"
  }
];

const trending = document.getElementById("trending");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
  `;

  trending.appendChild(card);
});