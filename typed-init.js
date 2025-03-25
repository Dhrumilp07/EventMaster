document.addEventListener('DOMContentLoaded', function() {
    // Ensure only one Typed instance is created
    const element = document.querySelector('#element');
    
    // Exit if no element found or already initialized
    if (!element || element.hasAttribute('data-typed-initialized')) {
        return;
    }

    // Destroy any existing Typed instances
    const existingInstances = document.querySelectorAll('.typed-cursor');
    existingInstances.forEach(instance => instance.remove());

    // Create new Typed instance
    const typed = new Typed("#element", {
        strings: ["Concert","Wedding","Birthday","Corporate Event","College Fest","Social Gathering"],
        typeSpeed: 100,
        cursorChar: '|',
        showCursor: true,
        onStringTyped: function(arrayPos, self) {
            // Remove any extra cursors
            const cursors = document.querySelectorAll('.typed-cursor');
            if (cursors.length > 1) {
                for (let i = 1; i < cursors.length; i++) {
                    cursors[i].remove();
                }
            }
        }
    });

    // Mark the element to prevent multiple initializations
    element.setAttribute('data-typed-initialized', 'true');
});