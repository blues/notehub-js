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
import GetProjectEvents200Response from '../model/GetProjectEvents200Response';
import GetProjectEventsByCursor200Response from '../model/GetProjectEventsByCursor200Response';

/**
* Event service.
* @module api/EventApi
* @version 1.0.8
*/
export default class EventApi {

    /**
    * Constructs a new EventApi. 
    * @alias module:api/EventApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Events of a Fleet
     * @param {String} projectUID 
     * @param {String} fleetUID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 50)
     * @param {Number} opts.pageNum  (default to 1)
     * @param {Array.<String>} opts.deviceUIDs A comma separated list of Device UIDs.
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
        throw new Error("Missing the required parameter 'projectUID' when calling getFleetEvents");
      }
      // verify the required parameter 'fleetUID' is set
      if (fleetUID === undefined || fleetUID === null) {
        throw new Error("Missing the required parameter 'fleetUID' when calling getFleetEvents");
      }

      let pathParams = {
        'projectUID': projectUID,
        'fleetUID': fleetUID
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageNum': opts['pageNum'],
        'deviceUIDs': this.apiClient.buildCollectionParam(opts['deviceUIDs'], 'csv'),
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'systemFilesOnly': opts['systemFilesOnly'],
        'files': opts['files']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjectEvents200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/fleets/{fleetUID}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Events of a Fleet
     * @param {String} projectUID 
     * @param {String} fleetUID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 50)
     * @param {Number} opts.pageNum  (default to 1)
     * @param {Array.<String>} opts.deviceUIDs A comma separated list of Device UIDs.
     * @param {module:model/String} opts.sortBy  (default to 'captured')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @param {Number} opts.startDate Unix timestamp
     * @param {Number} opts.endDate Unix timestamp
     * @param {Boolean} opts.systemFilesOnly 
     * @param {String} opts.files 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEvents200Response}
     */
    getFleetEvents(projectUID, fleetUID, opts) {
      return this.getFleetEventsWithHttpInfo(projectUID, fleetUID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectEventsByCursor200Response} and HTTP response
     */
    getFleetEventsByCursorWithHttpInfo(projectUID, fleetUID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling getFleetEventsByCursor");
      }
      // verify the required parameter 'fleetUID' is set
      if (fleetUID === undefined || fleetUID === null) {
        throw new Error("Missing the required parameter 'fleetUID' when calling getFleetEventsByCursor");
      }

      let pathParams = {
        'projectUID': projectUID,
        'fleetUID': fleetUID
      };
      let queryParams = {
        'limit': opts['limit'],
        'cursor': opts['cursor'],
        'sortOrder': opts['sortOrder'],
        'systemFilesOnly': opts['systemFilesOnly'],
        'files': opts['files']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjectEventsByCursor200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/fleets/{fleetUID}/events-cursor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEventsByCursor200Response}
     */
    getFleetEventsByCursor(projectUID, fleetUID, opts) {
      return this.getFleetEventsByCursorWithHttpInfo(projectUID, fleetUID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Events of a Project
     * @param {String} projectUID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 50)
     * @param {Number} opts.pageNum  (default to 1)
     * @param {Array.<String>} opts.deviceUIDs A comma separated list of Device UIDs.
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
        throw new Error("Missing the required parameter 'projectUID' when calling getProjectEvents");
      }

      let pathParams = {
        'projectUID': projectUID
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'pageNum': opts['pageNum'],
        'deviceUIDs': this.apiClient.buildCollectionParam(opts['deviceUIDs'], 'csv'),
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'systemFilesOnly': opts['systemFilesOnly'],
        'files': opts['files']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjectEvents200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Events of a Project
     * @param {String} projectUID 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize  (default to 50)
     * @param {Number} opts.pageNum  (default to 1)
     * @param {Array.<String>} opts.deviceUIDs A comma separated list of Device UIDs.
     * @param {module:model/String} opts.sortBy  (default to 'captured')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @param {Number} opts.startDate Unix timestamp
     * @param {Number} opts.endDate Unix timestamp
     * @param {Boolean} opts.systemFilesOnly 
     * @param {String} opts.files 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEvents200Response}
     */
    getProjectEvents(projectUID, opts) {
      return this.getProjectEventsWithHttpInfo(projectUID, opts)
        .then(function(response_and_data) {
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetProjectEventsByCursor200Response} and HTTP response
     */
    getProjectEventsByCursorWithHttpInfo(projectUID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling getProjectEventsByCursor");
      }

      let pathParams = {
        'projectUID': projectUID
      };
      let queryParams = {
        'limit': opts['limit'],
        'cursor': opts['cursor'],
        'sortOrder': opts['sortOrder'],
        'systemFilesOnly': opts['systemFilesOnly'],
        'files': opts['files']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetProjectEventsByCursor200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/events-cursor', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetProjectEventsByCursor200Response}
     */
    getProjectEventsByCursor(projectUID, opts) {
      return this.getProjectEventsByCursorWithHttpInfo(projectUID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
