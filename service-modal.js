// Service modal functionality
function openServiceModal(serviceType) {
    const modal = document.getElementById("serviceModal")
    const modalTitle = document.getElementById("modalTitle")
    const modalContent = document.getElementById("modalContent")
  
    // Image grid HTML to be used for each service type
    const createImageGrid = (service) => {
      return `
        <div class="service-image-grid">
          <img src="images/services/${service}1.png" alt="${capitalizeFirstLetter(service)} Image 1" class="grid-img">
          <img src="images/services/${service}2.png" alt="${capitalizeFirstLetter(service)} Image 2" class="grid-img">
          <img src="images/services/${service}3.png" alt="${capitalizeFirstLetter(service)} Image 3" class="grid-img">
          <img src="images/services/${service}4.png" alt="${capitalizeFirstLetter(service)} Image 4" class="grid-img">
          <img src="images/services/${service}5.png" alt="${capitalizeFirstLetter(service)} Image 5" class="grid-img">
          <img src="images/services/${service}6.png" alt="${capitalizeFirstLetter(service)} Image 6" class="grid-img">
          <img src="images/services/${service}7.png" alt="${capitalizeFirstLetter(service)} Image 7" class="grid-img">
          <img src="images/services/${service}8.png" alt="${capitalizeFirstLetter(service)} Image 8" class="grid-img">
        </div>
      `
    }
  
    // Set modal title and content based on service type
    switch (serviceType) {
      case "wedding":
        modalTitle.textContent = "Wedding Planning Services"
        modalContent.innerHTML = `
                  ${createImageGrid("wedding")}
                  <div class="modal-service-details">
                      <p>Your special day deserves nothing but perfection. At EventMaster, we transform your wedding dreams into reality with our comprehensive wedding planning services.</p>
                      
                      <h3>Our Wedding Services Include:</h3>
                      <ul>
                          <li>Venue selection and decoration</li>
                          <li>Catering and menu planning</li>
                          <li>Photography and videography coordination</li>
                          <li>Entertainment and music arrangements</li>
                          <li>Guest management and RSVP tracking</li>
                          <li>Wedding day coordination</li>
                      </ul>
                      
                      <h3>Wedding Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Essential Package</h4>
                              <p>Perfect for couples who have most details planned but need day-of coordination.</p>
                              <p class="price">Starting at ₹50,000</p>
                          </div>
                          <div class="package">
                              <h4>Premium Package</h4>
                              <p>Comprehensive planning from engagement to reception with personalized touches.</p>
                              <p class="price">Starting at ₹1,50,000</p>
                          </div>
                          <div class="package">
                              <h4>Luxury Package</h4>
                              <p>The ultimate wedding experience with exclusive venues and premium services.</p>
                              <p class="price">Starting at ₹3,00,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>What Our Couples Say</h3>
                          <div class="testimonial">
                              <p>EventMaster made our wedding day absolutely magical. Every detail was perfect, and we didn't have to worry about a thing!</p>
                              <p class="client">- Priya & Rahul</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Plan Your Dream Wedding?</h3>
                          <p>Contact us today for a free consultation and let's start planning your perfect day.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us Now</a>
                      </div>
                  </div>
              `
        break
  
      case "concert":
        modalTitle.textContent = "Concert Management Services"
        modalContent.innerHTML = `
                  ${createImageGrid("concert")}
                  <div class="modal-service-details">
                      <p>From intimate music gatherings to large-scale festivals, our concert management team ensures a seamless and unforgettable experience for artists and audiences alike.</p>
                      
                      <h3>Our Concert Services Include:</h3>
                      <ul>
                          <li>Venue selection and stage setup</li>
                          <li>Sound and lighting engineering</li>
                          <li>Artist management and hospitality</li>
                          <li>Ticket sales and audience management</li>
                          <li>Security and safety planning</li>
                          <li>Marketing and promotion</li>
                      </ul>
                      
                      <h3>Concert Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Small Venue Package</h4>
                              <p>Perfect for local bands and intimate performances up to 200 attendees.</p>
                              <p class="price">Starting at ₹1,00,000</p>
                          </div>
                          <div class="package">
                              <h4>Mid-Size Event Package</h4>
                              <p>Comprehensive management for events with 200-1000 attendees.</p>
                              <p class="price">Starting at ₹3,50,000</p>
                          </div>
                          <div class="package">
                              <h4>Festival Package</h4>
                              <p>Complete management for large-scale music festivals with multiple artists.</p>
                              <p class="price">Starting at ₹10,00,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>Success Stories</h3>
                          <div class="testimonial">
                              <p>EventMaster handled our annual music festival flawlessly. From technical setup to artist management, everything was professional and perfectly executed.</p>
                              <p class="client">- Chennai Music Association</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Create an Unforgettable Concert?</h3>
                          <p>Let's discuss how we can bring your musical vision to life.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Get Started</a>
                      </div>
                  </div>
              `
        break
  
      case "corporate":
        modalTitle.textContent = "Corporate Event Services"
        modalContent.innerHTML = `
                  ${createImageGrid("corporate")}
                  <div class="modal-service-details">
                      <p>Make a lasting impression with professionally managed corporate events that align with your company's goals and brand identity.</p>
                      
                      <h3>Our Corporate Event Services Include:</h3>
                      <ul>
                          <li>Conference and seminar planning</li>
                          <li>Product launches and exhibitions</li>
                          <li>Team building events and retreats</li>
                          <li>Award ceremonies and galas</li>
                          <li>Corporate meetings and workshops</li>
                          <li>Brand activation events</li>
                      </ul>
                      
                      <h3>Corporate Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Half-Day Meeting Package</h4>
                              <p>Essential services for corporate meetings and small workshops.</p>
                              <p class="price">Starting at ₹75,000</p>
                          </div>
                          <div class="package">
                              <h4>Full Conference Package</h4>
                              <p>Comprehensive management for day-long conferences and seminars.</p>
                              <p class="price">Starting at ₹2,00,000</p>
                          </div>
                          <div class="package">
                              <h4>Premium Corporate Event</h4>
                              <p>All-inclusive planning for major corporate events and product launches.</p>
                              <p class="price">Starting at ₹5,00,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>Client Feedback</h3>
                          <div class="testimonial">
                              <p>Our annual tech conference was a huge success thanks to EventMaster. Their attention to detail and professional approach made all the difference.</p>
                              <p class="client">- TechCorp India</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Elevate Your Corporate Events</h3>
                          <p>Contact our team to discuss how we can help achieve your corporate event objectives.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Request a Proposal</a>
                      </div>
                  </div>
              `
        break
  
      case "birthday":
        modalTitle.textContent = "Birthday Party Services"
        modalContent.innerHTML = `
                  ${createImageGrid("birthday")}
                  <div class="modal-service-details">
                      <p>Celebrate another year of life with a birthday party that reflects your personality and creates lasting memories.</p>
                      
                      <h3>Our Birthday Party Services Include:</h3>
                      <ul>
                          <li>Theme development and decoration</li>
                          <li>Venue selection and setup</li>
                          <li>Catering and cake arrangements</li>
                          <li>Entertainment and activities planning</li>
                          <li>Photography and videography</li>
                          <li>Invitation design and guest management</li>
                      </ul>
                      
                      <h3>Birthday Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Kids Birthday Package</h4>
                              <p>Fun-filled celebrations with games, entertainment, and themed decorations.</p>
                              <p class="price">Starting at ₹25,000</p>
                          </div>
                          <div class="package">
                              <h4>Teen/Adult Birthday Package</h4>
                              <p>Stylish celebrations with customized themes and entertainment options.</p>
                              <p class="price">Starting at ₹40,000</p>
                          </div>
                          <div class="package">
                              <h4>Milestone Birthday Package</h4>
                              <p>Premium celebrations for significant birthdays with all the special touches.</p>
                              <p class="price">Starting at ₹75,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>Happy Celebrations</h3>
                          <div class="testimonial">
                              <p>My daughter's 16th birthday was absolutely perfect! EventMaster took care of everything and created a magical day she'll never forget.</p>
                              <p class="client">- Meera S.</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Plan an Unforgettable Birthday?</h3>
                          <p>Let's create a celebration that's as unique as you are!</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Start Planning</a>
                      </div>
                  </div>
              `
        break
  
      case "college":
        modalTitle.textContent = "College Fest Services"
        modalContent.innerHTML = `
                  ${createImageGrid("college")}
                  <div class="modal-service-details">
                      <p>Transform your college event into an unforgettable experience with our specialized college fest management services.</p>
                      
                      <h3>Our College Fest Services Include:</h3>
                      <ul>
                          <li>Cultural and technical fest planning</li>
                          <li>Stage and venue management</li>
                          <li>Artist and performer coordination</li>
                          <li>Competition organization and judging</li>
                          <li>Sponsorship acquisition assistance</li>
                          <li>Marketing and promotion</li>
                      </ul>
                      
                      <h3>College Event Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Department Event Package</h4>
                              <p>Focused management for single-department technical or cultural events.</p>
                              <p class="price">Starting at ₹50,000</p>
                          </div>
                          <div class="package">
                              <h4>Cultural Fest Package</h4>
                              <p>Comprehensive management for college-wide cultural celebrations.</p>
                              <p class="price">Starting at ₹1,50,000</p>
                          </div>
                          <div class="package">
                              <h4>Inter-College Fest Package</h4>
                              <p>Complete planning for large-scale events with participants from multiple institutions.</p>
                              <p class="price">Starting at ₹3,00,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>Success Stories</h3>
                          <div class="testimonial">
                              <p>EventMaster transformed our annual college fest into a professional event that attracted record participation. Their expertise in managing student events is unmatched.</p>
                              <p class="client">- Student Council, Chennai Engineering College</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Elevate Your College Event?</h3>
                          <p>Contact us to discuss how we can help make your college fest a standout success.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Get in Touch</a>
                      </div>
                  </div>
              `
        break
  
      case "social":
        modalTitle.textContent = "Social Gathering Services"
        modalContent.innerHTML = `
                  ${createImageGrid("social")}
                  <div class="modal-service-details">
                      <p>From intimate family reunions to large community events, our social gathering services ensure memorable connections and experiences.</p>
                      
                      <h3>Our Social Gathering Services Include:</h3>
                      <ul>
                          <li>Venue selection and arrangement</li>
                          <li>Catering and refreshment planning</li>
                          <li>Decoration and ambiance creation</li>
                          <li>Entertainment and activity coordination</li>
                          <li>Guest management and communication</li>
                          <li>Event photography and memory capture</li>
                      </ul>
                      
                      <h3>Social Event Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Family Gathering Package</h4>
                              <p>Intimate settings for reunions and family celebrations.</p>
                              <p class="price">Starting at ₹35,000</p>
                          </div>
                          <div class="package">
                              <h4>Community Event Package</h4>
                              <p>Comprehensive planning for neighborhood and community celebrations.</p>
                              <p class="price">Starting at ₹75,000</p>
                          </div>
                          <div class="package">
                              <h4>Gala Event Package</h4>
                              <p>Premium services for formal social gatherings and charity events.</p>
                              <p class="price">Starting at ₹1,50,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>Client Experiences</h3>
                          <div class="testimonial">
                              <p>Our family reunion was beautifully organized by EventMaster. They took care of every detail, allowing us to focus on reconnecting with loved ones.</p>
                              <p class="client">- The Sharma Family</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Plan Your Next Social Gathering?</h3>
                          <p>Let's create meaningful connections and memories together.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Start Planning</a>
                      </div>
                  </div>
              `
        break
  
      // Add cases for other services (tech, sports, conference, charity, art, marathon)
      case "tech":
      case "sports":
      case "conference":
      case "charity":
      case "art":
      case "marathon":
        modalTitle.textContent = capitalizeFirstLetter(serviceType) + " Event Services"
        modalContent.innerHTML = `
                  ${createImageGrid(serviceType)}
                  <div class="modal-service-details">
                      <p>Our ${serviceType} event services are currently being updated with new packages and offerings.</p>
                      <p>Please contact us directly for detailed information about our ${serviceType} event management services.</p>
                      
                      <div class="cta-section">
                          <h3>Interested in Our ${capitalizeFirstLetter(serviceType)} Event Services?</h3>
                          <p>Reach out to our team for a customized proposal tailored to your specific needs.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us</a>
                      </div>
                  </div>
              `
        break
  
      default:
        modalTitle.textContent = "Service Information"
        modalContent.innerHTML = `
                  <p>Please contact us for more information about this service.</p>
                  <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us</a>
              `
    }
  
    // Display the modal
    modal.style.display = "block"
  
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden"
  }
  
  function closeServiceModal() {
    const modal = document.getElementById("serviceModal")
    modal.style.display = "none"
  
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("serviceModal")
    if (event.target === modal) {
      closeServiceModal()
    }
  })
  
  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeServiceModal()
    }
  })