<?php

namespace Drupal\hello_world\Greetings;

use Drupal\Core\KeyValueStore\KeyValueFactoryInterface;

class HelloGenerator
{
  /**
   * @var KeyValueFactoryInterface
   */
  private $keyValueFactory;

  public function __construct(KeyValueFactoryInterface $keyValueFactory)
  {
    $this->keyValueFactory = $keyValueFactory;
  }

  public function getHello($length)
  {
    $key = "hello_" . $length;
    $store = $this->keyValueFactory->get('hello');

    // if cache
    if ($store->has($key)) {
      return $store->get($key);
    }

    $string = "Hell" . str_repeat("o", $length) . " World!";

    // build cache
    $store->set($key, $string);

    return $string;
  }
}
