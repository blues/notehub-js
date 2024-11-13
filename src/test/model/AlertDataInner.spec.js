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
    instance = new NotehubJs.AlertDataInner();
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

  describe("AlertDataInner", function () {
    it("should create an instance of AlertDataInner", function () {
      // uncomment below and update the code to test AlertDataInner
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be.a(NotehubJs.AlertDataInner);
    });

    it('should have the property alertSource (base name: "alert_source")', function () {
      // uncomment below and update the code to test the property alertSource
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function () {
      // uncomment below and update the code to test the property source
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "source_type")', function () {
      // uncomment below and update the code to test the property sourceType
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function () {
      // uncomment below and update the code to test the property value
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });

    it('should have the property sourceUid (base name: "source_uid")', function () {
      // uncomment below and update the code to test the property sourceUid
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });

    it('should have the property when (base name: "when")', function () {
      // uncomment below and update the code to test the property when
      //var instance = new NotehubJs.AlertDataInner();
      //expect(instance).to.be();
    });
  });
});
