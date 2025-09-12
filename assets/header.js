window.addEventListener("DOMContentLoaded", () => {
  let prevScrollPos = window.scrollY;
  const headerNavbar = document.querySelector(".header__sticky--navbar");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    const firstElementPos = document
      .querySelector(".header__sticky--reference")
      .getBoundingClientRect().top;
    if (firstElementPos > 0) return;
    if (prevScrollPos > currentScrollPos) {   
      if (headerNavbar) headerNavbar.classList.remove("hidden__sticky");
    } else {
      if (headerNavbar) headerNavbar.classList.add("hidden__sticky");
    }

    prevScrollPos = currentScrollPos;
  });

});
