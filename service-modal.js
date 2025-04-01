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
                          </div>
                            <div class="modal-form-section">
                            <h3>Inquire About Our Wedding Services</h3>
                            <p>Fill out the form below and we'll get back to you with more details about our wedding packages.</p>
                            
                            <form class="modal-inquiry-form">
                              <input type="text" name="name" placeholder="Your Name" required>
                              <input type="email" name="email" placeholder="Your Email" required>
                              <input type="tel" name="phone" placeholder="Your Phone Number">
                              <input type="text" name="weddingDate" placeholder="Wedding Date">
                              <input type="hidden" name="serviceType" value="wedding">
                              
                              <div class="package-selection">
                                <h4>Select Your Package</h4>
                                <div class="package-options">
                                  <div class="package-option">
                                    <input type="radio" id="wedding-essential" name="package" value="essential">
                                    <label for="wedding-essential">
                                      <span class="package-name">Essential Package</span>
                                      <span class="package-price">₹50,000</span>
                                      <span class="package-desc">Day-of coordination for couples who have most details planned</span>
                                    </label>
                                  </div>
                                  <div class="package-option">
                                    <input type="radio" id="wedding-premium" name="package" value="premium">
                                    <label for="wedding-premium">
                                      <span class="package-name">Premium Package</span>
                                      <span class="package-price">₹1,50,000</span>
                                      <span class="package-desc">Comprehensive planning from engagement to reception</span>
                                    </label>
                                  </div>
                                  <div class="package-option">
                                    <input type="radio" id="wedding-luxury" name="package" value="luxury">
                                    <label for="wedding-luxury">
                                      <span class="package-name">Luxury Package</span>
                                      <span class="package-price">₹3,00,000</span>
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
                                
                                <form class="modal-inquiry-form">
                                  <input type="text" name="name" placeholder="Your Name" required>
                                  <input type="email" name="email" placeholder="Your Email" required>
                                  <input type="tel" name="phone" placeholder="Your Phone Number">
                                  <input type="text" name="eventDate" placeholder="Event Date">
                                  <input type="hidden" name="serviceType" value="concert">
                                  
                                  <div class="package-selection">
                                    <h4>Select Your Package</h4>
                                    <div class="package-options">
                                      <div class="package-option">
                                        <input type="radio" id="concert-standard" name="package" value="standard">
                                        <label for="concert-standard">
                                          <span class="package-name">Standard Package</span>
                                          <span class="package-price">₹1,00,000</span>
                                          <span class="package-desc">Basic setup for smaller venues and local performances</span>
                                        </label>
                                      </div>
                                      <div class="package-option">
                                        <input type="radio" id="concert-professional" name="package" value="professional">
                                        <label for="concert-professional">
                                          <span class="package-name">Professional Package</span>
                                          <span class="package-price">₹3,50,000</span>
                                          <span class="package-desc">Comprehensive concert production with premium sound and lighting</span>
                                        </label>
                                      </div>
                                      <div class="package-option">
                                        <input type="radio" id="concert-arena" name="package" value="arena">
                                        <label for="concert-arena">
                                          <span class="package-name">Arena Package</span>
                                          <span class="package-price">₹8,00,000</span>
                                          <span class="package-desc">Large-scale concert production with advanced technical setup</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <textarea name="message" placeholder="Tell us more about your concert requirements" rows="4" required></textarea>
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
                                    
                                    <form class="modal-inquiry-form">
                                      <input type="text" name="name" placeholder="Your Name" required>
                                      <input type="email" name="email" placeholder="Your Email" required>
                                      <input type="tel" name="phone" placeholder="Your Phone Number">
                                      <input type="text" name="eventDate" placeholder="Event Date">
                                      <input type="hidden" name="serviceType" value="corporate">
                                      
                                      <div class="package-selection">
                                        <h4>Select Your Package</h4>
                                        <div class="package-options">
                                          <div class="package-option">
                                            <input type="radio" id="corporate-executive" name="package" value="executive">
                                            <label for="corporate-executive">
                                              <span class="package-name">Executive Package</span>
                                              <span class="package-price">₹75,000</span>
                                              <span class="package-desc">Essential services for smaller corporate meetings and presentations</span>
                                            </label>
                                          </div>
                                          <div class="package-option">
                                            <input type="radio" id="corporate-premium" name="package" value="premium">
                                            <label for="corporate-premium">
                                              <span class="package-name">Premium Package</span>
                                              <span class="package-price">₹2,00,000</span>
                                              <span class="package-desc">Comprehensive planning for medium-sized corporate events with branding</span>
                                            </label>
                                          </div>
                                          <div class="package-option">
                                            <input type="radio" id="corporate-enterprise" name="package" value="enterprise">
                                            <label for="corporate-enterprise">
                                              <span class="package-name">Enterprise Package</span>
                                              <span class="package-price">₹5,00,000</span>
                                              <span class="package-desc">Full-scale event management for large corporate conferences and galas</span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <textarea name="message" placeholder="Tell us more about your corporate event requirements" rows="4" required></textarea>
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
                                        
                                        <form class="modal-inquiry-form">
                                          <input type="text" name="name" placeholder="Your Name" required>
                                          <input type="email" name="email" placeholder="Your Email" required>
                                          <input type="tel" name="phone" placeholder="Your Phone Number">
                                          <input type="text" name="eventDate" placeholder="Event Date">
                                          <input type="hidden" name="serviceType" value="birthday">
                                          
                                          <div class="package-selection">
                                            <h4>Select Your Package</h4>
                                            <div class="package-options">
                                              <div class="package-option">
                                                <input type="radio" id="birthday-fun" name="package" value="fun">
                                                <label for="birthday-fun">
                                                  <span class="package-name">Fun Package</span>
                                                  <span class="package-price">₹25,000</span>
                                                  <span class="package-desc">Basic birthday setup with essential decorations and coordination</span>
                                                </label>
                                              </div>
                                              <div class="package-option">
                                                <input type="radio" id="birthday-celebration" name="package" value="celebration">
                                                <label for="birthday-celebration">
                                                  <span class="package-name">Celebration Package</span>
                                                  <span class="package-price">₹50,000</span>
                                                  <span class="package-desc">Comprehensive birthday planning with themed decorations and entertainment</span>
                                                </label>
                                              </div>
                                              <div class="package-option">
                                                <input type="radio" id="birthday-extravaganza" name="package" value="extravaganza">
                                                <label for="birthday-extravaganza">
                                                  <span class="package-name">Extravaganza Package</span>
                                                  <span class="package-price">₹1,00,000</span>
                                                  <span class="package-desc">Luxury birthday experience with premium venue, custom theme, and exclusive entertainment</span>
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
                                      ${createImageGrid("collegefest")}
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
                                            
                                            <form class="modal-inquiry-form">
                                              <input type="text" name="name" placeholder="Your Name" required>
                                              <input type="email" name="email" placeholder="Your Email" required>
                                              <input type="tel" name="phone" placeholder="Your Phone Number">
                                              <input type="text" name="eventDate" placeholder="Event Date">
                                              <input type="hidden" name="serviceType" value="collegefest">
                                              
                                              <div class="package-selection">
                                                <h4>Select Your Package</h4>
                                                <div class="package-options">
                                                  <div class="package-option">
                                                    <input type="radio" id="collegefest-basic" name="package" value="basic">
                                                    <label for="collegefest-basic">
                                                      <span class="package-name">Basic Package</span>
                                                      <span class="package-price">₹50,000</span>
                                                      <span class="package-desc">Essential services for department-level events and small campus festivals</span>
                                                    </label>
                                                  </div>
                                                  <div class="package-option">
                                                    <input type="radio" id="collegefest-standard" name="package" value="standard">
                                                    <label for="collegefest-standard">
                                                      <span class="package-name">Standard Package</span>
                                                      <span class="package-price">₹1,50,000</span>
                                                      <span class="package-desc">Comprehensive festival management with multiple events and performances</span>
                                                    </label>
                                                  </div>
                                                  <div class="package-option">
                                                    <input type="radio" id="collegefest-premium" name="package" value="premium">
                                                    <label for="collegefest-premium">
                                                      <span class="package-name">Premium Package</span>
                                                      <span class="package-price">₹3,50,000</span>
                                                      <span class="package-desc">Full-scale festival production with celebrity performances and advanced technical setup</span>
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              <textarea name="message" placeholder="Tell us more about your college festival requirements" rows="4" required></textarea>
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
                  ${createImageGrid("socialgathering")}
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
                        
                        <form class="modal-inquiry-form">
                          <input type="text" name="name" placeholder="Your Name" required>
                          <input type="email" name="email" placeholder="Your Email" required>
                          <input type="tel" name="phone" placeholder="Your Phone Number">
                          <input type="text" name="eventDate" placeholder="Event Date">
                          <input type="hidden" name="serviceType" value="socialgathering">
                          
                          <div class="package-selection">
                            <h4>Select Your Package</h4>
                            <div class="package-options">
                              <div class="package-option">
                                <input type="radio" id="socialgathering-basic" name="package" value="basic">
                                <label for="socialgathering-basic">
                                  <span class="package-name">Basic Package</span>
                                  <span class="package-price">₹25,000</span>
                                  <span class="package-desc">Essential services for intimate gatherings of up to 50 guests</span>
                                </label>
                              </div>
                              <div class="package-option">
                                <input type="radio" id="socialgathering-standard" name="package" value="standard">
                                <label for="socialgathering-standard">
                                  <span class="package-name">Standard Package</span>
                                  <span class="package-price">₹60,000</span>
                                  <span class="package-desc">Comprehensive planning for medium-sized gatherings of up to 100 guests</span>
                                </label>
                              </div>
                              <div class="package-option">
                                <input type="radio" id="socialgathering-premium" name="package" value="premium">
                                <label for="socialgathering-premium">
                                  <span class="package-name">Premium Package</span>
                                  <span class="package-price">₹1,20,000</span>
                                  <span class="package-desc">Luxury experience for large gatherings with premium catering and entertainment</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          
                          <textarea name="message" placeholder="Tell us more about your social gathering requirements" rows="4" required></textarea>
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
                            
                            <form class="modal-inquiry-form">
                              <input type="text" name="name" placeholder="Your Name" required>
                              <input type="email" name="email" placeholder="Your Email" required>
                              <input type="tel" name="phone" placeholder="Your Phone Number">
                              <input type="text" name="eventDate" placeholder="Event Date">
                              <input type="hidden" name="serviceType" value="tech">
                              
                              <div class="package-selection">
                                <h4>Select Your Package</h4>
                                <div class="package-options">
                                  <div class="package-option">
                                    <input type="radio" id="tech-basic" name="package" value="basic">
                                    <label for="tech-basic">
                                      <span class="package-name">Basic Package</span>
                                      <span class="package-price">₹75,000</span>
                                      <span class="package-desc">Essential services for small tech meetups and workshops</span>
                                    </label>
                                  </div>
                                  <div class="package-option">
                                    <input type="radio" id="tech-standard" name="package" value="standard">
                                    <label for="tech-standard">
                                      <span class="package-name">Standard Package</span>
                                      <span class="package-price">₹2,00,000</span>
                                      <span class="package-desc">Comprehensive management for medium-sized tech conferences and hackathons</span>
                                    </label>
                                  </div>
                                  <div class="package-option">
                                    <input type="radio" id="tech-premium" name="package" value="premium">
                                    <label for="tech-premium">
                                      <span class="package-name">Premium Package</span>
                                      <span class="package-price">₹5,00,000</span>
                                      <span class="package-desc">Full-scale tech event production with advanced technical setup and industry leaders</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              
                              <textarea name="message" placeholder="Tell us more about your tech event requirements" rows="4" required></textarea>
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
                    
                    <form class="modal-inquiry-form">
                      <input type="text" name="name" placeholder="Your Name" required>
                      <input type="email" name="email" placeholder="Your Email" required>
                      <input type="tel" name="phone" placeholder="Your Phone Number">
                      <input type="text" name="eventDate" placeholder="Event Date">
                      <input type="hidden" name="serviceType" value="sports">
                      
                      <div class="package-selection">
                        <h4>Select Your Package</h4>
                        <div class="package-options">
                          <div class="package-option">
                            <input type="radio" id="sports-basic" name="package" value="basic">
                            <label for="sports-basic">
                              <span class="package-name">Basic Package</span>
                              <span class="package-price">₹60,000</span>
                              <span class="package-desc">Essential services for single-day tournaments and small sporting events</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="sports-standard" name="package" value="standard">
                            <label for="sports-standard">
                              <span class="package-name">Standard Package</span>
                              <span class="package-price">₹1,50,000</span>
                              <span class="package-desc">Comprehensive management for multi-day tournaments and medium-sized sporting events</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="sports-premium" name="package" value="premium">
                            <label for="sports-premium">
                              <span class="package-name">Premium Package</span>
                              <span class="package-price">₹3,00,000</span>
                              <span class="package-desc">Full-scale sports event production with professional infrastructure and high-profile participants</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <textarea name="message" placeholder="Tell us more about your sports event requirements" rows="4" required></textarea>
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
                    
                    <form class="modal-inquiry-form">
                      <input type="text" name="name" placeholder="Your Name" required>
                      <input type="email" name="email" placeholder="Your Email" required>
                      <input type="tel" name="phone" placeholder="Your Phone Number">
                      <input type="text" name="eventDate" placeholder="Event Date">
                      <input type="hidden" name="serviceType" value="conference">
                      
                      <div class="package-selection">
                        <h4>Select Your Package</h4>
                        <div class="package-options">
                          <div class="package-option">
                            <input type="radio" id="conference-basic" name="package" value="basic">
                            <label for="conference-basic">
                              <span class="package-name">Basic Package</span>
                              <span class="package-price">₹1,00,000</span>
                              <span class="package-desc">Essential services for small single-day conferences and seminars</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="conference-standard" name="package" value="standard">
                            <label for="conference-standard">
                              <span class="package-name">Standard Package</span>
                              <span class="package-price">₹2,50,000</span>
                              <span class="package-desc">Comprehensive management for medium-sized conferences with multiple tracks</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="conference-premium" name="package" value="premium">
                            <label for="conference-premium">
                              <span class="package-name">Premium Package</span>
                              <span class="package-price">₹5,00,000</span>
                              <span class="package-desc">Full-scale conference production with international speakers and advanced technologies</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <textarea name="message" placeholder="Tell us more about your conference requirements" rows="4" required></textarea>
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
                    
                    <form class="modal-inquiry-form">
                      <input type="text" name="name" placeholder="Your Name" required>
                      <input type="email" name="email" placeholder="Your Email" required>
                      <input type="tel" name="phone" placeholder="Your Phone Number">
                      <input type="text" name="eventDate" placeholder="Event Date">
                      <input type="hidden" name="serviceType" value="charity">
                      
                      <div class="package-selection">
                        <h4>Select Your Package</h4>
                        <div class="package-options">
                          <div class="package-option">
                            <input type="radio" id="charity-basic" name="package" value="basic">
                            <label for="charity-basic">
                              <span class="package-name">Basic Package</span>
                              <span class="package-price">₹50,000</span>
                              <span class="package-desc">Essential services for small-scale charity events and community fundraisers</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="charity-standard" name="package" value="standard">
                            <label for="charity-standard">
                              <span class="package-name">Standard Package</span>
                              <span class="package-price">₹1,25,000</span>
                              <span class="package-desc">Comprehensive management for medium-sized fundraising galas and charity dinners</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="charity-premium" name="package" value="premium">
                            <label for="charity-premium">
                              <span class="package-name">Premium Package</span>
                              <span class="package-price">₹3,00,000</span>
                              <span class="package-desc">Full-scale charity event production with celebrity appearances and extensive donor management</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <textarea name="message" placeholder="Tell us more about your charity event requirements" rows="4" required></textarea>
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
              ${createImageGrid("artexhibition")}
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
                    
                    <form class="modal-inquiry-form">
                      <input type="text" name="name" placeholder="Your Name" required>
                      <input type="email" name="email" placeholder="Your Email" required>
                      <input type="tel" name="phone" placeholder="Your Phone Number">
                      <input type="text" name="eventDate" placeholder="Event Date">
                      <input type="hidden" name="serviceType" value="artexhibition">
                      
                      <div class="package-selection">
                        <h4>Select Your Package</h4>
                        <div class="package-options">
                          <div class="package-option">
                            <input type="radio" id="artexhibition-basic" name="package" value="basic">
                            <label for="artexhibition-basic">
                              <span class="package-name">Basic Package</span>
                              <span class="package-price">₹40,000</span>
                              <span class="package-desc">Essential services for small exhibitions featuring emerging artists</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="artexhibition-standard" name="package" value="standard">
                            <label for="artexhibition-standard">
                              <span class="package-name">Standard Package</span>
                              <span class="package-price">₹1,00,000</span>
                              <span class="package-desc">Comprehensive management for medium-sized exhibitions with multiple artists</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="artexhibition-premium" name="package" value="premium">
                            <label for="artexhibition-premium">
                              <span class="package-name">Premium Package</span>
                              <span class="package-price">₹2,50,000</span>
                              <span class="package-desc">Full-scale exhibition production with extensive promotional campaigns and VIP preview events</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <textarea name="message" placeholder="Tell us more about your art exhibition requirements" rows="4" required></textarea>
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
                    
                    <form class="modal-inquiry-form">
                      <input type="text" name="name" placeholder="Your Name" required>
                      <input type="email" name="email" placeholder="Your Email" required>
                      <input type="tel" name="phone" placeholder="Your Phone Number">
                      <input type="text" name="eventDate" placeholder="Event Date">
                      <input type="hidden" name="serviceType" value="marathon">
                      
                      <div class="package-selection">
                        <h4>Select Your Package</h4>
                        <div class="package-options">
                          <div class="package-option">
                            <input type="radio" id="marathon-basic" name="package" value="basic">
                            <label for="marathon-basic">
                              <span class="package-name">Basic Package</span>
                              <span class="package-price">₹75,000</span>
                              <span class="package-desc">Essential services for community fun runs and 5K events</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="marathon-standard" name="package" value="standard">
                            <label for="marathon-standard">
                              <span class="package-name">Standard Package</span>
                              <span class="package-price">₹2,00,000</span>
                              <span class="package-desc">Comprehensive management for half-marathons and 10K races with professional timing</span>
                            </label>
                          </div>
                          <div class="package-option">
                            <input type="radio" id="marathon-premium" name="package" value="premium">
                            <label for="marathon-premium">
                              <span class="package-name">Premium Package</span>
                              <span class="package-price">₹5,00,000</span>
                              <span class="package-desc">Full-scale marathon production with international standards, elite runner management, and expo setup</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <textarea name="message" placeholder="Tell us more about your marathon event requirements" rows="4" required></textarea>
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
