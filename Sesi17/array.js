// cara mendefined array
const participants = ['Ika', 'David', 'Widya', 'Oki'];

// cara mengakses array

const participant = participants[0];
console.log(participant);
console.log(participants);

participants.forEach((participant, index)=>{
    participants[index] = `${participant} ${index}`;
});

console.log(participants);