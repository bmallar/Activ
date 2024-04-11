function exerciseCard(exercise, index) {
    return `
    <section "add-exercise">
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            ${exercise.name}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${exercise.type}</li>
            <li class="list-group-item">${exercise.muscle}</li>
            <li class="list-group-item">${exercise.equipment}</li>
            <li class="list-group-item">${exercise.difficulty}</li>
        </ul>
    </div>
        
        <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
        Exercise Instructions
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Instructions</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${exercise.instructions}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  
    <button type="submit">Add Exercise</button>
    </section>
  
    `
  }
