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
    // Just exit with a 200 OK status for preflight requests
    exit(0);
}

/*
 *  CONFIGURE EVERYTHING HERE
 */

// an email address that will receive the email with the output of the form
$sendTo = 'Marketing Team <marketing@novatales.com>';

// subject of the email
$subject = 'New message from Novatales website contact form';

// form field names and their translations
$fields = array(
    'fullname' => 'Full Name', 
    'email' => 'Email', 
    'phoneNumber' => 'Phone Number', 
    'service' => 'Service Required', 
    'otherInfo' => 'Any other information',
    'page' => 'Page URL'
);


// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try {
    // Check if the request method is POST and if the content type is application/json
    if ($_SERVER['REQUEST_METHOD'] !== 'POST' || strpos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
        throw new \Exception('Invalid request');
    }

    // Get JSON POST data
    $data = json_decode(file_get_contents('php://input'), true);

    if (count($data) == 0) throw new \Exception('Form is empty');

    // Assign the 'from' address dynamically based on the email field
    if (!isset($data['email'])) {
        throw new \Exception('Email field is missing');
    }
    $from = $data['fullname'] . ' <' . $data['email'] . '>';

    $emailText = "You have a new message from Novatales Website contact form\n=============================\n";

    foreach ($data as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // All the necessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    // Send email
    if (mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    } else {
        throw new \Exception('Email sending failed');
    }
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage . ': ' . $e->getMessage());
}

// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
} else {
    echo $responseArray['message'];
}
?>
