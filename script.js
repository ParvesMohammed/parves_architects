function toggleForm() {
    var form = document.getElementById("floating-form-enquire");
    form.classList.toggle("active");
}

function submitForm1() {
    alert("YOUR ENQUIRE HAS SUBMITTED!");
    form.classList.remove("active");
}

function openForm(title,source) {
    var form = document.getElementById("floating-form");
    var formTitle = document.getElementById("form-title");
    var formImage = document.getElementById("form-image");
    form.classList.add("active");
    formTitle.innerText = title;
    formImage.src = source;
}

function closeForm() {
    var form = document.getElementById("floating-form");
    form.classList.remove("active");
}

function submitForm() {
    alert("YOUR ENQUIRE HAS SUBMITTED!")
    closeForm();
}