<?php /* Template Name: Investment */ get_header(); ?>

	<main class="investment-page sub-page headerTrigger" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
			<section class="page-hero">
				<img class="hero-image" src="<?php echo get_template_directory_uri(); ?>/img/header/Investment-Hero.jpg" >
				<!-- <img class="hero-gradient" src="<?php echo get_template_directory_uri(); ?>/img/header/Gradient-Overlay.png" > -->
				<div class="content">
					<div class="subHead">OUR SERVICES</div>
					<h3>investment sales</h3>
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
						<h2><?php the_field('invest_header'); ?></h2>
						<hr>
					</div>
					<div class="flex-between">
						<div class="width66">
							<?php the_field('invest_description'); ?>
							<div class="facts-tile">
								<h4>$<span class="counter"><?php the_field('invest_highlight'); ?></span>+
								</h4>
								<h3 class="factsTrigger">
									<?php the_field('invest_highlight_subtext'); ?>
								</h3>
							</div>
						</div>
						<div class="bullet-list width30">
							<h5><?php the_field('invest_bullet_title'); ?></h5>
							<ul>
								<?php if( have_rows('invest_bullet_list') ): ?>
									<? while ( have_rows('invest_bullet_list') ) : the_row(); ?>
										<li>
											<?php the_sub_field('invest_bullet'); ?>
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
						<h2><?php the_field('invest_clients_header'); ?></h2>
						<p class="nice-border"><?php the_field('invest_clients_description'); ?></p>
						<hr>
					</div>
					<?php get_template_part( 'partials/_client-carousel' ); ?>		
				</div>
			</section> 
			<section id="transactions" class="investment-portfolio">	
				<div class="content">
					<div class="section-header propertyTrigger">
						<h2><?php the_field('invest_transactions_header'); ?></h2>
						<p class="nice-border"><?php the_field('invest_transactions_description'); ?></p>
						<hr>
					</div>
					<?php get_template_part( 'partials/_recent-transactions-grid' ); ?>
				</div>
			</section>
			<section>	
				<div class="content">
					<div class="section-header">
						<h2><?php the_field('map_title'); ?></h2>
						<p class="nice-border">
							<?php the_field('map_description'); ?>
						</p>
						<hr>
					</div>
					<div class="global-map">
						<?php get_template_part( 'partials/_global-map' ); ?>
					</div>
			</section>
</div><!-- Momentum Wrapper -->
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





