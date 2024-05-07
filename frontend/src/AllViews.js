import React, { useState, useEffect } from "react";
import Grades from "./Grades";

export function AllViews() {
    const [homeView, setHomeView] = useState(true);
    const [allCoursesView, setAllCoursesView] = useState(false);
    const [gradesView, setGradesView] = useState(false);

    const homePageBtn = document.getElementById("homepageBtn");
    const coursesPageBtn = document.getElementById("coursespageBtn");
    const gradesPageBtn = document.getElementById("gradespageBtn");
    const logo = document.getElementById("pageLogo");

    homePageBtn.addEventListener("click", function () {
        setHomeView(true);
        setAllCoursesView(false);
        setGradesView(false);
    });
    coursesPageBtn.addEventListener("click", function () {
        setHomeView(false);
        setAllCoursesView(true);
        setGradesView(false);
    });
    gradesPageBtn.addEventListener("click", function () {
        setHomeView(false);
        setAllCoursesView(false);
        setGradesView(true);
    });
    logo.addEventListener("click", function () {
        setHomeView(true);
        setAllCoursesView(false);
        setGradesView(false);
    });

    function Home() {
        fetch("http://localhost:4000/catalog")
            .then(response => response.json())
            .then(catalog => loadCourses(catalog));

        function loadCourses(catalog) {
            var mainContainer = document.getElementById("main-container");
            // for (let course of catalog) {
            //     console.log(course);
            // }
            for (let i=0; i<catalog.length; i++) {
                console.log(`${catalog[i].title}`);
                let AddCourseCard = document.createElement("div");
                AddCourseCard.classList.add("row");

                AddCourseCard.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="card-text">${catalog[i].title}</p>
                        </div>
                    </div>`;

                // mainContainer.appendChild(AddCourseCard);
            }
            
            console.log(catalog.length);
        }
        return (
            <div>
                <h1>This is the homepage.</h1>
            </div>
        )
    }

    function AllCourses() {
        return (
            <div>
                <h1>This is the course selection page.</h1>
            </div>
        )
    }

    // function Grades() {
    //     return (
    //         <div> 
    //             <h1>This is the grades viewing page.</h1>
    //         </div>
    //     )
    // }

    return (
        <div>
            {homeView && <Home />}
            {allCoursesView && <AllCourses />}
            {gradesView && <Grades />}
        </div>
    );
}
export default AllViews;