/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";

/**
 * The HandleNoteGet200Response model module.
 * @module model/HandleNoteGet200Response
 * @version 1.0.20
 */
class HandleNoteGet200Response {
  /**
   * Constructs a new <code>HandleNoteGet200Response</code>.
   * @alias module:model/HandleNoteGet200Response
   */
  constructor() {
    HandleNoteGet200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>HandleNoteGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HandleNoteGet200Response} obj Optional instance to populate.
   * @return {module:model/HandleNoteGet200Response} The populated <code>HandleNoteGet200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new HandleNoteGet200Response();

      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], Object);
      }
      if (data.hasOwnProperty("payload")) {
        obj["payload"] = ApiClient.convertToType(data["payload"], "String");
      }
      if (data.hasOwnProperty("time")) {
        obj["time"] = ApiClient.convertToType(data["time"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>HandleNoteGet200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HandleNoteGet200Response</code>.
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
 * The note body
 * @member {Object} body
 */
HandleNoteGet200Response.prototype["body"] = undefined;

/**
 * The note payload
 * @member {String} payload
 */
HandleNoteGet200Response.prototype["payload"] = undefined;

/**
 * The time the Note was added to the Notecard or Notehub
 * @member {Number} time
 */
HandleNoteGet200Response.prototype["time"] = undefined;

export default HandleNoteGet200Response;
