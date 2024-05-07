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

    return (
        <div>
            {viewer===0 && <GetID />}
        </div>
    );
}
export default Grades;