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
import HandleNoteChanges200Response from '../model/HandleNoteChanges200Response';
import HandleNoteGet200Response from '../model/HandleNoteGet200Response';
import Note from '../model/Note';

/**
* Notes service.
* @module api/NotesApi
* @version 1.0.6
*/
export default class NotesApi {

    /**
    * Constructs a new NotesApi. 
    * @alias module:api/NotesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Adds a Note to a Notefile, creating the Notefile if it doesn't yet exist.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    handleNoteAddWithHttpInfo(projectUID, deviceUID, notefileID, note) {
      let postBody = note;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteAdd");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteAdd");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteAdd");
      }
      // verify the required parameter 'note' is set
      if (note === undefined || note === null) {
        throw new Error("Missing the required parameter 'note' when calling handleNoteAdd");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID
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
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Adds a Note to a Notefile, creating the Notefile if it doesn't yet exist.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    handleNoteAdd(projectUID, deviceUID, notefileID, note) {
      return this.handleNoteAddWithHttpInfo(projectUID, deviceUID, notefileID, note)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Incrementally retrieve changes within a specific Notefile.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tracker The change tracker ID.
     * @param {Number} opts.max The maximum number of Notes to return in the request.
     * @param {Boolean} opts.start true to reset the tracker to the beginning.
     * @param {Boolean} opts.stop true to delete the tracker.
     * @param {Boolean} opts.deleted true to return deleted notes.
     * @param {Boolean} opts._delete true to delete the notes returned by the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HandleNoteChanges200Response} and HTTP response
     */
    handleNoteChangesWithHttpInfo(projectUID, deviceUID, notefileID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteChanges");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteChanges");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteChanges");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID
      };
      let queryParams = {
        'tracker': opts['tracker'],
        'max': opts['max'],
        'start': opts['start'],
        'stop': opts['stop'],
        'deleted': opts['deleted'],
        'delete': opts['_delete']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HandleNoteChanges200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/changes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Incrementally retrieve changes within a specific Notefile.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tracker The change tracker ID.
     * @param {Number} opts.max The maximum number of Notes to return in the request.
     * @param {Boolean} opts.start true to reset the tracker to the beginning.
     * @param {Boolean} opts.stop true to delete the tracker.
     * @param {Boolean} opts.deleted true to return deleted notes.
     * @param {Boolean} opts._delete true to delete the notes returned by the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HandleNoteChanges200Response}
     */
    handleNoteChanges(projectUID, deviceUID, notefileID, opts) {
      return this.handleNoteChangesWithHttpInfo(projectUID, deviceUID, notefileID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Adds a Note to a Notefile, creating the Notefile if it doesn't yet exist.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    handleNoteCreateAddWithHttpInfo(projectUID, deviceUID, notefileID, noteID, note) {
      let postBody = note;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteCreateAdd");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteCreateAdd");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteCreateAdd");
      }
      // verify the required parameter 'noteID' is set
      if (noteID === undefined || noteID === null) {
        throw new Error("Missing the required parameter 'noteID' when calling handleNoteCreateAdd");
      }
      // verify the required parameter 'note' is set
      if (note === undefined || note === null) {
        throw new Error("Missing the required parameter 'note' when calling handleNoteCreateAdd");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID,
        'noteID': noteID
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
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Adds a Note to a Notefile, creating the Notefile if it doesn't yet exist.
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    handleNoteCreateAdd(projectUID, deviceUID, notefileID, noteID, note) {
      return this.handleNoteCreateAddWithHttpInfo(projectUID, deviceUID, notefileID, noteID, note)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a note from a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    handleNoteDeleteWithHttpInfo(projectUID, deviceUID, notefileID, noteID) {
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteDelete");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteDelete");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteDelete");
      }
      // verify the required parameter 'noteID' is set
      if (noteID === undefined || noteID === null) {
        throw new Error("Missing the required parameter 'noteID' when calling handleNoteDelete");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID,
        'noteID': noteID
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a note from a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    handleNoteDelete(projectUID, deviceUID, notefileID, noteID) {
      return this.handleNoteDeleteWithHttpInfo(projectUID, deviceUID, notefileID, noteID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a note from a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._delete Whether to delete the note from the DB notefile
     * @param {Boolean} opts.deleted Whether to return deleted notes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HandleNoteGet200Response} and HTTP response
     */
    handleNoteGetWithHttpInfo(projectUID, deviceUID, notefileID, noteID, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteGet");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteGet");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteGet");
      }
      // verify the required parameter 'noteID' is set
      if (noteID === undefined || noteID === null) {
        throw new Error("Missing the required parameter 'noteID' when calling handleNoteGet");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID,
        'noteID': noteID
      };
      let queryParams = {
        'delete': opts['_delete'],
        'deleted': opts['deleted']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HandleNoteGet200Response;
      return this.apiClient.callApi(
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a note from a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._delete Whether to delete the note from the DB notefile
     * @param {Boolean} opts.deleted Whether to return deleted notes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HandleNoteGet200Response}
     */
    handleNoteGet(projectUID, deviceUID, notefileID, noteID, opts) {
      return this.handleNoteGetWithHttpInfo(projectUID, deviceUID, notefileID, noteID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a note in a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    handleNoteUpdateWithHttpInfo(projectUID, deviceUID, notefileID, noteID, note) {
      let postBody = note;
      // verify the required parameter 'projectUID' is set
      if (projectUID === undefined || projectUID === null) {
        throw new Error("Missing the required parameter 'projectUID' when calling handleNoteUpdate");
      }
      // verify the required parameter 'deviceUID' is set
      if (deviceUID === undefined || deviceUID === null) {
        throw new Error("Missing the required parameter 'deviceUID' when calling handleNoteUpdate");
      }
      // verify the required parameter 'notefileID' is set
      if (notefileID === undefined || notefileID === null) {
        throw new Error("Missing the required parameter 'notefileID' when calling handleNoteUpdate");
      }
      // verify the required parameter 'noteID' is set
      if (noteID === undefined || noteID === null) {
        throw new Error("Missing the required parameter 'noteID' when calling handleNoteUpdate");
      }
      // verify the required parameter 'note' is set
      if (note === undefined || note === null) {
        throw new Error("Missing the required parameter 'note' when calling handleNoteUpdate");
      }

      let pathParams = {
        'projectUID': projectUID,
        'deviceUID': deviceUID,
        'notefileID': notefileID,
        'noteID': noteID
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
        '/v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a note in a DB notefile
     * @param {String} projectUID 
     * @param {String} deviceUID 
     * @param {String} notefileID 
     * @param {String} noteID 
     * @param {module:model/Note} note Body or payload of note to be added to the device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    handleNoteUpdate(projectUID, deviceUID, notefileID, noteID, note) {
      return this.handleNoteUpdateWithHttpInfo(projectUID, deviceUID, notefileID, noteID, note)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
