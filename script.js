document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.querySelector('.load-more-btn');
  const hiddenCertificates = document.querySelectorAll('.certificate-card:nth-child(n+7)');
  
  loadMoreBtn.addEventListener('click', function() {
    // Show all hidden certificates
    hiddenCertificates.forEach(cert => {
      cert.style.display = 'block';
    });
    
    // Hide the load more button after clicking
    loadMoreBtn.style.display = 'none';
  });
});