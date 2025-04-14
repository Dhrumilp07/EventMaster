// Service modal functionality
function openServiceModal(serviceType) {
  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  // Image grid HTML to be used for each service type
  const createImageGrid = (service) => {
    return `
        <div class="service-image-grid">
          <img src="images/services/${service}1.png" alt="${capitalizeFirstLetter(
      service
    )} Image 1" class="grid-img">
          <img src="images/services/${service}2.png" alt="${capitalizeFirstLetter(
      service
    )} Image 2" class="grid-img">
          <img src="images/services/${service}3.png" alt="${capitalizeFirstLetter(
      service
    )} Image 3" class="grid-img">
          <img src="images/services/${service}4.png" alt="${capitalizeFirstLetter(
      service
    )} Image 4" class="grid-img">
          <img src="images/services/${service}5.png" alt="${capitalizeFirstLetter(
      service
    )} Image 5" class="grid-img">
          <img src="images/services/${service}6.png" alt="${capitalizeFirstLetter(
      service
    )} Image 6" class="grid-img">
          <img src="images/services/${service}7.png" alt="${capitalizeFirstLetter(
      service
    )} Image 7" class="grid-img">
          <img src="images/services/${service}8.png" alt="${capitalizeFirstLetter(
      service
    )} Image 8" class="grid-img">
        </div>
      `;
  };

  // Set modal title and content based on service type
  switch (serviceType) {
    case "wedding":
      modalTitle.textContent = "Wedding Planning Services";
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
            <p class="price">Starting at ₹10,00,000</p>
        </div>
        <div class="package">
            <h4>Premium Package</h4>
            <p>Comprehensive planning from engagement to reception with personalized touches.</p>
            <p class="price">Starting at ₹25,00,000</p>
        </div>
        <div class="package">
            <h4>Luxury Package</h4>
            <p>The ultimate wedding experience with exclusive venues and premium services.</p>
            <p class="price">Starting at ₹50,00,000</p>
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
    </div>
    <div class="modal-form-section">
        <h3>Inquire About Our Wedding Services</h3>
        <p>Fill out the form below and we'll get back to you with more details about our wedding packages.</p>
        
        <form id="eventDetailsForm" class="modal-inquiry-form">
            <label for="eventName">Wedding Name/Title:</label>
            <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your wedding (e.g. Smith-Johnson Wedding)" required>

            <label for="eventDate">Wedding Date:</label>
            <input type="date" id="eventDate" name="eventDate" required>

            <label for="eventTime">Ceremony Time:</label>
            <input type="time" id="eventTime" name="eventTime" required>

            <label for="venue">Wedding Venue:</label>
            <input type="text" id="venue" name="venue" placeholder="Enter your wedding venue" required>

            <label for="host">Couple Names:</label>
            <input type="text" id="host" name="host" placeholder="Enter both your names (e.g. Priya & Rahul)" required>

            <label for="guests">Number of Guests:</label>
            <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of wedding guests expected" required>

            <label for="vips">Special Guests (if any):</label>
            <textarea id="vips" name="vips" placeholder="List any special family members or VIPs attending the wedding (optional)"></textarea>
            
            <div class="package-selection">
                <h4>Select Your Package</h4>
                <div class="package-options">
                    <div class="package-option">
                        <input type="radio" id="wedding-essential" name="package" value="essential">
                        <label for="wedding-essential">
                            <span class="package-name">Essential Package</span>
                            <span class="package-price">₹10,00,000</span>
                            <span class="package-desc">Day-of coordination for couples who have most details planned</span>
                        </label>
                    </div>
                    <div class="package-option">
                        <input type="radio" id="wedding-premium" name="package" value="premium">
                        <label for="wedding-premium">
                            <span class="package-name">Premium Package</span>
                            <span class="package-price">₹25,00,000</span>
                            <span class="package-desc">Comprehensive planning from engagement to reception</span>
                        </label>
                    </div>
                    <div class="package-option">
                        <input type="radio" id="wedding-luxury" name="package" value="luxury">
                        <label for="wedding-luxury">
                            <span class="package-name">Luxury Package</span>
                            <span class="package-price">₹50,00,000</span>
                            <span class="package-desc">Ultimate wedding experience with exclusive venues and premium services</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <textarea name="message" placeholder="Tell us more about your wedding vision" rows="4" required></textarea>
            <button type="submit" class="btn2">Submit Inquiry</button>
        </form>
        <div id="form-msg"></div>
    </div>
</div>

                  `;
      break;

    case "concert":
      modalTitle.textContent = "Concert Management Services";
      modalContent.innerHTML = `
                          ${createImageGrid("concert")}
                          <div class="modal-service-details">
                              <p>From intimate live performances to major music festivals, EventMaster delivers unforgettable concert experiences that resonate with audiences.</p>
                              
                              <h3>Our Concert Services Include:</h3>
                              <ul>
                                  <li>Venue selection and setup</li>
                                  <li>Sound and lighting engineering</li>
                                  <li>Artist coordination and management</li>
                                  <li>Ticket sales and promotion</li>
                                  <li>Security and crowd management</li>
                                  <li>Technical equipment and staging</li>
                              </ul>
                              
                              <h3>Concert Packages</h3>
                              <div class="packages">
                                  <div class="package">
                                      <h4>Standard Package</h4>
                                      <p>Basic setup for smaller venues and local performances.</p>
                                      <p class="price">Starting at ₹1,00,000</p>
                                  </div>
                                  <div class="package">
                                      <h4>Professional Package</h4>
                                      <p>Comprehensive concert production with premium sound and lighting.</p>
                                      <p class="price">Starting at ₹3,50,000</p>
                                  </div>
                                  <div class="package">
                                      <h4>Arena Package</h4>
                                      <p>Large-scale concert production with advanced technical setup.</p>
                                      <p class="price">Starting at ₹8,00,000</p>
                                  </div>
                              </div>
                              
                              <div class="testimonials">
                                  <h3>What Our Clients Say</h3>
                                  <div class="testimonial">
                                      <p>EventMaster's team handled everything flawlessly. The sound quality was exceptional, and the audience had an incredible time.</p>
                                      <p class="client">- Rhythm Productions</p>
                                  </div>
                              </div>
                              
                              <div class="cta-section">
                                  <h3>Ready to Plan Your Next Concert?</h3>
                                  <p>Contact us today for a consultation and let's create an unforgettable musical experience.</p>
                              </div>
                                <div class="modal-form-section">
                                <h3>Inquire About Our Concert Services</h3>
                                <p>Fill out the form below and we'll get back to you with more details about our concert packages.</p>
                                
                               <form id="concertDetailsForm" class="modal-inquiry-form">
    <label for="eventName">Concert Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your concert (e.g. Summer Beats 2025)" required>
    
    <label for="eventDate">Concert Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    
    <label for="eventTime">Concert Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    
    <label for="venue">Concert Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your concert venue" required>
    
    <label for="host">Artist/Band Names:</label>
    <input type="text" id="host" name="host" placeholder="Enter performing artist(s) or band(s)" required>
    
    <label for="guests">Expected Attendance:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of attendees expected" required>
    
    <label for="vips">Special Guests/Opening Acts (if any):</label>
    <textarea id="vips" name="vips" placeholder="List any special guests, VIPs, or opening acts for the concert (optional)"></textarea>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="concert-essential" name="package" value="essential">
                <label for="concert-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹1,00,000</span>
                    <span class="package-desc">Basic concert setup and coordination for smaller venues</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="concert-premium" name="package" value="premium">
                <label for="concert-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹3,50,000</span>
                    <span class="package-desc">Full-service concert planning including sound, lighting, and stage management</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="concert-luxury" name="package" value="luxury">
                <label for="concert-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹8,00,000</span>
                    <span class="package-desc">Premium concert experience with top-tier production, VIP areas, and backstage management</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your concert vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                              </div>
                          </div>
                      `;
      break;

    case "corporate":
      modalTitle.textContent = "Corporate Event Services";
      modalContent.innerHTML = `
                              ${createImageGrid("corporate")}
                              <div class="modal-service-details">
                                  <p>Elevate your company's image with professionally managed corporate events that leave a lasting impression on clients, partners, and employees.</p>
                                  
                                  <h3>Our Corporate Services Include:</h3>
                                  <ul>
                                      <li>Conference and meeting planning</li>
                                      <li>Product launches and trade shows</li>
                                      <li>Team building activities</li>
                                      <li>Corporate retreats and galas</li>
                                      <li>Audio-visual production and technology</li>
                                      <li>Corporate branding integration</li>
                                  </ul>
                                  
                                  <h3>Corporate Packages</h3>
                                  <div class="packages">
                                      <div class="package">
                                          <h4>Executive Package</h4>
                                          <p>Essential services for smaller corporate meetings and presentations.</p>
                                          <p class="price">Starting at ₹75,000</p>
                                      </div>
                                      <div class="package">
                                          <h4>Premium Package</h4>
                                          <p>Comprehensive planning for medium-sized corporate events with branding.</p>
                                          <p class="price">Starting at ₹2,00,000</p>
                                      </div>
                                      <div class="package">
                                          <h4>Enterprise Package</h4>
                                          <p>Full-scale event management for large corporate conferences and galas.</p>
                                          <p class="price">Starting at ₹5,00,000</p>
                                      </div>
                                  </div>
                                  
                                  <div class="testimonials">
                                      <h3>What Our Clients Say</h3>
                                      <div class="testimonial">
                                          <p>EventMaster managed our annual conference with the highest level of professionalism. The attention to detail and seamless execution impressed all attendees.</p>
                                          <p class="client">- NextGen Technologies</p>
                                      </div>
                                  </div>
                                  
                                  <div class="cta-section">
                                      <h3>Ready to Elevate Your Corporate Events?</h3>
                                      <p>Contact us today for a consultation tailored to your company's needs.</p>
                                  </div>
                                    <div class="modal-form-section">
                                    <h3>Inquire About Our Corporate Event Services</h3>
                                    <p>Fill out the form below and we'll get back to you with more details about our corporate packages.</p>
                                    
                                   <form id="corporateEventDetailsForm" class="modal-inquiry-form">
    <label for="eventName">Event Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your corporate event (e.g. Annual Leadership Summit 2025)" required>
    
    <label for="eventDate">Event Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    
    <label for="eventTime">Event Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    
    <label for="venue">Event Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your event venue" required>
    
    <label for="host">Company/Organization Name:</label>
    <input type="text" id="host" name="host" placeholder="Enter your company or organization name" required>
    
    <label for="guests">Expected Attendance:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of attendees expected" required>
    
    <label for="vips">Key Speakers/VIPs (if any):</label>
    <textarea id="vips" name="vips" placeholder="List any keynote speakers, VIPs or special guests attending (optional)"></textarea>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="corporate-essential" name="package" value="essential">
                <label for="corporate-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹75,000</span>
                    <span class="package-desc">Basic event coordination for smaller corporate functions</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="corporate-premium" name="package" value="premium">
                <label for="corporate-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹2,00,000</span>
                    <span class="package-desc">Comprehensive event planning including AV setup, catering, and venue management</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="corporate-luxury" name="package" value="luxury">
                <label for="corporate-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹5,00,000</span>
                    <span class="package-desc">Premium corporate experience with bespoke branding, high-end catering, and executive services</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your corporate event requirements and objectives" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                                  </div>
                              </div>
                          `;
      break;

    case "birthday":
      modalTitle.textContent = "Birthday Celebration Services";
      modalContent.innerHTML = `
                                  ${createImageGrid("birthday")}
                                  <div class="modal-service-details">
                                      <p>Make your birthday or a loved one's special day truly memorable with our custom birthday celebration services.</p>
                                      
                                      <h3>Our Birthday Services Include:</h3>
                                      <ul>
                                          <li>Theme conceptualization and design</li>
                                          <li>Venue decoration and setup</li>
                                          <li>Catering and cake arrangements</li>
                                          <li>Entertainment and activities</li>
                                          <li>Photography and videography</li>
                                          <li>Invitation design and management</li>
                                      </ul>
                                      
                                      <h3>Birthday Packages</h3>
                                      <div class="packages">
                                          <div class="package">
                                              <h4>Fun Package</h4>
                                              <p>Basic birthday setup with essential decorations and coordination.</p>
                                              <p class="price">Starting at ₹25,000</p>
                                          </div>
                                          <div class="package">
                                              <h4>Celebration Package</h4>
                                              <p>Comprehensive birthday planning with themed decorations and entertainment.</p>
                                              <p class="price">Starting at ₹50,000</p>
                                          </div>
                                          <div class="package">
                                              <h4>Extravaganza Package</h4>
                                              <p>Luxury birthday experience with premium venue, custom theme, and exclusive entertainment.</p>
                                              <p class="price">Starting at ₹1,00,000</p>
                                          </div>
                                      </div>
                                      
                                      <div class="testimonials">
                                          <h3>What Our Clients Say</h3>
                                          <div class="testimonial">
                                              <p>My daughter's 16th birthday party was absolutely perfect! EventMaster created a magical experience that she and her friends will never forget.</p>
                                              <p class="client">- Anita Sharma</p>
                                          </div>
                                      </div>
                                      
                                      <div class="cta-section">
                                          <h3>Ready to Plan an Unforgettable Birthday?</h3>
                                          <p>Contact us today and let's create a celebration to remember!</p>
                                      </div>
                                        <div class="modal-form-section">
                                        <h3>Inquire About Our Birthday Services</h3>
                                        <p>Fill out the form below and we'll get back to you with more details about our birthday packages.</p>
                                        
                                          <form id="birthdayDetailsForm" class="modal-inquiry-form">
    <label for="eventName">Birthday Celebration Name:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for the celebration (e.g. Riya's 30th Birthday)" required>
    <label for="eventDate">Celebration Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <label for="eventTime">Celebration Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    <label for="venue">Event Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your celebration venue" required>
    <label for="host">Birthday Person's Name:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of the person celebrating their birthday" required>
    <label for="guests">Number of Guests:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of guests expected" required>
    <label for="theme">Birthday Theme (if any):</label>
    <input type="text" id="theme" name="theme" placeholder="Enter the theme for the birthday party (optional)">
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="birthday-essential" name="package" value="essential">
                <label for="birthday-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹25,000</span>
                    <span class="package-desc">Basic birthday setup with decorations and coordination</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="birthday-premium" name="package" value="premium">
                <label for="birthday-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹50,000</span>
                    <span class="package-desc">Complete birthday planning with themed decor, entertainment, and catering</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="birthday-luxury" name="package" value="luxury">
                <label for="birthday-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹1,00,000</span>
                    <span class="package-desc">Ultimate birthday experience with premium venue, customized entertainment, and gourmet catering</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your birthday celebration vision" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>


                                      </div>
                                  </div>
                              `;
      break;

    case "college":
      modalTitle.textContent = "College Festival Services";
      modalContent.innerHTML = `
                                      ${createImageGrid("college")}
                                      <div class="modal-service-details">
                                          <p>Create an unforgettable college festival that engages students and builds campus spirit with our specialized event management services.</p>
                                          
                                          <h3>Our College Fest Services Include:</h3>
                                          <ul>
                                              <li>Event concept and theme development</li>
                                              <li>Stage and venue setup</li>
                                              <li>Technical production and sound systems</li>
                                              <li>Artist and performer booking</li>
                                              <li>Sponsorship and budget management</li>
                                              <li>Competition organization and logistics</li>
                                          </ul>
                                          
                                          <h3>College Fest Packages</h3>
                                          <div class="packages">
                                              <div class="package">
                                                  <h4>Basic Package</h4>
                                                  <p>Essential services for department-level events and small campus festivals.</p>
                                                  <p class="price">Starting at ₹50,000</p>
                                              </div>
                                              <div class="package">
                                                  <h4>Standard Package</h4>
                                                  <p>Comprehensive festival management with multiple events and performances.</p>
                                                  <p class="price">Starting at ₹1,50,000</p>
                                              </div>
                                              <div class="package">
                                                  <h4>Premium Package</h4>
                                                  <p>Full-scale festival production with celebrity performances and advanced technical setup.</p>
                                                  <p class="price">Starting at ₹3,50,000</p>
                                              </div>
                                          </div>
                                          
                                          <div class="testimonials">
                                              <h3>What Our Clients Say</h3>
                                              <div class="testimonial">
                                                  <p>EventMaster transformed our annual college fest into a professional-level event. The celebrity performances and seamless organization exceeded all expectations.</p>
                                                  <p class="client">- Cultural Secretary, Delhi Technical Institute</p>
                                              </div>
                                          </div>
                                          
                                          <div class="cta-section">
                                              <h3>Ready to Elevate Your College Festival?</h3>
                                              <p>Contact us today for a consultation tailored to your institution's needs.</p>
                                          </div>
                                            <div class="modal-form-section">
                                            <h3>Inquire About Our College Festival Services</h3>
                                            <p>Fill out the form below and we'll get back to you with more details about our college fest packages.</p>
                                            
                                            <form class="modal-inquiry-form" id="collegeFestDetailsForm">
    <!-- Event Name -->
    <label for="eventName">College Fest Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your college fest (e.g. Techfest 2025)" required>
    <!-- Event Date -->
    <label for="eventDate">Event Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Event Duration -->
    <label for="eventDuration">Event Duration (Days):</label>
    <input type="number" id="eventDuration" name="eventDuration" placeholder="Enter number of days" min="1" max="10" required>
    <!-- Venue -->
    <label for="venue">College/University Name:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your college/university name" required>
    <!-- Organizing Committee -->
    <label for="host">Organizing Committee:</label>
    <input type="text" id="host" name="host" placeholder="Enter organizing committee or department name" required>
    <!-- Number of Participants -->
    <label for="guests">Expected Participation:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of participants expected" required>
    <!-- Event Types -->
    <label for="eventTypes">Event Categories:</label>
    <textarea id="eventTypes" name="eventTypes" placeholder="List the types of events planned (e.g. technical, cultural, sports)" required></textarea>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="college-essential" name="package" value="essential">
                <label for="college-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹50,000</span>
                    <span class="package-desc">Basic event coordination for college festivals</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="college-premium" name="package" value="premium">
                <label for="college-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹1,50,000</span>
                    <span class="package-desc">Comprehensive fest planning including stage setup, artist management, and promotional materials</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="college-luxury" name="package" value="luxury">
                <label for="college-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹3,50,000</span>
                    <span class="package-desc">Premium college fest experience with celebrity performers, advanced production, and complete logistics</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your college fest vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                                          </div>
                                      </div>
                                  `;
      break;

      case "social":
        modalTitle.textContent = "Social Gathering Services";
        modalContent.innerHTML = `
                  ${createImageGrid("social")}
                  <div class="modal-service-details">
                      <p>Host memorable social gatherings that bring people together with our professional planning and execution services.</p>
                      
                      <h3>Our Social Gathering Services Include:</h3>
                      <ul>
                          <li>Venue selection and decoration</li>
                          <li>Catering and refreshment management</li>
                          <li>Entertainment and activity planning</li>
                          <li>Invitation design and distribution</li>
                          <li>Photography and videography</li>
                          <li>Guest management and coordination</li>
                      </ul>
                      
                      <h3>Social Gathering Packages</h3>
                      <div class="packages">
                          <div class="package">
                              <h4>Basic Package</h4>
                              <p>Essential services for intimate gatherings of up to 50 guests.</p>
                              <p class="price">Starting at ₹25,000</p>
                          </div>
                          <div class="package">
                              <h4>Standard Package</h4>
                              <p>Comprehensive planning for medium-sized gatherings of up to 100 guests.</p>
                              <p class="price">Starting at ₹60,000</p>
                          </div>
                          <div class="package">
                              <h4>Premium Package</h4>
                              <p>Luxury experience for large gatherings with premium catering and entertainment.</p>
                              <p class="price">Starting at ₹1,20,000</p>
                          </div>
                      </div>
                      
                      <div class="testimonials">
                          <h3>What Our Clients Say</h3>
                          <div class="testimonial">
                              <p>EventMaster handled our alumni reunion flawlessly. Their attention to detail and personalized approach made the event truly special for everyone involved.</p>
                              <p class="client">- Priya Sharma, Alumni Association Head</p>
                          </div>
                      </div>
                      
                      <div class="cta-section">
                          <h3>Ready to Host an Unforgettable Social Gathering?</h3>
                          <p>Contact us today for a consultation tailored to your specific needs.</p>
                      </div>
                      <div class="modal-form-section">
                        <h3>Inquire About Our Social Gathering Services</h3>
                        <p>Fill out the form below and we'll get back to you with more details about our social gathering packages.</p>
                        
                      <form class="modal-inquiry-form" id="socialGatheringDetailsForm">
    <!-- Event Name -->
    <label for="eventName">Event Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your social gathering (e.g. Annual Family Reunion)" required>
    <!-- Event Date -->
    <label for="eventDate">Event Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Event Time -->
    <label for="eventTime">Event Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    <!-- Venue -->
    <label for="venue">Event Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your event venue" required>
    <!-- Host Name -->
    <label for="host">Host Name/Group:</label>
    <input type="text" id="host" name="host" placeholder="Enter host individual or family/group name" required>
    <!-- Number of Guests -->
    <label for="guests">Number of Guests:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of guests expected" required>
    <!-- Occasion -->
    <label for="occasion">Occasion/Purpose:</label>
    <input type="text" id="occasion" name="occasion" placeholder="Enter the occasion or purpose of the gathering" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="social-essential" name="package" value="essential">
                <label for="social-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹35,000</span>
                    <span class="package-desc">Basic event coordination and setup for social gatherings</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="social-premium" name="package" value="premium">
                <label for="social-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹60,000</span>
                    <span class="package-desc">Full-service event planning including venue decoration, catering, and entertainment</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="social-luxury" name="package" value="luxury">
                <label for="social-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹1,20,000</span>
                    <span class="package-desc">Premium social experience with exclusive venue, gourmet catering, and customized entertainment</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your social gathering vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                      </div>
                  </div>
              `
        break;

        case "tech":
            modalTitle.textContent = "Tech Event Services"
            modalContent.innerHTML = `
                      ${createImageGrid("tech")}
                      <div class="modal-service-details">
                          <p>Organize cutting-edge tech events, from hackathons to product launches, with our specialized technical event management expertise.</p>
                          
                          <h3>Our Tech Event Services Include:</h3>
                          <ul>
                              <li>Technology showcase setup and management</li>
                              <li>Hackathon and coding competition organization</li>
                              <li>Technical infrastructure and networking</li>
                              <li>Live demonstration coordination</li>
                              <li>Speaker and panelist management</li>
                              <li>Digital engagement and virtual components</li>
                          </ul>
                          
                          <h3>Tech Event Packages</h3>
                          <div class="packages">
                              <div class="package">
                                  <h4>Basic Package</h4>
                                  <p>Essential services for small tech meetups and workshops.</p>
                                  <p class="price">Starting at ₹75,000</p>
                              </div>
                              <div class="package">
                                  <h4>Standard Package</h4>
                                  <p>Comprehensive management for medium-sized tech conferences and hackathons.</p>
                                  <p class="price">Starting at ₹2,00,000</p>
                              </div>
                              <div class="package">
                                  <h4>Premium Package</h4>
                                  <p>Full-scale tech event production with advanced technical setup and industry leaders.</p>
                                  <p class="price">Starting at ₹5,00,000</p>
                              </div>
                          </div>
                          
                          <div class="testimonials">
                              <h3>What Our Clients Say</h3>
                              <div class="testimonial">
                                  <p>EventMaster delivered a flawless tech conference with seamless AV integration and exceptional speaker management. Their technical expertise was invaluable to our event's success.</p>
                                  <p class="client">- Rajiv Kumar, CTO, TechInnovate Solutions</p>
                              </div>
                          </div>
                          
                          <div class="cta-section">
                              <h3>Ready to Host an Impactful Tech Event?</h3>
                              <p>Contact us today for a consultation tailored to your technical requirements.</p>
                          </div>
                          <div class="modal-form-section">
                            <h3>Inquire About Our Tech Event Services</h3>
                            <p>Fill out the form below and we'll get back to you with more details about our tech event packages.</p>
                            
                         <form id="techMeetupDetailsForm" class="modal-inquiry-form">
    <!-- Meetup Name -->
    <label for="eventName">Meetup Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your tech meetup (e.g. AI Developer Summit)" required>
    <!-- Meetup Date -->
    <label for="eventDate">Meetup Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Meetup Time -->
    <label for="eventTime">Meetup Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    <!-- Venue -->
    <label for="venue">Meetup Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your meetup venue" required>
    <!-- Organizing Company/Group -->
    <label for="host">Organizing Company/Group:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of your company or tech group" required>
    <!-- Number of Attendees -->
    <label for="guests">Expected Attendance:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of attendees expected" required>
    <!-- Tech Focus -->
    <label for="techFocus">Technology Focus:</label>
    <input type="text" id="techFocus" name="techFocus" placeholder="Enter the technology focus of your meetup (e.g. Blockchain, AI, Cloud)" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="tech-essential" name="package" value="essential">
                <label for="tech-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹75,000</span>
                    <span class="package-desc">Basic tech meetup coordination with venue setup and AV equipment</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="tech-premium" name="package" value="premium">
                <label for="tech-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹2,00,000</span>
                    <span class="package-desc">Comprehensive tech event planning including networking space, tech infrastructure, and catering</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="tech-luxury" name="package" value="luxury">
                <label for="tech-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹5,00,000</span>
                    <span class="package-desc">Premium tech experience with advanced tech setup, live streaming capabilities, and exclusive networking lounge</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your tech meetup objectives and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                          </div>
                      </div>
                  `
            break;

            case "sports":
    modalTitle.textContent = "Sports Event Services"
    modalContent.innerHTML = `
              ${createImageGrid("sports")}
              <div class="modal-service-details">
                  <p>Create exciting and well-organized sports events, from tournaments to exhibition matches, with our specialized sports event management services.</p>
                  
                  <h3>Our Sports Event Services Include:</h3>
                  <ul>
                      <li>Venue selection and preparation</li>
                      <li>Tournament structure and scheduling</li>
                      <li>Referee and official coordination</li>
                      <li>Team management and registration</li>
                      <li>Equipment and facility organization</li>
                      <li>Awards and recognition ceremonies</li>
                  </ul>
                  
                  <h3>Sports Event Packages</h3>
                  <div class="packages">
                      <div class="package">
                          <h4>Basic Package</h4>
                          <p>Essential services for single-day tournaments and small sporting events.</p>
                          <p class="price">Starting at ₹60,000</p>
                      </div>
                      <div class="package">
                          <h4>Standard Package</h4>
                          <p>Comprehensive management for multi-day tournaments and medium-sized sporting events.</p>
                          <p class="price">Starting at ₹1,50,000</p>
                      </div>
                      <div class="package">
                          <h4>Premium Package</h4>
                          <p>Full-scale sports event production with professional infrastructure and high-profile participants.</p>
                          <p class="price">Starting at ₹3,00,000</p>
                      </div>
                  </div>
                  
                  <div class="testimonials">
                      <h3>What Our Clients Say</h3>
                      <div class="testimonial">
                          <p>EventMaster organized our corporate cricket tournament with incredible precision. From team registration to the final awards ceremony, every aspect was handled professionally.</p>
                          <p class="client">- Amit Patel, HR Director, Global Enterprises</p>
                      </div>
                  </div>
                  
                  <div class="cta-section">
                      <h3>Ready to Host a Successful Sports Event?</h3>
                      <p>Contact us today for a consultation tailored to your sporting requirements.</p>
                  </div>
                  <div class="modal-form-section">
                    <h3>Inquire About Our Sports Event Services</h3>
                    <p>Fill out the form below and we'll get back to you with more details about our sports event packages.</p>
                    
                   <form id="sportsTournamentDetailsForm" class="modal-inquiry-form">
    <!-- Tournament Name -->
    <label for="eventName">Tournament Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your tournament (e.g. City Cup Cricket Championship)" required>
    <!-- Tournament Date -->
    <label for="eventDate">Start Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Tournament End Date -->
    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" name="endDate" required>
    <!-- Venue -->
    <label for="venue">Tournament Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your tournament venue" required>
    <!-- Organizing Body -->
    <label for="host">Organizing Body/Club:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of organizing club or association" required>
    <!-- Sport Type -->
    <label for="sportType">Sport Type:</label>
    <input type="text" id="sportType" name="sportType" placeholder="Enter the sport (e.g. Cricket, Football, Basketball)" required>
    <!-- Number of Teams -->
    <label for="teams">Number of Teams/Participants:</label>
    <input type="text" id="teams" name="teams" placeholder="Enter the number of teams or participants expected" required>
    <!-- Tournament Format -->
    <label for="format">Tournament Format:</label>
    <input type="text" id="format" name="format" placeholder="Enter tournament format (e.g. League, Knockout, Round Robin)" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="sports-essential" name="package" value="essential">
                <label for="sports-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹60,000</span>
                    <span class="package-desc">Basic tournament coordination with fixture management and venue setup</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="sports-premium" name="package" value="premium">
                <label for="sports-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹1,50,000</span>
                    <span class="package-desc">Comprehensive tournament management including referee coordination, equipment, and logistics</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="sports-luxury" name="package" value="luxury">
                <label for="sports-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹3,00,000</span>
                    <span class="package-desc">Premium sports tournament experience with live scoring, broadcasting, and professional setup</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your tournament requirements and expectations" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                  </div>
              </div>
          `
    break;

    case "conference":
    modalTitle.textContent = "Conference Event Services"
    modalContent.innerHTML = `
              ${createImageGrid("conference")}
              <div class="modal-service-details">
                  <p>Organize professional and impactful conferences with our specialized conference management services that ensure seamless execution and participant engagement.</p>
                  
                  <h3>Our Conference Services Include:</h3>
                  <ul>
                      <li>Venue selection and room layout planning</li>
                      <li>Speaker and panelist coordination</li>
                      <li>Registration and badge management</li>
                      <li>A/V and presentation setup</li>
                      <li>Conference materials and swag</li>
                      <li>Simultaneous session management</li>
                  </ul>
                  
                  <h3>Conference Packages</h3>
                  <div class="packages">
                      <div class="package">
                          <h4>Basic Package</h4>
                          <p>Essential services for small single-day conferences and seminars.</p>
                          <p class="price">Starting at ₹1,00,000</p>
                      </div>
                      <div class="package">
                          <h4>Standard Package</h4>
                          <p>Comprehensive management for medium-sized conferences with multiple tracks.</p>
                          <p class="price">Starting at ₹2,50,000</p>
                      </div>
                      <div class="package">
                          <h4>Premium Package</h4>
                          <p>Full-scale conference production with international speakers and advanced technologies.</p>
                          <p class="price">Starting at ₹5,00,000</p>
                      </div>
                  </div>
                  
                  <div class="testimonials">
                      <h3>What Our Clients Say</h3>
                      <div class="testimonial">
                          <p>EventMaster handled our annual industry conference with exceptional professionalism. Their ability to manage complex logistics while maintaining a focus on participant experience was outstanding.</p>
                          <p class="client">- Dr. Meena Gupta, Conference Chair, Healthcare Innovation Summit</p>
                      </div>
                  </div>
                  
                  <div class="cta-section">
                      <h3>Ready to Host a Successful Conference?</h3>
                      <p>Contact us today for a consultation tailored to your conference objectives.</p>
                  </div>
                  <div class="modal-form-section">
                    <h3>Inquire About Our Conference Services</h3>
                    <p>Fill out the form below and we'll get back to you with more details about our conference packages.</p>
                    
                    <form id="conferenceDetailsForm" class="modal-inquiry-form">
    <!-- Conference Name -->
    <label for="eventName">Conference Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your conference (e.g. Global Business Summit 2025)" required>
    <!-- Conference Date -->
    <label for="eventDate">Start Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Conference End Date -->
    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" name="endDate" required>
    <!-- Venue -->
    <label for="venue">Conference Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your conference venue" required>
    <!-- Organizing Institution -->
    <label for="host">Organizing Institution/Body:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of organizing institution or body" required>
    <!-- Conference Theme -->
    <label for="theme">Conference Theme:</label>
    <input type="text" id="theme" name="theme" placeholder="Enter the theme of the conference" required>
    <!-- Number of Delegates -->
    <label for="guests">Expected Number of Delegates:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of delegates expected" required>
    <!-- Countries Represented -->
    <label for="countries">Countries Represented:</label>
    <input type="text" id="countries" name="countries" placeholder="Enter the number of countries expected to participate" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="conference-essential" name="package" value="essential">
                <label for="conference-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹1,00,000</span>
                    <span class="package-desc">Basic conference coordination with venue setup and schedule management</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="conference-premium" name="package" value="premium">
                <label for="conference-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹2,50,000</span>
                    <span class="package-desc">Comprehensive conference planning including delegate accommodation, transportation, and networking events</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="conference-luxury" name="package" value="luxury">
                <label for="conference-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹5,00,000</span>
                    <span class="package-desc">Premium international conference experience with translation services, VIP handling, and custom event app</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your conference objectives and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                  </div>
              </div>
          `
    break;

    case "charity":
    modalTitle.textContent = "Charity Event Services"
    modalContent.innerHTML = `
              ${createImageGrid("charity")}
              <div class="modal-service-details">
                  <p>Organize impactful charity events that drive donations and awareness with our specialized fundraising event management services.</p>
                  
                  <h3>Our Charity Event Services Include:</h3>
                  <ul>
                      <li>Fundraising strategy development</li>
                      <li>Donor and sponsor coordination</li>
                      <li>Auction and pledge drive management</li>
                      <li>Volunteer recruitment and coordination</li>
                      <li>Impact storytelling and presentation</li>
                      <li>Donation collection and processing</li>
                  </ul>
                  
                  <h3>Charity Event Packages</h3>
                  <div class="packages">
                      <div class="package">
                          <h4>Basic Package</h4>
                          <p>Essential services for small-scale charity events and community fundraisers.</p>
                          <p class="price">Starting at ₹50,000</p>
                      </div>
                      <div class="package">
                          <h4>Standard Package</h4>
                          <p>Comprehensive management for medium-sized fundraising galas and charity dinners.</p>
                          <p class="price">Starting at ₹1,25,000</p>
                      </div>
                      <div class="package">
                          <h4>Premium Package</h4>
                          <p>Full-scale charity event production with celebrity appearances and extensive donor management.</p>
                          <p class="price">Starting at ₹3,00,000</p>
                      </div>
                  </div>
                  
                  <div class="testimonials">
                      <h3>What Our Clients Say</h3>
                      <div class="testimonial">
                          <p>EventMaster helped us raise 40% more funds than our previous year's gala. Their strategic approach to donor engagement and flawless execution made all the difference.</p>
                          <p class="client">- Sunita Rao, Director, Hope Foundation</p>
                      </div>
                  </div>
                  
                  <div class="cta-section">
                      <h3>Ready to Host an Impactful Charity Event?</h3>
                      <p>Contact us today for a consultation tailored to your fundraising goals.</p>
                  </div>
                  <div class="modal-form-section">
                    <h3>Inquire About Our Charity Event Services</h3>
                    <p>Fill out the form below and we'll get back to you with more details about our charity event packages.</p>
                    
                   <form id="charityEventDetailsForm" class="modal-inquiry-form">
    <!-- Event Name -->
    <label for="eventName">Charity Event Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your charity event (e.g. Hope for Children Gala)" required>
    <!-- Event Date -->
    <label for="eventDate">Event Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Event Time -->
    <label for="eventTime">Event Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    <!-- Venue -->
    <label for="venue">Event Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your event venue" required>
    <!-- Organization Name -->
    <label for="host">Organization/Charity Name:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of your charity or organization" required>
    <!-- Cause/Purpose -->
    <label for="cause">Cause/Purpose:</label>
    <input type="text" id="cause" name="cause" placeholder="Enter the cause or purpose of your charity event" required>
    <!-- Number of Attendees -->
    <label for="guests">Expected Attendance:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of attendees expected" required>
    <!-- Fundraising Goal -->
    <label for="goal">Fundraising Goal (₹):</label>
    <input type="text" id="goal" name="goal" placeholder="Enter your fundraising target amount" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="charity-essential" name="package" value="essential">
                <label for="charity-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹50,000</span>
                    <span class="package-desc">Basic charity event coordination with venue setup and guest management</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="charity-premium" name="package" value="premium">
                <label for="charity-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹1,25,000</span>
                    <span class="package-desc">Comprehensive charity event planning including publicity, donor management, and event programming</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="charity-luxury" name="package" value="luxury">
                <label for="charity-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹3,00,000</span>
                    <span class="package-desc">Premium charity event experience with celebrity engagement, media coverage, and donor recognition</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your charity event vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                  </div>
              </div>
          `
    break;

    case "art":
    modalTitle.textContent = "Art Exhibition Services"
    modalContent.innerHTML = `
              ${createImageGrid("art")}
              <div class="modal-service-details">
                  <p>Showcase artistic talent with professionally managed art exhibitions that create the perfect environment for artists and art enthusiasts.</p>
                  
                  <h3>Our Art Exhibition Services Include:</h3>
                  <ul>
                      <li>Gallery and exhibition space setup</li>
                      <li>Artwork display and lighting design</li>
                      <li>Artist coordination and scheduling</li>
                      <li>Catalog and exhibition material creation</li>
                      <li>Opening night reception planning</li>
                      <li>Artwork sales and transaction management</li>
                  </ul>
                  
                  <h3>Art Exhibition Packages</h3>
                  <div class="packages">
                      <div class="package">
                          <h4>Basic Package</h4>
                          <p>Essential services for small exhibitions featuring emerging artists.</p>
                          <p class="price">Starting at ₹40,000</p>
                      </div>
                      <div class="package">
                          <h4>Standard Package</h4>
                          <p>Comprehensive management for medium-sized exhibitions with multiple artists.</p>
                          <p class="price">Starting at ₹1,00,000</p>
                      </div>
                      <div class="package">
                          <h4>Premium Package</h4>
                          <p>Full-scale exhibition production with extensive promotional campaigns and VIP preview events.</p>
                          <p class="price">Starting at ₹2,50,000</p>
                      </div>
                  </div>
                  
                  <div class="testimonials">
                      <h3>What Our Clients Say</h3>
                      <div class="testimonial">
                          <p>EventMaster transformed our art exhibition into a must-attend cultural event. Their attention to lighting, display, and guest experience created the perfect atmosphere for showcasing our artists' work.</p>
                          <p class="client">- Rohan Sen, Curator, Modern Art Collective</p>
                      </div>
                  </div>
                  
                  <div class="cta-section">
                      <h3>Ready to Host a Stunning Art Exhibition?</h3>
                      <p>Contact us today for a consultation tailored to your artistic vision.</p>
                  </div>
                  <div class="modal-form-section">
                    <h3>Inquire About Our Art Exhibition Services</h3>
                    <p>Fill out the form below and we'll get back to you with more details about our art exhibition packages.</p>
                    
                  <form id="artExhibitionDetailsForm" class="modal-inquiry-form">
    <!-- Exhibition Name -->
    <label for="eventName">Exhibition Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your art exhibition (e.g. Modern Perspectives)" required>
    <!-- Exhibition Date -->
    <label for="eventDate">Start Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Exhibition End Date -->
    <label for="endDate">End Date:</label>
    <input type="date" id="endDate" name="endDate" required>
    <!-- Venue -->
    <label for="venue">Exhibition Venue:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter your exhibition venue" required>
    <!-- Gallery/Organizer -->
    <label for="host">Gallery/Organizing Entity:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of your gallery or organizing entity" required>
    <!-- Artists Featured -->
    <label for="artists">Artists Featured:</label>
    <textarea id="artists" name="artists" placeholder="List the artists whose work will be featured" required></textarea>
    <!-- Art Forms -->
    <label for="artForms">Art Forms Included:</label>
    <input type="text" id="artForms" name="artForms" placeholder="Enter the art forms to be exhibited (e.g. Paintings, Sculptures, Digital Art)" required>
    <!-- Expected Visitors -->
    <label for="guests">Expected Visitors:</label>
    <input type="text" id="guests" name="guests" placeholder="Enter the approximate number of visitors expected" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="art-essential" name="package" value="essential">
                <label for="art-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹40,000</span>
                    <span class="package-desc">Basic exhibition coordination with venue setup and visitor management</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="art-premium" name="package" value="premium">
                <label for="art-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹1,00,000</span>
                    <span class="package-desc">Comprehensive exhibition planning including lighting design, curation assistance, and promotional materials</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="art-luxury" name="package" value="luxury">
                <label for="art-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹2,50,000</span>
                    <span class="package-desc">Premium art exhibition experience with custom installation, catalog production, and opening gala</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your exhibition vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                  </div>
              </div>
          `
    break;

    case "marathon":
    modalTitle.textContent = "Marathon Event Services"
    modalContent.innerHTML = `
              ${createImageGrid("marathon")}
              <div class="modal-service-details">
                  <p>Organize successful marathons and running events that inspire participants and create community engagement with our specialized race management services.</p>
                  
                  <h3>Our Marathon Services Include:</h3>
                  <ul>
                      <li>Route planning and certification</li>
                      <li>Runner registration and bib management</li>
                      <li>Timing and results systems</li>
                      <li>Water and aid stations coordination</li>
                      <li>Medical and safety support</li>
                      <li>Finisher medals and awards ceremonies</li>
                  </ul>
                  
                  <h3>Marathon Event Packages</h3>
                  <div class="packages">
                      <div class="package">
                          <h4>Basic Package</h4>
                          <p>Essential services for community fun runs and 5K events.</p>
                          <p class="price">Starting at ₹75,000</p>
                      </div>
                      <div class="package">
                          <h4>Standard Package</h4>
                          <p>Comprehensive management for half-marathons and 10K races with professional timing.</p>
                          <p class="price">Starting at ₹2,00,000</p>
                      </div>
                      <div class="package">
                          <h4>Premium Package</h4>
                          <p>Full-scale marathon production with international standards, elite runner management, and expo setup.</p>
                          <p class="price">Starting at ₹5,00,000</p>
                      </div>
                  </div>
                  
                  <div class="testimonials">
                      <h3>What Our Clients Say</h3>
                      <div class="testimonial">
                          <p>EventMaster delivered an exceptional marathon experience. From registration to post-race celebrations, their attention to detail ensured our runners had a safe and memorable event.</p>
                          <p class="client">- Vikram Singh, Director, City Marathon Foundation</p>
                      </div>
                  </div>
                  
                  <div class="cta-section">
                      <h3>Ready to Host a Successful Marathon?</h3>
                      <p>Contact us today for a consultation tailored to your running event needs.</p>
                  </div>
                  <div class="modal-form-section">
                    <h3>Inquire About Our Marathon Services</h3>
                    <p>Fill out the form below and we'll get back to you with more details about our marathon event packages.</p>
                    
                   <form id="marathonRaceDetailsForm" class="modal-inquiry-form">
    <!-- Race Name -->
    <label for="eventName">Race Name/Title:</label>
    <input type="text" id="eventName" name="eventName" placeholder="Enter a name for your race event (e.g. City Half Marathon)" required>
    <!-- Race Date -->
    <label for="eventDate">Event Date:</label>
    <input type="date" id="eventDate" name="eventDate" required>
    <!-- Race Start Time -->
    <label for="eventTime">Start Time:</label>
    <input type="time" id="eventTime" name="eventTime" required>
    <!-- Location -->
    <label for="venue">Race Location/Route:</label>
    <input type="text" id="venue" name="venue" placeholder="Enter the race location or route" required>
    <!-- Organizing Body -->
    <label for="host">Organizing Body/Club:</label>
    <input type="text" id="host" name="host" placeholder="Enter the name of organizing club or association" required>
    <!-- Race Type -->
    <label for="raceType">Race Type:</label>
    <input type="text" id="raceType" name="raceType" placeholder="Enter race type (e.g. Marathon, Half Marathon, 10K)" required>
    <!-- Number of Participants -->
    <label for="participants">Expected Participants:</label>
    <input type="text" id="participants" name="participants" placeholder="Enter the approximate number of runners expected" required>
    <!-- Race Categories -->
    <label for="categories">Race Categories:</label>
    <input type="text" id="categories" name="categories" placeholder="Enter race categories (e.g. Elite, Open, Age Groups)" required>
    
    <div class="package-selection">
        <h4>Select Your Package</h4>
        <div class="package-options">
            <div class="package-option">
                <input type="radio" id="marathon-essential" name="package" value="essential">
                <label for="marathon-essential">
                    <span class="package-name">Essential Package</span>
                    <span class="package-price">₹75,000</span>
                    <span class="package-desc">Basic race coordination with route management and participant registration</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="marathon-premium" name="package" value="premium">
                <label for="marathon-premium">
                    <span class="package-name">Premium Package</span>
                    <span class="package-price">₹2,00,000</span>
                    <span class="package-desc">Comprehensive race planning including timing systems, water stations, and medical support</span>
                </label>
            </div>
            <div class="package-option">
                <input type="radio" id="marathon-luxury" name="package" value="luxury">
                <label for="marathon-luxury">
                    <span class="package-name">Luxury Package</span>
                    <span class="package-price">₹5,00,000</span>
                    <span class="package-desc">Premium marathon experience with live tracking, race expo, and professional event coverage</span>
                </label>
            </div>
        </div>
    </div>
    
    <textarea name="message" placeholder="Tell us more about your race event vision and requirements" rows="4" required></textarea>
    <button type="submit" class="btn2">Submit Inquiry</button>
</form>
<div id="form-msg"></div>
                  </div>
              </div>
          `
    break;

    
      modalTitle.textContent =
        capitalizeFirstLetter(serviceType) + " Event Services";
      modalContent.innerHTML = `
                  ${createImageGrid(serviceType)}
                  <div class="modal-service-details">
                      <p>Our ${serviceType} event services are currently being updated with new packages and offerings.</p>
                      <p>Please contact us directly for detailed information about our ${serviceType} event management services.</p>
                      
                      <div class="cta-section">
                          <h3>Interested in Our ${capitalizeFirstLetter(
                            serviceType
                          )} Event Services?</h3>
                          <p>Reach out to our team for a customized proposal tailored to your specific needs.</p>
                          <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us</a>
                      </div>
                  </div>
              `;
      break;

    default:
      modalTitle.textContent = "Service Information";
      modalContent.innerHTML = `
                  <p>Please contact us for more information about this service.</p>
                  <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us</a>
              `;
  }

  // Display the modal
  modal.style.display = "block";

  // Prevent scrolling on the body when modal is open
  document.body.style.overflow = "hidden";
}

function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  modal.style.display = "none";

  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("serviceModal");
  if (event.target === modal) {
    closeServiceModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
  }
});
// Form handling
document.addEventListener("click", function (e) {
  if (e.target && e.target.matches(".modal-inquiry-form button")) {
    e.preventDefault();
    const form = e.target.closest("form");
    const formMsg = form.nextElementSibling;

    // Get form data
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the data to your server
    // For demonstration, we'll just show a success message
    console.log("Form data:", formObject);

    // Display success message
    formMsg.textContent =
      "Thank you for your inquiry! We'll contact you shortly.";
    formMsg.style.color = "#61b752";
    formMsg.style.display = "block";
    formMsg.style.padding = "15px 0";

    // Reset form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      formMsg.style.display = "none";
    }, 5000);
  }
});
