/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger another beta deploy to npm
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
 * The Note model module.
 * @module model/Note
 * @version 1.0.24
 */
class Note {
  /**
   * Constructs a new <code>Note</code>.
   * @alias module:model/Note
   */
  constructor() {
    Note.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Note} obj Optional instance to populate.
   * @return {module:model/Note} The populated <code>Note</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Note();

      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], Object);
      }
      if (data.hasOwnProperty("payload")) {
        obj["payload"] = ApiClient.convertToType(data["payload"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Note</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Note</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["payload"] &&
      !(
        typeof data["payload"] === "string" || data["payload"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `payload` to be a primitive type in the JSON string but got " +
          data["payload"]
      );
    }

    return true;
  }
}

/**
 * @member {Object} body
 */
Note.prototype["body"] = undefined;

/**
 * @member {String} payload
 */
Note.prototype["payload"] = undefined;

export default Note;
