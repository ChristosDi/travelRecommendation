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
});
