import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Grades() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);

    function GetID() {
        const onSubmit = data => {
            setDataF(data);
            setViewer(1);
            console.log(data);
        }
        return (
            <div>
                <h1>Enter your Student ID:</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("stuID", { required: true })} placeholder="Student ID" />
                    {errors.stuID && <p>Student ID is required.</p>}
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    } // end GetID()

    function DisplayGrades() {
        fetch(`http://localhost:4000/course1/${dataF.stuID}`)
            .then(response => response.json())
            .then(grades => loadGrades(grades));

        function loadGrades(grades) {
            var mainContainer = document.getElementById("main-container");
            console.log(grades[0]);    // test - log response to console
            
            return (
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th>Assignment 1</th>
                            <th>Assignment 2</th>
                            <th>Assignment 3</th>
                            <th>Exam 1</th>
                            <th>Exam 2</th>
                            <th>Final Exam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{grades[0].assignment1}</td>
                    </tbody>
                </table>
            )
            
        }
        return (
            <div>
                <h1>Grades for Student ID: {dataF.stuID}</h1>
                <div class="btn-group">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 1
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="btn-group">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 2
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="btn-group">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 3
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {viewer===0 && <GetID />}
            {viewer===1 && <DisplayGrades />}
        </div>
    );
}
export default Grades;