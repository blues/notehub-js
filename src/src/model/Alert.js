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
import AlertDataInner from "./AlertDataInner";
import AlertNotificationsInner from "./AlertNotificationsInner";

/**
 * The Alert model module.
 * @module model/Alert
 * @version 1.0.19
 */
class Alert {
  /**
   * Constructs a new <code>Alert</code>.
   * @alias module:model/Alert
   */
  constructor() {
    Alert.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Alert</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Alert} obj Optional instance to populate.
   * @return {module:model/Alert} The populated <code>Alert</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Alert();

      if (data.hasOwnProperty("uid")) {
        obj["uid"] = ApiClient.convertToType(data["uid"], "String");
      }
      if (data.hasOwnProperty("monitor_uid")) {
        obj["monitor_uid"] = ApiClient.convertToType(
          data["monitor_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("device_uid")) {
        obj["device_uid"] = ApiClient.convertToType(
          data["device_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("created_at")) {
        obj["created_at"] = ApiClient.convertToType(
          data["created_at"],
          "Number"
        );
      }
      if (data.hasOwnProperty("value")) {
        obj["value"] = ApiClient.convertToType(data["value"], "Number");
      }
      if (data.hasOwnProperty("resolved")) {
        obj["resolved"] = ApiClient.convertToType(data["resolved"], "Boolean");
      }
      if (data.hasOwnProperty("version")) {
        obj["version"] = ApiClient.convertToType(data["version"], "Number");
      }
      if (data.hasOwnProperty("alert_source")) {
        obj["alert_source"] = ApiClient.convertToType(
          data["alert_source"],
          "String"
        );
      }
      if (data.hasOwnProperty("source")) {
        obj["source"] = ApiClient.convertToType(data["source"], "String");
      }
      if (data.hasOwnProperty("data")) {
        obj["data"] = ApiClient.convertToType(data["data"], [AlertDataInner]);
      }
      if (data.hasOwnProperty("notifications")) {
        obj["notifications"] = ApiClient.convertToType(data["notifications"], [
          AlertNotificationsInner,
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Alert</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Alert</code>.
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
      data["monitor_uid"] &&
      !(
        typeof data["monitor_uid"] === "string" ||
        data["monitor_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `monitor_uid` to be a primitive type in the JSON string but got " +
          data["monitor_uid"]
      );
    }
    // ensure the json data is a string
    if (
      data["device_uid"] &&
      !(
        typeof data["device_uid"] === "string" ||
        data["device_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `device_uid` to be a primitive type in the JSON string but got " +
          data["device_uid"]
      );
    }
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
    if (data["data"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["data"])) {
        throw new Error(
          "Expected the field `data` to be an array in the JSON data but got " +
            data["data"]
        );
      }
      // validate the optional field `data` (array)
      for (const item of data["data"]) {
        AlertDataInner.validateJsonObject(item);
      }
    }
    if (data["notifications"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["notifications"])) {
        throw new Error(
          "Expected the field `notifications` to be an array in the JSON data but got " +
            data["notifications"]
        );
      }
      // validate the optional field `notifications` (array)
      for (const item of data["notifications"]) {
        AlertNotificationsInner.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * Alert UID
 * @member {String} uid
 */
Alert.prototype["uid"] = undefined;

/**
 * Monitor UID
 * @member {String} monitor_uid
 */
Alert.prototype["monitor_uid"] = undefined;

/**
 * Device UID
 * @member {String} device_uid
 */
Alert.prototype["device_uid"] = undefined;

/**
 * The time the alert was created
 * @member {Number} created_at
 */
Alert.prototype["created_at"] = undefined;

/**
 * The value that triggered the alert
 * @member {Number} value
 */
Alert.prototype["value"] = undefined;

/**
 * If true, the alert has been resolved
 * @member {Boolean} resolved
 */
Alert.prototype["resolved"] = undefined;

/**
 * The version of the alert
 * @member {Number} version
 */
Alert.prototype["version"] = undefined;

/**
 * The source of the alert
 * @member {module:model/Alert.AlertSourceEnum} alert_source
 */
Alert.prototype["alert_source"] = undefined;

/**
 * The UID of the source of the alert
 * @member {String} source
 */
Alert.prototype["source"] = undefined;

/**
 * @member {Array.<module:model/AlertDataInner>} data
 */
Alert.prototype["data"] = undefined;

/**
 * @member {Array.<module:model/AlertNotificationsInner>} notifications
 */
Alert.prototype["notifications"] = undefined;

/**
 * Allowed values for the <code>alert_source</code> property.
 * @enum {String}
 * @readonly
 */
Alert["AlertSourceEnum"] = {
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

export default Alert;
