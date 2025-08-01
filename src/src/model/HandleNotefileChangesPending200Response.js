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

/**
 * The HandleNotefileChangesPending200Response model module.
 * @module model/HandleNotefileChangesPending200Response
 * @version 1.0.36
 */
class HandleNotefileChangesPending200Response {
  /**
   * Constructs a new <code>HandleNotefileChangesPending200Response</code>.
   * @alias module:model/HandleNotefileChangesPending200Response
   */
  constructor() {
    HandleNotefileChangesPending200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HandleNotefileChangesPending200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandleNotefileChangesPending200Response} obj Optional instance to populate.
   * @return {module:model/HandleNotefileChangesPending200Response} The populated <code>HandleNotefileChangesPending200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HandleNotefileChangesPending200Response();

      if (data.hasOwnProperty("total")) {
        obj["total"] = ApiClient.convertToType(data["total"], "Number");
      }
      if (data.hasOwnProperty("changes")) {
        obj["changes"] = ApiClient.convertToType(data["changes"], "Number");
      }
      if (data.hasOwnProperty("pending")) {
        obj["pending"] = ApiClient.convertToType(data["pending"], "Boolean");
      }
      if (data.hasOwnProperty("info")) {
        obj["info"] = ApiClient.convertToType(data["info"], Object);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HandleNotefileChangesPending200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HandleNotefileChangesPending200Response</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * The total number of files.
 * @member {Number} total
 */
HandleNotefileChangesPending200Response.prototype["total"] = undefined;

/**
 * The number of pending changes in the Notefile.
 * @member {Number} changes
 */
HandleNotefileChangesPending200Response.prototype["changes"] = undefined;

/**
 * Whether there are pending changes.
 * @member {Boolean} pending
 */
HandleNotefileChangesPending200Response.prototype["pending"] = undefined;

/**
 * An object with a key for each Notefile that matched the request parameters, and value object with the changes and total for each file.
 * @member {Object} info
 */
HandleNotefileChangesPending200Response.prototype["info"] = undefined;

export default HandleNotefileChangesPending200Response;
