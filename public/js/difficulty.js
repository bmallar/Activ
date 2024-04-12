
const dropDowns = document.querySelectorAll(".dropdown");

  for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function (event) {
      const element = event.target;

      // Checks if element is a button
      if (element.matches('.dropdown-item') === true) {
        // Get its data-index value and remove the todo element from the list
        
        event.currentTarget.querySelector(".dropdown-toggle").textContent = element.textContent;
      } else {
        ;
      }

    })
  }

let yourWorkouts = [];

function addExercise(exercise){
  yourWorkouts.push(exercise);
  const card = yourCard(yourWorkouts[yourWorkouts.length-1], yourWorkouts.length-1);
  document.querySelector("#your-workout").insertAdjacentHTML("afterbegin", card);
}