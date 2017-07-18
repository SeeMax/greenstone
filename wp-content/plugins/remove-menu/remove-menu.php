<?php
/*
Plugin Name: Remove Regular Posts and Comments Menu
Description: Remove the Regular Post Type and Comments Menu Item for Customized Sites
Version: 0.1
License: GPL
Author: See Max Work
Author URI: http://www.seemaxwork.com
*/

    add_action( 'admin_menu', 'my_remove_menu_pages' );

    function my_remove_menu_pages() {
        remove_menu_page('edit.php');
        remove_menu_page( 'edit-comments.php' );
    }
?>