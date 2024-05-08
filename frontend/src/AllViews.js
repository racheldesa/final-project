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
        return (
            <div>
                <h1>This is the homepage.</h1>
            </div>
        )
    }

    function AllCourses() {
        fetch("http://localhost:4000/catalog")
            .then(response => response.json())
            .then(catalog => loadCourses(catalog));

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
                            <h1 class="card-text">${catalog[i].title}</h1>
                            <p class="card-text">Professor: ${catalog[i].professor}</p>
                            <p class="card-text">Credits: ${catalog[i].credits}</p>
                            <p class="card-text">${catalog[i]. courseTag} | ${catalog[i]. sessions}</p>
                        </div>
                    </div>`;

                mainContainer.appendChild(AddCourseCard);

                // let ccard = document.getElementById(card);
                // cards.push(ccard);
            }
            
            console.log(catalog.length);
        }
        return (
            <div>
                <div id="main-container"></div>
            </div>
        )
    }

    return (
        <div>
            {homeView && <Home />}
            {allCoursesView && <AllCourses />}
            {gradesView && <Grades />}
        </div>
    );
}
export default AllViews;