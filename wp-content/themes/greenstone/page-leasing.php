<?php /* Template Name: Leasing */ get_header(); ?>
	<main class="leasing-page sub-page headerTrigger" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="page-hero">
			<img class="hero-image" src="<?php echo get_template_directory_uri(); ?>/img/header/Leasing-Hero.jpg" >
			<!-- <img class="hero-gradient" src="<?php echo get_template_directory_uri(); ?>/img/header/Gradient-Overlay.png" > -->
			<div class="content">
				<div class="subHead">OUR SERVICES</div>
				<h3>leasing</h3>
				<div class="button contactButton">
					<div class="button-guts">
						<a href="/">
							GET IN TOUCH<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
						</a>
					</div>
				</div>
			</div>
		</section>
<div class="momentumWrapper">
		</section>
		<section>	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field('leasing_header_1'); ?></h2>
					<hr>
				</div>
				<div class="flex-between">
					<div class="width66">
						<?php the_field('leasing_description_1'); ?>
						<div class="facts-tile width100">
							<div class="trophy-line">
								<img src="<?php echo get_template_directory_uri(); ?>/img/trophy.svg" >
								<img src="<?php echo get_template_directory_uri(); ?>/img/trophy.svg" >
								<img src="<?php echo get_template_directory_uri(); ?>/img/trophy.svg" >
								<img src="<?php echo get_template_directory_uri(); ?>/img/trophy.svg" >
							</div>
							<h3 class="factsTrigger">
								<?php the_field('leasing_highlight_subtext_1'); ?>
							</h3>
						</div>
					</div>
				
					<div class="bullet-list width30">
						<h5>
							<?php the_field('leasing_bullet_title_1'); ?>
						</h5>
						<ul>
							<?php if( have_rows('leasing_bullet_list_1') ): ?>
								<? while ( have_rows('leasing_bullet_list_1') ) : the_row(); ?>
									<li>
										<?php the_sub_field('leasing_bullet_1'); ?>
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
		<section class="sample-clients">	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field('leasing_clients_header'); ?></h2>
					<p class="nice-border"><?php the_field('leasing_clients_description'); ?></p>
					<hr>
				</div>
				<?php get_template_part( 'partials/_lease-carousel' ); ?>
			</div>
		</section> 
		<section>	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field('leasing_header_2'); ?></h2>
					<hr>
				</div>
				<div class="flex-between">
					<div class="width66">
						<?php the_field('leasing_description_2'); ?>
						<div class="facts-tile">
							<h4>
								<span class="counter"><?php the_field('leasing_highlight_2'); ?></span>+
							</h4>
							<h3 class="factsTriggerTwo">
								<?php the_field('leasing_highlight_subtext_2'); ?>
							</h3>
						</div>
					</div>
					<div class="bullet-list-two width30">
						<h5>
							<?php the_field('leasing_bullet_title_2'); ?>
						</h5>
						<ul>
							<?php if( have_rows('leasing_bullet_list_2') ): ?>
								<? while ( have_rows('leasing_bullet_list_2') ) : the_row(); ?>
									<li>
										<?php the_sub_field('leasing_bullet_2'); ?>
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
</div><!-- Momentum Wrapper -->		
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





