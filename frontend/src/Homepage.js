import React, { useState, useEffect } from "react";
import AllViews from "./AllViews";
import { useCourseFavorites } from "./useCourseFavorites";

function Home() {
    const [favorites, removeFromFavorites] = useCourseFavorites([]);
    for (let i = 0; i < favorites.length; i++) {
        console.log(favorites);
        fetch(`http://localhost:4000/catalog/${favorites[i]}`)
            .then(response => response.json())
            .then(catalog => loadCourse(catalog));
        function loadCourse(catalog) {
            var mainContainer = document.getElementById("main-container");
            let AddCourseCard = document.createElement("div");
            let card = "course" + i.toString();
            AddCourseCard.classList.add("course-container");
            AddCourseCard.innerHTML = `
            <div id=${card} class="card shadow-sm">
                <div class="card-body">
                    <h2 class="card-text">${catalog[i].title}</h2>
                    <p class="card-text">Professor: ${catalog[i].professor}</p>
                    <p class="card-text">Credits: ${catalog[i].credits}</p>
                    <p class="card-text">${catalog[i].courseTag} | ${catalog[i].sessions}</p>
                    <button type="button">Remove Favorite</button>
                </div>
            </div>`;

            mainContainer.appendChild(AddCourseCard);
        }

    }

    return (
        <div>
            <h1>Course Home</h1>
            <p>Favorited Courses</p>
            <div class="main-container"></div>
        </div>
    )
} 
export default Home;