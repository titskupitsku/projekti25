<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    die("User not logged in");
}

include("yhteys.php");

$userId = $_SESSION['user_id'];
$eventTitle = $_POST['eventTitle'];
$eventDate = $_POST['eventDate'];

$stmt = $conn->prepare("DELETE FROM events WHERE user_id = ? AND title = ? AND event_date = ?");
$success = $stmt->execute([$userId, $eventTitle, $eventDate]);

if ($success) {
    echo "Event deleted successfully";
} else {
    echo "Failed to delete event";
}
?>

