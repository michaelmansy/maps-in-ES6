// maps is like objects but better since we can assign any data type we want

//create a map
const question = new Map();

//add data to the map (key,value)
question.set('question', 'what is my first car?');

question.set(1, 'Ford');
question.set(2, 'Mazda');
question.set(3, 'Toyota');
question.set(4, 'Honda');

question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong answer....please try again');

//print out data
const answer = question.get('question');
console.log(answer);

//print out the size
console.log(question.size);

//delete something and verify if deleted
// if (question.has(4)) {
//     console.log('Answer 4 is here');
// } else 
if (question.has(4)) {
    question.delete(4);
    console.log('Answer 4 is not there');
}


//clear the map; delete all data
// question.clear();


//now we can loop through the map using forEach and for of

//1) forEach 
// question.forEach((value, key) => console.log(`This is ${key} and its set to ${value}`));


//2) for...of
//using .entries() to print value and key so we need [key,value] after let
//print out only the key which is number===>the 4 answers ya3ni
for (let [key, value] of question.entries()) {
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}


const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));



















