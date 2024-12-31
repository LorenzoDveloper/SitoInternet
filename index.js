function reset() {
    alert("You are now registered. Now you can login with your credentials");

    document.querySelector(".name").value = '';
    document.querySelector(".surname").value = '';
    document.querySelector(".email").value = '';
    document.querySelector(".password").value = '';

 
    location.reload();
}

