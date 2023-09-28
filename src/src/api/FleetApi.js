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
import CreateFleetRequest from "../model/CreateFleetRequest";
import DeleteDeviceFleetsRequest from "../model/DeleteDeviceFleetsRequest";
import EnvironmentVariables from "../model/EnvironmentVariables";
import Error from "../model/Error";
import Fleet from "../model/Fleet";
import GetProjectDevices200Response from "../model/GetProjectDevices200Response";
import GetProjectEvents200Response from "../model/GetProjectEvents200Response";
import GetProjectEventsByCursor200Response from "../model/GetProjectEventsByCursor200Response";
import GetProjectFleets200Response from "../model/GetProjectFleets200Response";
import PutDeviceFleetsRequest from "../model/PutDeviceFleetsRequest";
import UpdateFleetRequest from "../model/UpdateFleetRequest";

/**
 * Fleet service.
 * @module api/FleetApi
 * @version 1.0.18
 */
export default class FleetApi {
  /**
   * Constructs a new FleetApi.
   * @alias module:api/FleetApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Fleet
   * @param {String} projectUID
   * @param {module:model/CreateFleetRequest} createFleetRequest Fleet to be added
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fleet} and HTTP response
   */
  createFleetWithHttpInfo(projectUID, createFleetRequest) {
    let postBody = createFleetRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling createFleet"
      );
    }
    // verify the required parameter 'createFleetRequest' is set
    if (createFleetRequest === undefined || createFleetRequest === null) {
      throw new Error(
        "Missing the required parameter 'createFleetRequest' when calling createFleet"
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
    let returnType = Fleet;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets",
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
   * Create Fleet
   * @param {String} projectUID
   * @param {module:model/CreateFleetRequest} createFleetRequest Fleet to be added
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fleet}
   */
  createFleet(projectUID, createFleetRequest) {
    return this.createFleetWithHttpInfo(projectUID, createFleetRequest).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
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
   * Delete Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  deleteFleetWithHttpInfo(projectUID, fleetUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteFleet"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling deleteFleet"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}",
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
   * Delete Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  deleteFleet(projectUID, fleetUID) {
    return this.deleteFleetWithHttpInfo(projectUID, fleetUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Delete environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  deleteFleetEnvironmentVariableWithHttpInfo(projectUID, fleetUID, key) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteFleetEnvironmentVariable"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling deleteFleetEnvironmentVariable"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling deleteFleetEnvironmentVariable"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
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
      "/v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables/{key}",
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
   * Delete environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  deleteFleetEnvironmentVariable(projectUID, fleetUID, key) {
    return this.deleteFleetEnvironmentVariableWithHttpInfo(
      projectUID,
      fleetUID,
      key
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
   * Get environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  getFleetEnvironmentVariablesWithHttpInfo(projectUID, fleetUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getFleetEnvironmentVariables"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling getFleetEnvironmentVariables"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables",
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
   * Get environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  getFleetEnvironmentVariables(projectUID, fleetUID) {
    return this.getFleetEnvironmentVariablesWithHttpInfo(
      projectUID,
      fleetUID
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get Events of a Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {String} opts.deviceUID A Device UID.
   * @param {module:model/String} opts.sortBy  (default to 'captured')
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectEvents200Response} and HTTP response
   */
  getFleetEventsWithHttpInfo(projectUID, fleetUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getFleetEvents"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling getFleetEvents"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
      deviceUID: opts["deviceUID"],
      sortBy: opts["sortBy"],
      sortOrder: opts["sortOrder"],
      startDate: opts["startDate"],
      endDate: opts["endDate"],
      systemFilesOnly: opts["systemFilesOnly"],
      files: opts["files"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjectEvents200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}/events",
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
   * Get Events of a Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {String} opts.deviceUID A Device UID.
   * @param {module:model/String} opts.sortBy  (default to 'captured')
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEvents200Response}
   */
  getFleetEvents(projectUID, fleetUID, opts) {
    return this.getFleetEventsWithHttpInfo(projectUID, fleetUID, opts).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Events of a Fleet by cursor
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit  (default to 50)
   * @param {String} opts.cursor A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @param {String} opts.deviceUID A Device UID.
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectEventsByCursor200Response} and HTTP response
   */
  getFleetEventsByCursorWithHttpInfo(projectUID, fleetUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getFleetEventsByCursor"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling getFleetEventsByCursor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {
      limit: opts["limit"],
      cursor: opts["cursor"],
      sortOrder: opts["sortOrder"],
      systemFilesOnly: opts["systemFilesOnly"],
      files: opts["files"],
      deviceUID: opts["deviceUID"],
      startDate: opts["startDate"],
      endDate: opts["endDate"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjectEventsByCursor200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}/events-cursor",
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
   * Get Events of a Fleet by cursor
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit  (default to 50)
   * @param {String} opts.cursor A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @param {String} opts.deviceUID A Device UID.
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEventsByCursor200Response}
   */
  getFleetEventsByCursor(projectUID, fleetUID, opts) {
    return this.getFleetEventsByCursorWithHttpInfo(
      projectUID,
      fleetUID,
      opts
    ).then(function (response_and_data) {
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
   * Get Project Fleets
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectFleets200Response} and HTTP response
   */
  getProjectFleetsWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectFleets"
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
    let returnType = GetProjectFleets200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets",
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
   * Get Project Fleets
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectFleets200Response}
   */
  getProjectFleets(projectUID) {
    return this.getProjectFleetsWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
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

  /**
   * Put environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the fleet
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  putFleetEnvironmentVariablesWithHttpInfo(
    projectUID,
    fleetUID,
    environmentVariables
  ) {
    let postBody = environmentVariables;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling putFleetEnvironmentVariables"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling putFleetEnvironmentVariables"
      );
    }
    // verify the required parameter 'environmentVariables' is set
    if (environmentVariables === undefined || environmentVariables === null) {
      throw new Error(
        "Missing the required parameter 'environmentVariables' when calling putFleetEnvironmentVariables"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables",
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
   * Put environment variables of a fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {module:model/EnvironmentVariables} environmentVariables Environment variables to be added to the fleet
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  putFleetEnvironmentVariables(projectUID, fleetUID, environmentVariables) {
    return this.putFleetEnvironmentVariablesWithHttpInfo(
      projectUID,
      fleetUID,
      environmentVariables
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Update Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {module:model/UpdateFleetRequest} updateFleetRequest Fleet details to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fleet} and HTTP response
   */
  updateFleetWithHttpInfo(projectUID, fleetUID, updateFleetRequest) {
    let postBody = updateFleetRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling updateFleet"
      );
    }
    // verify the required parameter 'fleetUID' is set
    if (fleetUID === undefined || fleetUID === null) {
      throw new Error(
        "Missing the required parameter 'fleetUID' when calling updateFleet"
      );
    }
    // verify the required parameter 'updateFleetRequest' is set
    if (updateFleetRequest === undefined || updateFleetRequest === null) {
      throw new Error(
        "Missing the required parameter 'updateFleetRequest' when calling updateFleet"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      fleetUID: fleetUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Fleet;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/fleets/{fleetUID}",
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
   * Update Fleet
   * @param {String} projectUID
   * @param {String} fleetUID
   * @param {module:model/UpdateFleetRequest} updateFleetRequest Fleet details to update
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fleet}
   */
  updateFleet(projectUID, fleetUID, updateFleetRequest) {
    return this.updateFleetWithHttpInfo(
      projectUID,
      fleetUID,
      updateFleetRequest
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
