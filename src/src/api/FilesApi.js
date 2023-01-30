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
import Error from '../model/Error';
import HandleNotefileChanges200Response from '../model/HandleNotefileChanges200Response';
import HandleNotefileChangesPending200Response from '../model/HandleNotefileChangesPending200Response';
import HandleNotefileDeleteRequest from '../model/HandleNotefileDeleteRequest';

/**
* Files service.
* @module api/FilesApi
* @version 1.0.4
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Used to perform queries on a single or multiple files to determine if new Notes are available to read
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tracker The change tracker ID.
     * @param {Array.<String>} opts.files One or more files to obtain change information from.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HandleNotefileChanges200Response} and HTTP response
     */
    handleNotefileChangesWithHttpInfo(projectUID, deviceUID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNotefileChanges");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNotefileChanges");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID
      };
      let queryParams = {
        'tracker': opts['tracker'],
        'files': this.apiClient.buildCollectionParam(opts['files'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HandleNotefileChanges200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/files/changes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Used to perform queries on a single or multiple files to determine if new Notes are available to read
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tracker The change tracker ID.
     * @param {Array.<String>} opts.files One or more files to obtain change information from.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HandleNotefileChanges200Response}
     */
    handleNotefileChanges(projectUID, deviceUID, opts) {
      return this.handleNotefileChangesWithHttpInfo(projectUID, deviceUID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns info about file changes that are pending upload to Notehub or download to the Notecard.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HandleNotefileChangesPending200Response} and HTTP response
     */
    handleNotefileChangesPendingWithHttpInfo(projectUID, deviceUID) {
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNotefileChangesPending");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNotefileChangesPending");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID
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
      let returnType = HandleNotefileChangesPending200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/files/changes/pending', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns info about file changes that are pending upload to Notehub or download to the Notecard.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HandleNotefileChangesPending200Response}
     */
    handleNotefileChangesPending(projectUID, deviceUID) {
      return this.handleNotefileChangesPendingWithHttpInfo(projectUID, deviceUID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes Notefiles and the Notes they contain.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {module:model/HandleNotefileDeleteRequest} handleNotefileDeleteRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    handleNotefileDeleteWithHttpInfo(projectUID, deviceUID, handleNotefileDeleteRequest) {
      let postBody = handleNotefileDeleteRequest;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNotefileDelete");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNotefileDelete");
      }
      // verify the required parameter 'handleNotefileDeleteRequest' is set
      if (handleNotefileDeleteRequest === undefined || handleNotefileDeleteRequest === null) {
        throw new Error("Missing the required parameter 'handleNotefileDeleteRequest' when calling handleNotefileDelete");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/files', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes Notefiles and the Notes they contain.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {module:model/HandleNotefileDeleteRequest} handleNotefileDeleteRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    handleNotefileDelete(projectUID, deviceUID, handleNotefileDeleteRequest) {
      return this.handleNotefileDeleteWithHttpInfo(projectUID, deviceUID, handleNotefileDeleteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
