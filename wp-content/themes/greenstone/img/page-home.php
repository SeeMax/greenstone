<?php /* Template Name: Home */ get_header(); ?>

	<main class="home-page headerTrigger hasFullCounter" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<div class="momentumWrapper">
			<section class="video-section">
				<img class="gradient-overlay" src="<?php echo get_template_directory_uri(); ?>/img/gradient.svg" >
				<?php get_template_part( 'partials/_video-logo' ); ?> 
				<div class="video-callouts">
					<span>Investment</span>
					<span>Leasing</span>
					<span>Management</span>
					<span>Advisory</span>
				</div>
				<div class="video-frame">
					<video playsinline autoplay muted loop >
						<source src="<?php echo get_theme_file_uri( 'video/720_med_low.webm' );?> "type="video/webm">
						<source src="<?php echo get_theme_file_uri( 'video/720_med_low.mp4' );?>" type="video/mp4">
					</video>
				</div>
			</section>
			<section class="significant-facts">	
				<div class="content">
					<div class="facts-tile width33">
						<h4 id="sqft" class="fact-animation countUpDigits">200,000,000</h4>
						<h3 class="factsTrigger">Square Feet Leased</h3>
					</div>
					<div class="facts-tile width33">
						<h4><span id="transv" class="countUpDigits">900</span> mm+</h4>
						<h3>IN TRANSACTIONAL VOLUME</h3>
					</div>
					<div class="facts-tile width33">
						<h4><span id="underw" class="countUpDigits">1.5</span> MM SF</h4>
						<h3>UNDERWRITEEN ANNUALLY</h3>
					</div>
				</div>
			</section>
			<section class="our-services">	
				<div class="content">
					<div class="section-header">
						<h2><?php the_field('service_header'); ?></h2>
						<p class="nice-border">
							<?php the_field('service_description'); ?>
						</p>
						<hr>
					</div>
					<?php if( have_rows('service_tile') ): ?>
						<? while ( have_rows('service_tile') ) : the_row(); ?>
							<div class="service-tile width50">
								<a href="<?php the_sub_field('service_link'); ?>"></a>
								<svg class="border-svg" preserveAspectRatio="none" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
			  					<rect x="0" y="0" width="180" height="120"/>
								</svg>
								<h3><?php the_sub_field('service_name'); ?></h3>
								<?php the_sub_field('service_description'); ?>
								<div class="button">
									<div class="button-guts">
										Learn More<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
									</div>
								</div>
							</div>
						<?php endwhile; ?>

					<?php else: ?>	
					  <span>no rows found</span>
					<?php endif; ?>
				</div>
			</section>	

			<?php get_template_part( 'partials/_global-locations' ); ?> 
			
			<section class="recent-transactions ">	
				<div class="content">
					<div class="section-header propertyTrigger">
						<h2><?php the_field( 'home_transaction_title' ); ?> </h2>
						<p class="nice-border">
							<?php the_field( 'home_transaction_detail' ); ?> 
						</p>
						<hr>
					</div>
					<ul class="property-buttons">
						<li class="all-button active">All Properties</li>
						<li class="office-button">Office</li>
						<li class="retail-button">Retail</li>
					</ul>
					<div class="grid">
						<?php $args = array( 'post_type' => 'property', 'posts_per_page' => 16 );
							$loop = new WP_Query( $args );
							while ( $loop->have_posts() ) : $loop->the_post(); ?>
	  					
	  					<div class="grid-item gridItem <?php the_field('property_type'); ?>">
			  				<div class="white-cover whiteCover"></div>
		  					<div class="property-overlay">
						  		<div class="inner">
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
				</div>
			</section>
		</div><!-- Momentum Scroll -->
		<section class="sample-clients">	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field( 'home_client_title'); ?></h2>
					<p class="nice-border">
						<?php the_field( 'home_client_details'); ?>
					</p>
					<hr>
				</div>

				<?php get_template_part( 'partials/_client-carousel' ); ?> 
		
			</div>
		</section>

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





