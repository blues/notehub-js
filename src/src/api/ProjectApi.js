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
import CreateProductRequest from "../model/CreateProductRequest";
import CreateProjectRequest from "../model/CreateProjectRequest";
import EnvironmentVariables from "../model/EnvironmentVariables";
import Error from "../model/Error";
import GetProjectDevicePublicKeys200Response from "../model/GetProjectDevicePublicKeys200Response";
import GetProjectDevices200Response from "../model/GetProjectDevices200Response";
import GetProjectEvents200Response from "../model/GetProjectEvents200Response";
import GetProjectEventsByCursor200Response from "../model/GetProjectEventsByCursor200Response";
import GetProjectMembers200Response from "../model/GetProjectMembers200Response";
import GetProjectProducts200Response from "../model/GetProjectProducts200Response";
import GetProjects200Response from "../model/GetProjects200Response";
import Product from "../model/Product";
import Project from "../model/Project";

/**
 * Project service.
 * @module api/ProjectApi
 * @version 1.0.14
 */
export default class ProjectApi {
  /**
   * Constructs a new ProjectApi.
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Product within a Project
   * @param {String} projectUID
   * @param {module:model/CreateProductRequest} createProductRequest Product to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
   */
  createProductWithHttpInfo(projectUID, createProductRequest) {
    let postBody = createProductRequest;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling createProduct"
      );
    }
    // verify the required parameter 'createProductRequest' is set
    if (createProductRequest === undefined || createProductRequest === null) {
      throw new Error(
        "Missing the required parameter 'createProductRequest' when calling createProduct"
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
    let returnType = Product;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/products",
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
   * Create Product within a Project
   * @param {String} projectUID
   * @param {module:model/CreateProductRequest} createProductRequest Product to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
   */
  createProduct(projectUID, createProductRequest) {
    return this.createProductWithHttpInfo(
      projectUID,
      createProductRequest
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Create a Project
   * @param {module:model/CreateProjectRequest} createProjectRequest Project to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
   */
  createProjectWithHttpInfo(createProjectRequest) {
    let postBody = createProjectRequest;
    // verify the required parameter 'createProjectRequest' is set
    if (createProjectRequest === undefined || createProjectRequest === null) {
      throw new Error(
        "Missing the required parameter 'createProjectRequest' when calling createProject"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = Project;
    return this.apiClient.callApi(
      "/v1/projects",
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
   * Create a Project
   * @param {module:model/CreateProjectRequest} createProjectRequest Project to be created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
   */
  createProject(createProjectRequest) {
    return this.createProjectWithHttpInfo(createProjectRequest).then(function (
      response_and_data
    ) {
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
   * Disable the project-level event JSONata transformation
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  disableGlobalTransformationWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling disableGlobalTransformation"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/global-transformation/disable",
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
   * Disable the project-level event JSONata transformation
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  disableGlobalTransformation(projectUID) {
    return this.disableGlobalTransformationWithHttpInfo(projectUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Enable the project-level event JSONata transformation
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  enableGlobalTransformationWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling enableGlobalTransformation"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/global-transformation/enable",
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
   * Enable the project-level event JSONata transformation
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  enableGlobalTransformation(projectUID) {
    return this.enableGlobalTransformationWithHttpInfo(projectUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get a Project by ProjectUID
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
   */
  getProjectWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProject"
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
    let returnType = Project;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}",
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
   * Get a Project by ProjectUID
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
   */
  getProject(projectUID) {
    return this.getProjectWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get a Project by ProductUID
   * @param {String} productUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
   */
  getProjectByProductWithHttpInfo(productUID) {
    let postBody = null;
    // verify the required parameter 'productUID' is set
    if (productUID === undefined || productUID === null) {
      throw new Error(
        "Missing the required parameter 'productUID' when calling getProjectByProduct"
      );
    }

    let pathParams = {
      productUID: productUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = Project;
    return this.apiClient.callApi(
      "/v1/products/{productUID}/project",
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
   * Get a Project by ProductUID
   * @param {String} productUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
   */
  getProjectByProduct(productUID) {
    return this.getProjectByProductWithHttpInfo(productUID).then(function (
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
   * Get Events of a Project
   * @param {String} projectUID
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
  getProjectEventsWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectEvents"
      );
    }

    let pathParams = {
      projectUID: projectUID,
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
      "/v1/projects/{projectUID}/events",
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
   * Get Events of a Project
   * @param {String} projectUID
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
  getProjectEvents(projectUID, opts) {
    return this.getProjectEventsWithHttpInfo(projectUID, opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Events of a Project by cursor
   * @param {String} projectUID
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
  getProjectEventsByCursorWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectEventsByCursor"
      );
    }

    let pathParams = {
      projectUID: projectUID,
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
      "/v1/projects/{projectUID}/events-cursor",
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
   * Get Events of a Project by cursor
   * @param {String} projectUID
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
  getProjectEventsByCursor(projectUID, opts) {
    return this.getProjectEventsByCursorWithHttpInfo(projectUID, opts).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
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
   * Get Project Members
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectMembers200Response} and HTTP response
   */
  getProjectMembersWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectMembers"
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
    let returnType = GetProjectMembers200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/members",
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
   * Get Project Members
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectMembers200Response}
   */
  getProjectMembers(projectUID) {
    return this.getProjectMembersWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Products within a Project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectProducts200Response} and HTTP response
   */
  getProjectProductsWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getProjectProducts"
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
    let returnType = GetProjectProducts200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/products",
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
   * Get Products within a Project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectProducts200Response}
   */
  getProjectProducts(projectUID) {
    return this.getProjectProductsWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Projects accessible by the api_key
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjects200Response} and HTTP response
   */
  getProjectsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetProjects200Response;
    return this.apiClient.callApi(
      "/v1/projects",
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
   * Get Projects accessible by the api_key
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjects200Response}
   */
  getProjects() {
    return this.getProjectsWithHttpInfo().then(function (response_and_data) {
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

  /**
   * Set the project-level event JSONata transformation
   * @param {String} projectUID
   * @param {Object.<String, Object>} body JSONata expression which will be applied to each event before it is persisted and routed
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  setGlobalTransformationWithHttpInfo(projectUID, body) {
    let postBody = body;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling setGlobalTransformation"
      );
    }
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling setGlobalTransformation"
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
    let returnType = null;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/global-transformation",
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
   * Set the project-level event JSONata transformation
   * @param {String} projectUID
   * @param {Object.<String, Object>} body JSONata expression which will be applied to each event before it is persisted and routed
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  setGlobalTransformation(projectUID, body) {
    return this.setGlobalTransformationWithHttpInfo(projectUID, body).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }
}
