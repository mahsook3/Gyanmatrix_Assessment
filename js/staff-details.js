fetch('staff.json')
  .then(response => response.json())
  .then(data => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const staff = data.find(s => s.id == id);
    const staffDetails = document.getElementById('staff-details');
    const output = `
      <div class="staff-details-item">
        <img src="${staff.image}" alt="${staff.name}">
        <h2>${staff.name}</h2>
        <p>${staff.position}</p>
        <p>${staff.email}</p>
        <p>${staff.phone}</p>
      </div>
    `;
    staffDetails.innerHTML = output;
  })
  .catch(error => console.error(error));