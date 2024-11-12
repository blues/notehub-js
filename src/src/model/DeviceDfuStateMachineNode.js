/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger beta deployment.
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
 * The DeviceDfuStateMachineNode model module.
 * @module model/DeviceDfuStateMachineNode
 * @version 1.0.24
 */
class DeviceDfuStateMachineNode {
  /**
   * Constructs a new <code>DeviceDfuStateMachineNode</code>.
   * Represents a single request to update the host or Notecard firmware
   * @alias module:model/DeviceDfuStateMachineNode
   */
  constructor() {
    DeviceDfuStateMachineNode.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DeviceDfuStateMachineNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceDfuStateMachineNode} obj Optional instance to populate.
   * @return {module:model/DeviceDfuStateMachineNode} The populated <code>DeviceDfuStateMachineNode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeviceDfuStateMachineNode();

      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
      if (data.hasOwnProperty("phase")) {
        obj["phase"] = ApiClient.convertToType(data["phase"], "String");
      }
      if (data.hasOwnProperty("datetime")) {
        obj["datetime"] = ApiClient.convertToType(data["datetime"], "String");
      }
      if (data.hasOwnProperty("description")) {
        obj["description"] = ApiClient.convertToType(
          data["description"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DeviceDfuStateMachineNode</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceDfuStateMachineNode</code>.
   */
  static validateJSON(data) {
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
      data["phase"] &&
      !(typeof data["phase"] === "string" || data["phase"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `phase` to be a primitive type in the JSON string but got " +
          data["phase"]
      );
    }
    // ensure the json data is a string
    if (
      data["datetime"] &&
      !(
        typeof data["datetime"] === "string" ||
        data["datetime"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `datetime` to be a primitive type in the JSON string but got " +
          data["datetime"]
      );
    }
    // ensure the json data is a string
    if (
      data["description"] &&
      !(
        typeof data["description"] === "string" ||
        data["description"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `description` to be a primitive type in the JSON string but got " +
          data["description"]
      );
    }

    return true;
  }
}

/**
 * Status for this step in the firmware update process
 * @member {String} status
 */
DeviceDfuStateMachineNode.prototype["status"] = undefined;

/**
 * Phase for this step in the firmware update process
 * @member {String} phase
 */
DeviceDfuStateMachineNode.prototype["phase"] = undefined;

/**
 * RFC3339 compatible datetime of when this status update happened
 * @member {String} datetime
 */
DeviceDfuStateMachineNode.prototype["datetime"] = undefined;

/**
 * Additional information
 * @member {String} description
 */
DeviceDfuStateMachineNode.prototype["description"] = undefined;

export default DeviceDfuStateMachineNode;
