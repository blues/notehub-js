/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger another beta deploy to npm
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
    instance = new NotehubJs.GetDeviceSessions200Response();
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

  describe("GetDeviceSessions200Response", function () {
    it("should create an instance of GetDeviceSessions200Response", function () {
      // uncomment below and update the code to test GetDeviceSessions200Response
      //var instance = new NotehubJs.GetDeviceSessions200Response();
      //expect(instance).to.be.a(NotehubJs.GetDeviceSessions200Response);
    });

    it('should have the property sessions (base name: "sessions")', function () {
      // uncomment below and update the code to test the property sessions
      //var instance = new NotehubJs.GetDeviceSessions200Response();
      //expect(instance).to.be();
    });

    it('should have the property hasMore (base name: "has_more")', function () {
      // uncomment below and update the code to test the property hasMore
      //var instance = new NotehubJs.GetDeviceSessions200Response();
      //expect(instance).to.be();
    });
  });
});
