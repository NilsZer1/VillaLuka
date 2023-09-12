window.addEventListener("load", function() {
  var loader = document.getElementById('loader');

  setTimeout(function() {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, 2000);
});

$(document).ready(function() {
  $(".category").click(function() {
    var category = $(this).attr("id");
    var content = getContentForCategory(category);
    $("#content").html(content);
  });

  function getContentForCategory(category) {
    if (category === "airports") {
      return `
        <ul>
          <li>Airport Zadar - 5 km</li>
          <li>Airport Split - 92 km</li>
          <li>Airport Losinj - 98 km</li>
        </ul>`;
    } else if (category === "beaches") {
      return `
        <ul>
          <li>Sveti Petar Nudist Beach - 2.7 km</li>
          <li>Tustica Beach - 2.7 km</li>
          <li>Makarska Beach - 3 km</li>
          <li>Sveti Petar Beach - 3.3 km</li>
          <li>Tratice Beach - 3.5 km</li>
        </ul>`;
    } else if (category === "restaurants") {
      return `
        <ul>
          <li>Café/Bar La Bocca Caffe - 3.3 km</li>
          <li>Restaurant A1 - 4.4 km</li>
          <li>Restaurant Fer - 4.6 km</li>
        </ul>`;
    } else if (category === "attractions") {
      return `
        <ul>
          <li>Museum of Illusions Zadar - 14 km</li>
          <li>Duke's Palace - 14 km</li>
          <li>Zadar People's Square - 14 km</li>
          <li>Archaeological Museum Zadar - 15 km</li>
          <li>Zadar National Museum - 15 km</li>
        </ul>`;
    } else {
      return "No content available";
    }
  }
});

const navLinks = document.querySelectorAll('.category');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});