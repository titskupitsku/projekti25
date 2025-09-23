<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    die("User not logged in");
}

include("yhteys.php");

// Sanitize and validate input
$title = trim($_POST['eventName']);
$timeFrom = $_POST['eventTimeFrom'];
$timeTo = $_POST['eventTimeTo'];
$eventDate = $_POST['eventDate'];
$userId = $_SESSION['user_id'];

// Basic validation
if (!$title || !$timeFrom || !$timeTo || !$eventDate) {
    die("Missing required fields");
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO events (user_id, title, time_from, time_to, event_date) VALUES (?, ?, ?, ?, ?)");
$stmt->execute([$userId, $title, $timeFrom, $timeTo, $eventDate]);

echo "Event saved successfully";
?>

