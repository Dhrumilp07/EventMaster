document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    // Set the first tab content as active by default
    tabContents[0].classList.add('active-tab');

    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Remove active class from all tab links
            tabLinks.forEach(t => t.classList.remove('active-link'));
        
            // Remove active class from all tab contents
            tabContents.forEach(content => content.classList.remove('active-tab'));
        
            // Add active class to clicked tab link
            this.classList.add('active-link');
        
            // Add active class to corresponding tab content
            tabContents[index].classList.add('active-tab');
        });
    });
});