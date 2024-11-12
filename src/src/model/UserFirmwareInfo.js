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
import CurrentFirmware from "./CurrentFirmware";
import UserDfuStateMachine from "./UserDfuStateMachine";

/**
 * The UserFirmwareInfo model module.
 * @module model/UserFirmwareInfo
 * @version 1.0.24
 */
class UserFirmwareInfo {
  /**
   * Constructs a new <code>UserFirmwareInfo</code>.
   * @alias module:model/UserFirmwareInfo
   */
  constructor() {
    UserFirmwareInfo.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserFirmwareInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserFirmwareInfo} obj Optional instance to populate.
   * @return {module:model/UserFirmwareInfo} The populated <code>UserFirmwareInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserFirmwareInfo();

      if (data.hasOwnProperty("current_firmware")) {
        obj["current_firmware"] = CurrentFirmware.constructFromObject(
          data["current_firmware"]
        );
      }
      if (data.hasOwnProperty("firmware_update")) {
        obj["firmware_update"] = UserDfuStateMachine.constructFromObject(
          data["firmware_update"]
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UserFirmwareInfo</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserFirmwareInfo</code>.
   */
  static validateJSON(data) {
    // validate the optional field `current_firmware`
    if (data["current_firmware"]) {
      // data not null
      CurrentFirmware.validateJSON(data["current_firmware"]);
    }
    // validate the optional field `firmware_update`
    if (data["firmware_update"]) {
      // data not null
      UserDfuStateMachine.validateJSON(data["firmware_update"]);
    }

    return true;
  }
}

/**
 * @member {module:model/CurrentFirmware} current_firmware
 */
UserFirmwareInfo.prototype["current_firmware"] = undefined;

/**
 * @member {module:model/UserDfuStateMachine} firmware_update
 */
UserFirmwareInfo.prototype["firmware_update"] = undefined;

export default UserFirmwareInfo;
