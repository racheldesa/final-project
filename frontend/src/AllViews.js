import React, { useState, useEffect } from "react";

export function AllViews() {
    const [homeView, setHomeView] = useState(true);
    const [allCoursesView, setAllCoursesView] = useState(false);
    const [gradesView, setGradesView] = useState(false);

    const setHome = () => {
        homeView === false ? setHomeView(true) : setHomeView(false);
    }

    const setCourses = () => {
        allCoursesView === false ? setAllCoursesView(true) : setAllCoursesView(false);
    }

    const setGrades = () => {
        gradesView === false ? setGradesView(true) : setGradesView(false);
    }

    function Home() {
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

    function Grades() {
        return (
            <div> 
                <h1>This is the grades viewing page.</h1>
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