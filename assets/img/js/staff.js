const studentsContainer = document.querySelector(".students-container");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content");

// Fetch data from JSON file
fetch("students.json")
    .then(response => response.json())
    .then(data => {
        // Loop through each student object
        data.forEach(student => {
            // Create student card element
            const studentCard = document.createElement("div");
            studentCard.classList.add("student-card");

            // Create student image element
            const studentImage = document.createElement("img");
            studentImage.classList.add("student-image");
            studentImage.src = student.image;

            // Create student name element
            const studentName = document.createElement("div");
            studentName.classList.add("student-name");
            studentName.textContent = student.name;

            // Add image and name to student card
            studentCard.appendChild(studentImage);
            studentCard.appendChild(studentName);

            // Add click event listener to student card
            studentCard.addEventListener("click", () => {
                // Create popup image element
                const popupImage = document.createElement("img");
                popupImage.classList.add("popup-image");
                popupImage.src = student.image;

                // Create popup title element
                const popupTitle = document.createElement("div");
                popupTitle.classList.add("popup-title");
                popupTitle.textContent = student.name;

                // Create popup items for each student detail
                const popupItems = [];
                for (const [key, value] of Object.entries(student)) {
                    if (key === "image" || key === "name" || key === "id" || key === "alternate_names" || key === "alternate_actors") {
                        continue;
                    }
                    const popupItem = document.createElement("div");
                    popupItem.classList.add("popup-item");
                    const popupLabel = document.createElement("span");
                    popupLabel.classList.add("popup-label");
                    popupLabel.textContent = `${key}: `;
                    const popupValue = document.createElement("span");
                    popupValue.textContent = JSON.stringify(value);
                    popupItem.appendChild(popupLabel);
                    popupItem.appendChild(popupValue);
                    popupItems.push(popupItem);
                }

                // Clear popup content
                popupContent.innerHTML = "";

                // Add image, title, and items to popup content
                popupContent.appendChild(popupImage);
                popupContent.appendChild(popupTitle);
                popupItems.forEach(popupItem => {
                    popupContent.appendChild(popupItem);
                });

                // Show popup
                popup.classList.add("show-popup");
            });

            // Add student card to students container
            studentsContainer.appendChild(studentCard);
        });
    })
    .catch(error => console.error(error));

// Add click event listener to popup to hide it
popup.addEventListener("click", event => {
    if (event.target === popup || event.target.classList.contains("close-btn")) {
        popup.classList.remove("show-popup");
    }
});