
			<!-- footer -->
			<footer class="footer" role="contentinfo">
				<?php $pageTwo = get_page_by_path( 'contact' );?>
				<?php $pageTwoID = $pageTwo->ID;?>

				<!-- LOOP CUSOTM FIELDS FROM OTHER PAGE -->

				<?php while ( have_posts() ) : the_post(); ?>
				<section>
					<div id='map'></div>
				</section>
				<section class="footer-rows">
					<div class="content">
						<div class="footer-tile width33">
							<ul>
								<li>ADDRESS</li>
								<li>747 North LaSalle Street</li>
								<li>Suite 450</li>
								<li>Chicago, IL 60654</li>
							</ul>
						</div>
						<div class="footer-tile width33">
							<ul>
								<li>CONTACT US</li>
								<li>Greenstone Partners</li>
								<li><a href="tel:<?php the_field('contact_phone_number', $pageTwoID); ?>"><?php the_field('contact_phone_number', $pageTwoID); ?></a></li> 
								<li><a href="mailto:<?php the_field('contact_email', $pageTwoID); ?>?subject=Website Inquiry"><?php the_field('contact_email', $pageTwoID); ?></a></li>
							</ul>
						</div>
						<div class="footer-tile width33">
							<ul>
								<li>NEWSLETTER</li>
								<li>Stay up to date with our latest listings, closing, and more.</li>
								<li>
									<!-- Begin MailChimp Signup Form -->
									<div id="mc_embed_signup">
										<form action="//Greenstonepartners.us11.list-manage.com/subscribe/post?u=29faaeb2cbab86dc6bb355d2a&amp;id=bbc9e7a969" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
										  <div id="mc_embed_signup_scroll">
											
												<div class="mc-field-group">
													<input type="email" value="" placeholder="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
												</div>
												<div id="mce-responses" class="clear">
													<div class="response" id="mce-error-response" style="display:none"></div>
													<div class="response" id="mce-success-response" style="display:none"></div>
												</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
											  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_29faaeb2cbab86dc6bb355d2a_bbc9e7a969" tabindex="-1" value=""></div>
											  <div class="clear">
											  	<div class="button">
											  		<div class="button-guts">
											    		<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
											    		<img src="<?php echo get_template_directory_uri(); ?>/img/button-arrow.svg" >
											    	</div>
											    </div>
											  </div>
										  </div>
										</form>
									</div>
								</li>

								<!--End mc_embed_signup-->
							</ul>
						</div>
					</div>
				</section>
				<section class="copyright-footer">
					<div class="content">
						&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <span>All rights reserved.</span>
					</div>
				</section>
				<div class="backtotop backToTop">
					<img src="<?php echo get_template_directory_uri(); ?>/img/up-arrow.png" >
				</div>
				</div>
				<?php endwhile; ?>
			</footer>
			<!-- /wrapper -->			
		</div>


			<?php get_template_part( 'partials/_contact-page' ); ?> 
			<!-- /footer -->

		


		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
