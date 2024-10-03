/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn =
    document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);

/**
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lastActiveTab] =
    document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /** {NodeElement} */ $tabContent = document.querySelector(
        `[data-tab-content="${item.dataset.tabBtn}"]`
      );
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

/**
 * ModalBox
 */
function openModal(imgSrc, title, category, description, link, event) {
  event.preventDefault();
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalImg").src = "../assets/images/" + imgSrc;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalCategory").innerText = category;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalLink").href = link;
}

/**
 * ModalBox Certificate
 */
function openModalCertificate(imgSrc, title, category, description, event) {
  event.preventDefault();
  document.getElementById("myModalCertificate").style.display = "block";
  document.getElementById("modalImgCertificate").src =
    "../assets/images/sertifikat/" + imgSrc;
  document.getElementById("modalTitleCertificate").innerText = title;
  document.getElementById("modalCategoryCertificate").innerText = category;
  document.getElementById("modalDescriptionCertificate").innerText =
    description;
}

// Close the modalbox

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function closeModalCertificate() {
  document.getElementById("myModalCertificate").style.display = "none";
}

// Get the modal elements
var modal = document.getElementById("myModal");
var modalCertificate = document.getElementById("myModalCertificate");
var modalContent = document.querySelector("#myModal .modal-content");
var modalCertificateContent = document.querySelector(
  "#myModalCertificate .modal-content"
);

// Function to close the modal when clicking outside
function closeModalOutside(event) {
  if (event.target == modal && !modalContent.contains(event.target)) {
    modal.style.display = "none";
  }
  if (
    event.target == modalCertificate &&
    !modalCertificateContent.contains(event.target)
  ) {
    modalCertificate.style.display = "none";
  }
}

// Add event listener to the body element
document.body.addEventListener("click", closeModalOutside);
