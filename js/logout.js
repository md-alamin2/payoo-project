const logoutButton = document.getElementById('logout-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('logout');
    window.location.href = "index.html";
})
