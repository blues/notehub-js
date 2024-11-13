/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger third beta deploy to npm
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
 * The AlertDataInner model module.
 * @module model/AlertDataInner
 * @version 1.0.24-beta.9
 */
class AlertDataInner {
  /**
   * Constructs a new <code>AlertDataInner</code>.
   * @alias module:model/AlertDataInner
   */
  constructor() {
    AlertDataInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>AlertDataInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertDataInner} obj Optional instance to populate.
   * @return {module:model/AlertDataInner} The populated <code>AlertDataInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertDataInner();

      if (data.hasOwnProperty("alert_source")) {
        obj["alert_source"] = ApiClient.convertToType(
          data["alert_source"],
          "String"
        );
      }
      if (data.hasOwnProperty("source")) {
        obj["source"] = ApiClient.convertToType(data["source"], "String");
      }
      if (data.hasOwnProperty("source_type")) {
        obj["source_type"] = ApiClient.convertToType(
          data["source_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("value")) {
        obj["value"] = ApiClient.convertToType(data["value"], "Number");
      }
      if (data.hasOwnProperty("source_uid")) {
        obj["source_uid"] = ApiClient.convertToType(
          data["source_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("when")) {
        obj["when"] = ApiClient.convertToType(data["when"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>AlertDataInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AlertDataInner</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["alert_source"] &&
      !(
        typeof data["alert_source"] === "string" ||
        data["alert_source"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `alert_source` to be a primitive type in the JSON string but got " +
          data["alert_source"]
      );
    }
    // ensure the json data is a string
    if (
      data["source"] &&
      !(typeof data["source"] === "string" || data["source"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `source` to be a primitive type in the JSON string but got " +
          data["source"]
      );
    }
    // ensure the json data is a string
    if (
      data["source_type"] &&
      !(
        typeof data["source_type"] === "string" ||
        data["source_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `source_type` to be a primitive type in the JSON string but got " +
          data["source_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["source_uid"] &&
      !(
        typeof data["source_uid"] === "string" ||
        data["source_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `source_uid` to be a primitive type in the JSON string but got " +
          data["source_uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["when"] &&
      !(typeof data["when"] === "string" || data["when"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `when` to be a primitive type in the JSON string but got " +
          data["when"]
      );
    }

    return true;
  }
}

/**
 * The source of the alert
 * @member {module:model/AlertDataInner.AlertSourceEnum} alert_source
 */
AlertDataInner.prototype["alert_source"] = undefined;

/**
 * The UID of the source of the alert
 * @member {String} source
 */
AlertDataInner.prototype["source"] = undefined;

/**
 * The type of source.
 * @member {module:model/AlertDataInner.SourceTypeEnum} source_type
 */
AlertDataInner.prototype["source_type"] = undefined;

/**
 * The value that triggered the alert
 * @member {Number} value
 */
AlertDataInner.prototype["value"] = undefined;

/**
 * The UID of the source of the alert
 * @member {String} source_uid
 */
AlertDataInner.prototype["source_uid"] = undefined;

/**
 * The time the alert was created
 * @member {String} when
 */
AlertDataInner.prototype["when"] = undefined;

/**
 * Allowed values for the <code>alert_source</code> property.
 * @enum {String}
 * @readonly
 */
AlertDataInner["AlertSourceEnum"] = {
  /**
   * value: "app"
   * @const
   */
  app: "app",

  /**
   * value: "device"
   * @const
   */
  device: "device",
};

/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
AlertDataInner["SourceTypeEnum"] = {
  /**
   * value: "event"
   * @const
   */
  event: "event",
};

export default AlertDataInner;
