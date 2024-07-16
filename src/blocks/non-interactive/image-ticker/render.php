<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Generate unique id for aria-controls.
$unique_id = wp_unique_id( 'image-ticker-' );

// Render inner blocks
$inner_blocks = $block->inner_blocks;
$inner_blocks_html = '';
foreach ($inner_blocks as $inner_block) {
    $inner_blocks_html .= $inner_block->render();
}
?>

<div 
  <?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="image-ticker" 
  <?php echo wp_interactivity_data_wp_context( array( 'id' => $unique_id, 'scrollListWidth' => '0px' ) ); ?> > 
    <div class="ticker-track">
      <?php echo '<div class="ticker-track-list" data-wp-init="callbacks.imageTickerInit">' . $inner_blocks_html . '</div>'; ?>
      <?php echo '<div class="ticker-track-list">' . $inner_blocks_html . '</div>'; ?>
    </div>
    <style>
      @keyframes ticker {
        0% {
          transform: translate3d(0, 0, 0);
        } 
        100% {
          transform: translate3d(var(--<?php echo $unique_id; ?>-scroll-width), 0, 0);
        }
      }
    </style>
</div>
