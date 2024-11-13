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
    instance = new NotehubJs.GetProjectEvents200Response();
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

  describe("GetProjectEvents200Response", function () {
    it("should create an instance of GetProjectEvents200Response", function () {
      // uncomment below and update the code to test GetProjectEvents200Response
      //var instance = new NotehubJs.GetProjectEvents200Response();
      //expect(instance).to.be.a(NotehubJs.GetProjectEvents200Response);
    });

    it('should have the property events (base name: "events")', function () {
      // uncomment below and update the code to test the property events
      //var instance = new NotehubJs.GetProjectEvents200Response();
      //expect(instance).to.be();
    });

    it('should have the property hasMore (base name: "has_more")', function () {
      // uncomment below and update the code to test the property hasMore
      //var instance = new NotehubJs.GetProjectEvents200Response();
      //expect(instance).to.be();
    });

    it('should have the property through (base name: "through")', function () {
      // uncomment below and update the code to test the property through
      //var instance = new NotehubJs.GetProjectEvents200Response();
      //expect(instance).to.be();
    });
  });
});
