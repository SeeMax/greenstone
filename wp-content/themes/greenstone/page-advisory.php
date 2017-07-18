<?php /* Template Name: Advisory */ get_header(); ?>
	<main class="advisory-page sub-page headerTrigger" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="page-hero">
			<img class="hero-image" src="<?php echo get_template_directory_uri(); ?>/img/header/Advisory-Hero.jpg" >
			<!-- <img class="hero-gradient" src="<?php echo get_template_directory_uri(); ?>/img/header/Gradient-Overlay.png" > -->
			<div class="content">
				<div class="subHead">OUR SERVICES</div>
				<h3>Advisory</h3>
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
		<section>	
			<div class="content">
				<div class="section-header">
					<h2><?php the_field('advisory_header'); ?></h2>
					<hr>
				</div>
				<div class="flex-between">
					<div class="width66">
						<?php the_field('advisory_description'); ?>
						<div class="facts-tile">
							<h4>
								<span class="counter"><?php the_field('advisory_highlight'); ?></span>+ SF
							</h4>
							<h3 class="factsTrigger"><?php the_field('advisory_highlight_subtext'); ?></h3>
						</div>
					</div>
					<div class="bullet-list width30">
						<h5><?php the_field('advisory_bullet_title'); ?></h5>
						<ul>
							<?php if( have_rows('advisory_bullet_list') ): ?>
								<? while ( have_rows('advisory_bullet_list') ) : the_row(); ?>
									<li>
										<?php the_sub_field('advisory_bullet'); ?>
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
</div><!-- Momentum Scroll -->
		
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





