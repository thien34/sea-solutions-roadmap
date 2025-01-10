function updateSidebarForMobileView() {
  var logo = document.getElementById('logo');
  var sidebar = document.getElementById('sidebar');
  if (window.innerWidth <= 1280) {
    logo.src = '../assets/image/logo-auth-mobile.svg';
  }
  else {
    logo.src = '../assets/image/logo.svg';
  }

  if (window.innerWidth > 768) {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
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

// Add mobile menu button event listener
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');

  sidebar.classList.toggle('show-mobile');

  if (sidebar.classList.contains('show-mobile')) {
    sidebar.style.display = 'block';
    sidebar.style.zIndex = '1001';
  } else {
  }
});

document.addEventListener('click', function (e) {
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  if (window.innerWidth <= 768 &&
    !sidebar.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)) {
    sidebar.classList.remove('show-mobile');
    sidebar.style.display = 'none';
  }
});