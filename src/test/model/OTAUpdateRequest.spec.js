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
    instance = new NotehubJs.OTAUpdateRequest();
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

  describe("OTAUpdateRequest", function () {
    it("should create an instance of OTAUpdateRequest", function () {
      // uncomment below and update the code to test OTAUpdateRequest
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be.a(NotehubJs.OTAUpdateRequest);
    });

    it('should have the property filename (base name: "filename")', function () {
      // uncomment below and update the code to test the property filename
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceUids (base name: "device_uids")', function () {
      // uncomment below and update the code to test the property deviceUids
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property fleetUids (base name: "fleet_uids")', function () {
      // uncomment below and update the code to test the property fleetUids
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property deviceTags (base name: "device_tags")', function () {
      // uncomment below and update the code to test the property deviceTags
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property mD5 (base name: "MD5")', function () {
      // uncomment below and update the code to test the property mD5
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function () {
      // uncomment below and update the code to test the property type
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function () {
      // uncomment below and update the code to test the property product
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function () {
      // uncomment below and update the code to test the property target
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property unpublished (base name: "unpublished")', function () {
      // uncomment below and update the code to test the property unpublished
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property cancelDfu (base name: "cancel_dfu")', function () {
      // uncomment below and update the code to test the property cancelDfu
      //var instance = new NotehubJs.OTAUpdateRequest();
      //expect(instance).to.be();
    });
  });
});
