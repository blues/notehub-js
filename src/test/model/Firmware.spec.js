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
    instance = new NotehubJs.Firmware();
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

  describe("Firmware", function () {
    it("should create an instance of Firmware", function () {
      // uncomment below and update the code to test Firmware
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be.a(NotehubJs.Firmware);
    });

    it('should have the property org (base name: "org")', function () {
      // uncomment below and update the code to test the property org
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function () {
      // uncomment below and update the code to test the property product
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property firmware (base name: "firmware")', function () {
      // uncomment below and update the code to test the property firmware
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function () {
      // uncomment below and update the code to test the property target
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property verMajor (base name: "ver_major")', function () {
      // uncomment below and update the code to test the property verMajor
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property verMinor (base name: "ver_minor")', function () {
      // uncomment below and update the code to test the property verMinor
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property verPatch (base name: "ver_patch")', function () {
      // uncomment below and update the code to test the property verPatch
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property verBuild (base name: "ver_build")', function () {
      // uncomment below and update the code to test the property verBuild
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property built (base name: "built")', function () {
      // uncomment below and update the code to test the property built
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });

    it('should have the property builder (base name: "builder")', function () {
      // uncomment below and update the code to test the property builder
      //var instance = new NotehubJs.Firmware();
      //expect(instance).to.be();
    });
  });
});
