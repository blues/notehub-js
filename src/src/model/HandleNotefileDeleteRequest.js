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

/**
 * The HandleNotefileDeleteRequest model module.
 * @module model/HandleNotefileDeleteRequest
 * @version 1.0.17
 */
class HandleNotefileDeleteRequest {
  /**
   * Constructs a new <code>HandleNotefileDeleteRequest</code>.
   * @alias module:model/HandleNotefileDeleteRequest
   */
  constructor() {
    HandleNotefileDeleteRequest.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HandleNotefileDeleteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandleNotefileDeleteRequest} obj Optional instance to populate.
   * @return {module:model/HandleNotefileDeleteRequest} The populated <code>HandleNotefileDeleteRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HandleNotefileDeleteRequest();

      if (data.hasOwnProperty("files")) {
        obj["files"] = ApiClient.convertToType(data["files"], ["String"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HandleNotefileDeleteRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HandleNotefileDeleteRequest</code>.
   */
  static validateJSON(data) {
    // ensure the json data is an array
    if (!Array.isArray(data["files"])) {
      throw new Error(
        "Expected the field `files` to be an array in the JSON data but got " +
          data["files"]
      );
    }

    return true;
  }
}

/**
 * One or more files to obtain change information from.
 * @member {Array.<String>} files
 */
HandleNotefileDeleteRequest.prototype["files"] = undefined;

export default HandleNotefileDeleteRequest;
