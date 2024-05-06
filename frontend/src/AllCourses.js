import React, { useState } from "react";
import { useForm } from "react-hook-form";




function AllCourses() {
    fetch('http://localhost:4000/catalog')
    .then(response => response.json())
    .then(myCourses => loadCourses(myCourses));
    
    function loadCourses(data) {
        var mainContainer = document.getElementById("main-container");
        let div = document.createElement("div");
        // Read all course options from response
        for (let course of data) {
            div.innerHTML += `
                <input class="form-check-input" type="checkbox" value="" id="${course.title}>"`
        }
    }
    

    return (
        <div>
            <h2>All Courses</h2>
            <div>
                <form>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}
export default AllCourses;