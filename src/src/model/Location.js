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

/**
 * The Location model module.
 * @module model/Location
 * @version 1.0.36
 */
class Location {
  /**
   * Constructs a new <code>Location</code>.
   * @alias module:model/Location
   * @param when {String}
   * @param name {String}
   * @param country {String}
   * @param timezone {String}
   * @param latitude {Number}
   * @param longitude {Number}
   */
  constructor(when, name, country, timezone, latitude, longitude) {
    Location.initialize(
      this,
      when,
      name,
      country,
      timezone,
      latitude,
      longitude
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, when, name, country, timezone, latitude, longitude) {
    obj["when"] = when;
    obj["name"] = name;
    obj["country"] = country;
    obj["timezone"] = timezone;
    obj["latitude"] = latitude;
    obj["longitude"] = longitude;
  }

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Location();

      if (data.hasOwnProperty("when")) {
        obj["when"] = ApiClient.convertToType(data["when"], "String");
      }
      if (data.hasOwnProperty("name")) {
        obj["name"] = ApiClient.convertToType(data["name"], "String");
      }
      if (data.hasOwnProperty("country")) {
        obj["country"] = ApiClient.convertToType(data["country"], "String");
      }
      if (data.hasOwnProperty("timezone")) {
        obj["timezone"] = ApiClient.convertToType(data["timezone"], "String");
      }
      if (data.hasOwnProperty("latitude")) {
        obj["latitude"] = ApiClient.convertToType(data["latitude"], "Number");
      }
      if (data.hasOwnProperty("longitude")) {
        obj["longitude"] = ApiClient.convertToType(data["longitude"], "Number");
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Location</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Location</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of Location.RequiredProperties) {
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
      data["when"] &&
      !(typeof data["when"] === "string" || data["when"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `when` to be a primitive type in the JSON string but got " +
          data["when"]
      );
    }
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
      data["country"] &&
      !(
        typeof data["country"] === "string" || data["country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `country` to be a primitive type in the JSON string but got " +
          data["country"]
      );
    }
    // ensure the json data is a string
    if (
      data["timezone"] &&
      !(
        typeof data["timezone"] === "string" ||
        data["timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `timezone` to be a primitive type in the JSON string but got " +
          data["timezone"]
      );
    }

    return true;
  }
}

Location.RequiredProperties = [
  "when",
  "name",
  "country",
  "timezone",
  "latitude",
  "longitude",
];

/**
 * @member {String} when
 */
Location.prototype["when"] = undefined;

/**
 * @member {String} name
 */
Location.prototype["name"] = undefined;

/**
 * @member {String} country
 */
Location.prototype["country"] = undefined;

/**
 * @member {String} timezone
 */
Location.prototype["timezone"] = undefined;

/**
 * @member {Number} latitude
 */
Location.prototype["latitude"] = undefined;

/**
 * @member {Number} longitude
 */
Location.prototype["longitude"] = undefined;

export default Location;
