<?php /* Template Name: Team Page */ get_header(); ?>
<main class="team-page sub-page headerTrigger" role="main">
<?php while ( have_posts() ) : the_post(); ?>
  <section class="page-hero">
    <img class="hero-image" src="<?php echo get_template_directory_uri(); ?>/img/header/team-hero.jpg" >
    <!-- <img class="hero-gradient" src="<?php echo get_template_directory_uri(); ?>/img/header/Gradient-Overlay.png" > -->
    <div class="content">
      <div class="subHead">OUR PEOPLE</div>
      <h3>The Team</h3>
      <div class="button contactButton">
        <div class="button-guts">
          <a href="/">
            GET IN TOUCH<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="momentumWrapper"> -->
    <section class="team-tiles tileTrigger">
			<div class="content">
        <div class="section-header">
					<h2><?php the_field('team_header'); ?></h2>
					<hr>
				</div>
        <?php $args = array( 'post_type' => 'bios', 'posts_per_page' => -1 );
          $loop = new WP_Query( $args );
          $count = 0;
          while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <?php $count++;?>
          <div class="single-bio width50">
						<svg class="border-svg" preserveAspectRatio="none" viewBox="0 0 100 300" xmlns="http://www.w3.org/2000/svg">
	  					<rect x="0" y="0" width="100" height="300"/>
						</svg>
            <a class="large-bio-link" href="mailto:<?php the_field('bio_email'); ?>"></a>
            <div class="bio-content">
              <h4><?php the_title(); ?></h4>
              <h3><?php the_field('bio_position'); ?></h3>
              <?php $image = get_field('bio_pic');if( !empty($image) ): ?>
                <div class="bio-image">
                  <svg class="bio-color-overlay" preserveAspectRatio="none" viewBox="0 0 300 300">
                    <defs>
                      <linearGradient id="grad<?php echo $count;?>" class="grad" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse" gradientTransform='translate(0,0)'>
                        <stop offset="100%" style="stop-color:rgb(19,145,112);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(19,145,112);stop-opacity:0" />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="300" fill="url(#grad<?php echo $count;?>)" />
                  </svg>
      	          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                </div>
              <?php endif; ?>
              <p>
                <?php the_field('bio_words'); ?>
              </p>
            </div>
            <div class="button">
              <div class="button-guts">
                <a href="<?php the_field('bio_email'); ?>">
                  <?php the_field('bio_email'); ?>
                </a>
              </div>
            </div>
          </div>

          <? wp_reset_postdata(); ?>
        <?php endwhile;?>


			</div>
		</section>
  <!-- </div> --><!-- Momentum Wrapper -->
<?php endwhile; ?><!-- END LOOP -->
</main>
<?php get_footer(); ?>
