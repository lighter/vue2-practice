<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function() {
    return ['AAA', 'BBBB', 'CCCC', 'DDDD'];
});
