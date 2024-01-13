<?php 

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

register_nav_menus( array(
	'main' => 'Menu Principal',
	'footer' => 'Bas de page',
) );

function add_script_mobilemenu() {
    wp_enqueue_script('mobilemenu', get_template_directory_uri() . '/js/mobilemenu.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'add_script_mobilemenu');

function add_script_calendly() {
	wp_enqueue_script('calendly', get_template_directory_uri() . '/js/calendly.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'add_script_calendly');

function add_script_testimonial() {
	wp_enqueue_script('testimonial', get_template_directory_uri() . '/js/testimonial.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'add_script_testimonial');

function add_script_scroll() {
	wp_enqueue_script('scroll', get_template_directory_uri() . '/js/scroll.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'add_script_scroll');