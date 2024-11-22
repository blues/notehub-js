/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
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
    instance = new NotehubJs.CloneProjectRequest();
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

  describe("CloneProjectRequest", function () {
    it("should create an instance of CloneProjectRequest", function () {
      // uncomment below and update the code to test CloneProjectRequest
      //var instance = new NotehubJs.CloneProjectRequest();
      //expect(instance).to.be.a(NotehubJs.CloneProjectRequest);
    });

    it('should have the property label (base name: "label")', function () {
      // uncomment below and update the code to test the property label
      //var instance = new NotehubJs.CloneProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property billingAccountUid (base name: "billing_account_uid")', function () {
      // uncomment below and update the code to test the property billingAccountUid
      //var instance = new NotehubJs.CloneProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property disableCloneRoutes (base name: "disable_clone_routes")', function () {
      // uncomment below and update the code to test the property disableCloneRoutes
      //var instance = new NotehubJs.CloneProjectRequest();
      //expect(instance).to.be();
    });

    it('should have the property disableCloneFleets (base name: "disable_clone_fleets")', function () {
      // uncomment below and update the code to test the property disableCloneFleets
      //var instance = new NotehubJs.CloneProjectRequest();
      //expect(instance).to.be();
    });
  });
});
