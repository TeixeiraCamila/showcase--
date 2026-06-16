// Form inputs
const inputImage = document.getElementById("input-image");
const inputTitle = document.getElementById("input-title");
const inputYear = document.getElementById("input-year");
const inputNames = document.getElementById("input-names");
const inputGenre = document.getElementById("input-genre");
const inputDirector = document.getElementById("input-director");
const imageSource = document.getElementById("image-source");

// Search
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const searchResults = document.getElementById("search-results");
const selectMovie = document.getElementById("select-movie");

// Poster preview elements
const posterImage = document.getElementById("poster-image");
const posterTitle = document.getElementById("poster-title");
const posterYear = document.getElementById("poster-year");
const posterNames = document.getElementById("poster-names");
const posterGenre = document.getElementById("poster-genre");
const posterDirector = document.getElementById("poster-creator");

// Buttons
const btnPreview = document.getElementById("btn-preview");
const btnDownload = document.getElementById("btn-download");

// Cloudinary
const btnUpload = document.getElementById("btn-upload");
const btnCopy = document.getElementById("btn-copy");
const cloudinaryUrl = document.getElementById("cloudinary-url");
const urlDisplay = document.querySelector(".url-display");

// --- State ------------------------------------------------------------------

let currentImage = null;

// --- Image upload handler ---------------------------------------------------

inputImage.addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    imageSource.textContent = "(local)";
    const reader = new FileReader();
    reader.onload = function (e) {
      currentImage = e.target.result;
      const img = posterImage.querySelector("img");
      if (img) {
        img.src = currentImage;
        img.className = "poster__image-img";
      } else {
        posterImage.innerHTML = `<img src="${currentImage}" class="poster__image-img" alt="Poster">`;
      }
    };
    reader.readAsDataURL(file);
  }
});

// --- Update poster preview from form values ---------------------------------

function updatePoster() {
  posterTitle.textContent = inputTitle.value || "Title";

  if (inputYear.value) {
    posterYear.parentElement.style.display = "";
    posterYear.textContent = inputYear.value;
  } else {
    posterYear.parentElement.style.display = "none";
  }

  if (inputGenre.value) {
    posterGenre.style.display = "";
    posterGenre.textContent = inputGenre.value;
  } else {
    posterGenre.style.display = "none";
  }

  const namesSection = posterNames.closest(".poster__section");
  if (inputNames.value) {
    namesSection.style.display = "";
    posterNames.textContent = inputNames.value;
  } else {
    namesSection.style.display = "none";
  }

  const directorSection = posterDirector.closest(".poster__section");
  if (inputDirector.value) {
    directorSection.style.display = "";
    posterDirector.textContent = inputDirector.value;
  } else {
    directorSection.style.display = "none";
  }
}

// Live preview as user types
inputTitle.addEventListener("input", updatePoster);
inputYear.addEventListener("input", updatePoster);
inputNames.addEventListener("input", updatePoster);
inputGenre.addEventListener("input", updatePoster);
inputDirector.addEventListener("input", updatePoster);

// Preview button (also triggers update + visual feedback)
btnPreview.addEventListener("click", function () {
  updatePoster();
  alert("Preview updated!");
});

// --- Movie search via OMDB API ----------------------------------------------

let searchTimeout = null;
let allResults = [];

