function exerciseCard(exercise, index) {
    return `
    <section class="col-sm-12 col-md-6 col-lg-4 my-2">
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
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
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
  
    <button type="submit" class="addExercise" onclick='addExercise(`+`${JSON.stringify(exercise).replaceAll("'", "")}`+`)'>Add Exercise</button>
    </section>
  
    `
  }

  function yourCard(exercise, index) {
    return `
    <section class="col-sm-12 col-md-6 col-lg-4 exercises" id="exercise${index}">
    <div class="card p-1" style="width: 18rem;">
        <div class="card-header">
            ${exercise.name}
        </div>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#your${index}" aria-expanded="false" aria-controls="your${index}">Expand v</button>
        <ul class="collapse list-group list-group-flush" id="your${index}">
            <li class="list-group-item">Type: ${exercise.type}</li>
            <li class="list-group-item">Muscle: ${exercise.muscle}</li>
            <li class="list-group-item">Equipment: ${exercise.equipment}</li>
            <li class="list-group-item">Difficulty: ${exercise.difficulty}</li>
        </ul>
    </div>
        
        <!-- Button trigger modal -->
    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
        Exercise Instructions
    </button>

    <button type="button" class="btn btn-danger" onclick='deleteExercise(${index})'>Delete</button>

    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Sets</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Reps</span>
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="yourModal${index}" tabindex="-1" aria-labelledby="yourModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="yourModalLabel">Instructions</h1>
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

    </section>
  
    `
  }
