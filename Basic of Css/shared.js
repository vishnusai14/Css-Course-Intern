const showModal = () => {
  document.getElementById("backdrop").style.display = "block";
  document.getElementById("modal").classList.add("open");
};

const backdropClick = () => {
  document.getElementById("backdrop").style.display = "none";
  if (document.getElementById("modal") !== null) {
    document.getElementById("modal").classList.remove("open");
  }

  document.getElementById("mobile-nav").classList.remove("open-mobile-nav");
};

const toggleMobileNav = () => {
  document.getElementById("mobile-nav").classList.add("open-mobile-nav");
  document.getElementById("backdrop").style.display = "block";
};
