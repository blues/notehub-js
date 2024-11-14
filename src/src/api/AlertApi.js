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
import GetAlerts200Response from "../model/GetAlerts200Response";

/**
 * Alert service.
 * @module api/AlertApi
 * @version 1.0.25
 */
export default class AlertApi {
  /**
   * Constructs a new AlertApi.
   * @alias module:api/AlertApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get list of defined Alerts
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {String} opts.monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAlerts200Response} and HTTP response
   */
  getAlertsWithHttpInfo(projectUID, opts) {
    opts = opts || {};
    let postBody = null;
    // verify the required parameter 'projectUID' is set
    if (projectUID === undefined || projectUID === null) {
      throw new Error(
        "Missing the required parameter 'projectUID' when calling getAlerts"
      );
    }

    let pathParams = {
      projectUID: projectUID,
    };
    let queryParams = {
      pageSize: opts["pageSize"],
      pageNum: opts["pageNum"],
      monitorUID: opts["monitorUID"],
    };
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetAlerts200Response;
    return this.apiClient.callApi(
      "/v1/projects/{projectUID}/alerts",
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
   * Get list of defined Alerts
   * @param {String} projectUID
   * @param {Object} opts Optional parameters
   * @param {Number} opts.pageSize  (default to 50)
   * @param {Number} opts.pageNum  (default to 1)
   * @param {String} opts.monitorUID
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAlerts200Response}
   */
  getAlerts(projectUID, opts) {
    return this.getAlertsWithHttpInfo(projectUID, opts).then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }
}
