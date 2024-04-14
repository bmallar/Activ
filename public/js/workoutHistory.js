const goToUserHistory = (event) => {
    event.preventDefault();
    const thisUserId = event.target.getAttribute('data-user-id')
    document.location.replace(`/history/${thisUserId}`)
    };
  
    document.addEventListener('click', function(event) {
        if (event.target.id === 'userHistory') {
            goToUserHistory(event);
        }
    });