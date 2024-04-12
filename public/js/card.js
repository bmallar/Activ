function exerciseCard(exercise, index) {
    return `
    <section class="col-4">
    <div class="card p-1" style="width: 18rem;">
        <div class="card-header">
            ${exercise.name}
        </div>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">Expand v</button>
        <ul class="collapse list-group list-group-flush" id="collapse${index}">
            <li class="list-group-item">Type: ${exercise.type}</li>
            <li class="list-group-item">Muscle: ${exercise.muscle}</li>
            <li class="list-group-item">Equipment: ${exercise.equipment}</li>
            <li class="list-group-item">Difficulty: ${exercise.difficulty}</li>
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
          </div>
        </div>
      </div>
    </div>
  
    <button type="submit">Add Exercise</button>
    </section>
  
    `
  }
