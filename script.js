
  document.addEventListener('DOMContentLoaded', function () {
    const backgroundInput = document.getElementById('backgroundInput');
    const backgroundDiv = document.querySelector('.background');
  
    backgroundInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = function (e) {
        backgroundDiv.style.backgroundImage = `url('${e.target.result}')`;
      };
  
      reader.readAsDataURL(file);
    });
  
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
      star.addEventListener('click', function () {
        star.style.animation = 'none';
        star.style.width = '20px';
        star.style.height = '20px';
        const button = document.createElement('button');
        button.innerText = 'Question';
        button.addEventListener('click', function () {
          window.location.href = 'star.html'; // Replace 'star.html' with the desired subpage URL
        });
        star.appendChild(button);
      });
    });
  });
  