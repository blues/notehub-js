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
import Event from "./Event";

/**
 * The GetProjectEvents200Response model module.
 * @module model/GetProjectEvents200Response
 * @version 1.0.14
 */
class GetProjectEvents200Response {
  /**
   * Constructs a new <code>GetProjectEvents200Response</code>.
   * @alias module:model/GetProjectEvents200Response
   * @param events {Array.<module:model/Event>}
   * @param through {String} the EventUID of the most recent event displayed
   * @param hasMore {Boolean} True if there are more events
   */
  constructor(events, through, hasMore) {
    GetProjectEvents200Response.initialize(this, events, through, hasMore);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, events, through, hasMore) {
    obj["events"] = events;
    obj["through"] = through;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetProjectEvents200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectEvents200Response} obj Optional instance to populate.
   * @return {module:model/GetProjectEvents200Response} The populated <code>GetProjectEvents200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjectEvents200Response();

      if (data.hasOwnProperty("events")) {
        obj["events"] = ApiClient.convertToType(data["events"], [Event]);
      }
      if (data.hasOwnProperty("through")) {
        obj["through"] = ApiClient.convertToType(data["through"], "String");
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
   * Validates the JSON data with respect to <code>GetProjectEvents200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectEvents200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetProjectEvents200Response.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    if (data["events"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["events"])) {
        throw new Error(
          "Expected the field `events` to be an array in the JSON data but got " +
            data["events"]
        );
      }
      // validate the optional field `events` (array)
      for (const item of data["events"]) {
        Event.validateJsonObject(item);
      }
    }
    // ensure the json data is a string
    if (
      data["through"] &&
      !(
        typeof data["through"] === "string" || data["through"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `through` to be a primitive type in the JSON string but got " +
          data["through"]
      );
    }

    return true;
  }
}

GetProjectEvents200Response.RequiredProperties = [
  "events",
  "through",
  "has_more",
];

/**
 * @member {Array.<module:model/Event>} events
 */
GetProjectEvents200Response.prototype["events"] = undefined;

/**
 * the EventUID of the most recent event displayed
 * @member {String} through
 */
GetProjectEvents200Response.prototype["through"] = undefined;

/**
 * True if there are more events
 * @member {Boolean} has_more
 */
GetProjectEvents200Response.prototype["has_more"] = undefined;

export default GetProjectEvents200Response;
