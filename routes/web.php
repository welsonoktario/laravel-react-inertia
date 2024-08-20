<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index', [
        'artisanVersion' => Illuminate\Foundation\Application::VERSION,
        'phpVersion' => PHP_VERSION
    ]);
});

Route::get('dashboard', function () {
    return Inertia::render('dashboard/index');
});
