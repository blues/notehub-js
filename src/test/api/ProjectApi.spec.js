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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BluesNotehubJs);
  }
}(this, function(expect, BluesNotehubJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BluesNotehubJs.ProjectApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProjectApi', function() {
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProject', function() {
      it('should call createProject successfully', function(done) {
        //uncomment below and update the code to test createProject
        //instance.createProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProjectEnvironmentVariable', function() {
      it('should call deleteProjectEnvironmentVariable successfully', function(done) {
        //uncomment below and update the code to test deleteProjectEnvironmentVariable
        //instance.deleteProjectEnvironmentVariable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProject', function() {
      it('should call getProject successfully', function(done) {
        //uncomment below and update the code to test getProject
        //instance.getProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectByProduct', function() {
      it('should call getProjectByProduct successfully', function(done) {
        //uncomment below and update the code to test getProjectByProduct
        //instance.getProjectByProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectDevicePublicKeys', function() {
      it('should call getProjectDevicePublicKeys successfully', function(done) {
        //uncomment below and update the code to test getProjectDevicePublicKeys
        //instance.getProjectDevicePublicKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectDevices', function() {
      it('should call getProjectDevices successfully', function(done) {
        //uncomment below and update the code to test getProjectDevices
        //instance.getProjectDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectEnvironmentVariables', function() {
      it('should call getProjectEnvironmentVariables successfully', function(done) {
        //uncomment below and update the code to test getProjectEnvironmentVariables
        //instance.getProjectEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectEvents', function() {
      it('should call getProjectEvents successfully', function(done) {
        //uncomment below and update the code to test getProjectEvents
        //instance.getProjectEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectEventsByCursor', function() {
      it('should call getProjectEventsByCursor successfully', function(done) {
        //uncomment below and update the code to test getProjectEventsByCursor
        //instance.getProjectEventsByCursor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectFleetDevices', function() {
      it('should call getProjectFleetDevices successfully', function(done) {
        //uncomment below and update the code to test getProjectFleetDevices
        //instance.getProjectFleetDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectMembers', function() {
      it('should call getProjectMembers successfully', function(done) {
        //uncomment below and update the code to test getProjectMembers
        //instance.getProjectMembers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectProducts', function() {
      it('should call getProjectProducts successfully', function(done) {
        //uncomment below and update the code to test getProjectProducts
        //instance.getProjectProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjects', function() {
      it('should call getProjects successfully', function(done) {
        //uncomment below and update the code to test getProjects
        //instance.getProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProjectEnvironmentVariables', function() {
      it('should call putProjectEnvironmentVariables successfully', function(done) {
        //uncomment below and update the code to test putProjectEnvironmentVariables
        //instance.putProjectEnvironmentVariables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
