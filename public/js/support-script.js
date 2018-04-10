var socket = io();
var username = prompt("Please give us a username", "");

if(!username) {
    alert("no accept null users");
} else {
    socket.emit("newcustomer", username);
}

socket.on("useradded", data => {
    if(data == false) {
        alert("username already taken, please pick another one");
    } else {
        
    }
});

socket.on("usernames", data => {
    console.log(data);
});

socket.on("data", data=> {
    console.log(data);
})

function sayHi() {
    socket.emit("message", { username: "kendi", message: "Sasa Tony"});
}