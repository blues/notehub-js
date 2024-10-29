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
    instance = new NotehubJs.ProjectApi();
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

  describe("ProjectApi", function () {
    describe("cloneProject", function () {
      it("should call cloneProject successfully", function (done) {
        //uncomment below and update the code to test cloneProject
        //instance.cloneProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("createFleet", function () {
      it("should call createFleet successfully", function (done) {
        //uncomment below and update the code to test createFleet
        //instance.createFleet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("createProduct", function () {
      it("should call createProduct successfully", function (done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("createProject", function () {
      it("should call createProject successfully", function (done) {
        //uncomment below and update the code to test createProject
        //instance.createProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe("deleteFleet", function () {
      it("should call deleteFleet successfully", function (done) {
        //uncomment below and update the code to test deleteFleet
        //instance.deleteFleet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("deleteFleetEnvironmentVariable", function () {
      it("should call deleteFleetEnvironmentVariable successfully", function (done) {
        //uncomment below and update the code to test deleteFleetEnvironmentVariable
        //instance.deleteFleetEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("deleteProject", function () {
      it("should call deleteProject successfully", function (done) {
        //uncomment below and update the code to test deleteProject
        //instance.deleteProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("deleteProjectEnvironmentVariable", function () {
      it("should call deleteProjectEnvironmentVariable successfully", function (done) {
        //uncomment below and update the code to test deleteProjectEnvironmentVariable
        //instance.deleteProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("dfuAction", function () {
      it("should call dfuAction successfully", function (done) {
        //uncomment below and update the code to test dfuAction
        //instance.dfuAction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("disableGlobalTransformation", function () {
      it("should call disableGlobalTransformation successfully", function (done) {
        //uncomment below and update the code to test disableGlobalTransformation
        //instance.disableGlobalTransformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("enableGlobalTransformation", function () {
      it("should call enableGlobalTransformation successfully", function (done) {
        //uncomment below and update the code to test enableGlobalTransformation
        //instance.enableGlobalTransformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceDfuHistory", function () {
      it("should call getDeviceDfuHistory successfully", function (done) {
        //uncomment below and update the code to test getDeviceDfuHistory
        //instance.getDeviceDfuHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceDfuStatus", function () {
      it("should call getDeviceDfuStatus successfully", function (done) {
        //uncomment below and update the code to test getDeviceDfuStatus
        //instance.getDeviceDfuStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDeviceFleets", function () {
      it("should call getDeviceFleets successfully", function (done) {
        //uncomment below and update the code to test getDeviceFleets
        //instance.getDeviceFleets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDevicesDfuHistory", function () {
      it("should call getDevicesDfuHistory successfully", function (done) {
        //uncomment below and update the code to test getDevicesDfuHistory
        //instance.getDevicesDfuHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getDevicesDfuStatus", function () {
      it("should call getDevicesDfuStatus successfully", function (done) {
        //uncomment below and update the code to test getDevicesDfuStatus
        //instance.getDevicesDfuStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getFirmwareInfo", function () {
      it("should call getFirmwareInfo successfully", function (done) {
        //uncomment below and update the code to test getFirmwareInfo
        //instance.getFirmwareInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getFleetEnvironmentVariables", function () {
      it("should call getFleetEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test getFleetEnvironmentVariables
        //instance.getFleetEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProject", function () {
      it("should call getProject successfully", function (done) {
        //uncomment below and update the code to test getProject
        //instance.getProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectByProduct", function () {
      it("should call getProjectByProduct successfully", function (done) {
        //uncomment below and update the code to test getProjectByProduct
        //instance.getProjectByProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectEnvironmentVariables", function () {
      it("should call getProjectEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test getProjectEnvironmentVariables
        //instance.getProjectEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectFleets", function () {
      it("should call getProjectFleets successfully", function (done) {
        //uncomment below and update the code to test getProjectFleets
        //instance.getProjectFleets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectMembers", function () {
      it("should call getProjectMembers successfully", function (done) {
        //uncomment below and update the code to test getProjectMembers
        //instance.getProjectMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjectProducts", function () {
      it("should call getProjectProducts successfully", function (done) {
        //uncomment below and update the code to test getProjectProducts
        //instance.getProjectProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("getProjects", function () {
      it("should call getProjects successfully", function (done) {
        //uncomment below and update the code to test getProjects
        //instance.getProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("putDeviceFleets", function () {
      it("should call putDeviceFleets successfully", function (done) {
        //uncomment below and update the code to test putDeviceFleets
        //instance.putDeviceFleets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("putFleetEnvironmentVariables", function () {
      it("should call putFleetEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test putFleetEnvironmentVariables
        //instance.putFleetEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("putProjectEnvironmentVariables", function () {
      it("should call putProjectEnvironmentVariables successfully", function (done) {
        //uncomment below and update the code to test putProjectEnvironmentVariables
        //instance.putProjectEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("setGlobalTransformation", function () {
      it("should call setGlobalTransformation successfully", function (done) {
        //uncomment below and update the code to test setGlobalTransformation
        //instance.setGlobalTransformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe("updateFleet", function () {
      it("should call updateFleet successfully", function (done) {
        //uncomment below and update the code to test updateFleet
        //instance.updateFleet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
