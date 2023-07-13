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
 * The EnvironmentVariables model module.
 * @module model/EnvironmentVariables
 * @version 1.0.13
 */
class EnvironmentVariables {
  /**
   * Constructs a new <code>EnvironmentVariables</code>.
   * @alias module:model/EnvironmentVariables
   * @param environmentVariables {Object.<String, String>}
   */
  constructor(environmentVariables) {
    EnvironmentVariables.initialize(this, environmentVariables);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, environmentVariables) {
    obj["environment_variables"] = environmentVariables;
  }

  /**
   * Constructs a <code>EnvironmentVariables</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvironmentVariables} obj Optional instance to populate.
   * @return {module:model/EnvironmentVariables} The populated <code>EnvironmentVariables</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnvironmentVariables();

      if (data.hasOwnProperty("environment_variables")) {
        obj["environment_variables"] = ApiClient.convertToType(
          data["environment_variables"],
          { String: "String" }
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>EnvironmentVariables</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnvironmentVariables</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of EnvironmentVariables.RequiredProperties) {
      if (!data[property]) {
        throw new Error(
          "The required field `" +
            property +
            "` is not found in the JSON data: " +
            JSON.stringify(data)
        );
      }
    }

    return true;
  }
}

EnvironmentVariables.RequiredProperties = ["environment_variables"];

/**
 * @member {Object.<String, String>} environment_variables
 */
EnvironmentVariables.prototype["environment_variables"] = undefined;

export default EnvironmentVariables;
