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
import Product from "./Product";

/**
 * The GetProjectProducts200Response model module.
 * @module model/GetProjectProducts200Response
 * @version 1.0.24
 */
class GetProjectProducts200Response {
  /**
   * Constructs a new <code>GetProjectProducts200Response</code>.
   * @alias module:model/GetProjectProducts200Response
   */
  constructor() {
    GetProjectProducts200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>GetProjectProducts200Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetProjectProducts200Response} obj Optional instance to populate.
   * @return {module:model/GetProjectProducts200Response} The populated <code>GetProjectProducts200Response</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetProjectProducts200Response();

      if (data.hasOwnProperty("products")) {
        obj["products"] = ApiClient.convertToType(data["products"], [Product]);
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>GetProjectProducts200Response</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectProducts200Response</code>.
   */
  static validateJSON(data) {
    if (data["products"]) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data["products"])) {
        throw new Error(
          "Expected the field `products` to be an array in the JSON data but got " +
            data["products"]
        );
      }
      // validate the optional field `products` (array)
      for (const item of data["products"]) {
        Product.validateJsonObject(item);
      }
    }

    return true;
  }
}

/**
 * @member {Array.<module:model/Product>} products
 */
GetProjectProducts200Response.prototype["products"] = undefined;

export default GetProjectProducts200Response;
