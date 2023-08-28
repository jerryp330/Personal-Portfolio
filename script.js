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