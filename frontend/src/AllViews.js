import React, { useState, useEffect } from "react";
import Grades from "./Grades";
import AllCourses from "./AllCourses";
import Home from "./Homepage";

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

    return (
        <div>
            {homeView && <Home />}
            {allCoursesView && <AllCourses />}
            {gradesView && <Grades />}
        </div>
    );
}
export default AllViews;