/* 
Alumno: Felipe Amura 
Comision: #58150

Segunda preentrega.
✓ Estructura HTML del proyecto.
✓ Variables de JS necesarias.
✓ Funciones esenciales del proceso a simular.
✓ Objetos de JS.
✓ Arrays.
✓ Métodos de búsqueda y filtrado sobre el Array.
*/

// Pequeño uso de DOM (Se que no entra en esta entrega) para poder cargar primero el HTML.

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
    }, 100); 
});

// Objeto y getters

class Account {
    constructor(user, pass, email) {
        this.user = user;
        this.pass = pass;
        this.email = email;
        this.admin = false;
    }
    getUser() {
        return this.user;
    }
    getPass() {
        return this.pass;
    }
}

// Bienvenida 1

let loginActual = null;
const HOY = new Date();

// Cuentas, objetos y arrays

let cuentas = [
    new Account("felpa", "01234", "f@gmail.com"),
    new Account("user", "pass1234", "user@gmail.com"),
    new Account("aplef", "javascript", "js@gmail.com")
];

// Bienvenida 2

alert("Bienvenido al sistema, usuario. \n" + HOY.toLocaleString());

// Login y menu

if (login()) {
    mostrarMenu();
}

function login() {
    let user = prompt("Ingrese su usuario");
    let pass = prompt("Ingrese su contraseña");
    let email = prompt("Ingrese su Email");

    if (user && pass && email) {
        return verificarCredenciales(user, pass, email);
    } else {
        alert("Ingrese un usuario y contraseña válidos");
        return login(); // En caso de no verificar datos, se vuelve a pedir al usuario que los vuelva a ingresar.
    }
}

// Verificacion de datos

function verificarCredenciales(user, pass) {
    let login = cuentas.find(
        (account) => account.user === user && account.pass === pass
    );

    if (login) {
        alert("Bienvenido " + user);
        loginActual = login;
        return true;
    } else {
        alert("Credenciales incorrectas");
        return false;
    }
}

// En caso de verificar, se muestra el menu

function mostrarMenu(){
    let menu = true;
    while(menu){
        let mensaje = "¿Que operacion desea realizar?";
        mensaje += "\n1) Cambio de contraseña";
        mensaje += "\n2) Cambio de E-Mail";
        mensaje += "\n3) Crear nuevo usuario"
        mensaje += "\n4) Salir del sistema";
        mensaje += "\n5) Solo quiero salir salir salir salir salir salir";

        let resp = prompt(mensaje);
        switch(resp){
            case "1":
                cambioDeContraseña();
                break;
            case "2":
                cambioDeEmail();
                break;
            case "3":
                crearUsuario();
                break;
            case "5":
                alert("n̶̛͚̖̲͈̰̋̍̄̓́̔͝õ̵̱̘̉ ̵͚̾̀̍̽͋̅̏͝e̸̛͍̤̩͕̱̤̻̥̋̊͋̾̿͛͠s̸̼̐̃́̈́͗͐c̶͓͎͖̺̱̣͗̓̒á̷͉͖̱͕̠͙̙̪̫̈́̐͒̉p̸̭̩̯̹̼̉̏͆͠e̸̩͍̬̮̎̍̓̃͆ ̵̧̻͔̖̫͚̩̞̲̱̀̌ǹ̵̡̘̰̞̠̥̪̓̐̎̐̍̔o̸̟̻͚͓͐̈́̀̾͜͜ͅ ̵̡̱͉̹̠̲̤͎͔̃̎̾̇e̷̡͎͙̳̓͊̾̓̓̂͌̊s̸̼̜͖̒ç̶̣͉̪̗̏a̵͚͍͍̭̟̫͖̳͂̕p̵̡͍̟̙̳̖̼̥̗͉̊̇̓̐̿͑͆͆̂̕ẹ̷͚̀͊ ̷̗̍͌́́n̶͍̮̤̣͓̮̩̔̍̍̆͑̈̄͆̾̀o̵̺̩̗̝͈̍̋̇̓́͘̕ ̴̜͋̊͗́̈́̓̓̈́͘é̸̩͍̯̮͍̠̟̠̟̹́̂͂̎̌̓͝s̸͍̲̤͕̪̆͘c̶̖̝͉̈́́̌̐̋ą̶͇̺̪̬͈͖̮̟̘́̋̒p̶̖̯̺͙̒̏͑̓̓͑͂̕̕ḙ̸͉͇̫͓̼̰̋̂͂̇̀͂̐̅̕̚ͅ ̸̧̜͔̬̻̠̱̤̎̋͆͜͝n̶̗̪̫̎͛̓o̵̺͋͌̓͛̽̆ ̵̛̺̹͙͍͈̃̐̍̈͗͐̊e̶̗̫͕̐̑̍̈͗̀̔̃̉s̴̛̖̼̃̊̊c̸̝̮̠̖̣͍̞̞͕͚̓̑̓ä̷̼͈̤̣́͛ͅp̷͕͔̤͇̭͙͕͆̽̾͂̂͑̃̈́̆͘e̵̼̩̤͊̃̿̎̓̽̄͘͜ ̶̡͈͕͙̈́̍n̵̤̭̟̪̗̉͋̾́̈́͑̚͘͝͝o̸̬̎̾̓̅̌̑̒̈͠ ̷̫̗̹̭̎̍̈́͘͘è̶̡̯̘̽̅̍̚s̷̨̡͔̪̝̱͎̤̪̲̏́́̑̋͘c̸͔̽̊͗̐͌̐̈a̵̧̟̔̕p̸̛̞͇̘̺͓̔̓ȩ̵̢̳̦̙͉̙̭͍̙͛̐͑̇͝"); // Solo un texto con fines educativos.
            
            case "4":
                alert("Saldra del sistema. Hasta la proxima");
                menu = false;
                break;
            case null:
                alert("Saldra del sistema. Hasta la proxima");
                menu = false;
                break;
            default:
                alert("Por favor, ingrese una opcion valida.");
        }
    }
}

// Caso de querer cambiar contraseña

function cambioDeContraseña() {
    let newPass = prompt("Ingrese su nueva contraseña");

    if (validar_datos(newPass)) {
        loginActual.pass = newPass;
        alert("Contraseña cambiada exitosamente");
    } else {
        alert("La contraseña ingresada no es valida");
    }
}

// Caso de querer cambiar Email

function cambioDeEmail() {
    let newEmail = prompt("Ingrese su nuevo correo electrónico");

    if (validar_datos(newEmail)) {
        loginActual.email = newEmail;
        alert("Correo electrónico cambiado exitosamente");
    } else {
        alert("El correo electrónico ingresado no es válido");
    }
}

// Caso de querer crear nuevo usuario

function crearUsuario() {
    let newUser = prompt("Ingrese el nuevo nombre de usuario");
    let newPass = prompt("Ingrese la nueva contraseña");

    if (validar_datos(newUser) && validar_datos(newPass)) {
        let newAccount = new Account(newUser, newPass, "");
      cuentas.push(newAccount); // Agregar el nuevo usuario al array de cuentas
        alert("Nuevo usuario creado exitosamente");
    } else {
        alert("Los datos ingresados no son válidos");
    }
}

// Validacion de los datos

function validar_datos(dato) {
    if (!dato || dato === "") {
        return false;
    }
    return true;
}