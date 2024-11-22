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
    instance = new NotehubJs.DFUState();
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

  describe("DFUState", function () {
    it("should create an instance of DFUState", function () {
      // uncomment below and update the code to test DFUState
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be.a(NotehubJs.DFUState);
    });

    it('should have the property type (base name: "type")', function () {
      // uncomment below and update the code to test the property type
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function () {
      // uncomment below and update the code to test the property file
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function () {
      // uncomment below and update the code to test the property length
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property crc32 (base name: "crc32")', function () {
      // uncomment below and update the code to test the property crc32
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property md5 (base name: "md5")', function () {
      // uncomment below and update the code to test the property md5
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property mode (base name: "mode")', function () {
      // uncomment below and update the code to test the property mode
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function () {
      // uncomment below and update the code to test the property status
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property began (base name: "began")', function () {
      // uncomment below and update the code to test the property began
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property retry (base name: "retry")', function () {
      // uncomment below and update the code to test the property retry
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function () {
      // uncomment below and update the code to test the property errors
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property read (base name: "read")', function () {
      // uncomment below and update the code to test the property read
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function () {
      // uncomment below and update the code to test the property updated
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function () {
      // uncomment below and update the code to test the property version
      //var instance = new NotehubJs.DFUState();
      //expect(instance).to.be();
    });
  });
});
