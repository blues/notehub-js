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
 * The GetDeviceEnvironmentVariables200Response model module.
 * @module model/GetDeviceEnvironmentVariables200Response
 * @version 1.0.24-beta.9
 */
class GetDeviceEnvironmentVariables200Response {
  /**
   * Constructs a new <code>GetDeviceEnvironmentVariables200Response</code>.
   * @alias module:model/GetDeviceEnvironmentVariables200Response
   * @param environmentVariables {Object.<String, String>} The environment variables for this device that have been set using host firmware or the Notehub API or UI.
   * @param environmentVariablesEnvDefault {Object.<String, String>} The environment variables that have been set using the env.default request through the Notecard API.
   */
  constructor(environmentVariables, environmentVariablesEnvDefault) {
    GetDeviceEnvironmentVariables200Response.initialize(
      this,
      environmentVariables,
      environmentVariablesEnvDefault
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, environmentVariables, environmentVariablesEnvDefault) {
    obj["environment_variables"] = environmentVariables;
    obj["environment_variables_env_default"] = environmentVariablesEnvDefault;
  }

  /**
   * Constructs a <code>GetDeviceEnvironmentVariables200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDeviceEnvironmentVariables200Response} obj Optional instance to populate.
   * @return {module:model/GetDeviceEnvironmentVariables200Response} The populated <code>GetDeviceEnvironmentVariables200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetDeviceEnvironmentVariables200Response();

      if (data.hasOwnProperty("environment_variables")) {
        obj["environment_variables"] = ApiClient.convertToType(
          data["environment_variables"],
          { String: "String" }
        );
      }
      if (data.hasOwnProperty("environment_variables_env_default")) {
        obj["environment_variables_env_default"] = ApiClient.convertToType(
          data["environment_variables_env_default"],
          { String: "String" }
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetDeviceEnvironmentVariables200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDeviceEnvironmentVariables200Response</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of GetDeviceEnvironmentVariables200Response.RequiredProperties) {
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

GetDeviceEnvironmentVariables200Response.RequiredProperties = [
  "environment_variables",
  "environment_variables_env_default",
];

/**
 * The environment variables for this device that have been set using host firmware or the Notehub API or UI.
 * @member {Object.<String, String>} environment_variables
 */
GetDeviceEnvironmentVariables200Response.prototype["environment_variables"] =
  undefined;

/**
 * The environment variables that have been set using the env.default request through the Notecard API.
 * @member {Object.<String, String>} environment_variables_env_default
 */
GetDeviceEnvironmentVariables200Response.prototype[
  "environment_variables_env_default"
] = undefined;

export default GetDeviceEnvironmentVariables200Response;
