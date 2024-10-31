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
 * The HandleNoteChanges200Response model module.
 * @module model/HandleNoteChanges200Response
 * @version 1.0.24
 */
class HandleNoteChanges200Response {
  /**
   * Constructs a new <code>HandleNoteChanges200Response</code>.
   * @alias module:model/HandleNoteChanges200Response
   */
  constructor() {
    HandleNoteChanges200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HandleNoteChanges200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandleNoteChanges200Response} obj Optional instance to populate.
   * @return {module:model/HandleNoteChanges200Response} The populated <code>HandleNoteChanges200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HandleNoteChanges200Response();

      if (data.hasOwnProperty("total")) {
        obj["total"] = ApiClient.convertToType(data["total"], "Number");
      }
      if (data.hasOwnProperty("changes")) {
        obj["changes"] = ApiClient.convertToType(data["changes"], "Number");
      }
      if (data.hasOwnProperty("notes")) {
        obj["notes"] = ApiClient.convertToType(data["notes"], Object);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HandleNoteChanges200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HandleNoteChanges200Response</code>.
   */
  static validateJSON(data) {
    return true;
  }
}

/**
 * The total number of notes.
 * @member {Number} total
 */
HandleNoteChanges200Response.prototype["total"] = undefined;

/**
 * The number of pending changes in the Notefile.
 * @member {Number} changes
 */
HandleNoteChanges200Response.prototype["changes"] = undefined;

/**
 * An object with a key for each note and a value object with the body of each Note and the time the Note was added.
 * @member {Object} notes
 */
HandleNoteChanges200Response.prototype["notes"] = undefined;

export default HandleNoteChanges200Response;
