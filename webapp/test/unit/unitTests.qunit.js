/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"produto_consulta/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
