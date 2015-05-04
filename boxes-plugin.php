<?php
/**
 * Plugin Name: Boxes-ShowOff
 * Description: Creates boxes to display content 
 * Version: 1.0.0
 * Author: Sophie Kohrogi
 * Author URI: //spiders.syr.edu
 */

//SHORT CODE FOR BOXES
function boxes_shortcode() {
   $box_query = new WP_Query( array( 'post_type' => 'boxes',
                                           'posts_per_page' => 8, 
                                           'category_name' => 'box' 
                                            ) 
                                          ); 
   $box_img = '<div class="end row">';
   while ( $box_query->have_posts() ) : $box_query->the_post();
   		$html     = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
      $title    = get_the_title();
      $content  = get_the_excerpt();
   		$box_img .='<div class="box col-lg-3 col-sm-4 col-xs-6">
                    <a href="#" class="img thumbnail"><img src="' . $html . '"></a>
                    <div class="title-box title off thumbnail">
                      <p>' . $title . '</p>
                    </div>

                    <div class="info info-off">
                      <img class="lrg-box" src="' . $html . '">
                      <div class="text-box">
                        <h1>' . $title . '</h1>
                        <div class="text">' . $content . '</div>
                      </div>
                    </div>
                  </div>';
   endwhile; 
   $box_img .= '</div>';
   wp_reset_postdata();
   return $box_img;
}
add_shortcode('boxes', 'boxes_shortcode');
add_action('wp_enqueue_scripts', 'boxes_shortcode');

function new_excerpt_more( $more ) {
  return '</br> <div class="read-button"><a class="read-more" href="' . get_permalink( get_the_ID() ) . '">' . __( 'Read More', 'your-text-domain' ) . '</a></div>';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );

//CUSTOM POST TYPE FOR Boxes
function create_posttype() {
  register_post_type( 'boxes',
    array(
      'label'  => __( 'Boxes' ),
      'labels' => array(
      	'name'          => __( 'Boxes' ),
      	'singular_name' => __( 'Box' ),
      	'menu_name'     => __( 'Boxes' ),
      	'add_new'       => __( 'Add New' ),
		'add_new_item'  => __( 'Add New Box' ),
		'new_item'      => __( 'New Boxes' ),
		'edit_item'     => __( 'Edit Boxes' ),
		'view_item'     => __( 'View Boxes' ),
		'all_items'     => __( 'All Boxes' ),
		'search_items'  => __( 'Search Boxes' ),
		'not_found'     => __( 'No boxes found.' ),
      ),
      'public'      => true,
      'has_archive' => true,
      'rewrite'     => array( 'slug' => 'boxes' ),

      'taxonomies'  => array( 'category' ),
      'supports' => array( 'title', 'editor', 'thumbnail','page-attributes')
    ) 
  );
}
add_action( 'init', 'create_posttype' );

function boxes_plugin() {
  wp_enqueue_script( 'box-script', plugin_dir_url(__FILE__) . 'boxes-plugin.js', array('jquery'), '', true);
}
add_action( 'wp_enqueue_scripts', 'boxes_plugin');
  