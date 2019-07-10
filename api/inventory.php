<?php
require_once '../vendor/autoload.php';

$inventory = new \CodeNationSquare\Inventory();
$items = $inventory->fetchKiosk();
echo json_encode($items);