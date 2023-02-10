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
import Login200Response from '../model/Login200Response';
import LoginRequest from '../model/LoginRequest';

/**
* Authorization service.
* @module api/AuthorizationApi
* @version 1.0.7
*/
export default class AuthorizationApi {

    /**
    * Constructs a new AuthorizationApi. 
    * @alias module:api/AuthorizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets a session token from the API from a username and password.
     * @param {module:model/LoginRequest} loginRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Login200Response} and HTTP response
     */
    loginWithHttpInfo(loginRequest) {
      let postBody = loginRequest;
      // verify the required parameter 'loginRequest' is set
      if (loginRequest === undefined || loginRequest === null) {
        throw new Error("Missing the required parameter 'loginRequest' when calling login");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Login200Response;
      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a session token from the API from a username and password.
     * @param {module:model/LoginRequest} loginRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Login200Response}
     */
    login(loginRequest) {
      return this.loginWithHttpInfo(loginRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
