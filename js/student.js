fetch('student.json')
  .then(response => response.json())
  .then(data => {
    const studentDetails = document.getElementById('staff-details');
    let output = '';
    data.forEach(staff => {
      output += (`
          <div class="card">
            <a href="./studentDetails.html?id=${staff.id}">
              <img src="./assets/img/frame.png" class="card-img-bottom" alt="frame">
              <div class="card-body">
                <img src="${staff.image}" class="card-img-top"  alt="${staff.name}">
                <div class="card-title">${staff.name}</div>
              </div>
            </a>
          </div>
      `);
    });
    studentDetails.innerHTML = output;
  })
  .catch(error => console.error(error));