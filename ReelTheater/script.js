/* Vanilla JS — renders the movie grid, handles search, and powers the detail page. */

/* ---------- Shared helpers ---------- */
function attachPosterFallback(img, movie) {
  img.addEventListener(
    "error",
    function handle() {
      img.removeEventListener("error", handle);
      img.src = posterFallback(movie);
    },
    { once: true }
  );
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ---------- Home page ---------- */
function createCard(movie) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = "movie.html?id=" + encodeURIComponent(movie.id);
  card.setAttribute("data-testid", "movie-card-" + movie.id);

  const img = document.createElement("img");
  img.src = posterFor(movie);
  img.alt = movie.title + " trailer thumbnail";
  img.loading = "lazy";
  attachPosterFallback(img, movie);

  card.innerHTML = `
    <div class="poster">
      <span class="rating-badge">★ ${movie.rating.toFixed(1)}</span>
      <span class="play-chip">▶ Watch Trailer</span>
    </div>
    <div class="card-body">
      <h3>${movie.title}</h3>
      <div class="meta">
        <span class="genre-pill">${movie.genre}</span>
        <span>${movie.year}</span>
        <span>•</span>
        <span>${movie.runtime}</span>
      </div>
    </div>`;

  card.querySelector(".poster").prepend(img);
  return card;
}

function initHome() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const countEl = document.getElementById("count");
  if (!grid) return;

  function render(list) {
    grid.innerHTML = "";
    if (list.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.setAttribute("data-testid", "empty-state");
      empty.textContent = "No movies found. Try another search.";
      grid.appendChild(empty);
    } else {
      list.forEach((m, i) => {
        const card = createCard(m);
        card.style.animationDelay = Math.min(i * 45, 500) + "ms";
        grid.appendChild(card);
      });
    }
    if (countEl) {
      countEl.textContent =
        list.length + (list.length === 1 ? " movie" : " movies");
    }
  }

  render(MOVIES);

  if (search) {
    search.addEventListener("input", function () {
      const q = search.value.trim().toLowerCase();
      const filtered = MOVIES.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.genre.toLowerCase().includes(q) ||
          String(m.year).includes(q)
      );
      render(filtered);
    });
  }
}

/* ---------- Detail page ---------- */
function initDetail() {
  const root = document.getElementById("detail-root");
  if (!root) return;

  const id = getParam("id");
  const movie = MOVIES.find((m) => m.id === id);

  if (!movie) {
    root.innerHTML = `
      <div class="notfound" data-testid="movie-not-found">
        <h1>Movie Not Found</h1>
        <p style="color:var(--muted);margin:14px 0 26px">We couldn't find that title.</p>
        <a class="back-link" href="index.html">← Back to all movies</a>
      </div>`;
    return;
  }

  document.title = movie.title + " — Trailer | REEL";

  root.innerHTML = `
    <div class="detail" data-testid="movie-detail">
      <a class="back-link" href="index.html" data-testid="back-button">← All Movies</a>
      <div class="player">
        <iframe
          data-testid="trailer-iframe"
          src="https://www.youtube-nocookie.com/embed/${movie.trailer}?rel=0&modestbranding=1"
          title="${movie.title} — Official Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <div class="detail-info">
        <span class="kicker">Official Trailer</span>
        <h1 data-testid="detail-title">${movie.title}</h1>
        <div class="detail-meta">
          <span class="star">★ ${movie.rating.toFixed(1)}</span>
          <span class="genre-pill">${movie.genre}</span>
          <span>${movie.year}</span>
          <span>•</span>
          <span>${movie.runtime}</span>
        </div>
        <p class="desc">${movie.description}</p>
        <div class="notice">ℹ This page plays the trailer only — not the full movie.</div>
      </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  initHome();
  initDetail();
});
