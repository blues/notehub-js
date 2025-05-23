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
    instance = new NotehubJs.Device();
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

  describe("Device", function () {
    it("should create an instance of Device", function () {
      // uncomment below and update the code to test Device
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be.a(NotehubJs.Device);
    });

    it('should have the property uid (base name: "uid")', function () {
      // uncomment below and update the code to test the property uid
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property serialNumber (base name: "serial_number")', function () {
      // uncomment below and update the code to test the property serialNumber
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property provisioned (base name: "provisioned")', function () {
      // uncomment below and update the code to test the property provisioned
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "last_activity")', function () {
      // uncomment below and update the code to test the property lastActivity
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function () {
      // uncomment below and update the code to test the property contact
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property productUid (base name: "product_uid")', function () {
      // uncomment below and update the code to test the property productUid
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property fleetUids (base name: "fleet_uids")', function () {
      // uncomment below and update the code to test the property fleetUids
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property towerInfo (base name: "tower_info")', function () {
      // uncomment below and update the code to test the property towerInfo
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property towerLocation (base name: "tower_location")', function () {
      // uncomment below and update the code to test the property towerLocation
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property gpsLocation (base name: "gps_location")', function () {
      // uncomment below and update the code to test the property gpsLocation
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property triangulatedLocation (base name: "triangulated_location")', function () {
      // uncomment below and update the code to test the property triangulatedLocation
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property voltage (base name: "voltage")', function () {
      // uncomment below and update the code to test the property voltage
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property temperature (base name: "temperature")', function () {
      // uncomment below and update the code to test the property temperature
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property dfu (base name: "dfu")', function () {
      // uncomment below and update the code to test the property dfu
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property firmwareHost (base name: "firmware_host")', function () {
      // uncomment below and update the code to test the property firmwareHost
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property firmwareNotecard (base name: "firmware_notecard")', function () {
      // uncomment below and update the code to test the property firmwareNotecard
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "sku")', function () {
      // uncomment below and update the code to test the property sku
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function () {
      // uncomment below and update the code to test the property disabled
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });

    it('should have the property cellularUsage (base name: "cellular_usage")', function () {
      // uncomment below and update the code to test the property cellularUsage
      //var instance = new NotehubJs.Device();
      //expect(instance).to.be();
    });
  });
});
