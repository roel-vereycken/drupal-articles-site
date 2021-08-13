<?php

namespace Drupal\hello_world\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\hello_world\Greetings\HelloGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Response;

class HelloController extends ControllerBase
{
  private $helloGenerator;

  public function __construct(HelloGenerator $helloGenerator)
  {
    $this->helloGenerator = $helloGenerator;
  }

  public function content($count) {

    $greeting = $this->helloGenerator->getHello($count);

    return [
      "#theme" => "hello_world_theme_hook",
      "#content" => "Pampampam",
      "#content2" => $greeting
    ];

//    return new Response("test test");

  }

  public static function create(ContainerInterface $container)
  {
    $helloGenerator = $container->get("hello_world.hello_generator");

    return new static($helloGenerator);
  }

}
