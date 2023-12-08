<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <?php wp_head(); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri() . '/style.css'; ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-hk8Pml0E+P2Ud6Zs7FeVfsf5A/9f2KRHCeRRDZgjFX8Xi8aQ9gXO5qAqFYj1lAM6JXXu2I3A+etDgdu0+1lcPQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <?php wp_nav_menu( array( 'theme_location' => 'main' ) ); ?>
</head>

<body <?php body_class(); ?>>
    
    <?php wp_body_open(); ?>