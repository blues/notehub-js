/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger fourth beta deploy to npm
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD.
    define(["expect.js", process.cwd() + "/src/index"], factory);
  } else if (typeof module === "object" && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require("expect.js"), require(process.cwd() + "/src/index"));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NotehubJs);
  }
})(this, function (expect, NotehubJs) {
  "use strict";

  var instance;

  beforeEach(function () {
    instance = new NotehubJs.RouteApi();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === "function") return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === "function") object[setter](value);
    else object[property] = value;
  };

  describe("RouteApi", function () {
    describe("createRoute", function () {
      it("should call createRoute successfully", function (done) {
        //uncomment below and update the code to test createRoute
        //instance.createRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("deleteRoute", function () {
      it("should call deleteRoute successfully", function (done) {
        //uncomment below and update the code to test deleteRoute
        //instance.deleteRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getRoute", function () {
      it("should call getRoute successfully", function (done) {
        //uncomment below and update the code to test getRoute
        //instance.getRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getRouteLogsByRoute", function () {
      it("should call getRouteLogsByRoute successfully", function (done) {
        //uncomment below and update the code to test getRouteLogsByRoute
        //instance.getRouteLogsByRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getRoutes", function () {
      it("should call getRoutes successfully", function (done) {
        //uncomment below and update the code to test getRoutes
        //instance.getRoutes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("updateRoute", function () {
      it("should call updateRoute successfully", function (done) {
        //uncomment below and update the code to test updateRoute
        //instance.updateRoute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
