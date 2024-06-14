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
    instance = new NotehubJs.Alert();
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

  describe("Alert", function () {
    it("should create an instance of Alert", function () {
      // uncomment below and update the code to test Alert
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be.a(NotehubJs.Alert);
    });

    it('should have the property uid (base name: "uid")', function () {
      // uncomment below and update the code to test the property uid
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property monitorUid (base name: "monitor_uid")', function () {
      // uncomment below and update the code to test the property monitorUid
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property deviceUid (base name: "device_uid")', function () {
      // uncomment below and update the code to test the property deviceUid
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function () {
      // uncomment below and update the code to test the property createdAt
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function () {
      // uncomment below and update the code to test the property value
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property resolved (base name: "resolved")', function () {
      // uncomment below and update the code to test the property resolved
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property alertSource (base name: "alert_source")', function () {
      // uncomment below and update the code to test the property alertSource
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function () {
      // uncomment below and update the code to test the property source
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function () {
      // uncomment below and update the code to test the property data
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });

    it('should have the property notifications (base name: "notifications")', function () {
      // uncomment below and update the code to test the property notifications
      //var instance = new NotehubJs.Alert();
      //expect(instance).to.be();
    });
  });
});
