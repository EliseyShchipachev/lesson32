let users = []
 
let addUser = () =>{
    let userName = document.querySelector("#name").value
    alert(userName)
    let userAge = document.getElementById("age").value
    alert(userAge)
    let user = {
        name : userName,
        age : userAge,
    }
    users.push(user)
    console.log(users)

    let usersList = document.querySelector(".users")
    usersList.insertAdjacentHTML('beforeend',`
    <li>
        <div class = "name"> ${user.name}</div>
        <div class = "age"> ${user["age"]}</div>
    </li>
    `)
}
localStorage.setItem ("user", JSON.stringify("user"));
user = JSON.parse (localStorage.getItem ("user"));

console.log(user)