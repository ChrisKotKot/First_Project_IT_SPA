import { MyNAvi } from "../common/MyNAvi";
import { Register } from "../views/Register";
import { Home } from "../views/Home";
// dodać Mediaquery
// Podsumowanie koszyka
// Wybór daty przyjazdu i wyjazdu oraz pokoju


//przerób na form
//przykład formularzy https://getbootstrap.com/docs/5.0/forms/validation/
export function Login() { 
    const div=document.createElement('section');
    div.classList.add('mb-3', 'row');

    div.innerHTML=`
    <section>
    <h1>Zaloguj sie</h1>
    <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email@example</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail">
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
    <div>
    <footer></footer>
    </div>
    </section>
    <section1>
    <h1>Załóż konto</h1>
    <div>
    </div>
    </section1>
    `;
    

    const logInButton = document.createElement('button');
    logInButton.innerText = 'Zaloguj';
    logInButton.classList.add('btn','btn-primary');
    logInButton.addEventListener('click', () => {
     MyNAvi(Home);
     }
    );
    div.querySelector('footer').append(logInButton);
    
    //return div;

    const registerButton = document.createElement('button');
    registerButton.innerText = 'Zarejestruj';
    registerButton.classList.add('btn','btn-primary');
    registerButton.addEventListener('click', () => {
     MyNAvi(Register);
     }
    );
    div.querySelector('section1').append(registerButton);
    
    return div;
    
 }
