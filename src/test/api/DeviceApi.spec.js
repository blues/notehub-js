/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
 *
 * The version of the OpenAPI document: 1.0.0
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
    instance = new NotehubJs.DeviceApi();
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

  describe("DeviceApi", function () {
    describe("deleteDeviceFleets", function () {
      it("should call deleteDeviceFleets successfully", function (done) {
        //uncomment below and update the code to test deleteDeviceFleets
        //instance.deleteDeviceFleets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("disableDevice", function () {
      it("should call disableDevice successfully", function (done) {
        //uncomment below and update the code to test disableDevice
        //instance.disableDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("disableDeviceConnectivityAssurance", function () {
      it("should call disableDeviceConnectivityAssurance successfully", function (done) {
        //uncomment below and update the code to test disableDeviceConnectivityAssurance
        //instance.disableDeviceConnectivityAssurance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("enableDevice", function () {
      it("should call enableDevice successfully", function (done) {
        //uncomment below and update the code to test enableDevice
        //instance.enableDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("enableDeviceConnectivityAssurance", function () {
      it("should call enableDeviceConnectivityAssurance successfully", function (done) {
        //uncomment below and update the code to test enableDeviceConnectivityAssurance
        //instance.enableDeviceConnectivityAssurance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceHealthLog", function () {
      it("should call getDeviceHealthLog successfully", function (done) {
        //uncomment below and update the code to test getDeviceHealthLog
        //instance.getDeviceHealthLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceLatest", function () {
      it("should call getDeviceLatest successfully", function (done) {
        //uncomment below and update the code to test getDeviceLatest
        //instance.getDeviceLatest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDevicePublicKey", function () {
      it("should call getDevicePublicKey successfully", function (done) {
        //uncomment below and update the code to test getDevicePublicKey
        //instance.getDevicePublicKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceSessions", function () {
      it("should call getDeviceSessions successfully", function (done) {
        //uncomment below and update the code to test getDeviceSessions
        //instance.getDeviceSessions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteSignal", function () {
      it("should call handleNoteSignal successfully", function (done) {
        //uncomment below and update the code to test handleNoteSignal
        //instance.handleNoteSignal(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
