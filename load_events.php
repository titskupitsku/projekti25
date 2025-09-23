<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    die("User not logged in");
}

include("yhteys.php");

$userId = $_SESSION['user_id'];

$stmt = $conn->prepare("SELECT title, time_from, time_to, event_date FROM events WHERE user_id = ?");
$stmt->execute([$userId]);
$events = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($events);
?>




