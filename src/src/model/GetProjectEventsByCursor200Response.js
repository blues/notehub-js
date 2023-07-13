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
 * The GetProjectEventsByCursor200Response model module.
 * @module model/GetProjectEventsByCursor200Response
 * @version 1.0.13
 */
class GetProjectEventsByCursor200Response {
  /**
   * Constructs a new <code>GetProjectEventsByCursor200Response</code>.
   * @alias module:model/GetProjectEventsByCursor200Response
   * @param events {Array.<module:model/Event>}
   * @param nextCursor {String} The cursor value of the next result, which is intended to be used as the \"cursor\" parameter value of the next call to this method. An empty string is returned if there are no more results after this results set.
   * @param hasMore {Boolean} True if there are more events
   */
  constructor(events, nextCursor, hasMore) {
    GetProjectEventsByCursor200Response.initialize(
      this,
      events,
      nextCursor,
      hasMore
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, events, nextCursor, hasMore) {
    obj["events"] = events;
    obj["next_cursor"] = nextCursor;
    obj["has_more"] = hasMore;
  }

  /**
   * Constructs a <code>GetProjectEventsByCursor200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectEventsByCursor200Response} obj Optional instance to populate.
   * @return {module:model/GetProjectEventsByCursor200Response} The populated <code>GetProjectEventsByCursor200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjectEventsByCursor200Response();

      if (data.hasOwnProperty("events")) {
        obj["events"] = ApiClient.convertToType(data["events"], [Event]);
      }
      if (data.hasOwnProperty("next_cursor")) {
        obj["next_cursor"] = ApiClient.convertToType(
          data["next_cursor"],
          "String"
        );
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
   * Validates the JSON data with respect to <code>GetProjectEventsByCursor200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectEventsByCursor200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetProjectEventsByCursor200Response.RequiredProperties) {
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
      data["next_cursor"] &&
      !(
        typeof data["next_cursor"] === "string" ||
        data["next_cursor"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `next_cursor` to be a primitive type in the JSON string but got " +
          data["next_cursor"]
      );
    }

    return true;
  }
}

GetProjectEventsByCursor200Response.RequiredProperties = [
  "events",
  "next_cursor",
  "has_more",
];

/**
 * @member {Array.<module:model/Event>} events
 */
GetProjectEventsByCursor200Response.prototype["events"] = undefined;

/**
 * The cursor value of the next result, which is intended to be used as the \"cursor\" parameter value of the next call to this method. An empty string is returned if there are no more results after this results set.
 * @member {String} next_cursor
 */
GetProjectEventsByCursor200Response.prototype["next_cursor"] = undefined;

/**
 * True if there are more events
 * @member {Boolean} has_more
 */
GetProjectEventsByCursor200Response.prototype["has_more"] = undefined;

export default GetProjectEventsByCursor200Response;
