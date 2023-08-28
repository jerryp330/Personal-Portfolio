var langIcons = document.querySelectorAll("#tech-stack img");
console.log(langIcons);

for (var i = 0; i < langIcons.length; i++) {
    langIcons[i].addEventListener("onmouseover", showText);
}

function showText(event) {
    var tooltipText = event.target.alt; // Get the alt attribute as tooltip text
    var tooltip = document.createElement("div");
    tooltip.className = "tooltip"; // Apply tooltip class to the created div
    tooltip.textContent = tooltipText;

    // Calculate the position of the tooltip
    var iconRect = event.target.getBoundingClientRect();
    tooltip.style.left = iconRect.left + "px";
    tooltip.style.top = iconRect.top - tooltip.offsetHeight - 5 + "px"; // Position above the icon

    document.body.appendChild(tooltip); // Append the tooltip to the body

    event.target.addEventListener("mouseout", function() {
        document.body.removeChild(tooltip); // Remove the tooltip when mouse leaves the icon
    });
}

// Creating a github element link. I could turn this into a function, and call it for each project when i add more.

/*
var githubDiv = document.createElement("div");
githubDiv.className = "giticon"; 

var textSpan = document.createElement("span");
textSpan.innerHTML = "<strong>Code </strong>";
githubDiv.appendChild(textSpan);

var githubIcon = document.createElement("img");
githubIcon.className = "git-image"
githubIcon.src = "images/github-icon.png"; 
githubIcon.alt = "GitHub Icon";
githubDiv.appendChild(githubIcon);

var githubLink = document.createElement("a");
githubLink.href = "https://github.com/jerryp330/CompanyStocker-JRACI";
githubDiv.appendChild(githubLink);

var projects = document.querySelectorAll(".project");

// appending it to project1
var project1 = document.getElementById("project1");
document.body.appendChild(githubDiv)
