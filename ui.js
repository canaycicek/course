function UI() {
    this.form = document.getElementById("new-course")
    this.list = document.getElementById("course-list")
}

UI.prototype.addCourseToList = function (course) {
    var html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>
        </tr>
    `;

    this.list.innerHTML += html;
}

UI.prototype.clearControls = function(){
    const title = document.getElementById("title").value = ""
    const instructor = document.getElementById("instructor").value = ""
    const image = document.getElementById("image").value = ""
}