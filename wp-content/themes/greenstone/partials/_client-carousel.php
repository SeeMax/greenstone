<div class="logo-container imageCarousel">
	<?php if( have_rows('sample-clients', 'option') ): ?>
		<? while ( have_rows('sample-clients', 'option') ) : the_row(); ?>
			<div class="logo-tile logoTile">
				<?php $image = get_sub_field('sample_client_logo'); if( !empty($image) ): ?>
					<img class="propertyImage" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				<?php endif;?>
			</div>				
		<?php endwhile; ?>

	<?php else: ?>	
	  <span>no rows found</span>
	<?php endif; ?>
</div>