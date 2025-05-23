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
import Error from "../model/Error";
import GetRouteLogsByRoute200ResponseInner from "../model/GetRouteLogsByRoute200ResponseInner";
import NotehubRoute from "../model/NotehubRoute";
import UserDbRoute from "../model/UserDbRoute";

/**
 * Route service.
 * @module api/RouteApi
 * @version 1.0.32
 */
export default class RouteApi {
  /**
   * Constructs a new RouteApi.
   * @alias module:api/RouteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Create Route within a Project
   * @param {String} projectUID
   * @param {module:model/NotehubRoute} notehubRoute Route to be Created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotehubRoute} and HTTP response
   */
  createRouteWithHttpInfo(projectUID, notehubRoute) {
    let postBody = notehubRoute;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling createRoute"
      );
    }
    // verify the required parameter 'notehubRoute' is set
    if (notehubRoute === undefined || notehubRoute === null) {
      throw new Error(
        "Missing the required parameter 'notehubRoute' when calling createRoute"
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
    let returnType = NotehubRoute;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes",
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
   * Create Route within a Project
   * @param {String} projectUID
   * @param {module:model/NotehubRoute} notehubRoute Route to be Created
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotehubRoute}
   */
  createRoute(projectUID, notehubRoute) {
    return this.createRouteWithHttpInfo(projectUID, notehubRoute).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Delete single route within a project
   * @param {String} projectUID
   * @param {String} routeUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */
  deleteRouteWithHttpInfo(projectUID, routeUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling deleteRoute"
      );
    }
    // verify the required parameter 'routeUID' is set
    if (routeUID === undefined || routeUID === null) {
      throw new Error(
        "Missing the required parameter 'routeUID' when calling deleteRoute"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      routeUID: routeUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = Object;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes/{routeUID}",
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
   * Delete single route within a project
   * @param {String} projectUID
   * @param {String} routeUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
   */
  deleteRoute(projectUID, routeUID) {
    return this.deleteRouteWithHttpInfo(projectUID, routeUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get single route within a project
   * @param {String} projectUID
   * @param {String} routeUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotehubRoute} and HTTP response
   */
  getRouteWithHttpInfo(projectUID, routeUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getRoute"
      );
    }
    // verify the required parameter 'routeUID' is set
    if (routeUID === undefined || routeUID === null) {
      throw new Error(
        "Missing the required parameter 'routeUID' when calling getRoute"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      routeUID: routeUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = NotehubRoute;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes/{routeUID}",
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
   * Get single route within a project
   * @param {String} projectUID
   * @param {String} routeUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotehubRoute}
   */
  getRoute(projectUID, routeUID) {
    return this.getRouteWithHttpInfo(projectUID, routeUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Get Route Logs by Route UID
   * @param {String} projectUID
   * @param {String} routeUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {Array.<String>} opts.deviceUID A Device UID.
   * @param {module:model/String} opts.sortBy  (default to 'captured')
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetRouteLogsByRoute200ResponseInner>} and HTTP response
   */
  getRouteLogsByRouteWithHttpInfo(projectUID, routeUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getRouteLogsByRoute"
      );
    }
    // verify the required parameter 'routeUID' is set
    if (routeUID === undefined || routeUID === null) {
      throw new Error(
        "Missing the required parameter 'routeUID' when calling getRouteLogsByRoute"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      routeUID: routeUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
      deviceUID: this.apiClient.buildCollectionParam(
        opts["deviceUID"],
        "multi"
      ),
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
    let returnType = [GetRouteLogsByRoute200ResponseInner];
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes/{routeUID}/route-logs",
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
   * Get Route Logs by Route UID
   * @param {String} projectUID
   * @param {String} routeUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {Array.<String>} opts.deviceUID A Device UID.
   * @param {module:model/String} opts.sortBy  (default to 'captured')
   * @param {module:model/String} opts.sortOrder  (default to 'asc')
   * @param {Number} opts.startDate Unix timestamp
   * @param {Number} opts.endDate Unix timestamp
   * @param {Boolean} opts.systemFilesOnly
   * @param {String} opts.files
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetRouteLogsByRoute200ResponseInner>}
   */
  getRouteLogsByRoute(projectUID, routeUID, opts) {
    return this.getRouteLogsByRouteWithHttpInfo(
      projectUID,
      routeUID,
      opts
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }

  /**
   * Get all Routes within a Project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/UserDbRoute>} and HTTP response
   */
  getRoutesWithHttpInfo(projectUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getRoutes"
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
    let returnType = [UserDbRoute];
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes",
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
   * Get all Routes within a Project
   * @param {String} projectUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/UserDbRoute>}
   */
  getRoutes(projectUID) {
    return this.getRoutesWithHttpInfo(projectUID).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }

  /**
   * Update route by UID
   * @param {String} projectUID
   * @param {String} routeUID
   * @param {module:model/NotehubRoute} notehubRoute Route settings to be updated
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotehubRoute} and HTTP response
   */
  updateRouteWithHttpInfo(projectUID, routeUID, notehubRoute) {
    let postBody = notehubRoute;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling updateRoute"
      );
    }
    // verify the required parameter 'routeUID' is set
    if (routeUID === undefined || routeUID === null) {
      throw new Error(
        "Missing the required parameter 'routeUID' when calling updateRoute"
      );
    }
    // verify the required parameter 'notehubRoute' is set
    if (notehubRoute === undefined || notehubRoute === null) {
      throw new Error(
        "Missing the required parameter 'notehubRoute' when calling updateRoute"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      routeUID: routeUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = NotehubRoute;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/routes/{routeUID}",
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
   * Update route by UID
   * @param {String} projectUID
   * @param {String} routeUID
   * @param {module:model/NotehubRoute} notehubRoute Route settings to be updated
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotehubRoute}
   */
  updateRoute(projectUID, routeUID, notehubRoute) {
    return this.updateRouteWithHttpInfo(
      projectUID,
      routeUID,
      notehubRoute
    ).then(function (response_and_data) {
      return response_and_data.data;
    });
  }
}
