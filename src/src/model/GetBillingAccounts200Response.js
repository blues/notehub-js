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
import BillingAccount from "./BillingAccount";

/**
 * The GetBillingAccounts200Response model module.
 * @module model/GetBillingAccounts200Response
 * @version 1.0.11
 */
class GetBillingAccounts200Response {
  /**
   * Constructs a new <code>GetBillingAccounts200Response</code>.
   * @alias module:model/GetBillingAccounts200Response
   */
  constructor() {
    GetBillingAccounts200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetBillingAccounts200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBillingAccounts200Response} obj Optional instance to populate.
   * @return {module:model/GetBillingAccounts200Response} The populated <code>GetBillingAccounts200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetBillingAccounts200Response();

      if (data.hasOwnProperty("billing_accounts")) {
        obj["billing_accounts"] = ApiClient.convertToType(
          data["billing_accounts"],
          [BillingAccount]
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetBillingAccounts200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBillingAccounts200Response</code>.
   */
  static validateJSON(data) {
    if (data["billing_accounts"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["billing_accounts"])) {
        throw new Error(
          "Expected the field `billing_accounts` to be an array in the JSON data but got " +
            data["billing_accounts"]
        );
      }
      // validate the optional field `billing_accounts` (array)
      for (const item of data["billing_accounts"]) {
        BillingAccount.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * @member {Array.<module:model/BillingAccount>} billing_accounts
 */
GetBillingAccounts200Response.prototype["billing_accounts"] = undefined;

export default GetBillingAccounts200Response;
