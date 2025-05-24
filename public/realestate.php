<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
// Allow specific methods
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
// Enable error logging to a file
ini_set("log_errors", 1);
ini_set("error_log", "/tmp/php-error.log");
// Handle preflight requests (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0); // Preflight check passed
}
// Email configuration
$sendTo = 'Marketing Team <marketing@novatales.com>';
$subject = 'New message from Novatales Real Estate Page contact form';
$okMessage = 'Contact form successfully submitted. Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later.';

// Allowed fields in the form
$fields = array(
    'fullName'     => 'Full Name',
    'email'        => 'Email',
    'phoneNumber'  => 'Phone Number',
    'businessname' => 'Business Name',
    'page'         => 'Page URL'
);
error_reporting(E_ALL & ~E_NOTICE);
try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST' || strpos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
        throw new Exception('Invalid request type or content type.');
    }
    // Decode JSON request
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data)) {
        throw new Exception('Form is empty.');
    }
    // Log received data for debugging
    error_log("Received data: " . print_r($data, true));

    if (empty($data['email'])) {
        throw new Exception('Email field is missing.');
    }
    $from = $data['fullName'] . ' <' . $data['email'] . '>';
    // Build the email body
    $emailText = "You have a new message from Novatales Real Estate Page contact form\n";
    $emailText .= "=============================================\n\n";
    foreach ($fields as $key => $label) {
        if (isset($data[$key]) && !empty($data[$key])) {
            $emailText .= "$label: " . $data[$key] . "\n";
        } else {
            $emailText .= "$label: (Not provided)\n"; // Optional for clarity
        }
    }
    // Build headers
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    // Send the email
if (mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
    $responseArray = array(
        'status' => 200,
        'type' => 'success',
        'message' => $okMessage
    );
} else {
    throw new Exception('Failed to send email.');
}
} catch (Exception $e) {
    // Log the exception
    error_log("Error: " . $e->getMessage());
    $responseArray = array(
        'type' => 'danger',
        'message' => $errorMessage . ' ' . $e->getMessage()
    );
}
// Return JSON if AJAX
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode($responseArray);
} else {
    echo $responseArray['message'];
}
?>
