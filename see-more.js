document.addEventListener('DOMContentLoaded', function() {
    // Services "See More" functionality
    const servicesSection = document.querySelector('#services');
    const servicesList = servicesSection.querySelector('.services-list');
    const servicesBtn = servicesSection.querySelector('.btn');
    let servicesExpanded = false;

    // Past Work "See More" functionality
    const pastWorkSection = document.querySelector('#past');
    const workList = pastWorkSection.querySelector('.work-list');
    const pastWorkBtn = pastWorkSection.querySelector('.btn');
    let pastWorkExpanded = false;

    // Services "See More" handler
    servicesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!servicesExpanded) {
            // Show all services
            const hiddenServices = servicesList.querySelectorAll('div:nth-child(n+5)');
            hiddenServices.forEach(service => {
                service.style.display = 'block';
                setTimeout(() => {
                    service.style.opacity = '1';
                    service.style.transform = 'translateY(10)';
                }, 50);
            });
            
            servicesBtn.textContent = 'See Less';
            servicesExpanded = true;
        } else {
            // Hide additional services
            const additionalServices = servicesList.querySelectorAll('div:nth-child(n+5)');
            additionalServices.forEach(service => {
                service.style.opacity = '0';
                service.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    service.style.display = 'none';
                }, 500);
            });
            
            servicesBtn.textContent = 'See More';
            servicesExpanded = false;
        }
    });

    // Past Work "See More" handler
    pastWorkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!pastWorkExpanded) {
            // Show all past work items
            const hiddenWorks = workList.querySelectorAll('.work:nth-child(n+4)');
            hiddenWorks.forEach(work => {
                work.style.display = 'block';
                setTimeout(() => {
                    work.style.opacity = '1';
                    work.style.transform = 'scale(1)';
                }, 50);
            });
            
            pastWorkBtn.textContent = 'See Less';
            pastWorkExpanded = true;
        } else {
            // Hide additional past work items
            const additionalWorks = workList.querySelectorAll('.work:nth-child(n+4)');
            additionalWorks.forEach(work => {
                work.style.opacity = '0';
                work.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    work.style.display = 'none';
                }, 500);
            });
            
            pastWorkBtn.textContent = 'See More';
            pastWorkExpanded = false;
        }
    });
});