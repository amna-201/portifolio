const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  navList.classList.toggle('nav-active');
});
function toggleShare() {
  const share = document.querySelector('.share');
  const toggle = document.querySelector('.toggle');
  share.classList.toggle('active');
  toggle.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const adjectives = document.querySelectorAll('.rotatingText-adjective');

  function rotateAdjectives() {
    let index = 0;
    setInterval(() => {
      adjectives.forEach(adjective => {
        adjective.classList.remove('active');
      });
      adjectives[index].classList.add('active');
      index = (index + 1) % adjectives.length;
    }, 2500);
  }

  rotateAdjectives();
});
function toggleModal() {
  var modal = document.getElementById("modal");
  if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
  } else {
      modal.style.display = "none";
  }
}
var pages = [
    {
        title: "Prosthesis Electric Arm",
        content: "",
        image: "HAND.jpg"
    },
    {
        title: "  DO LIST ",
        content: "",
        image: "DO.jpg"
    },
    {
      title: "CALCULATER",
      content: "",
      image: "pro1.jpg"
    },
    
];

var currentPage = 0;
var maxPages = pages.length;

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

function nextPage() {
    if (currentPage < maxPages - 1) {
        currentPage++;
        updatePage();
    }
}

function openLink() {
    
    var links = [
        "https://youtu.be/k6NGchh37yE?si=_JUdKjZilEV4quag",
        "https://github.com/amna-201/do-home",
        "https://github.com/amna-201/calculator",
    ];
    
    window.open(links[currentPage], "_blank");
}

function updatePage() {
    var page = pages[currentPage];
    var pageTitle = page.title;
    var pageContent = page.content;

    document.querySelector('.page-content h1').textContent = pageTitle;
    document.querySelectorAll('.page-content p')[0].textContent = pageContent;
    document.querySelectorAll('.page-content p')[1].textContent = "This is another paragraph of " + pageTitle.toLowerCase() + " content.";
    document.querySelector('.page-image').src = page.image;
}
