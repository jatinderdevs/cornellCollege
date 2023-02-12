const navbarcstmMenu = document.getElementById("navbarcstm");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide navbarcstm Function
const toggleMenu = () => {
  navbarcstmMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
  navbarcstmMenu
    .querySelector(".menu-dropdown.active .submenu")
    .removeAttribute("style");
  navbarcstmMenu
    .querySelector(".menu-dropdown.active")
    .classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    const menuDropdown = e.target.parentElement;

    // If Dropdown is Expanded, then Collapse It
    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse Existing Expanded Dropdown
      if (navbarcstmMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      }

      // Expanded the New Dropdown
      menuDropdown.classList.add("active");
      const subMenu = menuDropdown.querySelector(".submenu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
};

// Fixed Resize Window Function
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarcstmMenu.classList.contains("active")) {
      toggleMenu();
    }
    if (navbarcstmMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarcstmMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);
