document.addEventListener('DOMContentLoaded', function() {

    /*Pegar elementos*/

    /*Telas*/
    /*login-screen = loginScreen*/
    const loginScreen = document.querySelector('.login-screen');
    /*forgot-screen = forgotScreen*/
    const forgotScreen = document.querySelector('.forgot-screen');
    /*register-screen = registerScreen*/
    const registerScreen = document.querySelector('.register-screen');

    /*Links*/
    /*forgot-links = forgotLink*/
    const forgotLink = document.querySelector('.forgot-link');
    /*register-link = registerLink*/
    const registerLink = document.querySelector('.register-link');
    /*back-to-login = backToLogin*/
    const backToLogin = document.querySelectorAll('.back-to-login');


    /*mostrar tela de login*/
    function showLoginScreen() {
        forgotScreen.classList.remove('active'); /*remove active de forgot-screen*/
        registerScreen.classList.remove('active'); /*remove active de register-screen*/
        setTimeout(() => { /*determina em que tempo é "ativado"*/
            loginScreen.classList.add('active'); /*adicionta active login-screen*/
        }, 50);
    }

    /*mostrar tela de recuperar senha*/
    function showForgotScreen() {
        loginScreen.classList.remove('active');  /*remove active de login-screen*/
        registerScreen.classList.remove('active');  /*remove active de register-screen*/
        setTimeout(() => { 
            forgotScreen.classList.add('active'); /*adiciona active forgot-screen*/
        },50);
    }

    function showRegisterScreen() { 
        loginScreen.classList.remove('active'); /*remove active de login-screen*/
        forgotScreen.classList.remove('active');  /*remove active de forgot-screen*/
        setTimeout(() => {
            registerScreen.classList.add('active'); /*adiciona active register-screen*/
        },50);
    }

    /*evento para quando clicar em "Cadastra-se" mostrar register-screen*/
    registerLink.addEventListener('click', function(e){
        e.preventDefault();
        showRegisterScreen();
    });

    /*evento para quando clicar em "Esqueceu sua senha? mostrar forgot-screen*/
    forgotLink.addEventListener('click', function(e){
        e.preventDefault();
        showForgotScreen();
    });

    /*evento para retornar a tela de login para login-screen*/
    backToLogin.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            showLoginScreen();
        });
    });

});








