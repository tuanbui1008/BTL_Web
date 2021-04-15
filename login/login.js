function signIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username) {
        alert("username không được để trống")
    } else if (!password) {
        alert("password không được để trống")
    } else if (username === "admin" && password === "admin") {
        location.href = "../home/home.html";
    } else {
        alert("usernam hoặc password không đúng")

    }
}