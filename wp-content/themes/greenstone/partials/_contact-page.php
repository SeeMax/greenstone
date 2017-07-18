<div class="contact-page contactPage sub-page">
	<!-- GET THE PAGE ID FOR THE CUSOTM FIELDS I WANT TO ACCESS -->
	<?php $pageTwo = get_page_by_path( 'contact' );?>
	<?php $pageTwoID = $pageTwo->ID;?>

	<!-- LOOP CUSOTM FIELDS FROM OTHER PAGE -->

	<?php while ( have_posts() ) : the_post(); ?>
	<div class="content">
		<div class="section-header">
			<h2>Contact us</h2>
			<p class="nice-border">
				<?php the_field('contact_title', $pageTwoID); ?>
			</p>
			<hr>
		</div>
		<div class="left-content contact-content leftContent">
			<img class="contact-icon contactIcon" src="<?php echo get_template_directory_uri(); ?>/img/contact_phone_icon.svg" >
			<h3>PHONE</h3>
			<span>MAIN: <a href="tel:<?php the_field('contact_phone_number', $pageTwoID); ?>"><?php the_field('contact_phone_number', $pageTwoID); ?></a></span>
			<hr>
		</div>
		<div class="right-content contact-content rightContent">
			<img class="contact-icon contactIcon" src="<?php echo get_template_directory_uri(); ?>/img/contact_email_icon.svg" >
			<h3>EMAIL</h3>
			<div class="button mainContactButton">
				<div class="button-guts">
					<a href="mailto:<?php the_field('contact_email', $pageTwoID); ?>?subject=Website Inquiry">
						Get In Touch<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="left-back leftBack">
	</div>
	<div class="right-back rightBack">
	</div>
	<div class="contact-close contactClose">
		X
	</div>
	<?php endwhile; ?>
</div>