const handleNewWorkout = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#workout-title').value.trim();
    const content = document.querySelector('#workout-content').value.trim();
    const intensity = document.querySelector('#workout-intensity').value.trim();
    const duration = document.querySelector('#workout-duration').value.trim();
    
    if (title && content && intensity && duration) {
      const response = await fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify({ title, content, intensity, duration }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/history');
      } else {
        alert('Failed to create workout entry');
      }
    }
  };

document.querySelector('#workout-submit').addEventListener('click', handleNewWorkout);