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
import Alert from "./Alert";

/**
 * The GetAlerts200Response model module.
 * @module model/GetAlerts200Response
 * @version 1.0.25-beta.2
 */
class GetAlerts200Response {
  /**
   * Constructs a new <code>GetAlerts200Response</code>.
   * @alias module:model/GetAlerts200Response
   * @param alerts {Array.<module:model/Alert>} The list of alerts
   * @param hasMore {Boolean} True if there are more alerts
   */
  constructor(alerts, hasMore) {
    GetAlerts200Response.initialize(this, alerts, hasMore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, alerts, hasMore) {
    obj["alerts"] = alerts;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetAlerts200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAlerts200Response} obj Optional instance to populate.
   * @return {module:model/GetAlerts200Response} The populated <code>GetAlerts200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetAlerts200Response();

      if (data.hasOwnProperty("alerts")) {
        obj["alerts"] = ApiClient.convertToType(data["alerts"], [Alert]);
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
   * Validates the JSON data with respect to <code>GetAlerts200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAlerts200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetAlerts200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["alerts"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["alerts"])) {
        throw new Error(
          "Expected the field `alerts` to be an array in the JSON data but got " +
            data["alerts"]
        );
      }
      // validate the optional field `alerts` (array)
      for (const item of data["alerts"]) {
        Alert.validateJsonObject(item);
      }
    }

    return true;
  }
}

GetAlerts200Response.RequiredProperties = ["alerts", "has_more"];

/**
 * The list of alerts
 * @member {Array.<module:model/Alert>} alerts
 */
GetAlerts200Response.prototype["alerts"] = undefined;

/**
 * True if there are more alerts
 * @member {Boolean} has_more
 */
GetAlerts200Response.prototype["has_more"] = undefined;

export default GetAlerts200Response;
