sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("flight.controller.View1", {
			onInit: function () {

            },
            
            handleListPress: function (evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selected = evt.getSource().getBindingContext().getPath();
                var s = selected.split("/");
                console.log(s)
                oRouter.navTo("EditData", { type: s[1], index: s[2] });
            }
		});
	});
