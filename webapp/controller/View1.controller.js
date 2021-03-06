sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageBox) {
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
            },

            handleAdd: function (evt) {
                var flightId = window.prompt("Please enter flight ID");
                if (flightId != null) {
                    var oModel = this.getView().getModel();
                    var oData = oModel.getData();
                    var oNewData = { flightId: flightId, status: "New", passengers: 100 };
                    oData["Arrival"].push(oNewData);
                    debugger;
                    oModel.refresh(true);
                }
            }
		});
	});
