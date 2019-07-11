<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8d7fc1fc85f73e79a622687d3f37b64f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SquareConnect\\' => 14,
        ),
        'C' => 
        array (
            'CodeNationSquare\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SquareConnect\\' => 
        array (
            0 => __DIR__ . '/..' . '/square/connect/lib',
        ),
        'CodeNationSquare\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8d7fc1fc85f73e79a622687d3f37b64f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8d7fc1fc85f73e79a622687d3f37b64f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}