<?php /* Template Name: Management */ get_header(); ?>
	<main class="management-page sub-page headerTrigger" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="page-hero">
			<img class="hero-image" src="<?php echo get_template_directory_uri(); ?>/img/header/Management-Hero-2.jpg" >
			<!-- <img class="hero-gradient" src="<?php echo get_template_directory_uri(); ?>/img/header/Gradient-Overlay.png" > -->
			<div class="content">
				<div class="subHead">OUR SERVICES<div>
				<h3>management</h3>
				<div class="button contactButton">
					<div class="button-guts">
						<a href="/">
							GET IN TOUCH<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
						</a>
					</div>
				</div>
			</div>
		</section>
		<section>	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field('management_header'); ?></h2>
					<hr>
				</div>
				<div class="flex-between">
					<div class="width66">
						<?php the_field('management_description'); ?>
						<div class="facts-tile">
							<h4>
								<span class="counter"><?php the_field('management_highlight'); ?></span>+ SF
							</h4>
							<h3 class="factsTrigger">
								<?php the_field('management_highlight_subtext'); ?>
							</h3>
						</div>
						<div class="button management-button">
							<div class="button-guts">
								<a href="http://www.greenstone-am.com" target="_blank">
									Visit greenstone asset management<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
								</a>
							</div>
						</div>
					</div>
					<div class="bullet-list width30">
						<h5>
							<?php the_field('management_bullet_title'); ?>
						</h5>
						<ul>
							<?php if( have_rows('management_bullet_list') ): ?>
								<? while ( have_rows('management_bullet_list') ) : the_row(); ?>
									<li>
										<?php the_sub_field('management_bullet'); ?>
									</li>
								<?php endwhile; ?>
							<?php else: ?>	
							  <span>no rows found</span>
							<?php endif; ?>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="management-portfolio">	
			<div class="content">
				<div class="section-header propertyTrigger">
					<h2><?php the_field('management_portfolio_header'); ?></h2>
					<p class="nice-border"><?php the_field('management_portfolio_description'); ?></p>
					<hr>
				</div>
				<ul class="property-buttons">
					<li class="all-managed-button active">
						All Properties
						<div class="property-bottom"></div>
					</li>
					<li class="available-button">
						Available
						<div class="property-bottom"></div>
					</li>
					<li class="leased-button">
						Leased
						<div class="property-bottom"></div>
					</li>
				</ul>
				<div class="grid">
					<?php $args = array( 'post_type' => 'managed', 'posts_per_page' => -1 );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<div class="grid-item gridItem <?php the_field('property_type'); ?>">
							<img class="leased-holder" src="<?php echo get_template_directory_uri(); ?>/img/leased-button.svg" >
							<div class="property-overlay">
					  		<div class="inner">
					  			<div class="property-borders"></div>
					  			<div class="property-headline">
					  				<?php the_title();?>
					  			</div>
									<div class="property-sqft">
										<?php if( get_field('property_spaces') == '1' ): ?>
											<?php the_field('property_spaces'); ?> Space
										<?php else: ?>
											<?php the_field('property_spaces'); ?> Spaces
										<?php endif; ?>
									</div>
									<div class="property-type">
										<a href="<?php the_field('flyer_link'); ?>">
											<img src="<?php echo get_template_directory_uri(); ?>/img/flyer-button.svg" >
										</a>
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
			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





