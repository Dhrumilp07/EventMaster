// Function to handle opening service modals
function openServiceModal(serviceName) {
    // Get the modal element
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    
    // Set content based on which service was clicked
    if (serviceName === "wedding") {
        modalTitle.textContent = "Wedding Planning Services";
        modalContent.innerHTML = `
            <div class="modal-service-details">
                <img src="images/wedding-details.png" alt="Wedding Planning Details" class="modal-img">
                <h3>Comprehensive Wedding Planning</h3>
                <p>Our wedding planning services include everything you need to make your special day perfect:</p>
                <ul>
                    <li><strong>Venue Selection:</strong> We'll help you find and secure the perfect venue that matches your vision and budget.</li>
                    <li><strong>Vendor Coordination:</strong> From photographers to caterers, we handle all vendor communications and logistics.</li>
                    <li><strong>Theme Development:</strong> We'll work with you to create a cohesive theme that reflects your personalities and love story.</li>
                    <li><strong>Decor Planning:</strong> Custom decorations, floral arrangements, lighting, and ambiance design.</li>
                    <li><strong>Timeline Management:</strong> We create and manage a detailed timeline to ensure everything runs smoothly.</li>
                    <li><strong>Budget Management:</strong> We help you allocate your budget effectively and track all expenses.</li>
                    <li><strong>Guest Management:</strong> From invitations to seating arrangements, we handle all guest-related logistics.</li>
                    <li><strong>Day-of Coordination:</strong> Our team will be there on your wedding day to manage every detail.</li>
                </ul>
                <h3>Our Wedding Packages</h3>
                <div class="packages">
                    <div class="package">
                        <h4>Essential Package</h4>
                        <p>Perfect for couples who have done most of the planning but need help with final coordination.</p>
                        <p class="price">Starting at ₹50,000</p>
                    </div>
                    <div class="package">
                        <h4>Premium Package</h4>
                        <p>Our most popular option, including partial planning and full day-of coordination.</p>
                        <p class="price">Starting at ₹1,25,000</p>
                    </div>
                    <div class="package">
                        <h4>Luxury Package</h4>
                        <p>Full-service planning from engagement to honeymoon, with premium vendor access.</p>
                        <p class="price">Starting at ₹3,00,000</p>
                    </div>
                </div>
                <div class="testimonials">
                    <h3>What Our Couples Say</h3>
                    <div class="testimonial">
                        <p>"EventMaster made our wedding day absolutely perfect. They handled every detail with such care and professionalism."</p>
                        <p class="client">- Priya & Rahul</p>
                    </div>
                </div>
                <div class="cta-section">
                    <h3>Ready to start planning your dream wedding?</h3>
                    <p>Contact us today for a free consultation and let's bring your vision to life!</p>
                    <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us Now</a>
                </div>
            </div>
        `;
    } else if (serviceName === "concert") {
        modalTitle.textContent = "Concert Management Services";
        modalContent.innerHTML = `
            <div class="modal-service-details">
                <img src="images/concert-details.png" alt="Concert Management Details" class="modal-img">
                <h3>Professional Concert Management</h3>
                <p>With our concert management services, we handle every aspect of your music event:</p>
                <ul>
                    <li><strong>Artist Management:</strong> Booking, contracts, rider fulfillment, and artist hospitality.</li>
                    <li><strong>Venue Coordination:</strong> Finding the perfect venue and managing all logistics.</li>
                    <li><strong>Stage Design:</strong> Creative stage setups tailored to your event's theme and needs.</li>
                    <li><strong>Sound & Lighting:</strong> Professional audio-visual solutions for optimal performance quality.</li>
                    <li><strong>Ticketing & Entry Management:</strong> Streamlined systems for ticket sales and event entry.</li>
                    <li><strong>Security Planning:</strong> Comprehensive security measures to ensure a safe event.</li>
                    <li><strong>Crowd Management:</strong> Strategies to enhance audience experience and flow.</li>
                    <li><strong>Marketing & Promotion:</strong> Custom marketing strategies to maximize attendance.</li>
                </ul>
                <h3>Our Concert Packages</h3>
                <div class="packages">
                    <div class="package">
                        <h4>Small Venue Package</h4>
                        <p>Perfect for intimate shows up to 500 attendees.</p>
                        <p class="price">Starting at ₹1,00,000</p>
                    </div>
                    <div class="package">
                        <h4>Mid-Size Event Package</h4>
                        <p>Comprehensive management for events with 500-2000 attendees.</p>
                        <p class="price">Starting at ₹3,50,000</p>
                    </div>
                    <div class="package">
                        <h4>Major Concert Package</h4>
                        <p>Full-scale production and management for large events with 2000+ attendees.</p>
                        <p class="price">Starting at ₹10,00,000</p>
                    </div>
                </div>
                <div class="cta-section">
                    <h3>Ready to create an unforgettable concert experience?</h3>
                    <p>Contact our team today to discuss your vision!</p>
                    <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Get Started</a>
                </div>
            </div>
        `;
    } else if (serviceName === "corporate") {
        modalTitle.textContent = "Corporate Event Services";
        modalContent.innerHTML = `
            <div class="modal-service-details">
                <img src="images/corporate-details.png" alt="Corporate Event Details" class="modal-img">
                <h3>Professional Corporate Event Management</h3>
                <p>Our corporate event services are designed to help your business make a lasting impression:</p>
                <ul>
                    <li><strong>Conference Planning:</strong> Full-service conference organization with agenda planning.</li>
                    <li><strong>Product Launches:</strong> Creative product unveiling events that generate buzz.</li>
                    <li><strong>Team Building:</strong> Engaging activities to strengthen team bonds and morale.</li>
                    <li><strong>Award Ceremonies:</strong> Elegant recognition events that celebrate achievements.</li>
                    <li><strong>Corporate Retreats:</strong> Productive and rejuvenating retreats for your team.</li>
                    <li><strong>Trade Shows:</strong> Standout booth design and trade show logistics.</li>
                    <li><strong>Executive Meetings:</strong> Seamless planning for board meetings and executive sessions.</li>
                    <li><strong>Corporate Milestone Celebrations:</strong> Anniversary and achievement celebrations.</li>
                </ul>
                <h3>Our Corporate Packages</h3>
                <div class="packages">
                    <div class="package">
                        <h4>Essential Business Package</h4>
                        <p>Basic event management for smaller corporate gatherings.</p>
                        <p class="price">Starting at ₹75,000</p>
                    </div>
                    <div class="package">
                        <h4>Professional Conference Package</h4>
                        <p>Comprehensive management for medium-sized corporate events.</p>
                        <p class="price">Starting at ₹2,50,000</p>
                    </div>
                    <div class="package">
                        <h4>Premium Corporate Package</h4>
                        <p>Full-service management for major corporate functions.</p>
                        <p class="price">Starting at ₹5,00,000</p>
                    </div>
                </div>
                <div class="testimonials">
                    <h3>Client Testimonials</h3>
                    <div class="testimonial">
                        <p>"EventMaster transformed our annual conference into an exceptional experience that our employees and clients are still talking about."</p>
                        <p class="client">- Suresh K., CEO, TechInnovate</p>
                    </div>
                </div>
                <div class="cta-section">
                    <h3>Ready to elevate your corporate events?</h3>
                    <p>Contact us for a consultation tailored to your business needs.</p>
                    <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Schedule Consultation</a>
                </div>
            </div>
        `;
    } else if (serviceName === "birthday") {
        modalTitle.textContent = "Birthday Party Services";
        modalContent.innerHTML = `
            <div class="modal-service-details">
                <img src="images/birthday-details.png" alt="Birthday Party Details" class="modal-img">
                <h3>Memorable Birthday Celebrations</h3>
                <p>Let us create a birthday celebration that reflects your personality and style:</p>
                <ul>
                    <li><strong>Custom Theme Development:</strong> Unique themes tailored to the guest of honor.</li>
                    <li><strong>Venue Selection:</strong> Finding the perfect space for your celebration.</li>
                    <li><strong>Decorations:</strong> Creative and Instagram-worthy decor setups.</li>
                    <li><strong>Entertainment:</strong> DJs, live music, performers, and activities.</li>
                    <li><strong>Catering:</strong> Delicious food and beverage options to match your theme.</li>
                    <li><strong>Cake & Desserts:</strong> Custom cakes and sweet treats that wow.</li>
                    <li><strong>Photography:</strong> Capturing all the special moments of your celebration.</li>
                    <li><strong>Guest Management:</strong> Invitations, RSVPs, and guest experience coordination.</li>
                </ul>
                <h3>Our Birthday Packages</h3>
                <div class="packages">
                    <div class="package">
                        <h4>Kids Birthday Package</h4>
                        <p>Fun-filled celebrations for children with activities and entertainment.</p>
                        <p class="price">Starting at ₹25,000</p>
                    </div>
                    <div class="package">
                        <h4>Teen/Young Adult Package</h4>
                        <p>Trendy celebrations with music, activities, and photo-worthy setups.</p>
                        <p class="price">Starting at ₹40,000</p>
                    </div>
                    <div class="package">
                        <h4>Milestone Birthday Package</h4>
                        <p>Elegant celebrations for milestone birthdays with premium amenities.</p>
                        <p class="price">Starting at ₹75,000</p>
                    </div>
                </div>
                <div class="testimonials">
                    <h3>Happy Birthday Memories</h3>
                    <div class="testimonial">
                        <p>"My daughter's 16th birthday party was absolutely magical! EventMaster took care of every detail and created an unforgettable event."</p>
                        <p class="client">- Meera S.</p>
                    </div>
                </div>
                <div class="cta-section">
                    <h3>Ready to plan an unforgettable birthday?</h3>
                    <p>Contact us today to start planning the perfect celebration!</p>
                    <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Start Planning</a>
                </div>
            </div>
        `;
    } else {
        // Generic content for other services
        modalTitle.textContent = "Our Services";
        modalContent.innerHTML = `
            <div class="modal-service-details">
                <p>Please contact us for more information about this service.</p>
                <a href="#contact" class="modal-btn" onclick="closeServiceModal()">Contact Us</a>
            </div>
        `;
    }
    
    // Display the modal
    modal.style.display = "block";
    
    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeServiceModal();
        }
    }
}

// Function to close the modal
function closeServiceModal() {
    document.getElementById("serviceModal").style.display = "none";
}