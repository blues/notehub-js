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
 * The GetRouteLogsByRoute200ResponseInner model module.
 * @module model/GetRouteLogsByRoute200ResponseInner
 * @version 1.0.23
 */
class GetRouteLogsByRoute200ResponseInner {
  /**
   * Constructs a new <code>GetRouteLogsByRoute200ResponseInner</code>.
   * @alias module:model/GetRouteLogsByRoute200ResponseInner
   */
  constructor() {
    GetRouteLogsByRoute200ResponseInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetRouteLogsByRoute200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRouteLogsByRoute200ResponseInner} obj Optional instance to populate.
   * @return {module:model/GetRouteLogsByRoute200ResponseInner} The populated <code>GetRouteLogsByRoute200ResponseInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRouteLogsByRoute200ResponseInner();

      if (data.hasOwnProperty("date")) {
        obj["date"] = ApiClient.convertToType(data["date"], "String");
      }
      if (data.hasOwnProperty("routeUID")) {
        obj["routeUID"] = ApiClient.convertToType(data["routeUID"], "String");
      }
      if (data.hasOwnProperty("eventUID")) {
        obj["eventUID"] = ApiClient.convertToType(data["eventUID"], "String");
      }
      if (data.hasOwnProperty("attn")) {
        obj["attn"] = ApiClient.convertToType(data["attn"], "Boolean");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("text")) {
        obj["text"] = ApiClient.convertToType(data["text"], "String");
      }
      if (data.hasOwnProperty("url")) {
        obj["url"] = ApiClient.convertToType(data["url"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetRouteLogsByRoute200ResponseInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRouteLogsByRoute200ResponseInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["date"] &&
      !(typeof data["date"] === "string" || data["date"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `date` to be a primitive type in the JSON string but got " +
          data["date"]
      );
    }
    // ensure the json data is a string
    if (
      data["routeUID"] &&
      !(
        typeof data["routeUID"] === "string" ||
        data["routeUID"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `routeUID` to be a primitive type in the JSON string but got " +
          data["routeUID"]
      );
    }
    // ensure the json data is a string
    if (
      data["eventUID"] &&
      !(
        typeof data["eventUID"] === "string" ||
        data["eventUID"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `eventUID` to be a primitive type in the JSON string but got " +
          data["eventUID"]
      );
    }
    // ensure the json data is a string
    if (
      data["status"] &&
      !(typeof data["status"] === "string" || data["status"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `status` to be a primitive type in the JSON string but got " +
          data["status"]
      );
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
    // ensure the json data is a string
    if (
      data["url"] &&
      !(typeof data["url"] === "string" || data["url"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `url` to be a primitive type in the JSON string but got " +
          data["url"]
      );
    }

    return true;
  }
}

/**
 * The date of the logs.
 * @member {String} date
 */
GetRouteLogsByRoute200ResponseInner.prototype["date"] = undefined;

/**
 * The route UID.
 * @member {String} routeUID
 */
GetRouteLogsByRoute200ResponseInner.prototype["routeUID"] = undefined;

/**
 * The event UID.
 * @member {String} eventUID
 */
GetRouteLogsByRoute200ResponseInner.prototype["eventUID"] = undefined;

/**
 * Whether the event was routed in error
 * @member {Boolean} attn
 */
GetRouteLogsByRoute200ResponseInner.prototype["attn"] = undefined;

/**
 * The status of the event.
 * @member {String} status
 */
GetRouteLogsByRoute200ResponseInner.prototype["status"] = undefined;

/**
 * The response body of the route.
 * @member {String} text
 */
GetRouteLogsByRoute200ResponseInner.prototype["text"] = undefined;

/**
 * The URL of the route.
 * @member {String} url
 */
GetRouteLogsByRoute200ResponseInner.prototype["url"] = undefined;

export default GetRouteLogsByRoute200ResponseInner;
