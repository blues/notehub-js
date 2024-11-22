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
import Project from "./Project";

/**
 * The GetProjects200Response model module.
 * @module model/GetProjects200Response
 * @version 1.0.25-beta.2
 */
class GetProjects200Response {
  /**
   * Constructs a new <code>GetProjects200Response</code>.
   * @alias module:model/GetProjects200Response
   */
  constructor() {
    GetProjects200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetProjects200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjects200Response} obj Optional instance to populate.
   * @return {module:model/GetProjects200Response} The populated <code>GetProjects200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjects200Response();

      if (data.hasOwnProperty("projects")) {
        obj["projects"] = ApiClient.convertToType(data["projects"], [Project]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetProjects200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjects200Response</code>.
   */
  static validateJSON(data) {
    if (data["projects"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["projects"])) {
        throw new Error(
          "Expected the field `projects` to be an array in the JSON data but got " +
            data["projects"]
        );
      }
      // validate the optional field `projects` (array)
      for (const item of data["projects"]) {
        Project.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * @member {Array.<module:model/Project>} projects
 */
GetProjects200Response.prototype["projects"] = undefined;

export default GetProjects200Response;
