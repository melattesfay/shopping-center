<?php
namespace CodeNationSquare;

class SquareSecrets {

	private $clientId;
	private $clientSecret;

	public function __construct()
	{
	    $this->clientId = $_ENV['SQUARE_APP_ID'];
	    $this->clientSecret = $_ENV['SQUARE_SECRET'];
	}

    /**
     * @return string
     */
	public function getClientID() : string
	{
		return $this->clientId;
	}

    /**
     * @return string
     */
	public function getClientSecret() : string
	{
		return $this->clientSecret;
	}

    /**
     * @param string $configuration
     * @throws \Exception
     */
	public function setAccessToken($configuration = 'default') : void
    {
        if ($configuration != 'default') {
            // todo: handle more than the default configuration
            throw new \Exception('unsupported configuration');
        }
        \SquareConnect\Configuration::getDefaultConfiguration()->setAccessToken($this->clientSecret);
    }
}
