// switch (new Date().getDay()) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
//   default:
//     day = "something went wrong";
//     break;
// }

// console.log(`today is ${day}`);
// document.write(
//   `<h1 style="text-transform:capitalize">today is<p style="color:red; font-size:36px; font-weight: bold;display:inline-flex;margin-right:10px"> ${day}</p></h1>`
// );

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// do {
//   console.log("i", i);
//   i++;
// } while (i < 15);

// let age = 21;

// if (age < 3) {
//   console.log("play school");
// } else if (age >= 3 && age <= 15) {
//   console.log("school");
// } else if (age >= 15 && age <= 20) {
//   console.log("collage");
// } else if (age >= 20 && age <= 60) {
//   console.log("middle age");
// } else if (age >= 60 && age <= 100) {
//   console.log("old age");
// } else {
//   console.log("dead");
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(`${j}`);
//   }
//   document.write("<br />");
// }
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(`${i}`);
//   }
//   document.write("<br />");
// }

// let n = 5; // Height of the pyramid
// for (let i = 1; i <= n; i++) {
//   // Print spaces
//   for (let j = 1; j <= n - i; j++) {
//     document.write("&nbsp;"); // Non-breaking space for alignment
//   }
//   // Print numbers
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     document.write(i);
//   }
//   document.write("<br />"); // Move to the next line
// }

const userData = [
  {
    name: "Sachin",
    age: 21,
    roll: 1,
    jobRole: "Developer",
    location: "India",
    isMarried: false,
  },
  {
    name: "Rahul",
    age: 25,
    roll: 2,
    jobRole: "Designer",
    location: "USA",
    isMarried: true,
  },
  {
    name: "Priya",
    age: 28,
    roll: 3,
    jobRole: "Manager",
    location: "UK",
    isMarried: false,
  },
  {
    name: "Kumar",
    age: 22,
    roll: 4,
    jobRole: "Engineer",
    location: "Canada",
    isMarried: false,
  },
  {
    name: "Nalini",
    age: 30,
    roll: 5,
    jobRole: "Doctor",
    location: "Australia",
    isMarried: true,
  },
  {
    name: "Raj",
    age: 29,
    roll: 6,
    jobRole: "Lawyer",
    location: "Germany",
    isMarried: false,
  },
  {
    name: "Sonia",
    age: 24,
    roll: 7,
    jobRole: "Teacher",
    location: "France",
    isMarried: false,
  },
  {
    name: "Vijay",
    age: 27,
    roll: 8,
    jobRole: "Scientist",
    location: "Japan",
    isMarried: true,
  },
  {
    name: "Ramesh",
    age: 26,
    roll: 9,
    jobRole: "Artist",
    location: "China",
    isMarried: false,
  },
  {
    name: "Leela",
    age: 23,
    roll: 10,
    jobRole: "Musician",
    location: "Brazil",
    isMarried: false,
  },
  {
    name: "Mahesh",
    age: 31,
    roll: 11,
    jobRole: "Writer",
    location: "Russia",
    isMarried: true,
  },
  {
    name: "Suresh",
    age: 32,
    roll: 12,
    jobRole: "Actor",
    location: "Italy",
    isMarried: false,
  },
  {
    name: "Rita",
    age: 20,
    roll: 13,
    jobRole: "Dancer",
    location: "Spain",
    isMarried: false,
  },
  {
    name: "Amit",
    age: 33,
    roll: 14,
    jobRole: "Athlete",
    location: "South Africa",
    isMarried: true,
  },
  {
    name: "Pooja",
    age: 29,
    roll: 15,
    jobRole: "Chef",
    location: "Mexico",
    isMarried: false,
  },
  {
    name: "Rohan",
    age: 28,
    roll: 16,
    jobRole: "Photographer",
    location: "Thailand",
    isMarried: false,
  },
  {
    name: "Neha",
    age: 25,
    roll: 17,
    jobRole: "Model",
    location: "Poland",
    isMarried: false,
  },
  {
    name: "Vikram",
    age: 34,
    roll: 18,
    jobRole: "Businessman",
    location: "Turkey",
    isMarried: true,
  },
  {
    name: "Sneha",
    age: 26,
    roll: 19,
    jobRole: " Engineer",
    location: "Sweden",
    isMarried: false,
  },
  {
    name: "Anil",
    age: 35,
    roll: 20,
    jobRole: "Architect",
    location: "Switzerland",
    isMarried: true,
  },
];

const filterUser = userData.filter((user) => {
  return user.isMarried && user.age >= 30;
});
console.log(
  filterUser.filter((user) => {
    return user.location === "Australia";
  })
);
