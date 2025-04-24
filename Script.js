const yesButton = document.getElementById('yesButton');
const modal = document.getElementById('myModal');
const body = document.body;

yesButton.addEventListener('click', () => {
  modal.style.display = "block";
  createBalloons(70); // تغيير العدد إلى 70
  createHearts(45); // يمكنك زيادة القلوب أيضًا إذا أردت
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function createBalloons(count) {
  for (let i = 0; i < count; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      
      // تحديد موقع البالون في مناطق مختلفة من الشاشة
      const positionX = Math.random() * 100;
      const positionY = Math.random() * 50 + 20; // توزيع عمودي أفضل
      
      balloon.style.left = positionX + 'vw';
      balloon.style.bottom = positionY + 'vh';
      
      // أحجام مختلفة للبالونات
      const size = Math.random() * 40 + 40; // بين 40 و80 بكسل
      balloon.style.width = size + 'px';
      balloon.style.height = (size * 1.2) + 'px';
      
      // سرعات مختلفة للطيران
      balloon.style.animationDuration = (Math.random() * 4 + 4) + 's';
      
      // تأخير مختلف لكل بالون
      balloon.style.animationDelay = (Math.random() * 2) + 's';
      
      // تدوير البالونات بشكل عشوائي
      balloon.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      document.body.appendChild(balloon);
      
      // إزالة البالون بعد انتهاء الحركة
      setTimeout(() => {
          balloon.remove();
      }, 6000);
  }
}

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-20px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 2) + 's';
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}