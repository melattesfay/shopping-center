<?php
require_once '../vendor/autoload.php';

try {
    $post = file_get_contents('php://input');
    $data = json_decode($post, true);
    $order = new \CodeNationSquare\Order();
    $order->build($data);
    $squareOrder = $order->submit()->getOrder();

    $charge = new \CodeNationSquare\Charge();
    $chargeResponse = $charge->chargeOrder($squareOrder, $data['nonce']);
    echo json_encode(['transaction-id' => $chargeResponse->getTransaction()->getId()]);
} catch (\Exception $e) {
    echo json_encode(['error'=>$e->getMessage(), 'data' => $data]);
} catch (\Throwable $e) {
    echo json_encode(['error'=>$e->getMessage(), 'data' => $data]);
}