function searchMovies() {
  const query = inputSearch.value.trim();
  if (!query) return;

  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    const types = ["movie", "series", "episode"];
    allResults = [];

    try {
      for (const type of types) {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=${type}`,
        );
        const data = await response.json();
        if (data.Response === "True" && data.Search) {
          allResults = allResults.concat(data.Search);
        }
      }

      if (allResults.length > 0) {
        allResults.sort((a, b) => a.Title.localeCompare(b.Title));
        selectMovie.innerHTML = '<option value="">Select...</option>';
        allResults.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.imdbID;
          const typeLabel =
            item.Type === "series"
              ? "📺"
              : item.Type === "episode"
                ? "📡"
                : "🎬";
          option.textContent = `${typeLabel} ${item.Title} (${item.Year})`;
          selectMovie.appendChild(option);
        });
        searchResults.classList.remove("hidden");
      } else {
        alert("No results found");
        searchResults.classList.add("hidden");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Error searching");
    }
  }, 300);
}

btnSearch.addEventListener("click", searchMovies);
inputSearch.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchMovies();
  }
});

// --- Fetch full movie details when a result is selected ---------------------

selectMovie.addEventListener("change", function () {
  const imdbId = this.value;
  if (imdbId) {
    fetchMovieDetails(imdbId);
  }
});

async function fetchMovieDetails(imdbId) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbId}&plot=full`,
    );
    const data = await response.json();
    console.log("🚀 ~ fetchMovieDetails ~ data:", data);

    if (data.Response === "True") {
      inputTitle.value = data.Title && data.Title !== "N/A" ? data.Title : "";
      inputYear.value =
        data.Year && data.Year !== "N/A" ? data.Year.split("–")[0] : "";
      inputGenre.value = data.Genre && data.Genre !== "N/A" ? data.Genre : "";

      let directorValue =
        data.Director && data.Director !== "N/A" ? data.Director : "";
      if (!directorValue && data.Writer && data.Writer !== "N/A") {
        directorValue = data.Writer;
      }
      inputDirector.value = directorValue;

      inputNames.value =
        data.Actors && data.Actors !== "N/A" ? data.Actors : "";

      if (data.Poster && data.Poster !== "N/A") {
        loadPosterImage(data.Poster);
      }

      updatePoster();
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    alert("Error loading movie details");
  }
}

// --- Load image from URL (OMDB) into poster --------------------------------

function loadPosterImage(url) {
  imageSource.textContent = "(API)";
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    // Convert to data URL to avoid CORS issues during html2canvas capture
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    currentImage = canvas.toDataURL("image/jpeg");

    const imgElement = posterImage.querySelector("img");
    if (imgElement) {
      imgElement.src = currentImage;
      imgElement.className = "poster__image-img";
    } else {
      posterImage.innerHTML = `<img src="${currentImage}" class="poster__image-img" alt="Poster">`;
    }
  };
  img.onerror = function () {
    console.error("Failed to load image:", url);
  };
  img.src = url;
}

// --- Download poster as PNG -------------------------------------------------

btnDownload.addEventListener("click", function () {
  const posterElement = document.getElementById("poster-preview");

  html2canvas(posterElement, {
    backgroundColor: "#D9D9D9",
    scale: 2,
    useCORS: true,
    allowTaint: true,
  })
    .then((canvas) => {
      const link = document.createElement("a");
      link.download = `${inputTitle.value || "poster"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    })
    .catch((err) => {
      console.error("Error generating poster:", err);
      alert("Error generating poster. Please try again.");
    });
});

// --- Upload to Cloudinary ------------------------------------------------

btnUpload.addEventListener("click", async function () {
  btnUpload.disabled = true;
  btnUpload.textContent = "Uploading...";

  try {
    const canvas = await html2canvas(
      document.getElementById("poster-preview"),
      {
        backgroundColor: "#D9D9D9",
        scale: 2,
        useCORS: true,
        allowTaint: true,
      },
    );

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );
    const formData = new FormData();
    formData.append("file", blob);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await res.json();

    if (data.secure_url) {
      cloudinaryUrl.value = data.secure_url;
      urlDisplay.classList.remove("hidden");
    } else {
      alert("Upload failed: " + (data.error?.message || "Unknown error"));
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("Upload failed. Check console for details.");
  } finally {
    btnUpload.disabled = false;
    btnUpload.textContent = "Upload to Cloudinary";
  }
});

// --- Copy URL ------------------------------------------------------------

btnCopy.addEventListener("click", function () {
  navigator.clipboard.writeText(cloudinaryUrl.value);
  btnCopy.textContent = "Copied!";
  setTimeout(() => {
    btnCopy.textContent = "Copy";
  }, 2000);
});
