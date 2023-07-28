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

/**
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.14
 */
class Contact {
  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   */
  constructor() {
    Contact.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Contact();

      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("email")) {
        obj["email"] = ApiClient.convertToType(data["email"], "String");
      }
      if (data.hasOwnProperty("role")) {
        obj["role"] = ApiClient.convertToType(data["role"], "String");
      }
      if (data.hasOwnProperty("organization")) {
        obj["organization"] = ApiClient.convertToType(
          data["organization"],
          "String"
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Contact</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["name"] &&
      !(typeof data["name"] === "string" || data["name"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `name` to be a primitive type in the JSON string but got " +
          data["name"]
      );
    }
    // ensure the json data is a string
    if (
      data["email"] &&
      !(typeof data["email"] === "string" || data["email"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `email` to be a primitive type in the JSON string but got " +
          data["email"]
      );
    }
    // ensure the json data is a string
    if (
      data["role"] &&
      !(typeof data["role"] === "string" || data["role"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `role` to be a primitive type in the JSON string but got " +
          data["role"]
      );
    }
    // ensure the json data is a string
    if (
      data["organization"] &&
      !(
        typeof data["organization"] === "string" ||
        data["organization"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `organization` to be a primitive type in the JSON string but got " +
          data["organization"]
      );
    }

    return true;
  }
}

/**
 * @member {String} name
 */
Contact.prototype["name"] = undefined;

/**
 * @member {String} email
 */
Contact.prototype["email"] = undefined;

/**
 * @member {String} role
 */
Contact.prototype["role"] = undefined;

/**
 * @member {String} organization
 */
Contact.prototype["organization"] = undefined;

export default Contact;
