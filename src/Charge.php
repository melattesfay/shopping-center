<?php
namespace CodeNationSquare;

use SquareConnect\Model\ChargeRequest;
use SquareConnect\Model\ChargeResponse;

class Charge {

    private $api;
    private $locationId;

    public function __construct()
    {
        $this->api = new \SquareConnect\Api\TransactionsApi();
        $loc = new Locations(); // the list is fetched as part of constructing the object
        // todo: do not use first location automatically
        $this->locationId = $loc->getAsArray()[0]['id'];
    }

    public function chargeOrder(\SquareConnect\Model\Order $order, string $nonce) : ChargeResponse
    {
        $payload = new ChargeRequest();
        $payload->setIdempotencyKey(uniqid());
        $payload->setAmountMoney($order->getTotalMoney());
        $payload->setCardNonce($nonce);
        $payload->setOrderId($order->getId());
        $response = $this->api->charge($this->locationId, $payload);
        return $response;
    }
}