
const closeButton = document.querySelector(".close-button").addEventListener("click", closeSideBar);
const toggleButton = document.querySelector(".toggle-button").addEventListener("click", toggleSideBar);
const sidebar = document.querySelector(".sidebar");


function closeSideBar(){
    sidebar.classList.remove("show-sidebar");
};

function toggleSideBar(){
    sidebar.classList.toggle("show-sidebar");
};
