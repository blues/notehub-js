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
 * The HandleNotefileChanges200Response model module.
 * @module model/HandleNotefileChanges200Response
 * @version 1.0.25
 */
class HandleNotefileChanges200Response {
  /**
   * Constructs a new <code>HandleNotefileChanges200Response</code>.
   * @alias module:model/HandleNotefileChanges200Response
   */
  constructor() {
    HandleNotefileChanges200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HandleNotefileChanges200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandleNotefileChanges200Response} obj Optional instance to populate.
   * @return {module:model/HandleNotefileChanges200Response} The populated <code>HandleNotefileChanges200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HandleNotefileChanges200Response();

      if (data.hasOwnProperty("total")) {
        obj["total"] = ApiClient.convertToType(data["total"], "Number");
      }
      if (data.hasOwnProperty("changes")) {
        obj["changes"] = ApiClient.convertToType(data["changes"], "Number");
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
   * Validates the JSON data with respect to <code>HandleNotefileChanges200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HandleNotefileChanges200Response</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * The total number of files.
 * @member {Number} total
 */
HandleNotefileChanges200Response.prototype["total"] = undefined;

/**
 * The number of pending changes in the Notefile.
 * @member {Number} changes
 */
HandleNotefileChanges200Response.prototype["changes"] = undefined;

/**
 * An object with a key for each Notefile that matched the request parameters, and value object with the changes and total for each file.
 * @member {Object} info
 */
HandleNotefileChanges200Response.prototype["info"] = undefined;

export default HandleNotefileChanges200Response;
