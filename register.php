

<?php
session_start();
include("yhteys.php");

try {
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'] ?? '';
    $firstname = $_POST['firstname'] ?? '';
    $lastname = $_POST['lastname'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($password) || empty($firstname) || empty($lastname)) {
        $_SESSION['register_error'] = "Please fill in all fields correctly.";
        header("Location: Homepage.php");
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (email, password, firstname, lastname) VALUES (:email, :password, :firstname, :lastname)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        'email' => $email,
        'password' => $hashedPassword,
        'firstname' => $firstname,
        'lastname' => $lastname
    ]);
    $_SESSION['user_id'] = $conn->lastInsertId();
    $_SESSION['firstname'] = $firstname;
    $_SESSION['lastname'] = $lastname;
    $_SESSION['email'] = $email;



    $_SESSION['register_success'] = "Registration successful!";
    header("Location: user_page.php");
    exit;

} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        $_SESSION['register_error'] = "This email is already registered.";
    } else {
        $_SESSION['register_error'] = "Registration failed. Please try again.";
    }
    header("Location: Homepage.php");
    exit;
}
?>

