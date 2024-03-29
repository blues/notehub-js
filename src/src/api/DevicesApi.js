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

import ApiClient from "../ApiClient";
import Device from "../model/Device";
import Error from "../model/Error";
import GetProjectDevicePublicKeys200Response from "../model/GetProjectDevicePublicKeys200Response";
import GetProjectDevices200Response from "../model/GetProjectDevices200Response";
import PostProvisionProjectDeviceRequest from "../model/PostProvisionProjectDeviceRequest";

/**
 * Devices service.
 * @module api/DevicesApi
 * @version 1.0.19
 */
export default class DevicesApi {
  /**
   * Constructs a new DevicesApi.
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Delete Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/String} purge
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteProjectDeviceWithHttpInfo(projectUID, deviceUID, purge) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteProjectDevice"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling deleteProjectDevice"
      );
    }
    // verify the required parameter 'purge' is set
    if (purge === undefined || purge === null) {
      throw new Error(
        "Missing the required parameter 'purge' when calling deleteProjectDevice"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
    };
    let queryParams = {
      purge: purge,
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}",
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
   * Delete Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/String} purge
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteProjectDevice(projectUID, deviceUID, purge) {
    return this.deleteProjectDeviceWithHttpInfo(
      projectUID,
      deviceUID,
      purge
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Device} and HTTP response
   */
  getDeviceWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDevice"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDevice"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = Device;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}",
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
   * Get Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Device}
   */
  getDevice(projectUID, deviceUID) {
    return this.getDeviceWithHttpInfo(projectUID, deviceUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Device Public Keys of a Project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectDevicePublicKeys200Response} and HTTP response
   */
  getProjectDevicePublicKeysWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectDevicePublicKeys"
      );
    }

    let pathParams = {
      projectUID: projectUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjectDevicePublicKeys200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/public-keys",
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
   * Get Device Public Keys of a Project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectDevicePublicKeys200Response}
   */
  getProjectDevicePublicKeys(projectUID, opts) {
    return this.getProjectDevicePublicKeysWithHttpInfo(projectUID, opts).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Devices of a Project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectDevices200Response} and HTTP response
   */
  getProjectDevicesWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectDevices"
      );
    }

    let pathParams = {
      projectUID: projectUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjectDevices200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices",
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
   * Get Devices of a Project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectDevices200Response}
   */
  getProjectDevices(projectUID, opts) {
    return this.getProjectDevicesWithHttpInfo(projectUID, opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Devices of a Fleet within a Project
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectDevices200Response} and HTTP response
   */
  getProjectFleetDevicesWithHttpInfo(projectUID, fleetUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectFleetDevices"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling getProjectFleetDevices"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjectDevices200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}/devices",
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
   * Get Devices of a Fleet within a Project
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectDevices200Response}
   */
  getProjectFleetDevices(projectUID, fleetUID, opts) {
    return this.getProjectFleetDevicesWithHttpInfo(
      projectUID,
      fleetUID,
      opts
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Provision Device for a Project
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/PostProvisionProjectDeviceRequest} postProvisionProjectDeviceRequest Provision a device to a specific ProductUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */
  postProvisionProjectDeviceWithHttpInfo(
    projectUID,
    deviceUID,
    postProvisionProjectDeviceRequest
  ) {
    let postBody = postProvisionProjectDeviceRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling postProvisionProjectDevice"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling postProvisionProjectDevice"
      );
    }
    // verify the required parameter 'postProvisionProjectDeviceRequest' is set
    if (
      postProvisionProjectDeviceRequest === undefined ||
      postProvisionProjectDeviceRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'postProvisionProjectDeviceRequest' when calling postProvisionProjectDevice"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Object;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/provision",
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
   * Provision Device for a Project
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/PostProvisionProjectDeviceRequest} postProvisionProjectDeviceRequest Provision a device to a specific ProductUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
   */
  postProvisionProjectDevice(
    projectUID,
    deviceUID,
    postProvisionProjectDeviceRequest
  ) {
    return this.postProvisionProjectDeviceWithHttpInfo(
      projectUID,
      deviceUID,
      postProvisionProjectDeviceRequest
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
