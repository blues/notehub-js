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
 * The Event model module.
 * @module model/Event
 * @version 1.0.23-beta.3
 */
class Event {
  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   */
  constructor() {
    Event.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Event();

      if (data.hasOwnProperty("event")) {
        obj["event"] = ApiClient.convertToType(data["event"], "String");
      }
      if (data.hasOwnProperty("session")) {
        obj["session"] = ApiClient.convertToType(data["session"], "String");
      }
      if (data.hasOwnProperty("tls")) {
        obj["tls"] = ApiClient.convertToType(data["tls"], "Boolean");
      }
      if (data.hasOwnProperty("best_id")) {
        obj["best_id"] = ApiClient.convertToType(data["best_id"], "String");
      }
      if (data.hasOwnProperty("device")) {
        obj["device"] = ApiClient.convertToType(data["device"], "String");
      }
      if (data.hasOwnProperty("sn")) {
        obj["sn"] = ApiClient.convertToType(data["sn"], "String");
      }
      if (data.hasOwnProperty("product")) {
        obj["product"] = ApiClient.convertToType(data["product"], "String");
      }
      if (data.hasOwnProperty("app")) {
        obj["app"] = ApiClient.convertToType(data["app"], "String");
      }
      if (data.hasOwnProperty("received")) {
        obj["received"] = ApiClient.convertToType(data["received"], "Number");
      }
      if (data.hasOwnProperty("req")) {
        obj["req"] = ApiClient.convertToType(data["req"], "String");
      }
      if (data.hasOwnProperty("when")) {
        obj["when"] = ApiClient.convertToType(data["when"], "Number");
      }
      if (data.hasOwnProperty("file")) {
        obj["file"] = ApiClient.convertToType(data["file"], "String");
      }
      if (data.hasOwnProperty("note")) {
        obj["note"] = ApiClient.convertToType(data["note"], "String");
      }
      if (data.hasOwnProperty("updates")) {
        obj["updates"] = ApiClient.convertToType(data["updates"], "Number");
      }
      if (data.hasOwnProperty("body")) {
        obj["body"] = ApiClient.convertToType(data["body"], Object);
      }
      if (data.hasOwnProperty("payload")) {
        obj["payload"] = ApiClient.convertToType(data["payload"], "String");
      }
      if (data.hasOwnProperty("best_location_type")) {
        obj["best_location_type"] = ApiClient.convertToType(
          data["best_location_type"],
          "String"
        );
      }
      if (data.hasOwnProperty("best_location_when")) {
        obj["best_location_when"] = ApiClient.convertToType(
          data["best_location_when"],
          "Number"
        );
      }
      if (data.hasOwnProperty("best_lat")) {
        obj["best_lat"] = ApiClient.convertToType(data["best_lat"], "Number");
      }
      if (data.hasOwnProperty("best_lon")) {
        obj["best_lon"] = ApiClient.convertToType(data["best_lon"], "Number");
      }
      if (data.hasOwnProperty("best_location")) {
        obj["best_location"] = ApiClient.convertToType(
          data["best_location"],
          "String"
        );
      }
      if (data.hasOwnProperty("best_country")) {
        obj["best_country"] = ApiClient.convertToType(
          data["best_country"],
          "String"
        );
      }
      if (data.hasOwnProperty("best_timezone")) {
        obj["best_timezone"] = ApiClient.convertToType(
          data["best_timezone"],
          "String"
        );
      }
      if (data.hasOwnProperty("where_olc")) {
        obj["where_olc"] = ApiClient.convertToType(data["where_olc"], "String");
      }
      if (data.hasOwnProperty("where_when")) {
        obj["where_when"] = ApiClient.convertToType(
          data["where_when"],
          "Number"
        );
      }
      if (data.hasOwnProperty("where_lat")) {
        obj["where_lat"] = ApiClient.convertToType(data["where_lat"], "Number");
      }
      if (data.hasOwnProperty("where_lon")) {
        obj["where_lon"] = ApiClient.convertToType(data["where_lon"], "Number");
      }
      if (data.hasOwnProperty("where_location")) {
        obj["where_location"] = ApiClient.convertToType(
          data["where_location"],
          "String"
        );
      }
      if (data.hasOwnProperty("where_country")) {
        obj["where_country"] = ApiClient.convertToType(
          data["where_country"],
          "String"
        );
      }
      if (data.hasOwnProperty("where_timezone")) {
        obj["where_timezone"] = ApiClient.convertToType(
          data["where_timezone"],
          "String"
        );
      }
      if (data.hasOwnProperty("tower_when")) {
        obj["tower_when"] = ApiClient.convertToType(
          data["tower_when"],
          "Number"
        );
      }
      if (data.hasOwnProperty("tower_lat")) {
        obj["tower_lat"] = ApiClient.convertToType(data["tower_lat"], "Number");
      }
      if (data.hasOwnProperty("tower_lon")) {
        obj["tower_lon"] = ApiClient.convertToType(data["tower_lon"], "Number");
      }
      if (data.hasOwnProperty("tower_country")) {
        obj["tower_country"] = ApiClient.convertToType(
          data["tower_country"],
          "String"
        );
      }
      if (data.hasOwnProperty("tower_location")) {
        obj["tower_location"] = ApiClient.convertToType(
          data["tower_location"],
          "String"
        );
      }
      if (data.hasOwnProperty("tower_timezone")) {
        obj["tower_timezone"] = ApiClient.convertToType(
          data["tower_timezone"],
          "String"
        );
      }
      if (data.hasOwnProperty("tower_id")) {
        obj["tower_id"] = ApiClient.convertToType(data["tower_id"], "String");
      }
      if (data.hasOwnProperty("tri_when")) {
        obj["tri_when"] = ApiClient.convertToType(data["tri_when"], "Number");
      }
      if (data.hasOwnProperty("tri_lat")) {
        obj["tri_lat"] = ApiClient.convertToType(data["tri_lat"], "Number");
      }
      if (data.hasOwnProperty("tri_lon")) {
        obj["tri_lon"] = ApiClient.convertToType(data["tri_lon"], "Number");
      }
      if (data.hasOwnProperty("tri_location")) {
        obj["tri_location"] = ApiClient.convertToType(
          data["tri_location"],
          "String"
        );
      }
      if (data.hasOwnProperty("tri_country")) {
        obj["tri_country"] = ApiClient.convertToType(
          data["tri_country"],
          "String"
        );
      }
      if (data.hasOwnProperty("tri_timezone")) {
        obj["tri_timezone"] = ApiClient.convertToType(
          data["tri_timezone"],
          "String"
        );
      }
      if (data.hasOwnProperty("tri_points")) {
        obj["tri_points"] = ApiClient.convertToType(
          data["tri_points"],
          "Number"
        );
      }
      if (data.hasOwnProperty("moved")) {
        obj["moved"] = ApiClient.convertToType(data["moved"], "Number");
      }
      if (data.hasOwnProperty("orientation")) {
        obj["orientation"] = ApiClient.convertToType(
          data["orientation"],
          "String"
        );
      }
      if (data.hasOwnProperty("rssi")) {
        obj["rssi"] = ApiClient.convertToType(data["rssi"], "Number");
      }
      if (data.hasOwnProperty("sinr")) {
        obj["sinr"] = ApiClient.convertToType(data["sinr"], "Number");
      }
      if (data.hasOwnProperty("rsrp")) {
        obj["rsrp"] = ApiClient.convertToType(data["rsrp"], "Number");
      }
      if (data.hasOwnProperty("rsrq")) {
        obj["rsrq"] = ApiClient.convertToType(data["rsrq"], "Number");
      }
      if (data.hasOwnProperty("rat")) {
        obj["rat"] = ApiClient.convertToType(data["rat"], "String");
      }
      if (data.hasOwnProperty("bars")) {
        obj["bars"] = ApiClient.convertToType(data["bars"], "Number");
      }
      if (data.hasOwnProperty("voltage")) {
        obj["voltage"] = ApiClient.convertToType(data["voltage"], "Number");
      }
      if (data.hasOwnProperty("temp")) {
        obj["temp"] = ApiClient.convertToType(data["temp"], "Number");
      }
      if (data.hasOwnProperty("environment")) {
        obj["environment"] = ApiClient.convertToType(
          data["environment"],
          Object
        );
      }
    } else if (data === null) {
      return null;
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>Event</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Event</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (
      data["event"] &&
      !(typeof data["event"] === "string" || data["event"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `event` to be a primitive type in the JSON string but got " +
          data["event"]
      );
    }
    // ensure the json data is a string
    if (
      data["session"] &&
      !(
        typeof data["session"] === "string" || data["session"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `session` to be a primitive type in the JSON string but got " +
          data["session"]
      );
    }
    // ensure the json data is a string
    if (
      data["best_id"] &&
      !(
        typeof data["best_id"] === "string" || data["best_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `best_id` to be a primitive type in the JSON string but got " +
          data["best_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["device"] &&
      !(typeof data["device"] === "string" || data["device"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `device` to be a primitive type in the JSON string but got " +
          data["device"]
      );
    }
    // ensure the json data is a string
    if (
      data["sn"] &&
      !(typeof data["sn"] === "string" || data["sn"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `sn` to be a primitive type in the JSON string but got " +
          data["sn"]
      );
    }
    // ensure the json data is a string
    if (
      data["product"] &&
      !(
        typeof data["product"] === "string" || data["product"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `product` to be a primitive type in the JSON string but got " +
          data["product"]
      );
    }
    // ensure the json data is a string
    if (
      data["app"] &&
      !(typeof data["app"] === "string" || data["app"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `app` to be a primitive type in the JSON string but got " +
          data["app"]
      );
    }
    // ensure the json data is a string
    if (
      data["req"] &&
      !(typeof data["req"] === "string" || data["req"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `req` to be a primitive type in the JSON string but got " +
          data["req"]
      );
    }
    // ensure the json data is a string
    if (
      data["file"] &&
      !(typeof data["file"] === "string" || data["file"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `file` to be a primitive type in the JSON string but got " +
          data["file"]
      );
    }
    // ensure the json data is a string
    if (
      data["note"] &&
      !(typeof data["note"] === "string" || data["note"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `note` to be a primitive type in the JSON string but got " +
          data["note"]
      );
    }
    // ensure the json data is a string
    if (
      data["payload"] &&
      !(
        typeof data["payload"] === "string" || data["payload"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `payload` to be a primitive type in the JSON string but got " +
          data["payload"]
      );
    }
    // ensure the json data is a string
    if (
      data["best_location_type"] &&
      !(
        typeof data["best_location_type"] === "string" ||
        data["best_location_type"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `best_location_type` to be a primitive type in the JSON string but got " +
          data["best_location_type"]
      );
    }
    // ensure the json data is a string
    if (
      data["best_location"] &&
      !(
        typeof data["best_location"] === "string" ||
        data["best_location"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `best_location` to be a primitive type in the JSON string but got " +
          data["best_location"]
      );
    }
    // ensure the json data is a string
    if (
      data["best_country"] &&
      !(
        typeof data["best_country"] === "string" ||
        data["best_country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `best_country` to be a primitive type in the JSON string but got " +
          data["best_country"]
      );
    }
    // ensure the json data is a string
    if (
      data["best_timezone"] &&
      !(
        typeof data["best_timezone"] === "string" ||
        data["best_timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `best_timezone` to be a primitive type in the JSON string but got " +
          data["best_timezone"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_olc"] &&
      !(
        typeof data["where_olc"] === "string" ||
        data["where_olc"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_olc` to be a primitive type in the JSON string but got " +
          data["where_olc"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_location"] &&
      !(
        typeof data["where_location"] === "string" ||
        data["where_location"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_location` to be a primitive type in the JSON string but got " +
          data["where_location"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_country"] &&
      !(
        typeof data["where_country"] === "string" ||
        data["where_country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_country` to be a primitive type in the JSON string but got " +
          data["where_country"]
      );
    }
    // ensure the json data is a string
    if (
      data["where_timezone"] &&
      !(
        typeof data["where_timezone"] === "string" ||
        data["where_timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `where_timezone` to be a primitive type in the JSON string but got " +
          data["where_timezone"]
      );
    }
    // ensure the json data is a string
    if (
      data["tower_country"] &&
      !(
        typeof data["tower_country"] === "string" ||
        data["tower_country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tower_country` to be a primitive type in the JSON string but got " +
          data["tower_country"]
      );
    }
    // ensure the json data is a string
    if (
      data["tower_location"] &&
      !(
        typeof data["tower_location"] === "string" ||
        data["tower_location"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tower_location` to be a primitive type in the JSON string but got " +
          data["tower_location"]
      );
    }
    // ensure the json data is a string
    if (
      data["tower_timezone"] &&
      !(
        typeof data["tower_timezone"] === "string" ||
        data["tower_timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tower_timezone` to be a primitive type in the JSON string but got " +
          data["tower_timezone"]
      );
    }
    // ensure the json data is a string
    if (
      data["tower_id"] &&
      !(
        typeof data["tower_id"] === "string" ||
        data["tower_id"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tower_id` to be a primitive type in the JSON string but got " +
          data["tower_id"]
      );
    }
    // ensure the json data is a string
    if (
      data["tri_location"] &&
      !(
        typeof data["tri_location"] === "string" ||
        data["tri_location"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tri_location` to be a primitive type in the JSON string but got " +
          data["tri_location"]
      );
    }
    // ensure the json data is a string
    if (
      data["tri_country"] &&
      !(
        typeof data["tri_country"] === "string" ||
        data["tri_country"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tri_country` to be a primitive type in the JSON string but got " +
          data["tri_country"]
      );
    }
    // ensure the json data is a string
    if (
      data["tri_timezone"] &&
      !(
        typeof data["tri_timezone"] === "string" ||
        data["tri_timezone"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `tri_timezone` to be a primitive type in the JSON string but got " +
          data["tri_timezone"]
      );
    }
    // ensure the json data is a string
    if (
      data["orientation"] &&
      !(
        typeof data["orientation"] === "string" ||
        data["orientation"] instanceof String
      )
    ) {
      throw new Error(
        "Expected the field `orientation` to be a primitive type in the JSON string but got " +
          data["orientation"]
      );
    }
    // ensure the json data is a string
    if (
      data["rat"] &&
      !(typeof data["rat"] === "string" || data["rat"] instanceof String)
    ) {
      throw new Error(
        "Expected the field `rat` to be a primitive type in the JSON string but got " +
          data["rat"]
      );
    }

    return true;
  }
}

/**
 * Event UID (globally unique)
 * @member {String} event
 */
Event.prototype["event"] = undefined;

/**
 * Session UID (globally unique)
 * @member {String} session
 */
Event.prototype["session"] = undefined;

/**
 * Whether TLS was used on the connection between the device and notehub. Only available on _session.qo events.
 * @member {Boolean} tls
 */
Event.prototype["tls"] = undefined;

/**
 * The device serial number, or the DeviceUID if the serial number is not set
 * @member {String} best_id
 */
Event.prototype["best_id"] = undefined;

/**
 * Device UID (globally unique)
 * @member {String} device
 */
Event.prototype["device"] = undefined;

/**
 * The device serial number
 * @member {String} sn
 */
Event.prototype["sn"] = undefined;

/**
 * Product UID (globally unique)
 * @member {String} product
 */
Event.prototype["product"] = undefined;

/**
 * App UID (globally unique)
 * @member {String} app
 */
Event.prototype["app"] = undefined;

/**
 * The unix timestamp when the event was received
 * @member {Number} received
 */
Event.prototype["received"] = undefined;

/**
 * The notecard request
 * @member {String} req
 */
Event.prototype["req"] = undefined;

/**
 * When the event was captured on the device
 * @member {Number} when
 */
Event.prototype["when"] = undefined;

/**
 * The notefile associated with this event
 * @member {String} file
 */
Event.prototype["file"] = undefined;

/**
 * The note ID in the notefile
 * @member {String} note
 */
Event.prototype["note"] = undefined;

/**
 * @member {Number} updates
 */
Event.prototype["updates"] = undefined;

/**
 * A JSON object containing event details
 * @member {Object} body
 */
Event.prototype["body"] = undefined;

/**
 * A base64-encoded binary payload
 * @member {String} payload
 */
Event.prototype["payload"] = undefined;

/**
 * One of \"gps\", \"triangulated\", or \"tower\"
 * @member {String} best_location_type
 */
Event.prototype["best_location_type"] = undefined;

/**
 * Unix timestamp
 * @member {Number} best_location_when
 */
Event.prototype["best_location_when"] = undefined;

/**
 * Latitude
 * @member {Number} best_lat
 */
Event.prototype["best_lat"] = undefined;

/**
 * Longitude
 * @member {Number} best_lon
 */
Event.prototype["best_lon"] = undefined;

/**
 * Location
 * @member {String} best_location
 */
Event.prototype["best_location"] = undefined;

/**
 * Country
 * @member {String} best_country
 */
Event.prototype["best_country"] = undefined;

/**
 * Timezone
 * @member {String} best_timezone
 */
Event.prototype["best_timezone"] = undefined;

/**
 * Open Location Code
 * @member {String} where_olc
 */
Event.prototype["where_olc"] = undefined;

/**
 * Unix timestamp
 * @member {Number} where_when
 */
Event.prototype["where_when"] = undefined;

/**
 * Latitude
 * @member {Number} where_lat
 */
Event.prototype["where_lat"] = undefined;

/**
 * Longitude
 * @member {Number} where_lon
 */
Event.prototype["where_lon"] = undefined;

/**
 * Location
 * @member {String} where_location
 */
Event.prototype["where_location"] = undefined;

/**
 * Country
 * @member {String} where_country
 */
Event.prototype["where_country"] = undefined;

/**
 * Timezone
 * @member {String} where_timezone
 */
Event.prototype["where_timezone"] = undefined;

/**
 * Unix timestamp
 * @member {Number} tower_when
 */
Event.prototype["tower_when"] = undefined;

/**
 * Latitude
 * @member {Number} tower_lat
 */
Event.prototype["tower_lat"] = undefined;

/**
 * Longitude
 * @member {Number} tower_lon
 */
Event.prototype["tower_lon"] = undefined;

/**
 * Country
 * @member {String} tower_country
 */
Event.prototype["tower_country"] = undefined;

/**
 * Location
 * @member {String} tower_location
 */
Event.prototype["tower_location"] = undefined;

/**
 * Timezone
 * @member {String} tower_timezone
 */
Event.prototype["tower_timezone"] = undefined;

/**
 * Tower ID
 * @member {String} tower_id
 */
Event.prototype["tower_id"] = undefined;

/**
 * Unix timestamp
 * @member {Number} tri_when
 */
Event.prototype["tri_when"] = undefined;

/**
 * Latitude
 * @member {Number} tri_lat
 */
Event.prototype["tri_lat"] = undefined;

/**
 * Longitude
 * @member {Number} tri_lon
 */
Event.prototype["tri_lon"] = undefined;

/**
 * Location
 * @member {String} tri_location
 */
Event.prototype["tri_location"] = undefined;

/**
 * Country
 * @member {String} tri_country
 */
Event.prototype["tri_country"] = undefined;

/**
 * Timezone
 * @member {String} tri_timezone
 */
Event.prototype["tri_timezone"] = undefined;

/**
 * Triangulation points
 * @member {Number} tri_points
 */
Event.prototype["tri_points"] = undefined;

/**
 * The number of times the device was sensed to have moved between the last session and this session. Only available on _session.qo events.
 * @member {Number} moved
 */
Event.prototype["moved"] = undefined;

/**
 * The orientation of the device. Only available on _session.qo events.
 * @member {String} orientation
 */
Event.prototype["orientation"] = undefined;

/**
 * Received Signal Strength Indicator (RSSI) is an estimated measurement of how well a device can receive signals. Only available on _session.qo events.
 * @member {Number} rssi
 */
Event.prototype["rssi"] = undefined;

/**
 * SINR. Only available on _session.qo events.
 * @member {Number} sinr
 */
Event.prototype["sinr"] = undefined;

/**
 * RSRP. Only available on _session.qo events.
 * @member {Number} rsrp
 */
Event.prototype["rsrp"] = undefined;

/**
 * RSRQ. Only available on _session.qo events.
 * @member {Number} rsrq
 */
Event.prototype["rsrq"] = undefined;

/**
 * Rat. Only available on _session.qo events.
 * @member {String} rat
 */
Event.prototype["rat"] = undefined;

/**
 * Bars. Only available on _session.qo events.
 * @member {Number} bars
 */
Event.prototype["bars"] = undefined;

/**
 * Device voltage. Only available on _session.qo events.
 * @member {Number} voltage
 */
Event.prototype["voltage"] = undefined;

/**
 * Device temperature. Only available on _session.qo events.
 * @member {Number} temp
 */
Event.prototype["temp"] = undefined;

/**
 * Routed environment variables beginning with \"$\". Only available on _session.qo events.
 * @member {Object} environment
 */
Event.prototype["environment"] = undefined;

export default Event;
