document.addEventListener("DOMContentLoaded", function () {
  // Get references to navigation links and the dynamic content container.
  const homeLink = document.getElementById("homeLink");
  const aboutLink = document.getElementById("aboutLink");
  const contactLink = document.getElementById("contactLink");
  const pageContent = document.getElementById("pageContent");

  // Template for Home page content.
  const homeContent = `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content" id="heroContent">
        <h1>Explore<br>Dream<br>Destination</h1>
        <p>
          It encourages exploration of unfamiliar<br>
          territories, embracing diverse cultures and<br>
          landscapes, while pursuing the desired<br>
          destination that captivates the heart and<br>
          ignites a sense of wonder!
        </p>
        <button class="cta-button">BOOK NOW</button>
      </div>
    </section>
  `;

  // Template for About us page content.
  const aboutContent = `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="aboutUsHero-content" id="aboutUsHero-content">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Our Company! We are a team of passionate individuals dedicated to providing excellent services/products to
          our customers. Our mission is to <br><strong>provide the best experience</strong> for people traveling to different
          destinations around the world and ensuring their satisfaction. Our values include integrity, innovation, customer satisfaction, and teamwork. We
          believe in <strong>putting our customers first</strong> and <strong>working together</strong> to achieve<br>our goals.<br>
          Feel free to explore our website to learn more about what we offer!
        </p>
      </div>
    </section>
    <section class="our-team">
      <h2>Our<br>Team</h2>
      <div class="team-cards">
        <div class="team-card">
          <img src="travelRecommendation_images/ourTeam_icons/team_icon.svg" alt="John Doe">
          <h3>John Doe</h3>
          <p>John is responsible for...</p>
          <button class="role-btn">CEO</button>
        </div>
        <div class="team-card">
          <img src="travelRecommendation_images/ourTeam_icons/team_icon.svg" alt="Celina Thomas">
          <h3>Celina Thomas</h3>
          <p>Celina Thomas is responsible for...</p>
          <button class="role-btn">Team Lead</button>
        </div>
        <div class="team-card">
          <img src="travelRecommendation_images/ourTeam_icons/team_icon.svg" alt="Mike Tysen">
          <h3>Mike Tysen</h3>
          <p>Mike Tysen is responsible for...</p>
          <button class="role-btn">Delivery Head</button>
        </div>
      </div>
    </section>
  `;

  // Template for Contact us page content.
  const contactContent = `
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p>Get in Touch</p>
      </div>
    </section>
    <section class="contact-us">
      <form action="#" method="post" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>
        </div>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </section>
  `;

  // Set up event listeners to swap out the content.
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    pageContent.innerHTML = homeContent;
  });

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    pageContent.innerHTML = aboutContent;
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    pageContent.innerHTML = contactContent;
  });
  /**
   * END OF DYNAMICALLY CHANGED BUTTONS
*/

/**
 * START OF SLIDESHOW
*/

// ----- Keyword Search & Data Fetching Logic -----
const searchForm = document.querySelector("nav form");
const searchInput = searchForm.querySelector("input[name='search']");
const clearButton = searchForm.querySelector("button[type='button']");

 searchForm.addEventListener("submit", function (event) {
   event.preventDefault();
   const keyword = searchInput.value.trim().toLowerCase();

   // Fetch data from the JSON file
   fetch("travel_recommendation_api.json")
   .then(response => response.json())
      .then(data => {
        let results = [];
        
        // Check for keyword variations for "beach" (handles beach, beaches, etc.)
        if (keyword.includes("beach")) {
          results = results.concat(data.beaches);
        }
        
        // Check for keyword variations for "temple" (handles temple, temples, etc.)
        if (keyword.includes("temple")) {
          results = results.concat(data.temples);
        }

        // Search in country names and their cities
        data.countries.forEach(country => {
          if (country.name.toLowerCase().includes(keyword)) {
            // If a country name matches, add all its cities
            results = results.concat(country.cities);
          } else {
            // Otherwise, check if any city within the country matches the keyword
            country.cities.forEach(city => {
              if (
                city.name.toLowerCase().includes(keyword) ||
                city.description.toLowerCase().includes(keyword)
              ) {
                results.push(city);
              }
            });
          }
        });

        displayResults(results);
      })
      .catch(error => {
        console.error("Error fetching travel data: ", error);
      });
  });

  // Clear the search field and reset the content if desired.
  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    pageContent.innerHTML = homeContent;
  });
  
  // Function to display search results dynamically.
  function displayResults(results) {
    let html = "";
    if (results.length === 0) {
      html = "<p>No results found for your search.</p>";
    } else {
      results.forEach(item => {
        html += `
        <div class="recommendation-card">
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            </div>
            `;
      });
    }
    pageContent.innerHTML = html;
  }

});