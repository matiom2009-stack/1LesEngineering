const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const recipes = document.querySelectorAll(".recept");
const noResults = document.getElementById("noResults");

const darkModeButton =
document.getElementById("darkModeButton");

const titleButton =
document.getElementById("titleButton");

const websiteTitle =
document.getElementById("websiteTitle");

// ========================================
// RECEPTEN FILTEREN
// ========================================

function filterRecipes() {

const searchText =
    searchInput.value.toLowerCase();

const selectedCategory =
    categoryFilter.value;

let visibleRecipes = 0;


recipes.forEach(function(recipe) {

    const title =
        recipe
            .querySelector("h3")
            .textContent
            .toLowerCase();

    const content =
        recipe.textContent.toLowerCase();

    const category =
        recipe.dataset.category;


    const matchesSearch =
        title.includes(searchText) ||
        content.includes(searchText);

    const matchesCategory =
        selectedCategory === "alle" ||
        category === selectedCategory;


    if (matchesSearch && matchesCategory) {

        recipe.style.display = "block";

        visibleRecipes++;

    } else {

        recipe.style.display = "none";

    }

});


if (visibleRecipes === 0) {

    noResults.style.display = "block";

} else {

    noResults.style.display = "none";

}


}

searchInput.addEventListener(
"input",
filterRecipes
);

categoryFilter.addEventListener(
"change",
filterRecipes
);

// ========================================
// DARK MODE
// ========================================

darkModeButton.addEventListener(
"click",
function() {

    document.body.classList.toggle(
        "dark-mode"
    );


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        darkModeButton.textContent =
            "☀️ Lichte modus";

    } else {

        darkModeButton.textContent =
            "🌙 Donkere modus";

    }

}


);

// ========================================
// CHANGE WEBSITE TITLE
// ========================================

let titleChanged = false;

titleButton.addEventListener(
"click",
function() {

    if (!titleChanged) {

        // Change title on the page
        websiteTitle.textContent =
            "🍦 Burrito 🍨";

        // Change browser tab title
        document.title =
            "Burrito";

        // Change button text
        titleButton.textContent =
            "↩️ RESTORE ORIGINAL TITLE";

        titleChanged = true;

    } else {

        // Restore title on the page
        websiteTitle.textContent =
            "🍦 Heerlijke IJsrecepten 🍨";

        // Restore browser tab title
        document.title =
            "Heerlijke IJsrecepten";

        // Restore button text
        titleButton.textContent =
            "🔥 CHANGE WEBSITE TITLE 🔥";

        titleChanged = false;

    }

}


);