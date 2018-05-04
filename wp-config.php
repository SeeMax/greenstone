<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'greenstone');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U19T9Bws4# M[-wf.r_X9WH&*@ELl)MJ-p!^Xu!i$R/k#}WCa-Y]H4ic;`Oxs@<-');
define('SECURE_AUTH_KEY',  '3?*jZ]?+hfFRNS:Zyv$qZ`Cs2Z+B!eksYSdhk#2mN,0Lt?pDnfmKx`lh6Q&>cOGQ');
define('LOGGED_IN_KEY',    'oA+1<zrw=IO(olcY!l~.RF@7kH+pBr[J%b=hcTEc`ao>m}[yD_1S;K]TC>cCb}7L');
define('NONCE_KEY',        '&(c&SK+v VlC>.w`ATBpXkq`-gR,%k]uz!m[t`cvv3cM a8e#DYHdc,b>mc;9L&2');
define('AUTH_SALT',        '}(n8OxdK;d>8O!PqvTuPKh$DSrMf{a EOD~:TBtq0(3(Yn#SM@};^pnE[24m%$s_');
define('SECURE_AUTH_SALT', '4 FH]wRimB7fzuAa~9}Z1xp<ZYGbUxg?%BU_qiS]G2_xzI;ZwBW&g8w!u%w@NZcj');
define('LOGGED_IN_SALT',   '1tIDum2zXBV#M:$1kc&k+nvY5<9eJZfI#Z}O/OANbOPB_Z{+O O*lGL1ITnytw+6');
define('NONCE_SALT',       '6fPhDq%X>sbbQl/^>Cz RGK0mW9S<;$oj{Zkq3^o{{0am,(Xt!]ti8~7$(Jnv7WP');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_z87e7q_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
