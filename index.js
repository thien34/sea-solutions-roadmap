// page: customer - order
function updateSidebarForMobileView() {
  var logo = document.getElementById('logo');
  if (window.innerWidth <= 1280) {
    logo.src = '../assets/image/logo-auth-mobile.svg';
  }
  else {
    logo.src = '../assets/image/logo.svg';
  }
}

window.addEventListener('load', updateSidebarForMobileView);
window.addEventListener('resize', updateSidebarForMobileView);

document.getElementById('toggleSidebar').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var logo = document.getElementById('logo');
  var main = document.getElementById('main');
  var topNav = document.querySelector('.top-right-nav');
  var labels = document.querySelectorAll('.nav-label');
  sidebar.classList.toggle('collapsed');

  var toggleSidebar = document.getElementById('toggleSidebar');

  if (sidebar.classList.contains('collapsed')) {
    logo.src = '../assets/image/logo-auth-mobile.svg';
    logo.style.width = '25px';
    main.style.marginLeft = '77px';
    topNav.style.marginLeft = '77px';
    topNav.style.width = `calc(100% - 77px)`;
    labels.forEach(function (label) {
      label.style.display = 'none';
    });

    toggleSidebar.style.position = 'absolute';
    toggleSidebar.style.top = '67px';
    toggleSidebar.style.left = '22px';
  } else {
    logo.src = '../assets/image/logo.svg';
    logo.style.width = '174px';
    main.style.marginLeft = '280px';
    topNav.style.marginLeft = '280px';
    topNav.style.width = `calc(100% - 280px)`;
    labels.forEach(function (label) {
      label.style.display = 'inline';
    });

    toggleSidebar.style.removeProperty('position');
  }
});

// Page: index

// event click login button
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const validEmail = 'user@gmail.com';
  const validPassword = '123';

  if (email === validEmail && password === validPassword) {
    window.location.href = '/pages/customers.html';
  } else {
    document.getElementById('warning').style.display = 'block';
  }
});

// event click show password
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.classList.remove('bi-eye');
    toggleIcon.classList.add('bi-eye-slash');
  } else {
    passwordField.type = 'password';
    toggleIcon.classList.remove('bi-eye-slash');
    toggleIcon.classList.add('bi-eye');
  }
});

// event click language button
function toggleOptions(id) {
  const options = document.getElementById(id);
  const allOptions = document.querySelectorAll('.options');

  // Close all other option lists
  allOptions.forEach((opt) => {
    if (opt.id !== id) {
      opt.style.display = 'none';
    }
  });

  // Toggle current options
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option, selectId) {
  const select = document.querySelector(`#${selectId}`);
  const selectBox = select.previousElementSibling;
  const content = selectBox.querySelector('.select-content');
  content.innerHTML =
    option.querySelector('img').outerHTML + option.querySelector('span').textContent.substring(0, 3);
  select.style.display = 'none';
}

// Close options when clicking outside
document.addEventListener('click', function (e) {
  const selects = document.querySelectorAll('.custom-select');
  selects.forEach((select) => {
    if (!select.contains(e.target)) {
      select.querySelector('.options').style.display = 'none';
    }
  });
});