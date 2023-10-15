<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <?php wp_head(); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/style.css'; ?>">
    <?php wp_nav_menu( array( 'theme_location' => 'main' ) ); ?>
</head>

<body <?php body_class(); ?>>
    
    <?php wp_body_open(); ?>