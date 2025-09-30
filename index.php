<?php
session_start();
$errorMessage = $_SESSION['error'] ?? '';
$registerError = $_SESSION['register_error'] ?? '';
unset($_SESSION['error'], $_SESSION['register_error']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
    <script src="script.js" defer></script>
    <title>Etusivu</title>
</head>
<body>
    <dialog id="signinDialog">
                <div class="popup__header">
                    <div class="title">Minun tilini</div>
                    <i class="fas fa-times close-btn" data-target="signinDialog"></i>
                </div>
                <div class="popup__description"> Ei vielä tiliä? <span class="link" id="link1">Rekisteröidy nyt!</span></div>
                <form method="post" action="login.php" class="form-content">
                    <div class="form-group">
                        <input type="email" id="email1" name="email" placeholder="Sähköpostiosoite" required />
                        <label for="email">Sähköpostiosoite</label>
                    </div>
                    <div class="form-group">
                        <input type="password" id="password1" name="password" placeholder="Salasana" required />
                        <label for="password">Salasana</label>
                        <span class="toggle-password" data-target="password1" ></span>
                    </div>
                    <div class="buttons">
                        <div class="button">
                            <button type="submit">Kirjaudu Sisään</button>
                        </div>
                        <div class="button">
                            <button type="button" onclick="document.getElementById('signinDialog').close()">Peruuta</button>
                        </div>      
                    </div>
                    <p id="error-message" style="color: red;"><?php echo htmlspecialchars($errorMessage); ?></p>
                </form>
    </dialog>
    <dialog id="registerDialog">
                <div class="popup__header">
                    <div class="title">Luo tili</div>
                    <i class="fas fa-times close-btn" data-target="registerDialog"></i>
                </div>
                <div class="popup__description"> Onko sinulla jo tili? <span class="link" id="link2">Kirjaudu sisään!</span></div>
                <form method="post" action="register.php" class="form-content">
                    <div class="form-group">
                        <input type="text" id="firstname" name="firstname" placeholder="Syötä etunimesi" required />
                        <label for="firstname">Etunimi</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastname" name="lastname" placeholder="Syötä sukunimesi" required />
                        <label for="lastname">Sukunimi</label>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Sähköpostiosoite" required />
                        <label for="email">Sähköpostiosoite</label>
                    </div>
                    <div class="form-group">
                        <input type="password" id="password" name="password" placeholder="Salasana" required />
                        <label for="password">Salasana</label>
                        <span class="toggle-password" data-target="password"></span>
                    </div>
                    <div class="form-group">
                        <input type="password" id="confirmPassword" name="password" placeholder="Syötä Salasana uudelleen" required />
                        <label for="password">Syötä Salasana uudelleen</label>
                        <span class="toggle-password" data-target="confirmPassword" ></span>

                    </div>
                    <div id="passwordMatchMessage"></div>
                    <div class="buttons">
                        <div class="button">
                            <button type="submit">Luo Tili</button>
                        </div>
                        <div class="button">
                             <button type="button" onclick="document.getElementById('registerDialog').close()">Peruuta</button>
                        </div>  
                    </div>
                    <p id="register-error" style="color: red;"><?php echo htmlspecialchars($registerError); ?> </p>
                </form>
    </dialog>
    <div class="header">
        <div class="main-nav">
            <a href="index.php" class="nav-item"><i class="fas fa-home"></i><span>Etusivu</span></a>
            <a href="Pokedex.html" class="nav-item"><i class="fas fa-database"></i><span>Pokedex</span></a>
            <a href="Tarrasivu.html" class="nav-item"><i class="fas fa-sticky-note"></i><span>Poketarrat</span></a>
        </div>
        <div class="sign-in"><button class="main-button" id="avaaDialog" onclick="openDialog()" title="Kirjaudu sisään, jotta voit käyttää tallennettuja tapahtumiasi millä tahansa laitteella"><i class="fas fa-sign-in-alt"></i>Kirjaudu sisään</button>
        </div>    
    </div>
    <div class="remainder"> </div>
    <div class="container">
        <div class="left">
            <div class="calendar">
                <div class="month">
                    <i class="fa fa-angle-left prev"></i>
                    <div class="date"><!--lisään jsllä--></div>
                    <i class="fa fa-angle-right next"></i>
                </div>
                <div class="weekdays">
                    <div>su</div>
                    <div>ma</div>
                    <div>ti</div>
                    <div>ke</div>
                    <div>to</div>
                    <div>pe</div>
                    <div>la</div>
                </div>
                <div class="days">
                    <!--Lisään päiviä js:llä-->
                </div>
            </div>
        </div>
        <div class="right">
            <div class="today-date">
                <div class="event-day">mon</div>
                <div class="event-date">21 July 2022</div>
            </div>
            <div class="events">
                <!--I will add events by js-->
            </div>

            <div class="add-event-wrapper">
                <div class="add-event-header">
                    <div class="title">Lisää Tapahtuma</div>
                    <i class="fas fa-times close"></i>
                </div>
                <div class="add-event-body">
                     <div class="add-event-input">
                        <input type="text" placeholder="Tapahtuman nimi" class="event-name" />
                     </div>
                     <div class="add-event-input">
                        <input type="text" placeholder="Tapahtuman aika alkaen" class="event-time-from">
                     </div>
                     <div class="add-event-input">
                        <input type="text" placeholder="Tapahtuman aika päättyy" class="event-time-to">
                     </div>
                </div>
                <div class="add-event-footer">
                    <button class="add-event-btn" title="Kirjaudu sisään tallentaaksesi tapahtumat pysyvästi">Lisää</button>
                </div>
             </div>
        </div>  
        <button class="add-event">
            <i class="fas fa-plus"></i>
         </button> 
    </div>
       <script>
   document.addEventListener("DOMContentLoaded", function () {
    const loginError = <?= json_encode($errorMessage) ?>;
    const registerError =  <?php echo json_encode($registerError); ?>


    if (loginError) {
        const loginDialog = document.getElementById("signinDialog");
        if (loginDialog && typeof loginDialog.showModal === "function") {
            loginDialog.showModal();
        }
    }

    if (registerError) {
        const registerDialog = document.getElementById("registerDialog");
        if (registerDialog && typeof registerDialog.showModal === "function") {
            registerDialog.showModal();
        }
    }
});



</script>
</body>
</html>