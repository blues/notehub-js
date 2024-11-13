/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. Trigger fourth beta deploy to npm
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
 * Enum class BillingAccountRole.
 * @enum {}
 * @readonly
 */
export default class BillingAccountRole {
  /**
   * value: "billing_admin"
   * @const
   */
  billing_admin = "billing_admin";

  /**
   * value: "billing_manager"
   * @const
   */
  billing_manager = "billing_manager";

  /**
   * value: "project_creator"
   * @const
   */
  project_creator = "project_creator";

  /**
   * Returns a <code>BillingAccountRole</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/BillingAccountRole} The enum <code>BillingAccountRole</code> value.
   */
  static constructFromObject(object) {
    return object;
  }
}
