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
define( 'DB_NAME', 'polfwack_wp294' );

/** MySQL database username */
define( 'DB_USER', 'polfwack_wp294' );

/** MySQL database password */
define( 'DB_PASSWORD', 'UrGw*5Jb0v38' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z.eQGsJR?z|+rJ_>iw/VL*A{0::I2wlpfWN9rNk1ix|>}lK!naj&1, 7hN-&y6EB' );
define( 'SECURE_AUTH_KEY',  'GX^s(Br^2z;rWg>IIaJ~q7![#(levGA*.;Bt#=_-&YetimjTa(BE=HyqFR,j9#O2' );
define( 'LOGGED_IN_KEY',    '?&4;.WUMYOreMNS]Aq6.Z_Py1$&6S!ef0i>@O,LtE2elG05Lad(g-M-VL| #rc=Q' );
define( 'NONCE_KEY',        'h$@]~-6d}V^ogBH72;BmV9Q?GDW>w/Q@6~`gzN?^.#v5.n XhQ!kS!.4j!z1hVFq' );
define( 'AUTH_SALT',        '<>_xS&`Y??UsYLv^,MC ,:*Lf^;7L0Cv;Ez=Xz<mE02b5r$oz]VMtQBKK2KFE(D?' );
define( 'SECURE_AUTH_SALT', '*P3Edc>4vs[bEd-.)k+19`D*Ra>&/JjZ%&16iUCPkEQic.vH/zRb>c#!ki#T$EdM' );
define( 'LOGGED_IN_SALT',   '=]1Mk`(ZiG_~7 j&nY&Y,1P;M$]RL?Y,_mH:Hp1Zfk,Dw%)[`H-M7:/5[LBT 2G`' );
define( 'NONCE_SALT',       '~ci[UcI$)=9S~I@c:EV_sY#0^&Mt+ykYnSLy#<cQ/p4b{5E7JQX}I9RQ=[6HWp%}' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
