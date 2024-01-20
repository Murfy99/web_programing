// set local storage item
 //localStorage.setItem('name', 'Ali');
// localStorage.setItem('age', '40');



//sessionStorage.setItem('name', 'Hasan');


//remove from storage
//localStorage.removeItem('name');

//get from storage
 //let userName = localStorage.getItem('name');
 //console.log(userName);


//clear local storage
//   localStorage.clear();
//   let userName = localStorage.getItem('name');
//   console.log(userName)





document.getElementById('submit').addEventListener('click', setStorage);


// function setStorage(){
//     const user = document.getElementById('UserName').value;
//     console.log(user);

//     localStorage.setItem('name', user);
//     alert("your name is saved now!");

// }




function setStorage(){
    const user = document.getElementById('UserName').value;
    let users;
    if(localStorage.getItem('users') === null){
        users = [];
    }else{
        users = JSON.parse(localStorage.getItem('users'));
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('user name saved!')

}













// function readLocalStorage(){
//     if(localStorage.getItem('name')!=null){
//         let userName = localStorage.getItem('name');
//         document.getElementById('UserName').value = userName;
//     }
    
//     }