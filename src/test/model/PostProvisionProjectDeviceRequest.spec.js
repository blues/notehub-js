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
    instance = new NotehubJs.PostProvisionProjectDeviceRequest();
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

  describe("PostProvisionProjectDeviceRequest", function () {
    it("should create an instance of PostProvisionProjectDeviceRequest", function () {
      // uncomment below and update the code to test PostProvisionProjectDeviceRequest
      //var instance = new NotehubJs.PostProvisionProjectDeviceRequest();
      //expect(instance).to.be.a(NotehubJs.PostProvisionProjectDeviceRequest);
    });

    it('should have the property productUid (base name: "product_uid")', function () {
      // uncomment below and update the code to test the property productUid
      //var instance = new NotehubJs.PostProvisionProjectDeviceRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceSn (base name: "device_sn")', function () {
      // uncomment below and update the code to test the property deviceSn
      //var instance = new NotehubJs.PostProvisionProjectDeviceRequest();
      //expect(instance).to.be();
    });

    it('should have the property fleetUids (base name: "fleet_uids")', function () {
      // uncomment below and update the code to test the property fleetUids
      //var instance = new NotehubJs.PostProvisionProjectDeviceRequest();
      //expect(instance).to.be();
    });
  });
});
