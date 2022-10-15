
const persons = [
    {
        name: "Joe",

        animals: [
            {
                species: "dog",
                name: "Bolt",
                age: 23

            },
            {
                species: "cat",
                name: "Billy",
                age: 24
            },

        ]
    },
    {
        name: "Bob",
        animals: [
            {
                species: "Lizzard",
                name: "Snoopy",
                age: 20
            }
        ]
    },

    {
        name: "Slobby",
        animals: [
            {
                species: "cat",
                name: "Snoopy",
                age: 15
            },
            {
                species: "turtle",
                name: "cappy",
                age: 15
            },
            {
                species: "dog",
                name: "cappy",
                age: 10
            }

        ]
    }
];

//   Q1.Display only person names.
// persons.map((data, index) => console.log(data.name));

//   Q2.Display only person animals list.
// persons.map((d, i) => {
//     return (
//         // console.log(d.name),
//         d.animals.map((d, i) => {
//             return (
//                 console.log(d.name)
//                 // console.log(d.species)
//             )
//         })
//     )
// })

//   Q3.Display the total count of animals in person array.
// persons.map((d, i) => {
//     return (
//         d.animals.map((d, i) => {
//             return (
//                 console.log(d.species)
//             )
//         })
//     )
// })

//   Q4.Display all names of owner who has species as dog
persons.map((d, i) => {
    d.animals.map((d) => {
        if (d.species.includes("dog")) {
            console.log(d.name)
        }
    })
})

//   Q5 Display all names of owner who has species as dog and turtle
//   Q6 Does all owner has dog as species Justify.
//   Q7 Does some owner has turtle please specify name of turtle.
//   Q8 Display name of Owner along with his total count of animals.
//   Q9 Display list of all animals.
//   Q10 Display list of only dogs
//   Q11 Display the count of all dogs in Array persons.
//   Q12 Display names of owner who has all species such as dog cat and turtle.
//   Q13 Display the record for species as dog and name as 'Snoopy'
//   Q14 Sort all records based on name of owner in ascending and descending
//   Q15 Display list of all dogs whose name starts with 'S'
//   Q16 Display list average ages of animal species.
//   Q17 Display average age of dogs.
//   Q18 Display sum of all ages of animals.
//   Q19 Display sum of all ages of animals whose species is turtle.
//   Q20 Find list of animals and then sort on animal names.
