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
 * The GetDeviceHealthLog200ResponseHealthLogInner model module.
 * @module model/GetDeviceHealthLog200ResponseHealthLogInner
 * @version 1.0.24
 */
class GetDeviceHealthLog200ResponseHealthLogInner {
  /**
   * Constructs a new <code>GetDeviceHealthLog200ResponseHealthLogInner</code>.
   * @alias module:model/GetDeviceHealthLog200ResponseHealthLogInner
   * @param when {Date}
   * @param alert {Boolean}
   * @param text {String}
   */
  constructor(when, alert, text) {
    GetDeviceHealthLog200ResponseHealthLogInner.initialize(
      this,
      when,
      alert,
      text
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, when, alert, text) {
    obj["when"] = when;
    obj["alert"] = alert;
    obj["text"] = text;
  }

  /**
   * Constructs a <code>GetDeviceHealthLog200ResponseHealthLogInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDeviceHealthLog200ResponseHealthLogInner} obj Optional instance to populate.
   * @return {module:model/GetDeviceHealthLog200ResponseHealthLogInner} The populated <code>GetDeviceHealthLog200ResponseHealthLogInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDeviceHealthLog200ResponseHealthLogInner();

      if (data.hasOwnProperty("when")) {
        obj["when"] = ApiClient.convertToType(data["when"], "Date");
      }
      if (data.hasOwnProperty("alert")) {
        obj["alert"] = ApiClient.convertToType(data["alert"], "Boolean");
      }
      if (data.hasOwnProperty("text")) {
        obj["text"] = ApiClient.convertToType(data["text"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetDeviceHealthLog200ResponseHealthLogInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDeviceHealthLog200ResponseHealthLogInner</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetDeviceHealthLog200ResponseHealthLogInner.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    // ensure the json data is a string
    if (
      data["text"] &&
      !(typeof data["text"] === "string" || data["text"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `text` to be a primitive type in the JSON string but got " +
          data["text"]
      );
    }

    return true;
  }
}

GetDeviceHealthLog200ResponseHealthLogInner.RequiredProperties = [
  "when",
  "alert",
  "text",
];

/**
 * @member {Date} when
 */
GetDeviceHealthLog200ResponseHealthLogInner.prototype["when"] = undefined;

/**
 * @member {Boolean} alert
 */
GetDeviceHealthLog200ResponseHealthLogInner.prototype["alert"] = undefined;

/**
 * @member {String} text
 */
GetDeviceHealthLog200ResponseHealthLogInner.prototype["text"] = undefined;

export default GetDeviceHealthLog200ResponseHealthLogInner;
