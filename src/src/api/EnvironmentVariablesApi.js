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
import EnvironmentVariables from "../model/EnvironmentVariables";
import Error from "../model/Error";
import GetDeviceEnvironmentVariables200Response from "../model/GetDeviceEnvironmentVariables200Response";

/**
 * EnvironmentVariables service.
 * @module api/EnvironmentVariablesApi
 * @version 1.0.16
 */
export default class EnvironmentVariablesApi {
  /**
   * Constructs a new EnvironmentVariablesApi.
   * @alias module:api/EnvironmentVariablesApi
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
   * Delete an environment variable of a project by key
   * @param {String} projectUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  deleteProjectEnvironmentVariableWithHttpInfo(projectUID, key) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteProjectEnvironmentVariable"
      );
    }
    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling deleteProjectEnvironmentVariable"
      );
    }

    let pathParams = {
      projectUID: projectUID,
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
      "/v1/projects/{projectUID}/environment_variables/{key}",
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
   * Delete an environment variable of a project by key
   * @param {String} projectUID
   * @param {String} key The environment variable key to delete.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  deleteProjectEnvironmentVariable(projectUID, key) {
    return this.deleteProjectEnvironmentVariableWithHttpInfo(
      projectUID,
      key
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
      "/v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin",
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
   * Get environment variables of a project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  getProjectEnvironmentVariablesWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectEnvironmentVariables"
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
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/environment_variables",
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
   * Get environment variables of a project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  getProjectEnvironmentVariables(projectUID) {
    return this.getProjectEnvironmentVariablesWithHttpInfo(projectUID).then(
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
      "/v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin",
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
   * Put environment variables of a project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {module:model/EnvironmentVariables} opts.environmentVariables
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnvironmentVariables} and HTTP response
   */
  putProjectEnvironmentVariablesWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = opts["environmentVariables"];
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling putProjectEnvironmentVariables"
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
    let returnType = EnvironmentVariables;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/environment_variables",
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
   * Put environment variables of a project
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {module:model/EnvironmentVariables} opts.environmentVariables
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnvironmentVariables}
   */
  putProjectEnvironmentVariables(projectUID, opts) {
    return this.putProjectEnvironmentVariablesWithHttpInfo(
      projectUID,
      opts
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
