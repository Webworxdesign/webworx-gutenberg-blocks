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
$unique_id = wp_unique_id( 'link-group-' );

// Render inner blocks
$inner_blocks = $block->inner_blocks;
$inner_blocks_html = '';
foreach ($inner_blocks as $inner_block) {
    $inner_blocks_html .= $inner_block->render();
}

$url = $attributes['url'] ?? '#';

?>

<a 
  href="<?php echo esc_url( $url ); ?>" 
  <?php echo $attributes['openInNewTab'] ? 'target="_blank"' : ''; ?>
  <?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="link-group"  > 
  <?php echo  $inner_blocks_html; ?>
</a>
