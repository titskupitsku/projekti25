<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($password)) {
        die("Invalid login credentials.");
    }

    include("yhteys.php");

    $sql = "SELECT id, firstname, lastname, email, password FROM users WHERE email = :email";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['firstname'] = $user['firstname'];
        $_SESSION['lastname'] = $user['lastname'];
        $_SESSION['email'] = $user['email'];


        header("Location: user_page.php"); // Redirect to user dashboard
        exit;
    } else {
        $_SESSION['error'] = "Incorrect email or password.";
        header("Location: index.php");
        exit;
    }

} else {
    header("Location: index.php");
    exit;
}
?>