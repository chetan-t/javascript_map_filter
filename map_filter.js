<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Test</p>
    <p id="UserName"></p>
</body>
</html>

<script>
    let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]


//************Normal******************//
// const getUsers = [];
// for(i = 0;i<=users.length;i++){
//     if(users[i].age > 80){
//         console.log(users[i]);
//     }
// }
//************************************//

//=============== filter() =====================//
// const getUserFilter = users.filter((user)=>{
//     return user.age > 80;                              
// })
// console.log(getUserFilter);
//==============================================//


//================ map() ======================//
// const getmap = users.map(function(user){
//     return user;
// })
// console.log(getmap);
//===========================================//

//================= map() ======================//
// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array){
//     console.log(element);
//     // console.log(index);
//     // console.log(array);
//     return element;
// }, 80);
//=============================================//




//================ bind() =======================//
// let nameObj = { 
//     name: "Tony",
//     age:12
// } 

// // console.log(nameObj);
  
// let PrintName = { 
//     name: "steve", 
//     sayHi: function () { 
  
//         //Here "this" points to nameObj 
//         console.log(this.name);  
//     } 

    
// } 
  
// let HiFun = PrintName.sayHi.bind(nameObj,23); 
// HiFun();
//=================================================//


//=================== call() =======================//
// let nameObj = { 
//     name: "Tony"
// } 
  
// let PrintName = { 
//     name: "steve", 
//     sayHi: function (age) { 
//         console.log(this.name + " age is " + age); 
//     } 
// } 
  
// PrintName.sayHi.call(nameObj, 42);

//=====================================================//



//======================= apply() =====================//

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// person.fullName.apply(person1, ["Oslo", "Norway"]);

//=======================================================//




// const getData = async () => {
//     let data = "Hello World";
//     return data;
// }
 
// getData().then(data => console.log(data));


// const getData = async () => {
//     let y = await "Hello World";

//     setTimeout(()=>{
//         console.log(y);
//     },2000)
    
// }
 
// console.log(1);
// getData();
// console.log(2);



// async function showAvatar() {

// //read our JSON
// // let response = await fetch('/article/promise-chaining/user.json');
// // let user = await response.json();



// // read github user
// let githubResponse = await fetch(`https://api.github.com/users/chetan`);
// let githubUser = await githubResponse.json();
// // let display = await JSON.stringify(githubUser);
// // let login = JSON.parse(display);

// // // show the avatar
// // let img = document.createElement('img');
// // img.src = githubUser.avatar_url;
// // img.className = "promise-avatar-example";
// // document.body.append(img);

// let username = githubUser.login;

// document.getElementById('UserName').innerHTML = githubUser.name;

// // wait 3 seconds
// // await new Promise((resolve, reject) => setTimeout(resolve, 3000));

// // img.remove();
// }

// showAvatar();


// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member


Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
</script>




// console.log("Hello, World!");

let userList = [
  {name :'cheta', age:22},
  {name: 'harish', age:23},
  {name:'iranna', age:24}
]

let newOne = userList.filter((user)=>{return user.age > 22})
console.log(newOne);

userList.forEach((user)=>{
  console.log(user)
})

console.log(userList)

let newList = userList.map((user)=>{
  // console.log(user.name)
})


let userFilter = userList.filter((user)=>{
  if(user.age > 22){
    return user
  }
})

console.log(userFilter);


let a = userList.filter((user)=>user.age > 23);
console.log(a)


let a = userList.filter((user)=>{
  return user.age > 23
})

console.log(a)












