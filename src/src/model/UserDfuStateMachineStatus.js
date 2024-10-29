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
 * The UserDfuStateMachineStatus model module.
 * @module model/UserDfuStateMachineStatus
 * @version 1.0.23
 */
class UserDfuStateMachineStatus {
  /**
   * Constructs a new <code>UserDfuStateMachineStatus</code>.
   * @alias module:model/UserDfuStateMachineStatus
   */
  constructor() {
    UserDfuStateMachineStatus.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserDfuStateMachineStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDfuStateMachineStatus} obj Optional instance to populate.
   * @return {module:model/UserDfuStateMachineStatus} The populated <code>UserDfuStateMachineStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserDfuStateMachineStatus();

      if (data.hasOwnProperty("phase")) {
        obj["phase"] = ApiClient.convertToType(data["phase"], "String");
      }
      if (data.hasOwnProperty("phase_description")) {
        obj["phase_description"] = ApiClient.convertToType(
          data["phase_description"],
          "String"
        );
      }
      if (data.hasOwnProperty("date")) {
        obj["date"] = ApiClient.convertToType(data["date"], "Date");
      }
      if (data.hasOwnProperty("status")) {
        obj["status"] = ApiClient.convertToType(data["status"], "String");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UserDfuStateMachineStatus</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserDfuStateMachineStatus</code>.
   */
  static validateJSON(data) {
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
      data["phase_description"] &&
      !(
        typeof data["phase_description"] === "string" ||
        data["phase_description"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `phase_description` to be a primitive type in the JSON string but got " +
          data["phase_description"]
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

    return true;
  }
}

/**
 * @member {String} phase
 */
UserDfuStateMachineStatus.prototype["phase"] = undefined;

/**
 * @member {String} phase_description
 */
UserDfuStateMachineStatus.prototype["phase_description"] = undefined;

/**
 * @member {Date} date
 */
UserDfuStateMachineStatus.prototype["date"] = undefined;

/**
 * @member {String} status
 */
UserDfuStateMachineStatus.prototype["status"] = undefined;

export default UserDfuStateMachineStatus;
