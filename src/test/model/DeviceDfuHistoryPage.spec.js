/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Test beta deploys
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
    instance = new NotehubJs.DeviceDfuHistoryPage();
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

  describe("DeviceDfuHistoryPage", function () {
    it("should create an instance of DeviceDfuHistoryPage", function () {
      // uncomment below and update the code to test DeviceDfuHistoryPage
      //var instance = new NotehubJs.DeviceDfuHistoryPage();
      //expect(instance).to.be.a(NotehubJs.DeviceDfuHistoryPage);
    });

    it('should have the property devices (base name: "devices")', function () {
      // uncomment below and update the code to test the property devices
      //var instance = new NotehubJs.DeviceDfuHistoryPage();
      //expect(instance).to.be();
    });

    it('should have the property hasMore (base name: "has_more")', function () {
      // uncomment below and update the code to test the property hasMore
      //var instance = new NotehubJs.DeviceDfuHistoryPage();
      //expect(instance).to.be();
    });
  });
});
