//<!-- W05 Assingment BYU Jun2025 WDD131 : Author Diogo Rangel Dos Santos -->
document.addEventListener('DOMContentLoaded', () => {
    // Get the review count from localStorage
    let reviewCount = localStorage.getItem('numReviews');

    // If no count exists or if it's the first submission, initialize to 0 then increment.
    // If it exists, increment.
    if (reviewCount === null) {
        reviewCount = 1; // First review submitted
    } else {
        reviewCount = parseInt(reviewCount, 10) + 1;
    }

    // Store the updated count in localStorage
    localStorage.setItem('numReviews', reviewCount);

    // Display the count on the page
    const reviewCountSpan = document.getElementById('reviewCount');
    if (reviewCountSpan) {
        reviewCountSpan.textContent = reviewCount;
    }
});