const people = [ // array of objects
    {
      id: 1, // object
      name: 'Kelvin',
      job: 'Engineer'
    },
    {
      id: 2,
      name: 'Haykal',
      job: 'Pengangguran'
    },
    {
      id: 3,
      name: 'Abi',
      job: 'Bitch'
    },
    {
      id: 3,
      name: 'Yogay',
      job: 'Gay'
    },
  ]

  // for (let i = 0; i < people.length; i++) {
  //   console.log("hi my name is " + (people[i].name) + " and my job is " + (people[i].job));
  // }

// console.log (people[3])
// console.log(people[2].job);

// console.log(people[3].name);


const input="Kelvin"


for (let i = 0; i < people.length; i++) {
    if (people[i].name === input) {
      console.log(people[i])
    }
    
}