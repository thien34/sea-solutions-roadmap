document.getElementById('toggleSidebar').addEventListener('click', function () {
  var sidebar = document.getElementById('sidebar');
  var logo = document.getElementById('logo');
  var main = document.getElementById('main');
  var topNav = document.querySelector('.top-right-nav');
  var labels = document.querySelectorAll('.nav-label');
  sidebar.classList.toggle('collapsed');
  if (sidebar.classList.contains('collapsed')) {
    logo.src = '../assets/image/logo-auth-mobile.svg';
    logo.style.width = '25px';
    main.style.marginLeft = '77px';
    topNav.style.marginLeft = '77px';
    topNav.style.width = `calc(100vw - 77px)`;
    labels.forEach(function (label) {
      label.style.display = 'none';
    });
  } else {
    logo.src = '../assets/image/logo.svg';
    logo.style.width = '174px';
    main.style.marginLeft = '280px';
    topNav.style.marginLeft = '280px';
    topNav.style.width = `calc(100vw - 280px)`;
    labels.forEach(function (label) {
      label.style.display = 'inline';
    });
  }
});