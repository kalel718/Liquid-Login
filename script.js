// ============================================= //
//              🔐 LOGIN HANDLER                //
// ============================================= //
function handleLogin(event) {
  event.preventDefault();  // 🚫 Prevent form from actually submitting

  // 📧 Get user input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 🎬 Add loading animation to button
  const button = event.target.querySelector('.login-button');
  const originalText = button.textContent;
  button.textContent = 'Signing In...';  // 🔄 Loading text
  button.style.background = 'linear-gradient(45deg, #06ffa5, #3a86ff)';  // 🟢 Green loading color

  // ⏰ Simulate login process (2 second delay)
  setTimeout(() => {
    // 🚨 Show demo alert (replace with real login logic)
    alert(`Login attempted with:\nEmail: ${email}\nPassword: ${password.replace(/./g, '*')}`);

    // 🔄 Reset button to original state
    button.textContent = originalText;
    button.style.background = 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)';
  }, 2000);
}

// ============================================= //
//           🖱️ MOUSE INTERACTION               //
// ============================================= //
// 🎯 3D tilt effect based on mouse position
document.addEventListener('mousemove', (e) => {
  const cursor = { x: e.clientX, y: e.clientY };  // 🖱️ Mouse coordinates
  const loginContainer = document.querySelector('.login-container');

  if (loginContainer) {
    const rect = loginContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;   // 📐 Container center X
    const centerY = rect.top + rect.height / 2;   // 📐 Container center Y

    // 🧮 Calculate tilt angles based on mouse distance from center
    const deltaX = (cursor.x - centerX) / 50;     // 📏 Horizontal tilt
    const deltaY = (cursor.y - centerY) / 50;     // 📏 Vertical tilt

    // 🎭 Apply 3D transform
    loginContainer.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
  }
});

// 🔄 Reset tilt when mouse leaves the page
document.addEventListener('mouseleave', () => {
  const loginContainer = document.querySelector('.login-container');
  if (loginContainer) {
    loginContainer.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  }
});
