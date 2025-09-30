<?php
session_start();
$firstname = $_SESSION['firstname'] ?? 'Käyttäjä';
$lastname = $_SESSION['lastname'] ?? '';
$initials = strtoupper(substr($firstname, 0, 1) . substr($lastname, 0, 1));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" type="image/x-icon" href="./P.png">
    <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" 
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" />
    <script src="script2.js" defer></script>
    <title>käyttäjä</title>
</head>
<body>
    <div class="header">
        <div class="main-nav">
            <a href="user_page.php" class="nav-item"><i class="fas fa-home"></i><span>Etusivu</span></a>
            <a href="Pokedex.html" class="nav-item"><i class="fas fa-database"></i><span>Pokedex</span></a>
            <a href="Tarrasivu.html" class="nav-item"><i class="fas fa-sticky-note"></i><span>Poketarrat</span></a>
        </div>
        <div class="sign-in"><button id="accountButton" class="main-button" onclick="toggleAccountMenu()"><span class="account-icon"><i class="fas fa-user"></i></span><?php echo htmlspecialchars($firstname); ?></button>
            <div id="accountMenu" class="account-dialog hidden">
                <div class="user-info">
                    <div class="avatar-circle"><?php echo $initials; ?></div>
                    <div>
                         <p><strong><?php echo htmlspecialchars($firstname. ' ' . $lastname); ?></strong></p>
                        <p><?php echo htmlspecialchars($_SESSION['email'] ?? 'sähköposti puuttuu'); ?></p>
                    </div>
                </div>
                <form action="delete_account.php" method="POST" onsubmit="return confirm('Haluatko varmasti poistaa tilisi?');">
                    <button type="submit" class="poistili">Poista tili</button>
                </form>
                <form action="logout.php" method="POST">
                    <button type="submit" class="sign-out"><i class="fas fa-sign-out-alt"></i>Kirjaudu ulos</button>
                </form>
            </div>
        </div>
    </div>
    <div id="overlay" class="overlay hidden"></div>
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
                <div class="event-day">Mon</div>
                <div class="event-date">21 July 2022</div>
            </div>
            <div class="events">
                <!--I will add events by js-->
            </div>
            <div class="add-event-wrapper">
                <div class="add-event-header">
                    <div class="title">Lisää Tapahtuman</div>
                    <i class="fas fa-times close"></i>
                </div>
                <form class="add-event-form" method="POST">
                    <div class="add-event-body">
                        <div class="add-event-input">
                            <input type="text" name="eventName" placeholder="Tapahtuman nimi" class="event-name" required  />
                        </div>
                        <div class="add-event-input">
                            <input type="text"  placeholder="Tapahtuman aika alkean" name="eventTimeFrom" class="event-time-from" required />
                        </div>
                        <div class="add-event-input">
                            <input type="text"  placeholder="Tapahtuman aika päättyy" name="eventTimeTo" class="event-time-to" required />
                        </div>
                        <div class="add-event-input">
                            <input type="text" name="eventDate" class="event-date-visible" readonly />
                        </div>
                    </div>
                    <div class="add-event-footer">
                        <button type="submit" class="add-event-btn">Lisää</button>
                    </div>
                </form>
            </div>
        </div>  
        <button class="add-event">
            <i class="fas fa-plus"></i>
         </button> 
    </div>
    
</body>
</html>