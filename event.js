var hell = document.getElementsByClassName('movie-cards');

        hell[0].addEventListener('click', () => {
            
            // if (hell[0]) {
                h_1();
                
               
            // }
        });
function h_1() {
    console.log("hwllo)")
    window.location='HollywoodMovies/h-1/h-1.html'
}
// Dummy function to get movie recommendations based on user input genre
function getRecommendationsByGenre(genre) {
    // Replace this with your recommendation logic
    const recommendations = {
        "action": [
            { name: "Iron Man", poster: "images/action/ironman.jpg"},
            { name: "Gajini", poster: "images/action/ghajini.jpg" },
            { name: "Doctor Strange : Multiverse of Madness", poster: "images/action/doctorstrange.jpg"},
            { name: "Dracula Untold", poster: "images/action/dracula.jpg" },
            { name: "Bloodlands", poster: "images/action/bloodlands.jpg" }
        ],
        "comedy": [
            { name: "God Tussi Great Ho", poster: "images/comedy/godtussigreatho.jpg" },
            { name: "De Dana Dan", poster: "images/comedy/dedanadan.jpg" },
            { name: "Golmaal: Fun Unlimited", poster: "images/comedy/GolmaalfunUnlimited.jpg" },
            { name: "Hera Pheri", poster: "images/comedy/herapheri.jpg" },
            { name: "Jab We Met", poster: "images/comedy/jabwemet.jpg" }
        ],
        "drama": [
            { name: "Yeh Jawaani Hai Deewali", poster: "images/YDHD.jpg" },
            { name: "Channai Express", poster: "images/drama/channaiexpress.jpg" },
            { name: "Dridhyam", poster: "images/drama/dridhyam.jpg" },
            { name: "Hamari Adhuri Kahani", poster: "images/drama/hamariadhurikahani.jpg" },
            { name: "Phatta Poster Nikla Hero", poster: "images/drama/phattaposterniklahero.jpg" }
        ],
        "horror": [
            { name: "Bhoot", poster: "images/horror/bhoot.jpg" },
            { name: "Conjuring: The Devil Made Me Do It", poster: "images/horror/conjuringthedevilmademedoit.jpg" },
            { name: "The Other Side Of The Door", poster: "images/horror/theothersideofthedoor.jpg" },
            { name: "The Conjuring: 2", poster: "images/horror/theconjuring2.jpg" },
            { name: "The Conjuring", poster: "images/horror/theconjuring.jpg" }
        ],
        "romance": [
            { name: "Love Aaj Kal", poster: "images/romance/loveaajkal.jpg" },
            { name: "La La Land", poster: "images/romance/lalaland.jpg" },
            { name: "Jab Tak Hai Jaan", poster: "images/romance/jabtakhaijaan.jpg" },
            { name: "Jaane Tu Ya Jaane Na", poster: "images/romance/jaanetuyajaanena.jpg" },
            { name: "Dilwale", poster: "images/romance/dilwale.jpg" }
        ]
    };
    return recommendations[genre.toLowerCase()] || [];
}

// Function to display recommended movies
function displayRecommendedMovies(recommendations) {
    const recommendedMoviesDiv = document.getElementById("recommendedMovies");
    recommendedMoviesDiv.innerHTML = ""; // Clear previous recommendations

    if (recommendations.length === 0) {
        recommendedMoviesDiv.innerHTML = "<p>No recommendations found for the selected genre.</p>";
    } else {
        recommendations.forEach(movie => {
            const movieCardDiv = document.createElement("div");
            movieCardDiv.className = "movie-cards";

            const imageDiv = document.createElement("div");
            imageDiv.className = "movies-cards-image";

            const img = document.createElement("img");
            img.src = movie.poster;
            img.alt = movie.name;
            imageDiv.appendChild(img);

            const titleDiv = document.createElement("div");
            titleDiv.className = "movies-cards-title";
            const title = document.createElement("h3");
            title.textContent = movie.name;
            titleDiv.appendChild(title);

            movieCardDiv.appendChild(imageDiv);
            movieCardDiv.appendChild(titleDiv);

            recommendedMoviesDiv.appendChild(movieCardDiv);
        });
    }
}
// Event listener for search input
document.getElementById("searchInput").addEventListener("input", function() {
    const inputGenre = this.value.trim().toLowerCase();
    const recommendations = getRecommendationsByGenre(inputGenre);
    displayRecommendedMovies(recommendations);
});

// Event listener for navbar links
document.querySelectorAll(".navbar-inside-div a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const genre = link.textContent;
        const recommendations = getRecommendationsByGenre(genre);
        displayRecommendedMovies(recommendations);
    });
});
