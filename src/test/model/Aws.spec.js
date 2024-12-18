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
    instance = new NotehubJs.Aws();
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

  describe("Aws", function () {
    it("should create an instance of Aws", function () {
      // uncomment below and update the code to test Aws
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be.a(NotehubJs.Aws);
    });

    it('should have the property fleets (base name: "fleets")', function () {
      // uncomment below and update the code to test the property fleets
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function () {
      // uncomment below and update the code to test the property filter
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property transform (base name: "transform")', function () {
      // uncomment below and update the code to test the property transform
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property throttleMs (base name: "throttle_ms")', function () {
      // uncomment below and update the code to test the property throttleMs
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function () {
      // uncomment below and update the code to test the property url
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property httpHeaders (base name: "http_headers")', function () {
      // uncomment below and update the code to test the property httpHeaders
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property disableHttpHeaders (base name: "disable_http_headers")', function () {
      // uncomment below and update the code to test the property disableHttpHeaders
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function () {
      // uncomment below and update the code to test the property timeout
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property region (base name: "region")', function () {
      // uncomment below and update the code to test the property region
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property accessKeyId (base name: "access_key_id")', function () {
      // uncomment below and update the code to test the property accessKeyId
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property accessKeySecret (base name: "access_key_secret")', function () {
      // uncomment below and update the code to test the property accessKeySecret
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property messageGroupId (base name: "message_group_id")', function () {
      // uncomment below and update the code to test the property messageGroupId
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property messageDeduplicationId (base name: "message_deduplication_id")', function () {
      // uncomment below and update the code to test the property messageDeduplicationId
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function () {
      // uncomment below and update the code to test the property channel
      //var instance = new NotehubJs.Aws();
      //expect(instance).to.be();
    });
  });
});
