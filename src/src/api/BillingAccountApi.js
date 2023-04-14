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
import GetBillingAccounts200Response from "../model/GetBillingAccounts200Response";

/**
 * BillingAccount service.
 * @module api/BillingAccountApi
 * @version 1.0.13
 */
export default class BillingAccountApi {
  /**
   * Constructs a new BillingAccountApi.
   * @alias module:api/BillingAccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Get Billing Accounts accessible by the api_key
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBillingAccounts200Response} and HTTP response
   */
  getBillingAccountsWithHttpInfo() {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["api_key"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = GetBillingAccounts200Response;
    return this.apiClient.callApi(
      "/v1/billing-accounts",
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
   * Get Billing Accounts accessible by the api_key
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBillingAccounts200Response}
   */
  getBillingAccounts() {
    return this.getBillingAccountsWithHttpInfo().then(function (
      response_and_data
    ) {
      return response_and_data.data;
    });
  }
}
