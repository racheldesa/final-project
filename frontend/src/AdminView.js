import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * Admin (teacher) view. Provides service to update grades
 * and add students.
 * @returns 
 */
function AdminView() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataF,setDataF] = useState({});
    const [viewer,setViewer] = useState(0);

    function Login() {
        const onSubmit = data => {
            setDataF(data);
            setViewer(1);
        }
        return (
            <div>
                <h1>Admin Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("adminID", { required: true })} placeholder="Admin ID" />
                    {errors.adminID && <p>Admin ID is required.</p>}
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }   // end Login()

    return (
        <div>
            {viewer===0 && <Login />}
        </div>
    );  // end AdminView
}
export default AdminView;