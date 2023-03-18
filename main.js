


function Login(){

    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {


        let Username = result.value.login;
        let Password = result.value.password;

        Swal.fire(`
          Login: ${Username}
          Password: ${Password}
        `.trim());


    });

};











/* start on click */

window.onclick=(e)=>{

    /* start Login */
    if(e.target.classList.value.includes("LoginBtn")){
        Login();
    };
    /* end Login */
  
}  