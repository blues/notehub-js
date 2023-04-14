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
import RouteSchema from "./RouteSchema";

/**
 * The Route model module.
 * @module model/Route
 * @version 1.0.13
 */
class Route {
  /**
   * Constructs a new <code>Route</code>.
   * @alias module:model/Route
   */
  constructor() {
    Route.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Route} obj Optional instance to populate.
   * @return {module:model/Route} The populated <code>Route</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Route();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("route_type")) {
        obj["route_type"] = ApiClient.convertToType(
          data["route_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("modified")) {
        obj["modified"] = ApiClient.convertToType(data["modified"], "String");
      }
      if (data.hasOwnProperty("disabled")) {
        obj["disabled"] = ApiClient.convertToType(data["disabled"], "Boolean");
      }
      if (data.hasOwnProperty("schema")) {
        obj["schema"] = RouteSchema.constructFromObject(data["schema"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Route</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Route</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["uid"] &&
      !(typeof data["uid"] === "string" || data["uid"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `uid` to be a primitive type in the JSON string but got " +
          data["uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["label"] &&
      !(typeof data["label"] === "string" || data["label"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `label` to be a primitive type in the JSON string but got " +
          data["label"]
      );
    }
    // ensure the json data is a string
    if (
      data["route_type"] &&
      !(
        typeof data["route_type"] === "string" ||
        data["route_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `route_type` to be a primitive type in the JSON string but got " +
          data["route_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["modified"] &&
      !(
        typeof data["modified"] === "string" ||
        data["modified"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `modified` to be a primitive type in the JSON string but got " +
          data["modified"]
      );
    }
    // validate the optional field `schema`
    if (data["schema"]) {
      // data not null
      RouteSchema.validateJSON(data["schema"]);
    }

    return true;
  }
}

/**
 * Route UID
 * @member {String} uid
 */
Route.prototype["uid"] = undefined;

/**
 * Route Label
 * @member {String} label
 */
Route.prototype["label"] = undefined;

/**
 * Type of route.
 * @member {module:model/Route.RouteTypeEnum} route_type
 * @default 'http'
 */
Route.prototype["route_type"] = "http";

/**
 * Last Modified
 * @member {String} modified
 */
Route.prototype["modified"] = undefined;

/**
 * Is route disabled?
 * @member {Boolean} disabled
 * @default false
 */
Route.prototype["disabled"] = false;

/**
 * @member {module:model/RouteSchema} schema
 */
Route.prototype["schema"] = undefined;

/**
 * Allowed values for the <code>route_type</code> property.
 * @enum {String}
 * @readonly
 */
Route["RouteTypeEnum"] = {
  /**
   * value: "http"
   * @const
   */
  http: "http",

  /**
   * value: "proxy"
   * @const
   */
  proxy: "proxy",

  /**
   * value: "google-function"
   * @const
   */
  "google-function": "google-function",

  /**
   * value: "mqtt"
   * @const
   */
  mqtt: "mqtt",

  /**
   * value: "aws-lambda"
   * @const
   */
  "aws-lambda": "aws-lambda",

  /**
   * value: "aws-lambda-with-access-key"
   * @const
   */
  "aws-lambda-with-access-key": "aws-lambda-with-access-key",

  /**
   * value: "aws-sqs"
   * @const
   */
  "aws-sqs": "aws-sqs",

  /**
   * value: "aws-sqs-with-access-key"
   * @const
   */
  "aws-sqs-with-access-key": "aws-sqs-with-access-key",

  /**
   * value: "aws-sqs-fifo"
   * @const
   */
  "aws-sqs-fifo": "aws-sqs-fifo",

  /**
   * value: "aws-sqs-fifo-with-access-key"
   * @const
   */
  "aws-sqs-fifo-with-access-key": "aws-sqs-fifo-with-access-key",

  /**
   * value: "aws-iot-analytics"
   * @const
   */
  "aws-iot-analytics": "aws-iot-analytics",

  /**
   * value: "radnote-radresp-fixed-survey"
   * @const
   */
  "radnote-radresp-fixed-survey": "radnote-radresp-fixed-survey",

  /**
   * value: "radnote-radresp-mobile-survey"
   * @const
   */
  "radnote-radresp-mobile-survey": "radnote-radresp-mobile-survey",

  /**
   * value: "azure-function"
   * @const
   */
  "azure-function": "azure-function",

  /**
   * value: "azure-function-with-key"
   * @const
   */
  "azure-function-with-key": "azure-function-with-key",

  /**
   * value: "azure-service-bus-with-sas-token"
   * @const
   */
  "azure-service-bus-with-sas-token": "azure-service-bus-with-sas-token",

  /**
   * value: "thingworx"
   * @const
   */
  thingworx: "thingworx",

  /**
   * value: "snowflake"
   * @const
   */
  snowflake: "snowflake",

  /**
   * value: "edgeimpulse"
   * @const
   */
  edgeimpulse: "edgeimpulse",
};

export default Route;
