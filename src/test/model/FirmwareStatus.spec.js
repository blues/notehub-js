/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
 *
 * The version of the OpenAPI document: 1.1.0
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
    instance = new NotehubJs.FirmwareStatus();
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

  describe("FirmwareStatus", function () {
    it("should create an instance of FirmwareStatus", function () {
      // uncomment below and update the code to test FirmwareStatus
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be.a(NotehubJs.FirmwareStatus);
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function () {
      // uncomment below and update the code to test the property organization
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function () {
      // uncomment below and update the code to test the property description
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function () {
      // uncomment below and update the code to test the property product
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be();
    });

    it('should have the property built (base name: "built")', function () {
      // uncomment below and update the code to test the property built
      //var instance = new NotehubJs.FirmwareStatus();
      //expect(instance).to.be();
    });
  });
});
