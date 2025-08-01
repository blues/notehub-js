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
 * The DeviceDfuStatus model module.
 * @module model/DeviceDfuStatus
 * @version 1.0.36
 */
class DeviceDfuStatus {
  /**
   * Constructs a new <code>DeviceDfuStatus</code>.
   * @alias module:model/DeviceDfuStatus
   */
  constructor() {
    DeviceDfuStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuStatus} obj Optional instance to populate.
   * @return {module:model/DeviceDfuStatus} The populated <code>DeviceDfuStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuStatus();

      if (data.hasOwnProperty("device_uid")) {
        obj["device_uid"] = ApiClient.convertToType(
          data["device_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("dfu_in_progress")) {
        obj["dfu_in_progress"] = ApiClient.convertToType(
          data["dfu_in_progress"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("current")) {
        obj["current"] = DeviceDfuStatusCurrent.constructFromObject(
          data["current"]
        );
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = DeviceDfuStateMachine.constructFromObject(
          data["status"]
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceDfuStatus</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuStatus</code>.
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
    // validate the optional field `status`
    if (data["status"]) {
      // data not null
      DeviceDfuStateMachine.validateJSON(data["status"]);
    }

    return true;
  }
}

/**
 * Device UID
 * @member {String} device_uid
 */
DeviceDfuStatus.prototype["device_uid"] = undefined;

/**
 * true if there is a DFU currently in progress
 * @member {Boolean} dfu_in_progress
 */
DeviceDfuStatus.prototype["dfu_in_progress"] = undefined;

/**
 * @member {module:model/DeviceDfuStatusCurrent} current
 */
DeviceDfuStatus.prototype["current"] = undefined;

/**
 * @member {module:model/DeviceDfuStateMachine} status
 */
DeviceDfuStatus.prototype["status"] = undefined;

export default DeviceDfuStatus;
