 async function selectBeginner(event){
event.preventDefault()

const muscleGroup = 'biceps'

await fetch (`/api/workout/${muscleGroup}`)
.then(response => response.json())
.then(response => {
    console.log(response)
    document.querySelector("#chosen-workout").innerHTML = ""

   response.forEach((exercise, index) => {
        const exerciseCard = `
        <form "add-exercise">
        <input id="exercise-name" hidden>Exercise: ${exercise.name}</input>

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
        </form>
    
        `

      document.querySelector("#chosen-workout").insertAdjacentHTML("afterbegin", exerciseCard)
    })



    
});

}

async function selectIntermediate(event){
    event.preventDefault()
    const muscleGroup = 'biceps'
    await fetch (`/api/workout/${muscleGroup}`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.querySelector("#chosen-workout").innerHTML = ""

        response.forEach((exercise, index) => {
            const exerciseCard = `
            <form "add-exercise">
            <input id="exercise-name" hidden>Exercise: ${exercise.name}</input>
    
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
            </form>
      
            `
    
          document.querySelector("#chosen-workout").insertAdjacentHTML("afterbegin", exerciseCard)
        })
    


    });
    
    }
    
    async function selectExpert(event){
        event.preventDefault()
        const muscleGroup = 'biceps'
        await fetch (`/api/workout/${muscleGroup}`)
      .then(response => response.json())
        .then(response => {
            console.log(response)
            document.querySelector("#chosen-workout").innerHTML = ""

            response.forEach((exercise, index) => {
                const exerciseCard = `
                <form "add-exercise">
                <input id="exercise-name" hidden>Exercise: ${exercise.name}</input>
        
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
                </form>
          
                `
        
              document.querySelector("#chosen-workout").insertAdjacentHTML("afterbegin", exerciseCard)
            })
        
        });
        
        }

//  document.querySelector("#beginner").addEventListener("click", selectBeginner)
// document.querySelector("#intermediate").addEventListener("click", selectIntermediate)
// document.querySelector("#expert").addEventListener("click", selectExpert)


const dropDowns = document.querySelectorAll(".dropdown");

  for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function (event) {
      const element = event.target;

      // Checks if element is a button
      if (element.matches('.dropdown-item') === true) {
        // Get its data-index value and remove the todo element from the list
        
        event.currentTarget.querySelector(".selected-option").textContent = element.textContent;
      } else {
        ;
      }


    })
  }