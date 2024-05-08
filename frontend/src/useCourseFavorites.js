import { useState } from "react";

export function useCourseFavorites(initialState){
    const [courseFavorites, setCourseFavorites] = useState([]);

    const addToFavorites = (courseID) => {
        setCourseFavorites([...courseFavorites, courseID]);
    }

    const removeFromFavorites = (courseID) => {
        let hardCopy = [...courseFavorites];
        hardCopy = hardCopy.filter((courseItem) => courseItem.id != courseID.id);
        setCourseFavorites(hardCopy);
    }
    return[courseFavorites, addToFavorites, removeFromFavorites];
}