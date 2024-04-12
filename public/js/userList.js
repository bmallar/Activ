const goToUser = (event) => {
    event.preventDefault();
    const thisUserId = event.target.getAttribute('data-user-id')
    document.location.replace(`/profile/${thisUserId}`)
    };
  
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('user-card')) {
          goToUser(event);
        }
      });