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
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); // Preflight check passed
}

// Email config
$sendTo = 'Marketing Team <marketing@novatales.com>';
$subject = 'New message from Novatales Healthcare Page contact form';
$okMessage = 'Contact form successfully submitted. Thank you, We will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// Only keep these fields
$fields = array(
    'fullname' => 'Full Name',
    'email' => 'Email',
    'phonenumber' => 'Phone Number',
);

error_reporting(E_ALL & ~E_NOTICE);

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST' || strpos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
        throw new \Exception('Invalid request');
    }

    $data = json_decode(file_get_contents('php://input'), true);

    if (count($data) == 0) throw new \Exception('Form is empty');

    if (!isset($data['email'])) {
        throw new \Exception('Email field is missing');
    }

    $from = $data['fullname'] . ' <' . $data['email'] . '>';

    $emailText = "You have a new message from Novatales Website contact form\n=============================\n";

    foreach ($fields as $key => $label) {
        if (isset($data[$key])) {
            $emailText .= "$label: " . $data[$key] . "\n";
        }
    }

    $headers = array(
        'Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    if (mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    } else {
        throw new \Exception('Email sending failed');
    }
    
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage . ': ' . $e->getMessage());
}

// Return JSON if AJAX
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode($responseArray);
} else {
    echo $responseArray['message'];
}
