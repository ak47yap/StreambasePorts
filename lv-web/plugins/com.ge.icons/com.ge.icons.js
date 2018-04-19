;(function(angular){
	'use strict';

	angular
		.module('com.ge.icons', ['com.tibco.sb.ldm'])
		.run(onModuleRun);

	onModuleRun.$inject = ['geomap.config', 'PluginRegistry'];

	function onModuleRun(GeomapConfig, PluginRegistry){

		/*
		 There's a little bug we have to fix when using custom icons. It causes the default icon selection to be blank
		 when you open the vis config editor for the first time. This line fixes that issue
		 */
		PluginRegistry.getVisualization('geomap').defaultConfig.points[0].defaultDataMarker = 'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin.png';

		/*
		 To use custom icons, a plugin has to override some default settings for the geomap vis.
		 */
		GeomapConfig.overrideSettings({
			icons: {
				/*
				 The basePath gets prepended to the file names to form a URL. URLs can be relative (if icon files are
				 bundled with the plugin) or absolute (if you want to pull them from a remote host). Here we've
				 uncommented the setting that gets them from a remote host.
				 */
				basePath: '',

				/*
				 To use icons bundled with the plugin uncomment the basePath setting below.
				 Note that the plugin name is what you defined as the plugin name in your META-INF/plugin.json file, not
				 necessarily the name of the directory that contains your plugin. For example, here the name
				 is "com.tibco.sb.ldm.web.plugins.geomap.icons" matching the plugin.json-defined module name, not
				 "com.tibco.sb.ldm.web.plugins.geomap".
				 */
				//basePath: 'plugins/com.tibco.sb.ldm.web.plugins.geomap.icons/icons/',

				//enumerate the icon file names to be appended to the basePath
				files: [
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/walker.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/car.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/shipping.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/bus.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/train.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/ship.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/airplane.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/mail.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_dark.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_cyan.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_green.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_yellow.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_orange.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_pink.png',
					'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin_red.png',
					'plugins/com.ge.icons/icons/plane-amber.png',
					'plugins/com.ge.icons/icons/plane-red.png',
					'plugins/com.ge.icons/icons/blank.png',
					'plugins/com.ge.icons/icons/crane_PNG.png',
					'plugins/com.ge.icons/icons/Picture1.png'
				]
			},
			defaults: {
				//choose the default marker icon
				dataMarker: 'system-plugins/com.tibco.sb.ldm.plugins.visualizations/geomap/img/icons/pin.png'
			}
		});

	}

}(angular));