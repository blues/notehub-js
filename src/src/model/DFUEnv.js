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
import DFUState from "./DFUState";

/**
 * The DFUEnv model module.
 * @module model/DFUEnv
 * @version 1.0.23&#x60;
 */
class DFUEnv {
  /**
   * Constructs a new <code>DFUEnv</code>.
   * @alias module:model/DFUEnv
   */
  constructor() {
    DFUEnv.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>DFUEnv</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DFUEnv} obj Optional instance to populate.
   * @return {module:model/DFUEnv} The populated <code>DFUEnv</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DFUEnv();

      if (data.hasOwnProperty("card")) {
        obj["card"] = DFUState.constructFromObject(data["card"]);
      }
      if (data.hasOwnProperty("user")) {
        obj["user"] = DFUState.constructFromObject(data["user"]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>DFUEnv</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DFUEnv</code>.
   */
  static validateJSON(data) {
    // validate the optional field `card`
    if (data["card"]) {
      // data not null
      DFUState.validateJSON(data["card"]);
    }
    // validate the optional field `user`
    if (data["user"]) {
      // data not null
      DFUState.validateJSON(data["user"]);
    }

    return true;
  }
}

/**
 * @member {module:model/DFUState} card
 */
DFUEnv.prototype["card"] = undefined;

/**
 * @member {module:model/DFUState} user
 */
DFUEnv.prototype["user"] = undefined;

export default DFUEnv;
