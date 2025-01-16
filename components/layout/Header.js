
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="">
        <div class="sidebar" id="sidebar">
          <div class="d-flex justify-content-between align-items-center px-3 pt-4">
            <img src="../assets/image/logo.svg" id="logo" width="174px" class="m-auto m-md-0" />
            <button id="toggleSidebar" class="btn-nav">
              <i class="bi bi-list"></i>
            </button>
          </div>
          <hr style="color: #ffffff" class="mt-4" />
          <div class="mx-3" style="margin-top: 35px">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-house-door me-1"></i> <span class="nav-label">Dashboard</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/order.html"
                  ><i class="bi bi-cart me-1"></i> <span class="nav-label">Orders</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pages/customers.html"
                  ><i class="bi bi-people me-1"></i> <span class="nav-label">Customers</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-palette me-1"></i> <span class="nav-label">Fabrics</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-tags me-1"></i> <span class="nav-label">Manufacturers</span></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar" id="sidebar1" style="display: none">
          <div class="mx-3" style="margin-top: 35px">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-house-door me-1"></i> Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/order.html"><i class="bi bi-cart me-1"></i> Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/pages/customers.html"><i class="bi bi-people me-1"></i> Customers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-palette me-1"></i> Fabrics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-tags me-1"></i> Manufacturers</a>
              </li>
              <hr class="text-white" />
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-gear me-1"></i> Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-question-circle me-1"></i> Supports</a>
              </li>
              <hr class="text-white" />
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-box-arrow-right me-1"></i> Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <nav class="navbar top-right-nav">
          <div class="mx-3 w-100">
            <div class="d-flex justify-content-between align-items-center" id="navbar1">
              <div class="input-group" style="height: 40px; margin: 12px 0; width: 290px">
                <button class="btn border border-end-0" type="button">
                  <i class="bi bi-search text-muted"></i>
                </button>
                <input type="text" class="form-control border border-start-0" placeholder="Search..." />
              </div>
              <div class="d-flex me-3">
                <div class="pe-4 border-end">
                  <i class="bi bi-gear fs-4 me-1"></i>
                  <i class="bi bi-patch-question fs-4"></i>
                </div>
                <div class="ms-4 d-flex align-items-center">
                  <img src="../assets/image/banner-login.png" class="rounded-circle" width="35px" height="35px" />
                  <div class="ms-3">
                    <div class="fw-semibold" style="font-size: 14px">Tra Nguyen</div>
                    <div class="text-muted" style="font-size: 12px">Tra Nguyen</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-none justify-content-between align-items-center py-2" id="navbar2">
              <i class="bi bi-list fs-1" id="mobileMenuBtn"></i>
              <img src="../assets/image/logo-auth-mobile.svg" width="25px" />
              <i class="bi bi-search fs-3"></i>
            </div>
          </div>
        </nav>
      </div>
      `;
    this.handleActiveMenu();
  }
  handleActiveMenu() {
    // Lấy current path
    const currentPath = window.location.pathname;

    // Xóa class active từ tất cả nav links
    const allNavLinks = this.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
      link.classList.remove('active');

      // So sánh href với current path
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });

    // Xử lý click event
    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Xóa active từ tất cả links
        allNavLinks.forEach(l => l.classList.remove('active'));
        // Thêm active vào link được click
        e.target.closest('.nav-link').classList.add('active');
      });
    });
  }
}

customElements.define('header-component', HeaderComponent);

// Tương tự cho footer và sidebar