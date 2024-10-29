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

import ApiClient from "../ApiClient";
import CreateMonitor from "../model/CreateMonitor";
import Error from "../model/Error";
import Monitor from "../model/Monitor";

/**
 * Monitor service.
 * @module api/MonitorApi
 * @version 1.0.23-beta.3
 */
export default class MonitorApi {
  /**
   * Constructs a new MonitorApi.
   * @alias module:api/MonitorApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create a new Monitor
   * @param {String} projectUID
   * @param {module:model/CreateMonitor} createMonitor Body or payload of monitor to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Monitor} and HTTP response
   */
  createMonitorWithHttpInfo(projectUID, createMonitor) {
    let postBody = createMonitor;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling createMonitor"
      );
    }
    // verify the required parameter 'createMonitor' is set
    if (createMonitor === undefined || createMonitor === null) {
      throw new Error(
        "Missing the required parameter 'createMonitor' when calling createMonitor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Monitor;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/monitors",
      "POST",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Create a new Monitor
   * @param {String} projectUID
   * @param {module:model/CreateMonitor} createMonitor Body or payload of monitor to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Monitor}
   */
  createMonitor(projectUID, createMonitor) {
    return this.createMonitorWithHttpInfo(projectUID, createMonitor).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Delete Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Monitor} and HTTP response
   */
  deleteMonitorWithHttpInfo(projectUID, monitorUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteMonitor"
      );
    }
    // verify the required parameter 'monitorUID' is set
    if (monitorUID === undefined || monitorUID === null) {
      throw new Error(
        "Missing the required parameter 'monitorUID' when calling deleteMonitor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      monitorUID: monitorUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = Monitor;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/monitors/{monitorUID}",
      "DELETE",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Delete Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Monitor}
   */
  deleteMonitor(projectUID, monitorUID) {
    return this.deleteMonitorWithHttpInfo(projectUID, monitorUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Monitor} and HTTP response
   */
  getMonitorWithHttpInfo(projectUID, monitorUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getMonitor"
      );
    }
    // verify the required parameter 'monitorUID' is set
    if (monitorUID === undefined || monitorUID === null) {
      throw new Error(
        "Missing the required parameter 'monitorUID' when calling getMonitor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      monitorUID: monitorUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = Monitor;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/monitors/{monitorUID}",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Monitor}
   */
  getMonitor(projectUID, monitorUID) {
    return this.getMonitorWithHttpInfo(projectUID, monitorUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get list of defined Monitors
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Monitor>} and HTTP response
   */
  getMonitorsWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getMonitors"
      );
    }

    let pathParams = {
      projectUID: projectUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [Monitor];
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/monitors",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Get list of defined Monitors
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Monitor>}
   */
  getMonitors(projectUID) {
    return this.getMonitorsWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Update Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @param {module:model/Monitor} monitor Body or payload of monitor to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Monitor} and HTTP response
   */
  updateMonitorWithHttpInfo(projectUID, monitorUID, monitor) {
    let postBody = monitor;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling updateMonitor"
      );
    }
    // verify the required parameter 'monitorUID' is set
    if (monitorUID === undefined || monitorUID === null) {
      throw new Error(
        "Missing the required parameter 'monitorUID' when calling updateMonitor"
      );
    }
    // verify the required parameter 'monitor' is set
    if (monitor === undefined || monitor === null) {
      throw new Error(
        "Missing the required parameter 'monitor' when calling updateMonitor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      monitorUID: monitorUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Monitor;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/monitors/{monitorUID}",
      "PUT",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null
    );
  }

  /**
   * Update Monitor
   * @param {String} projectUID
   * @param {String} monitorUID
   * @param {module:model/Monitor} monitor Body or payload of monitor to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Monitor}
   */
  updateMonitor(projectUID, monitorUID, monitor) {
    return this.updateMonitorWithHttpInfo(projectUID, monitorUID, monitor).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }
}
