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
    instance = new NotehubJs.Mqtt();
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

  describe("Mqtt", function () {
    it("should create an instance of Mqtt", function () {
      // uncomment below and update the code to test Mqtt
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be.a(NotehubJs.Mqtt);
    });

    it('should have the property fleets (base name: "fleets")', function () {
      // uncomment below and update the code to test the property fleets
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function () {
      // uncomment below and update the code to test the property filter
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property transform (base name: "transform")', function () {
      // uncomment below and update the code to test the property transform
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property throttleMs (base name: "throttle_ms")', function () {
      // uncomment below and update the code to test the property throttleMs
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function () {
      // uncomment below and update the code to test the property timeout
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property broker (base name: "broker")', function () {
      // uncomment below and update the code to test the property broker
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function () {
      // uncomment below and update the code to test the property port
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function () {
      // uncomment below and update the code to test the property username
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function () {
      // uncomment below and update the code to test the property password
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property topic (base name: "topic")', function () {
      // uncomment below and update the code to test the property topic
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property certificate (base name: "certificate")', function () {
      // uncomment below and update the code to test the property certificate
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property certificateName (base name: "certificate_name")', function () {
      // uncomment below and update the code to test the property certificateName
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function () {
      // uncomment below and update the code to test the property key
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });

    it('should have the property privateKeyName (base name: "private_key_name")', function () {
      // uncomment below and update the code to test the property privateKeyName
      //var instance = new NotehubJs.Mqtt();
      //expect(instance).to.be();
    });
  });
});
