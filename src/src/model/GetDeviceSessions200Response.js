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
import DeviceSession from "./DeviceSession";

/**
 * The GetDeviceSessions200Response model module.
 * @module model/GetDeviceSessions200Response
 * @version 1.0.25-beta.2
 */
class GetDeviceSessions200Response {
  /**
   * Constructs a new <code>GetDeviceSessions200Response</code>.
   * @alias module:model/GetDeviceSessions200Response
   * @param sessions {Array.<module:model/DeviceSession>}
   * @param hasMore {Boolean}
   */
  constructor(sessions, hasMore) {
    GetDeviceSessions200Response.initialize(this, sessions, hasMore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, sessions, hasMore) {
    obj["sessions"] = sessions;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetDeviceSessions200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDeviceSessions200Response} obj Optional instance to populate.
   * @return {module:model/GetDeviceSessions200Response} The populated <code>GetDeviceSessions200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDeviceSessions200Response();

      if (data.hasOwnProperty("sessions")) {
        obj["sessions"] = ApiClient.convertToType(data["sessions"], [
          DeviceSession,
        ]);
      }
      if (data.hasOwnProperty("has_more")) {
        obj["has_more"] = ApiClient.convertToType(data["has_more"], "Boolean");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetDeviceSessions200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDeviceSessions200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetDeviceSessions200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["sessions"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["sessions"])) {
        throw new Error(
          "Expected the field `sessions` to be an array in the JSON data but got " +
            data["sessions"]
        );
      }
      // validate the optional field `sessions` (array)
      for (const item of data["sessions"]) {
        DeviceSession.validateJsonObject(item);
      }
    }

    return true;
  }
}

GetDeviceSessions200Response.RequiredProperties = ["sessions", "has_more"];

/**
 * @member {Array.<module:model/DeviceSession>} sessions
 */
GetDeviceSessions200Response.prototype["sessions"] = undefined;

/**
 * @member {Boolean} has_more
 */
GetDeviceSessions200Response.prototype["has_more"] = undefined;

export default GetDeviceSessions200Response;
