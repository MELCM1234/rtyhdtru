const presetUser = "juan@gmail.com";
const presetPassword = "12345";

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === presetUser && password === presetPassword) {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('registerHeading').style.display = 'none'; 
        document.getElementById('message').innerText = 'Registro exitoso. Ahora puede iniciar sesión.';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
        document.getElementById('message').style.color = 'red';
    }
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername === presetUser && loginPassword === presetPassword) {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso.';
        document.getElementById('message').style.color = 'green';


        window.location.href = 'https://melcm1234.github.io/234/'; 
      
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
        document.getElementById('message').style.color = 'red';
    }
}