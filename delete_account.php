<?php
session_start();
include("yhteys.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];

    try {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->execute(['id' => $userId]);

        $_SESSION = [];
        session_destroy();
        header("Location: index.php");
        exit;

    } catch (PDOException $e) {
        $_SESSION['error'] = "Tilin poistaminen epäonnistui.";
        header("Location: user_page.php");
        exit;
    }
} else {
   $_SESSION['error'] = "Tiliä ei löytynyt tai poisto epäonnistui.";
    header("Location: user_page.php");
    exit;
}
?>