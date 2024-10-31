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
    instance = new NotehubJs.UploadMetadata();
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

  describe("UploadMetadata", function () {
    it("should create an instance of UploadMetadata", function () {
      // uncomment below and update the code to test UploadMetadata
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be.a(NotehubJs.UploadMetadata);
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function () {
      // uncomment below and update the code to test the property length
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property md5 (base name: "md5")', function () {
      // uncomment below and update the code to test the property md5
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property crc32 (base name: "crc32")', function () {
      // uncomment below and update the code to test the property crc32
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function () {
      // uncomment below and update the code to test the property created
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function () {
      // uncomment below and update the code to test the property modified
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function () {
      // uncomment below and update the code to test the property source
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property contains (base name: "contains")', function () {
      // uncomment below and update the code to test the property contains
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property found (base name: "found")', function () {
      // uncomment below and update the code to test the property found
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function () {
      // uncomment below and update the code to test the property type
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function () {
      // uncomment below and update the code to test the property tags
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function () {
      // uncomment below and update the code to test the property notes
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });

    it('should have the property firmware (base name: "firmware")', function () {
      // uncomment below and update the code to test the property firmware
      //var instance = new NotehubJs.UploadMetadata();
      //expect(instance).to.be();
    });
  });
});