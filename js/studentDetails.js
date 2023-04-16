const urlParams = new URLSearchParams(window.location.search);
const staffId = urlParams.get('id');
console.log(staffId);
if (!staffId) {
  window.location.href = 'student.html';
}

fetch('student.json')
  .then(response => response.json())
  .then(data => {
    const staff = data.find(item => item.id === staffId);

    if (!staff) {
      // If staff with given id is not found, redirect to the main page
      window.location.href = './student.html';
    }

    const staffName = document.getElementById('staff-name');
    const staffImage = document.getElementById('staff-image');
    const staffSpecies=document.getElementById("staff-species");
    const staffGender=document.getElementById('staff-gender');
    const staffHouse = document.getElementById('staff-house');
    const staffYearOfBirth = document.getElementById('staff-year-of-birth');
    const staffAncestry=document.getElementById('staff-ancestry');
    const staffEye=document.getElementById('staff-eye');
    const staffHair=document.getElementById('staff-hair');
    const staffWand = document.getElementById('staff-wand');
    const staffPatronus = document.getElementById('staff-patronus');

    const details=document.getElementById('staff-details');
    const image=document.getElementById('image');
    if(staff.house==='Slytherin') {
      details.style.background='#148341';
      details.style.boxShadow='0px 2px 62px 18px #B7EDDA, inset 0px 0px 36px 12px rgba(0,0,0,1)';
      document.body.style.backgroundColor='#F5F5F5';
      image.src='./assets/img/house/green.png';
    }
    else if(staff.house==='Hufflepuff'){
      details.style.background='#E8AF17';
      details.style.boxShadow='0px 2px 62px 18px #FFE29B, inset 0px 0px 36px 12px rgba(0,0,0,1)';
      document.body.style.backgroundColor='#FFFFDF';
      image.src='./assets/img/house/yellow.png';
    }
    else if(staff.house==='Ravenclaw'){
      details.style.background='#3DB2D3';
      details.style.boxShadow='0px 2px 62px 18px #AAEDFF, inset 0px 0px 36px 12px rgba(0,0,0,1)';
      document.body.style.backgroundColor='#F5F5F5';
      image.src='./assets/img/house/blue.png';
    }

    staffName.innerText = staff.name;
    staffImage.src = staff.image;
    staffSpecies.innerText=`Species : ${staff.species}`;
    staffGender.innerText=`Gender : ${staff.gender}`;
    staffHouse.innerText = `House: ${staff.house}`;
    staffYearOfBirth.innerText = `Year of birth: ${staff.yearOfBirth}`;
    staffAncestry.innerText=`Ancestry : ${staff.ancestry}`;
    staffEye.innerText=`Eye Colour : ${staff.eyeColour}`;
    staffHair.innerText=`Hair Colour : ${staff.hairColour}`;
    staffWand.innerText = `Wand: ${staff.wand.wood} with a ${staff.wand.core} core`;
    staffPatronus.innerText = `Patronus: ${staff.patronus}`;
  })
  .catch(error => console.error(error));