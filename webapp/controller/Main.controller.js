sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, library,JSONModel ) {
        "use strict";
        
        var urlObject = library.URLHelper;

        return Controller.extend("produtoconsulta.controller.Main", {
            onInit: function () { 
                //alert("ALERTA");
                let produto = {};
                let productModel = new JSONModel(produto);
                //this no javascript = ME-> no abap
                let view = this.getView();
                view.setModel(productModel, "ModeloProduto");
            },

            onClickImage: function(oEvent) {
                urlObject.redirect(oEvent.getSource().getSrc(), true);
            },

            onpressBuscar: function() {
                var input;
                input = this.byId("inpBuscar");
                let valor = input.getValue();
                //alert(valor);
                //parametros para buscar a api
                
                let parameters = {
                    url : "https://world.openfoodfacts.org/api/v2/product/" + valor,
                    //method é o tipo que vc quer fazer (view, insert, delete, alterar)
                    method : "GET",
                    crossDomain : true,
                    async : true
                };

                //debugar = break-point
                debugger
                //conjunto de comandos da web para disparar (ping)
                $.ajax(parameters).done(function(response){
                    let oProdModel = this.getView.getModel("ModeloProduto");
                    //clear
                    oProdModel.setData({});
                    oProdModel.refresh();
                    oProdModel.setData(response);
                    oProdModel.refresh();

                }.bind(this))  //sucesso
                .fail(function(){
                    debugger
                }.bind(this)); //exception
                //debugger
            },
        });
    });
