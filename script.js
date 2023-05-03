let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

updateWorkout();

document.querySelector('.workout_button')
  .addEventListener('click', () => {
    addWorkout();
  });

function addWorkout(){
    const name = document.querySelector('.name').value;
    const rep = document.querySelector('.rep').value;
    const weight = document.querySelector('.weight').value;
    const today = new Date();
    const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    let hour = today.getHours() >= 13? today.getHours() -12: today.getHours();
    const ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    let minute = today.getMinutes();
    let second = today.getSeconds();
    if (minute.toString().length == 1) {
      minute = "0" + minute;
    }
    if (hour.toString().length == 1) {
      hour = "0" + hour;
    }
    if (second.toString().length == 1) {
      second = "0" + second;
    }
    const time = hour + ":" + minute + ":" + second + " "+ampm;
 
    workouts.push([name,rep,weight, date, time]);
    updateWorkout();
}

function updateWorkout(){
    let workoutHTML = '';

    for (let i = workouts.length-1; i >=0; i--) {
    const workoutObject = workouts[i];
    const html = `
        <div>${workoutObject[0]}</div>
        <div>${workoutObject[1]}</div>
        <div>${workoutObject[2]}</div>
        <div>${workoutObject[3]}</div>
        <div>${workoutObject[4]}</div>
    `;
    workoutHTML += html;
    }

    document.querySelector('.workout_list')
    .innerHTML = workoutHTML;

    localStorage.setItem('workouts',JSON.stringify(workouts));
}