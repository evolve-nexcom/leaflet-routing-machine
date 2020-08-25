(function() {
	'use strict';

	var L = require('leaflet');

	module.exports = L.Class.extend({
		options: {
			allowUTurn: false,
		},
		initialize: function(latLng, name, options, trips_index, waypoint_index) {
			L.Util.setOptions(this, options);
			this.latLng = L.latLng(latLng);
			this.name = name;
			this.trips_index = trips_index;
			this.waypoint_index = waypoint_index;
		}
	});
})();
