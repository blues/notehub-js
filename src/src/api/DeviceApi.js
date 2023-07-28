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
import Body from "../model/Body";
import DeleteDeviceFleetsRequest from "../model/DeleteDeviceFleetsRequest";
import EnvironmentVariables from "../model/EnvironmentVariables";
import Error from "../model/Error";
import GetDeviceEnvironmentVariables200Response from "../model/GetDeviceEnvironmentVariables200Response";
import GetDeviceHealthLog200Response from "../model/GetDeviceHealthLog200Response";
import GetDeviceLatest200Response from "../model/GetDeviceLatest200Response";
import GetDevicePublicKey200Response from "../model/GetDevicePublicKey200Response";
import GetDeviceSessions200Response from "../model/GetDeviceSessions200Response";
import GetProjectFleets200Response from "../model/GetProjectFleets200Response";
import HandleNoteSignal200Response from "../model/HandleNoteSignal200Response";
import PutDeviceFleetsRequest from "../model/PutDeviceFleetsRequest";

/**
 * Device service.
 * @module api/DeviceApi
 * @version 1.0.14
 */
export default class DeviceApi {
  /**
   * Constructs a new DeviceApi.
   * @alias module:api/DeviceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Delete environment variable of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  deleteDeviceEnvironmentVariableWithHttpInfo(projectUID, deviceUID, key) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteDeviceEnvironmentVariable"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling deleteDeviceEnvironmentVariable"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling deleteDeviceEnvironmentVariable"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
      key: key,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/environment_variables/{key}",
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
   * Delete environment variable of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  deleteDeviceEnvironmentVariable(projectUID, deviceUID, key) {
    return this.deleteDeviceEnvironmentVariableWithHttpInfo(
      projectUID,
      deviceUID,
      key
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Remove Device from Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/DeleteDeviceFleetsRequest} deleteDeviceFleetsRequest The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectFleets200Response} and HTTP response
   */
  deleteDeviceFleetsWithHttpInfo(
    projectUID,
    deviceUID,
    deleteDeviceFleetsRequest
  ) {
    let postBody = deleteDeviceFleetsRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteDeviceFleets"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling deleteDeviceFleets"
      );
    }
    // verify the required parameter 'deleteDeviceFleetsRequest' is set
    if (
      deleteDeviceFleetsRequest === undefined ||
      deleteDeviceFleetsRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'deleteDeviceFleetsRequest' when calling deleteDeviceFleets"
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
    let returnType = GetProjectFleets200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/fleets",
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
   * Remove Device from Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/DeleteDeviceFleetsRequest} deleteDeviceFleetsRequest The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectFleets200Response}
   */
  deleteDeviceFleets(projectUID, deviceUID, deleteDeviceFleetsRequest) {
    return this.deleteDeviceFleetsWithHttpInfo(
      projectUID,
      deviceUID,
      deleteDeviceFleetsRequest
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Disable Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  disableDeviceWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling disableDevice"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling disableDevice"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/disable",
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
   * Disable Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  disableDevice(projectUID, deviceUID) {
    return this.disableDeviceWithHttpInfo(projectUID, deviceUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Disable Connectivity Assurance
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  disableDeviceConnectivityAssuranceWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling disableDeviceConnectivityAssurance"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling disableDeviceConnectivityAssurance"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/disable-connectivity-assurance",
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
   * Disable Connectivity Assurance
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  disableDeviceConnectivityAssurance(projectUID, deviceUID) {
    return this.disableDeviceConnectivityAssuranceWithHttpInfo(
      projectUID,
      deviceUID
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Enable Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  enableDeviceWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling enableDevice"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling enableDevice"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/enable",
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
   * Enable Device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  enableDevice(projectUID, deviceUID) {
    return this.enableDeviceWithHttpInfo(projectUID, deviceUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Enable Connectivity Assurance
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  enableDeviceConnectivityAssuranceWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling enableDeviceConnectivityAssurance"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling enableDeviceConnectivityAssurance"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/enable-connectivity-assurance",
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
   * Enable Connectivity Assurance
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  enableDeviceConnectivityAssurance(projectUID, deviceUID) {
    return this.enableDeviceConnectivityAssuranceWithHttpInfo(
      projectUID,
      deviceUID
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get environment variables of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceEnvironmentVariables200Response} and HTTP response
   */
  getDeviceEnvironmentVariablesWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceEnvironmentVariables"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceEnvironmentVariables"
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
    let returnType = GetDeviceEnvironmentVariables200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/environment_variables",
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
   * Get environment variables of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceEnvironmentVariables200Response}
   */
  getDeviceEnvironmentVariables(projectUID, deviceUID) {
    return this.getDeviceEnvironmentVariablesWithHttpInfo(
      projectUID,
      deviceUID
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get environment variables of a device with device pin authorization
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceEnvironmentVariables200Response} and HTTP response
   */
  getDeviceEnvironmentVariablesByPinWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceEnvironmentVariablesByPin"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceEnvironmentVariablesByPin"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["pin"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetDeviceEnvironmentVariables200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/environment_variables_with_pin",
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
   * Get environment variables of a device with device pin authorization
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceEnvironmentVariables200Response}
   */
  getDeviceEnvironmentVariablesByPin(projectUID, deviceUID) {
    return this.getDeviceEnvironmentVariablesByPinWithHttpInfo(
      projectUID,
      deviceUID
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get Device Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectFleets200Response} and HTTP response
   */
  getDeviceFleetsWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceFleets"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceFleets"
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
    let returnType = GetProjectFleets200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/fleets",
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
   * Get Device Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectFleets200Response}
   */
  getDeviceFleets(projectUID, deviceUID) {
    return this.getDeviceFleetsWithHttpInfo(projectUID, deviceUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Device Health Log
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceHealthLog200Response} and HTTP response
   */
  getDeviceHealthLogWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceHealthLog"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceHealthLog"
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
    let returnType = GetDeviceHealthLog200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/health-log",
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
   * Get Device Health Log
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceHealthLog200Response}
   */
  getDeviceHealthLog(projectUID, deviceUID) {
    return this.getDeviceHealthLogWithHttpInfo(projectUID, deviceUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Device Latest Events
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceLatest200Response} and HTTP response
   */
  getDeviceLatestWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceLatest"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceLatest"
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
    let returnType = GetDeviceLatest200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/latest",
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
   * Get Device Latest Events
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceLatest200Response}
   */
  getDeviceLatest(projectUID, deviceUID) {
    return this.getDeviceLatestWithHttpInfo(projectUID, deviceUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Device Public Key
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDevicePublicKey200Response} and HTTP response
   */
  getDevicePublicKeyWithHttpInfo(projectUID, deviceUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDevicePublicKey"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDevicePublicKey"
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
    let returnType = GetDevicePublicKey200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/public-key",
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
   * Get Device Public Key
   * @param {String} projectUID
   * @param {String} deviceUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDevicePublicKey200Response}
   */
  getDevicePublicKey(projectUID, deviceUID) {
    return this.getDevicePublicKeyWithHttpInfo(projectUID, deviceUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Device Sessions
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceSessions200Response} and HTTP response
   */
  getDeviceSessionsWithHttpInfo(projectUID, deviceUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getDeviceSessions"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling getDeviceSessions"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
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
    let returnType = GetDeviceSessions200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/sessions",
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
   * Get Device Sessions
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceSessions200Response}
   */
  getDeviceSessions(projectUID, deviceUID, opts) {
    return this.getDeviceSessionsWithHttpInfo(projectUID, deviceUID, opts).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Send a signal from Notehub to a Notecard.
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/Body} body Body or payload of singnal to be sent to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HandleNoteSignal200Response} and HTTP response
   */
  handleNoteSignalWithHttpInfo(projectUID, deviceUID, body) {
    let postBody = body;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling handleNoteSignal"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling handleNoteSignal"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling handleNoteSignal"
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
    let returnType = HandleNoteSignal200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/signal",
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
   * Send a signal from Notehub to a Notecard.
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/Body} body Body or payload of singnal to be sent to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HandleNoteSignal200Response}
   */
  handleNoteSignal(projectUID, deviceUID, body) {
    return this.handleNoteSignalWithHttpInfo(projectUID, deviceUID, body).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Put environment variables of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  putDeviceEnvironmentVariablesWithHttpInfo(
    projectUID,
    deviceUID,
    environmentVariables
  ) {
    let postBody = environmentVariables;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling putDeviceEnvironmentVariables"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling putDeviceEnvironmentVariables"
      );
    }
    // verify the required parameter 'environmentVariables' is set
    if (environmentVariables === undefined || environmentVariables === null) {
      throw new Error(
        "Missing the required parameter 'environmentVariables' when calling putDeviceEnvironmentVariables"
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
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/environment_variables",
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
   * Put environment variables of a device
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  putDeviceEnvironmentVariables(projectUID, deviceUID, environmentVariables) {
    return this.putDeviceEnvironmentVariablesWithHttpInfo(
      projectUID,
      deviceUID,
      environmentVariables
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Put environment variables of a device with device pin authorization
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  putDeviceEnvironmentVariablesByPinWithHttpInfo(
    projectUID,
    deviceUID,
    environmentVariables
  ) {
    let postBody = environmentVariables;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling putDeviceEnvironmentVariablesByPin"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling putDeviceEnvironmentVariablesByPin"
      );
    }
    // verify the required parameter 'environmentVariables' is set
    if (environmentVariables === undefined || environmentVariables === null) {
      throw new Error(
        "Missing the required parameter 'environmentVariables' when calling putDeviceEnvironmentVariablesByPin"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      deviceUID: deviceUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["pin"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/environment_variables_with_pin",
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
   * Put environment variables of a device with device pin authorization
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the device
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  putDeviceEnvironmentVariablesByPin(
    projectUID,
    deviceUID,
    environmentVariables
  ) {
    return this.putDeviceEnvironmentVariablesByPinWithHttpInfo(
      projectUID,
      deviceUID,
      environmentVariables
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Add Device to Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/PutDeviceFleetsRequest} putDeviceFleetsRequest The fleets to add to the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectFleets200Response} and HTTP response
   */
  putDeviceFleetsWithHttpInfo(projectUID, deviceUID, putDeviceFleetsRequest) {
    let postBody = putDeviceFleetsRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling putDeviceFleets"
      );
    }
    // verify the required parameter 'deviceUID' is set
    if (deviceUID === undefined || deviceUID === null) {
      throw new Error(
        "Missing the required parameter 'deviceUID' when calling putDeviceFleets"
      );
    }
    // verify the required parameter 'putDeviceFleetsRequest' is set
    if (
      putDeviceFleetsRequest === undefined ||
      putDeviceFleetsRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'putDeviceFleetsRequest' when calling putDeviceFleets"
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
    let returnType = GetProjectFleets200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/devices/{deviceUID}/fleets",
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
   * Add Device to Fleets
   * @param {String} projectUID
   * @param {String} deviceUID
   * @param {module:model/PutDeviceFleetsRequest} putDeviceFleetsRequest The fleets to add to the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectFleets200Response}
   */
  putDeviceFleets(projectUID, deviceUID, putDeviceFleetsRequest) {
    return this.putDeviceFleetsWithHttpInfo(
      projectUID,
      deviceUID,
      putDeviceFleetsRequest
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
