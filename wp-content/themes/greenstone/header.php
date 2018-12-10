<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title>Greenstone Partners</title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.png" rel="shortcut icon">
     <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
      // conditionizr.com
      // configure environment tests
      conditionizr.config({
          assets: '<?php echo get_template_directory_uri(); ?>',
          tests: {}
      });
      </script>

	</head>
	<!-- Global Site Tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-130502320-1');
	</script>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header" role="banner">

					<div class="content">
						<!-- logo -->
						<div class="header-logo">
							<a href="/">
								<img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" >
							</a>
						</div>
						<nav class="nav navMenu" role="navigation">
							<?php greenstone_theme_nav(); ?>
						</nav>


						<div class="mobile-menu mobileToggle">
							<span class="hamTop"></span>
							<span class="hamMid"></span>
							<span class="hamBot"></span>
						</div>
					</div>


			</header>
