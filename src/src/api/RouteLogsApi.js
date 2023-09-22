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
import Error from "../model/Error";
import GetRouteLogsByRoute200ResponseInner from "../model/GetRouteLogsByRoute200ResponseInner";

/**
 * RouteLogs service.
 * @module api/RouteLogsApi
 * @version 1.0.16
 */
export default class RouteLogsApi {
  /**
   * Constructs a new RouteLogsApi.
   * @alias module:api/RouteLogsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get Route Logs by Event UID
   * @param {String} projectUID
   * @param {String} eventUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetRouteLogsByRoute200ResponseInner>} and HTTP response
   */
  getRouteLogsByEventWithHttpInfo(projectUID, eventUID) {
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getRouteLogsByEvent"
      );
    }
    // verify the required parameter 'eventUID' is set
    if (eventUID === undefined || eventUID === null) {
      throw new Error(
        "Missing the required parameter 'eventUID' when calling getRouteLogsByEvent"
      );
    }

    let pathParams = {
      projectUID: projectUID,
      eventUID: eventUID,
    };
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = [GetRouteLogsByRoute200ResponseInner];
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/events/{eventUID}/route-logs",
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
   * Get Route Logs by Event UID
   * @param {String} projectUID
   * @param {String} eventUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetRouteLogsByRoute200ResponseInner>}
   */
  getRouteLogsByEvent(projectUID, eventUID) {
    return this.getRouteLogsByEventWithHttpInfo(projectUID, eventUID).then(
      function (response_and_data) {
        return response_and_data.data;
      }
    );
  }

  /**
   * Get Route Logs by Route UID
   * @param {String} projectUID
   * @param {String} routeUID
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
   * @param {String} opts.deviceUID A Device UID.
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
}
