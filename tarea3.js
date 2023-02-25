const increasebtn = document.getElementById('sumar');
const decreasecoun = document.getElementById('restar');

function counter () {
    let counter = 0;

    const increasecount = function() {
    counter = counter + 1;
    console.log(counter);
    }

const decreasecount = function(){
    counter = counter - 1;
    console.log(counter);
}
return {
    increasecount: increasecount,
    decreasecount: decreasecount
}
}
const countfnc = counter();