import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCourseFavorites } from "./useCourseFavorites";

function AllCourses() {
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, addToFavorites] = useCourseFavorites([]);

    const handleClick = (courseID) => {
        addToFavorites(courseID);
        console.log("Course ID added.")
    }
    useEffect(() => {
        const fetchData =async () => {
            setIsLoading(true);
            fetch("http://localhost:4000/catalog")
            .then(response => response.json())
            .then(catalog => loadCourses(catalog));
            setIsLoading(false);
        }
        fetchData();

        return () => {
        };
    }, []);

    
    function loadCourses(catalog) {
        var mainContainer = document.getElementById("main-container");
        for (let course of catalog) {
            console.log(course);
        }
        for (let i=0; i<catalog.length; i++) {
            console.log(`${catalog[i].title}`);
            let card = "course" + i.toString();
            let AddCourseCard = document.createElement("div");
            AddCourseCard.classList.add("course-container");

            AddCourseCard.innerHTML = `
                <div id=${card} class="card shadow-sm">
                    <div class="card-body">
                        <h2 class="card-text">${catalog[i].title}</h2>
                        <p class="card-text">Professor: ${catalog[i].professor}</p>
                        <p class="card-text">Credits: ${catalog[i].credits}</p>
                        <p class="card-text">${catalog[i]. courseTag} | ${catalog[i]. sessions}</p>
                        <button type="button" onClick={${handleClick(catalog[i].id)}}>Favorite</button>
                    </div>
                </div>`;

            mainContainer.appendChild(AddCourseCard);
        }
        
        console.log(catalog.length);
    }
    return (
        <div>
            <h1>All Courses</h1>
            <hr></hr>
            <div id="main-container"></div>
        </div>
    )
}
export default AllCourses;