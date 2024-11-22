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
    instance = new NotehubJs.Error();
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

  describe("Error", function () {
    it("should create an instance of Error", function () {
      // uncomment below and update the code to test Error
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be.a(NotehubJs.Error);
    });

    it('should have the property err (base name: "err")', function () {
      // uncomment below and update the code to test the property err
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function () {
      // uncomment below and update the code to test the property code
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function () {
      // uncomment below and update the code to test the property status
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });

    it('should have the property request (base name: "request")', function () {
      // uncomment below and update the code to test the property request
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function () {
      // uncomment below and update the code to test the property details
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });

    it('should have the property debug (base name: "debug")', function () {
      // uncomment below and update the code to test the property debug
      //var instance = new NotehubJs.Error();
      //expect(instance).to.be();
    });
  });
});
