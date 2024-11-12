/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
    describe("deleteDeviceEnvironmentVariable", function () {
      it("should call deleteDeviceEnvironmentVariable successfully", function (done) {
        //uncomment below and update the code to test deleteDeviceEnvironmentVariable
        //instance.deleteDeviceEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("deleteProjectDevice", function () {
      it("should call deleteProjectDevice successfully", function (done) {
        //uncomment below and update the code to test deleteProjectDevice
        //instance.deleteProjectDevice(function(error) {
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
    describe("getDevice", function () {
      it("should call getDevice successfully", function (done) {
        //uncomment below and update the code to test getDevice
        //instance.getDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceEnvironmentVariables", function () {
      it("should call getDeviceEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test getDeviceEnvironmentVariables
        //instance.getDeviceEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceEnvironmentVariablesByPin", function () {
      it("should call getDeviceEnvironmentVariablesByPin successfully", function (done) {
        //uncomment below and update the code to test getDeviceEnvironmentVariablesByPin
        //instance.getDeviceEnvironmentVariablesByPin(function(error) {
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
    describe("getProjectDevicePublicKeys", function () {
      it("should call getProjectDevicePublicKeys successfully", function (done) {
        //uncomment below and update the code to test getProjectDevicePublicKeys
        //instance.getProjectDevicePublicKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectDevices", function () {
      it("should call getProjectDevices successfully", function (done) {
        //uncomment below and update the code to test getProjectDevices
        //instance.getProjectDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectFleetDevices", function () {
      it("should call getProjectFleetDevices successfully", function (done) {
        //uncomment below and update the code to test getProjectFleetDevices
        //instance.getProjectFleetDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteAdd", function () {
      it("should call handleNoteAdd successfully", function (done) {
        //uncomment below and update the code to test handleNoteAdd
        //instance.handleNoteAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteChanges", function () {
      it("should call handleNoteChanges successfully", function (done) {
        //uncomment below and update the code to test handleNoteChanges
        //instance.handleNoteChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteCreateAdd", function () {
      it("should call handleNoteCreateAdd successfully", function (done) {
        //uncomment below and update the code to test handleNoteCreateAdd
        //instance.handleNoteCreateAdd(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteDelete", function () {
      it("should call handleNoteDelete successfully", function (done) {
        //uncomment below and update the code to test handleNoteDelete
        //instance.handleNoteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNoteGet", function () {
      it("should call handleNoteGet successfully", function (done) {
        //uncomment below and update the code to test handleNoteGet
        //instance.handleNoteGet(function(error) {
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
    describe("handleNoteUpdate", function () {
      it("should call handleNoteUpdate successfully", function (done) {
        //uncomment below and update the code to test handleNoteUpdate
        //instance.handleNoteUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNotefileChanges", function () {
      it("should call handleNotefileChanges successfully", function (done) {
        //uncomment below and update the code to test handleNotefileChanges
        //instance.handleNotefileChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNotefileChangesPending", function () {
      it("should call handleNotefileChangesPending successfully", function (done) {
        //uncomment below and update the code to test handleNotefileChangesPending
        //instance.handleNotefileChangesPending(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("handleNotefileDelete", function () {
      it("should call handleNotefileDelete successfully", function (done) {
        //uncomment below and update the code to test handleNotefileDelete
        //instance.handleNotefileDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("postProvisionProjectDevice", function () {
      it("should call postProvisionProjectDevice successfully", function (done) {
        //uncomment below and update the code to test postProvisionProjectDevice
        //instance.postProvisionProjectDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("putDeviceEnvironmentVariables", function () {
      it("should call putDeviceEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test putDeviceEnvironmentVariables
        //instance.putDeviceEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("putDeviceEnvironmentVariablesByPin", function () {
      it("should call putDeviceEnvironmentVariablesByPin successfully", function (done) {
        //uncomment below and update the code to test putDeviceEnvironmentVariablesByPin
        //instance.putDeviceEnvironmentVariablesByPin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
