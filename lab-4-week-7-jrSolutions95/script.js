window.onload = () => {
    let navBar = document.createElement("nav");
    navBar.style.width = "100vw";
    navBar.style.background = "#6155B4";
    navBar.style.height = "40px";
    navBar.style.color = "white";

    let heading = document.createElement("h1");
    heading.textContent = "Lars Haralds Website";
    heading.style.fontSize = "20px";
    navBar.appendChild(heading);

    document.body.insertBefore(navBar, document.body.firstChild);

    let mainElement = document.querySelector("main");
    mainElement.style.padding = "20px";

    let ageLabels = document.querySelectorAll("#age-list .age-label");
    ageLabels[1].textContent = "18-60";
    ageLabels[2].textContent = "more than 60";

    let searchBar = document.getElementById("search");/* remember no use for # here because of search by ID */
    searchBar.style.width = "200px";
    searchBar.style.borderRadius = "25px";
    searchBar.style.height = "25px";
    searchBar.style.padding = "10px";
    searchBar.style.border = "0.5px solid lightgrey";

    let viewvisitorsButton = document.querySelector("input[type='submit']");
    viewvisitorsButton.style.backgroundColor = "#FDCE4B";
    viewvisitorsButton.style.color = "#61554B";
    viewvisitorsButton.style.fontWeight = "bold";
    viewvisitorsButton.style.border = "none";
    viewvisitorsButton.style.padding = "8px 10px";
};
