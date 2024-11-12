/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
    instance = new NotehubJs.Proxy();
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

  describe("Proxy", function () {
    it("should create an instance of Proxy", function () {
      // uncomment below and update the code to test Proxy
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be.a(NotehubJs.Proxy);
    });

    it('should have the property fleets (base name: "fleets")', function () {
      // uncomment below and update the code to test the property fleets
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function () {
      // uncomment below and update the code to test the property url
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be();
    });

    it('should have the property alias (base name: "alias")', function () {
      // uncomment below and update the code to test the property alias
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be();
    });

    it('should have the property httpHeaders (base name: "http_headers")', function () {
      // uncomment below and update the code to test the property httpHeaders
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function () {
      // uncomment below and update the code to test the property timeout
      //var instance = new NotehubJs.Proxy();
      //expect(instance).to.be();
    });
  });
});
