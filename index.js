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
  var sidebarHeader = document.getElementById('sidebarHeader');
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
    sidebarHeader.style.marginLeft = '10px';
    labels.forEach(function (label) {
      label.style.display = 'none';
    });

    toggleSidebar.style.position = 'absolute';
    toggleSidebar.style.top = '67px';
    toggleSidebar.style.left = '25px';
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
  var sidebar1 = document.getElementById('sidebar1');
  sidebar1.style.display = 'block';
  sidebar1.style.zIndex = '1001';
  sidebar1.style.width = '300px';
});

document.addEventListener('click', function (e) {
  const sidebar = document.getElementById('sidebar1');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  if (window.innerWidth <= 768 &&
    !sidebar.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)) {
    sidebar.style.display = 'none';
  }
});