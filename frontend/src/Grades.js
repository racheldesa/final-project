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
            .then(grades => loadCourse1(grades));

        function loadCourse1(grades) {
            var mainContainer = document.getElementById("main-container");
            console.log(grades);    // test - log response to console
        }
        return (
            <div>
                <h1>Grades for Student ID: {dataF.stuID}</h1>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 1
                        </button>
                    </div> <br/>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 2
                        </button>
                    </div> <br/>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Course 3
                        </button>
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