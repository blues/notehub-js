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
import DeviceDfuStateMachine from "./DeviceDfuStateMachine";
import DeviceDfuStatusCurrent from "./DeviceDfuStatusCurrent";

/**
 * The DeviceDfuHistory model module.
 * @module model/DeviceDfuHistory
 * @version 1.0.23
 */
class DeviceDfuHistory {
  /**
   * Constructs a new <code>DeviceDfuHistory</code>.
   * @alias module:model/DeviceDfuHistory
   */
  constructor() {
    DeviceDfuHistory.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuHistory} obj Optional instance to populate.
   * @return {module:model/DeviceDfuHistory} The populated <code>DeviceDfuHistory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuHistory();

      if (data.hasOwnProperty("device_uid")) {
        obj["device_uid"] = ApiClient.convertToType(
          data["device_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("current")) {
        obj["current"] = DeviceDfuStatusCurrent.constructFromObject(
          data["current"]
        );
      }
      if (data.hasOwnProperty("history")) {
        obj["history"] = ApiClient.convertToType(data["history"], [
          DeviceDfuStateMachine,
        ]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceDfuHistory</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuHistory</code>.
   */
  static validateJSON(data) {
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
    // validate the optional field `current`
    if (data["current"]) {
      // data not null
      DeviceDfuStatusCurrent.validateJSON(data["current"]);
    }
    if (data["history"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["history"])) {
        throw new Error(
          "Expected the field `history` to be an array in the JSON data but got " +
            data["history"]
        );
      }
      // validate the optional field `history` (array)
      for (const item of data["history"]) {
        DeviceDfuStateMachine.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * Device UID
 * @member {String} device_uid
 */
DeviceDfuHistory.prototype["device_uid"] = undefined;

/**
 * @member {module:model/DeviceDfuStatusCurrent} current
 */
DeviceDfuHistory.prototype["current"] = undefined;

/**
 * @member {Array.<module:model/DeviceDfuStateMachine>} history
 */
DeviceDfuHistory.prototype["history"] = undefined;

export default DeviceDfuHistory;
