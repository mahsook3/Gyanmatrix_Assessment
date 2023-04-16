fetch('student.json')
  .then(response => response.json())
  .then(data => {
    const staffDetails = document.getElementById('staff-details');
    let output = '';
    data.forEach(staff => {
      output += (`
          <div class="card">
            <img src="./assets/img/frame.png" class="card-img-bottom" alt="frame">
            <div class="card-body">
            <img src="${staff.image}" class="card-img-top"  alt="${staff.name}">
              <div class="card-title">${staff.name}</div>
            </div>
          </div>
      `);
    });
    staffDetails.innerHTML = output;
  })
  .catch(error => console.error(error));