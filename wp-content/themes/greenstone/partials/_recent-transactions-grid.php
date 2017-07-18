<ul class="property-buttons">
	<li class="filter-button all-button active">
		All Properties
		<div class="property-bottom"></div>
	</li>
	<li class="filter-button office-button">
		Office
		<div class="property-bottom"></div>
	</li>
	<li class="filter-button retail-button">
		Retail
		<div class="property-bottom"></div>
	</li>
	<li class="filter-button other-button">
		Other
		<div class="property-bottom"></div>
	</li>
</ul>
<div class="grid">
	<?php $args = array( 'post_type' => 'property', 'posts_per_page' => -1 );
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post(); ?>
		<div class="grid-item gridItem <?php the_field('property_type'); ?>">
			<div class="property-overlay">
	  		<div class="inner">
	  			<div class="property-borders"></div>
	  			<div class="property-headline">
	  				<?php the_title();?>
	  			</div>
					<div class="property-sqft">
						<?php the_field('property_sqft'); ?> SF
					</div>
					<div class="property-type">
						<?php the_field('property_type'); ?>
					</div>
					<div class="property-location">
						<?php the_field('property_location'); ?>
					</div>
				</div>
	  	</div>
			<?php $image = get_field('property_image'); if( !empty($image) ): ?>
				<img class="propertyImage" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			<?php endif;?>
		</div>
		<? wp_reset_postdata(); ?>
	<?php endwhile;?>
</div>