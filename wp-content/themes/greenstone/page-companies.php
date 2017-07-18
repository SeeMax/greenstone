<?php /* Template Name: Companies Page */ get_header('companies'); ?>
	<main class="companies-page headerTrigger" role="main">
		<div class="co-background-gradient"></div>
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="">
			<div class="content">	

				<div class="hero-header tileTrigger">
					<img class="" src="<?php echo get_template_directory_uri(); ?>/img/companies/gsc-logo.svg" >
					<h2><?php the_field('subtitle'); ?></h2>
				</div>
				<div class="tile-area">
					<div class="link-tile service-tile">
						<a href="http://www.greenstone-partners.com" target="_blank"></a>
						<svg class="border-svg" preserveAspectRatio="none" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
	  					<rect x="0" y="0" width="180" height="120"/>
						</svg>
						<img class="tile-logo" src="<?php echo get_template_directory_uri(); ?>/img/companies/gsp-logo.svg" >
						<?php the_field('partners_copy'); ?>
						<div class="button">
							<div class="button-guts">
								Visit Site<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
							</div>
						</div>
					</div>
					
					<div class="link-tile service-tile">
						<a href="http://www.greenstone-am.com" target="_blank"></a>
						<svg class="border-svg" preserveAspectRatio="none" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
	  					<rect x="0" y="0" width="180" height="120"/>
						</svg>
						<img class="tile-logo" src="<?php echo get_template_directory_uri(); ?>/img/companies/gsa-logo.svg" >
						<?php the_field('management_copy'); ?>
						<div class="button">
							<div class="button-guts">
								Visit Site<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
							</div>
						</div>
					</div>
				</div>
				<div class="ground"></div>
				<div class="cityscape">
					<img class="gray-city" src="<?php echo get_template_directory_uri(); ?>/img/companies/companies-city-gray.svg" >
					<img class="green-city" src="<?php echo get_template_directory_uri(); ?>/img/companies/companies-city-green.svg" >
				</div>


			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer('companies'); ?>