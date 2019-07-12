<?php
require_once '../vendor/autoload.php';

$post = file_get_contents('php://input');
$data = json_decode($post, true);
$order = new \CodeNationSquare\Order();
$order->build($data);
$squareOrder = $order->submit()->getOrder();

$charge = new \CodeNationSquare\Charge();
$chargeResponse = $charge->chargeOrder($squareOrder, $data['nonce']);
echo json_encode(['transaction-id' => $chargeResponse->getTransaction()->getId()]);
