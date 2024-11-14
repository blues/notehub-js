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
import GetDeviceHealthLog200ResponseHealthLogInner from "./GetDeviceHealthLog200ResponseHealthLogInner";

/**
 * The GetDeviceHealthLog200Response model module.
 * @module model/GetDeviceHealthLog200Response
 * @version 1.0.25
 */
class GetDeviceHealthLog200Response {
  /**
   * Constructs a new <code>GetDeviceHealthLog200Response</code>.
   * @alias module:model/GetDeviceHealthLog200Response
   * @param healthLog {Array.<module:model/GetDeviceHealthLog200ResponseHealthLogInner>}
   */
  constructor(healthLog) {
    GetDeviceHealthLog200Response.initialize(this, healthLog);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, healthLog) {
    obj["health_log"] = healthLog;
  }

  /**
   * Constructs a <code>GetDeviceHealthLog200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDeviceHealthLog200Response} obj Optional instance to populate.
   * @return {module:model/GetDeviceHealthLog200Response} The populated <code>GetDeviceHealthLog200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDeviceHealthLog200Response();

      if (data.hasOwnProperty("health_log")) {
        obj["health_log"] = ApiClient.convertToType(data["health_log"], [
          GetDeviceHealthLog200ResponseHealthLogInner,
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetDeviceHealthLog200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDeviceHealthLog200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetDeviceHealthLog200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["health_log"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["health_log"])) {
        throw new Error(
          "Expected the field `health_log` to be an array in the JSON data but got " +
            data["health_log"]
        );
      }
      // validate the optional field `health_log` (array)
      for (const item of data["health_log"]) {
        GetDeviceHealthLog200ResponseHealthLogInner.validateJsonObject(item);
      }
    }

    return true;
  }
}

GetDeviceHealthLog200Response.RequiredProperties = ["health_log"];

/**
 * @member {Array.<module:model/GetDeviceHealthLog200ResponseHealthLogInner>} health_log
 */
GetDeviceHealthLog200Response.prototype["health_log"] = undefined;

export default GetDeviceHealthLog200Response;
