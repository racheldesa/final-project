function AllCourses() {
    fetch('http://localhost:4000/catalog')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            generateForm(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function generateForm(data) {
        let mainContainer = document.getElementById("root");
        for (let course of data) {
            console.log(course);
        }
            
    
    } // end generateForm

    return (
        <div>
            <h2>All Courses</h2>
            <div>
                <form>

                </form>
            </div>
        </div>
    );
}
export default AllCourses;