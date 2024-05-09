import React, { useState, useEffect } from "react";
import Grades from "./Grades";
import AllCourses from "./AllCourses";
import Home from "./Homepage";
import AdminView from "./AdminView";
import DeveloperInfo from "./DeveloperInfo";

export function AllViews() {
    const [homeView, setHomeView] = useState(true);
    const [allCoursesView, setAllCoursesView] = useState(false);
    const [gradesView, setGradesView] = useState(false);
    const [adminView, setAdminView] = useState(false);
    const [developerView, setDeveloperView] = useState(false);

    const homePageBtn = document.getElementById("homepageBtn");
    const coursesPageBtn = document.getElementById("coursespageBtn");
    const gradesPageBtn = document.getElementById("gradespageBtn");
    const adminPageBtn = document.getElementById("adminpageBtn");
    const developerPageBtn = document.getElementById("developerpageBtn");
    const logo = document.getElementById("pageLogo");


    homePageBtn.addEventListener("click", function () {
        setHomeView(true);
        setAllCoursesView(false);
        setGradesView(false);
        setAdminView(false);
        setDeveloperView(false);
    });
    coursesPageBtn.addEventListener("click", function () {
        setHomeView(false);
        setAllCoursesView(true);
        setGradesView(false);
        setAdminView(false);
        setDeveloperView(false);
    });
    gradesPageBtn.addEventListener("click", function () {
        setHomeView(false);
        setAllCoursesView(false);
        setGradesView(true);
        setAdminView(false);
        setDeveloperView(false);
    });
    logo.addEventListener("click", function () {
        setHomeView(true);
        setAllCoursesView(false);
        setGradesView(false);
        setAdminView(false);
        setDeveloperView(false);
    });
    adminPageBtn.addEventListener("click", function () {
        setHomeView(false);
        setAllCoursesView(false);
        setGradesView(false);
        setAdminView(true);
        setDeveloperView(false);
    });
    developerPageBtn.addEventListener("click", function(){
        setHomeView(false);
        setAllCoursesView(false);
        setGradesView(false);
        setAdminView(false);
        setDeveloperView(true);
    });

    return (
        <div>
            {homeView && <Home />}
            {allCoursesView && <AllCourses />}
            {gradesView && <Grades />}
            {adminView && <AdminView />}
            {developerView && <DeveloperInfo />}
        </div>
    );
}
export default AllViews;