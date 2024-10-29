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
    instance = new NotehubJs.DeviceTowerInfo();
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

  describe("DeviceTowerInfo", function () {
    it("should create an instance of DeviceTowerInfo", function () {
      // uncomment below and update the code to test DeviceTowerInfo
      //var instance = new NotehubJs.DeviceTowerInfo();
      //expect(instance).to.be.a(NotehubJs.DeviceTowerInfo);
    });

    it('should have the property mcc (base name: "mcc")', function () {
      // uncomment below and update the code to test the property mcc
      //var instance = new NotehubJs.DeviceTowerInfo();
      //expect(instance).to.be();
    });

    it('should have the property mnc (base name: "mnc")', function () {
      // uncomment below and update the code to test the property mnc
      //var instance = new NotehubJs.DeviceTowerInfo();
      //expect(instance).to.be();
    });

    it('should have the property lac (base name: "lac")', function () {
      // uncomment below and update the code to test the property lac
      //var instance = new NotehubJs.DeviceTowerInfo();
      //expect(instance).to.be();
    });

    it('should have the property cellId (base name: "cell_id")', function () {
      // uncomment below and update the code to test the property cellId
      //var instance = new NotehubJs.DeviceTowerInfo();
      //expect(instance).to.be();
    });
  });
});
