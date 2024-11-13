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
 * The CloneProjectRequest model module.
 * @module model/CloneProjectRequest
 * @version 1.0.24-beta.9
 */
class CloneProjectRequest {
  /**
   * Constructs a new <code>CloneProjectRequest</code>.
   * @alias module:model/CloneProjectRequest
   * @param label {String} The label for the project.
   * @param billingAccountUid {String} The billing account UID for the project. The caller of the API must be able to create projects within the billing account, otherwise an error will be returned.
   */
  constructor(label, billingAccountUid) {
    CloneProjectRequest.initialize(this, label, billingAccountUid);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, label, billingAccountUid) {
    obj["label"] = label;
    obj["billing_account_uid"] = billingAccountUid;
  }

  /**
   * Constructs a <code>CloneProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloneProjectRequest} obj Optional instance to populate.
   * @return {module:model/CloneProjectRequest} The populated <code>CloneProjectRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CloneProjectRequest();

      if (data.hasOwnProperty("label")) {
        obj["label"] = ApiClient.convertToType(data["label"], "String");
      }
      if (data.hasOwnProperty("billing_account_uid")) {
        obj["billing_account_uid"] = ApiClient.convertToType(
          data["billing_account_uid"],
          "String"
        );
      }
      if (data.hasOwnProperty("disable_clone_routes")) {
        obj["disable_clone_routes"] = ApiClient.convertToType(
          data["disable_clone_routes"],
          "Boolean"
        );
      }
      if (data.hasOwnProperty("disable_clone_fleets")) {
        obj["disable_clone_fleets"] = ApiClient.convertToType(
          data["disable_clone_fleets"],
          "Boolean"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>CloneProjectRequest</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CloneProjectRequest</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of CloneProjectRequest.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }
    // ensure the json data is a string
    if (
      data["label"] &&
      !(typeof data["label"] === "string" || data["label"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `label` to be a primitive type in the JSON string but got " +
          data["label"]
      );
    }
    // ensure the json data is a string
    if (
      data["billing_account_uid"] &&
      !(
        typeof data["billing_account_uid"] === "string" ||
        data["billing_account_uid"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `billing_account_uid` to be a primitive type in the JSON string but got " +
          data["billing_account_uid"]
      );
    }

    return true;
  }
}

CloneProjectRequest.RequiredProperties = ["label", "billing_account_uid"];

/**
 * The label for the project.
 * @member {String} label
 */
CloneProjectRequest.prototype["label"] = undefined;

/**
 * The billing account UID for the project. The caller of the API must be able to create projects within the billing account, otherwise an error will be returned.
 * @member {String} billing_account_uid
 */
CloneProjectRequest.prototype["billing_account_uid"] = undefined;

/**
 * Whether to disallow the cloning of the routes from the parent project.  Default is false if not specified.
 * @member {Boolean} disable_clone_routes
 */
CloneProjectRequest.prototype["disable_clone_routes"] = undefined;

/**
 * Whether to disallow the cloning of the fleets from the parent project.  Default is false if not specified.
 * @member {Boolean} disable_clone_fleets
 */
CloneProjectRequest.prototype["disable_clone_fleets"] = undefined;

export default CloneProjectRequest;
