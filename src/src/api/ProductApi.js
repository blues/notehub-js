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
import CreateProductRequest from '../model/CreateProductRequest';
import Error from '../model/Error';
import GetProjectProducts200Response from '../model/GetProjectProducts200Response';
import Product from '../model/Product';
import Project from '../model/Project';

/**
* Product service.
* @module api/ProductApi
* @version 1.0.5
*/
export default class ProductApi {

    /**
    * Constructs a new ProductApi. 
    * @alias module:api/ProductApi
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
        throw new Error("Missing the required parameter 'projectUID' when calling createProduct");
      }
      // verify the required parameter 'createProductRequest' is set
      if (createProductRequest === undefined || createProductRequest === null) {
        throw new Error("Missing the required parameter 'createProductRequest' when calling createProduct");
      }

      let pathParams = {
        'projectUID': projectUID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Product within a Project
     * @param {String} projectUID 
     * @param {module:model/CreateProductRequest} createProductRequest Product to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    createProduct(projectUID, createProductRequest) {
      return this.createProductWithHttpInfo(projectUID, createProductRequest)
        .then(function(response_and_data) {
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
        throw new Error("Missing the required parameter 'productUID' when calling getProjectByProduct");
      }

      let pathParams = {
        'productUID': productUID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Project;
      return this.apiClient.callApi(
        '/v1/products/{productUID}/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a Project by ProductUID
     * @param {String} productUID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    getProjectByProduct(productUID) {
      return this.getProjectByProductWithHttpInfo(productUID)
        .then(function(response_and_data) {
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
        throw new Error("Missing the required parameter 'projectUID' when calling getProjectProducts");
      }

      let pathParams = {
        'projectUID': projectUID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjectProducts200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Products within a Project
     * @param {String} projectUID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectProducts200Response}
     */
    getProjectProducts(projectUID) {
      return this.getProjectProductsWithHttpInfo(projectUID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
