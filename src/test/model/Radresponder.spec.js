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
    instance = new NotehubJs.Radresponder();
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

  describe("Radresponder", function () {
    it("should create an instance of Radresponder", function () {
      // uncomment below and update the code to test Radresponder
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be.a(NotehubJs.Radresponder);
    });

    it('should have the property fleets (base name: "fleets")', function () {
      // uncomment below and update the code to test the property fleets
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be();
    });

    it('should have the property testApi (base name: "test_api")', function () {
      // uncomment below and update the code to test the property testApi
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be();
    });

    it('should have the property dataFeedKey (base name: "data_feed_key")', function () {
      // uncomment below and update the code to test the property dataFeedKey
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function () {
      // uncomment below and update the code to test the property clientId
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function () {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new NotehubJs.Radresponder();
      //expect(instance).to.be();
    });
  });
});
