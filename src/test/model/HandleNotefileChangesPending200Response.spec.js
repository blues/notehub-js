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
    instance = new NotehubJs.HandleNotefileChangesPending200Response();
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

  describe("HandleNotefileChangesPending200Response", function () {
    it("should create an instance of HandleNotefileChangesPending200Response", function () {
      // uncomment below and update the code to test HandleNotefileChangesPending200Response
      //var instance = new NotehubJs.HandleNotefileChangesPending200Response();
      //expect(instance).to.be.a(NotehubJs.HandleNotefileChangesPending200Response);
    });

    it('should have the property total (base name: "total")', function () {
      // uncomment below and update the code to test the property total
      //var instance = new NotehubJs.HandleNotefileChangesPending200Response();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function () {
      // uncomment below and update the code to test the property changes
      //var instance = new NotehubJs.HandleNotefileChangesPending200Response();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function () {
      // uncomment below and update the code to test the property pending
      //var instance = new NotehubJs.HandleNotefileChangesPending200Response();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function () {
      // uncomment below and update the code to test the property info
      //var instance = new NotehubJs.HandleNotefileChangesPending200Response();
      //expect(instance).to.be();
    });
  });
});
