/* Movie data — plain JS. Trailers are real YouTube trailer IDs (no full movies). */
const MOVIES = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    runtime: "2h 28m",
    description:
      "A skilled thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past by planting an idea into a target's subconscious.",
    trailer: "YoHD9XEInc0",
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    runtime: "2h 32m",
    description:
      "When the Joker unleashes chaos on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: "EXeTwQWrcwY",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: "2h 49m",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    trailer: "zSWdZVtXT7E",
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: "2h 16m",
    description:
      "A computer hacker learns the shocking truth about his reality and his role in the war against its controllers.",
    trailer: "vKQi3bBA1y8",
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    runtime: "2h 34m",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    trailer: "s7EdQ4FqbhY",
  },
  {
    id: "fight-club",
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,
    runtime: "2h 19m",
    description:
      "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.",
    trailer: "qtRKdVHc-cE",
  },
  {
    id: "gladiator",
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    runtime: "2h 35m",
    description:
      "A betrayed Roman general rises through the ranks of the gladiatorial arena to avenge the murder of his family and his emperor.",
    trailer: "owK1qxDselE",
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    runtime: "2h 55m",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: "sY1S34973zA",
  },
  {
    id: "joker",
    title: "Joker",
    year: 2019,
    genre: "Drama",
    rating: 8.4,
    runtime: "2h 2m",
    description:
      "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain in Gotham City.",
    trailer: "zAGVQLHvwOY",
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8.5,
    runtime: "2h 12m",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between a wealthy family and a destitute clan.",
    trailer: "5xH0HfJHsaY",
  },
  {
    id: "dune",
    title: "Dune",
    year: 2021,
    genre: "Sci-Fi",
    rating: 8.0,
    runtime: "2h 35m",
    description:
      "A gifted young man must travel to the most dangerous planet in the universe to ensure the future of his family and people.",
    trailer: "n9xhJrPXop4",
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.3,
    runtime: "3h 0m",
    description:
      "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    trailer: "uYPbbksJxIg",
  },
  {
    id: "no-way-home",
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action",
    rating: 8.2,
    runtime: "2h 28m",
    description:
      "With Spider-Man's identity revealed, Peter asks Doctor Strange for help — unleashing dangers from across the multiverse.",
    trailer: "JfVOs4VSpmA",
  },
  {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "Action",
    rating: 8.3,
    runtime: "2h 10m",
    description:
      "After thirty years of service, Maverick trains a detachment of graduates for a specialized and dangerous mission.",
    trailer: "giXco2jaZ_4",
  },
  {
    id: "john-wick",
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    runtime: "1h 41m",
    description:
      "An ex-hitman comes out of retirement to track down the gangsters who took everything from him.",
    trailer: "C0BMx-qxsP4",
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    runtime: "2h 0m",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter named Max.",
    trailer: "hEJnMQG9ev8",
  },
];

/* Poster image = the trailer's YouTube thumbnail (always available, always on-theme). */
function posterFor(movie) {
  return "https://img.youtube.com/vi/" + movie.trailer + "/maxresdefault.jpg";
}
function posterFallback(movie) {
  return "https://img.youtube.com/vi/" + movie.trailer + "/hqdefault.jpg";
}
