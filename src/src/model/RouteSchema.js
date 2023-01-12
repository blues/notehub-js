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

import ApiClient from '../ApiClient';
import Aws from './Aws';
import Azure from './Azure';
import Google from './Google';
import Http from './Http';
import HttpFilter from './HttpFilter';
import Mqtt from './Mqtt';
import Proxy from './Proxy';
import Radresponder from './Radresponder';
import Snowflake from './Snowflake';
import SnowflakeTransform from './SnowflakeTransform';
import Thingworx from './Thingworx';

/**
 * The RouteSchema model module.
 * @module model/RouteSchema
 * @version 1.0.3
 */
class RouteSchema {
    /**
     * Constructs a new <code>RouteSchema</code>.
     * @alias module:model/RouteSchema
     * @param {(module:model/Aws|module:model/Azure|module:model/Google|module:model/Http|module:model/Mqtt|module:model/Proxy|module:model/Radresponder|module:model/Snowflake|module:model/Thingworx)} instance The actual instance to initialize RouteSchema.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "Http") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Http.validateJSON(instance); // throw an exception if no match
                // create Http from JS object
                this.actualInstance = Http.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Http
            errorMessages.push("Failed to construct Http: " + err)
        }

        try {
            if (typeof instance === "Google") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Google.validateJSON(instance); // throw an exception if no match
                // create Google from JS object
                this.actualInstance = Google.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Google
            errorMessages.push("Failed to construct Google: " + err)
        }

        try {
            if (typeof instance === "Proxy") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Proxy.validateJSON(instance); // throw an exception if no match
                // create Proxy from JS object
                this.actualInstance = Proxy.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Proxy
            errorMessages.push("Failed to construct Proxy: " + err)
        }

        try {
            if (typeof instance === "Mqtt") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Mqtt.validateJSON(instance); // throw an exception if no match
                // create Mqtt from JS object
                this.actualInstance = Mqtt.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Mqtt
            errorMessages.push("Failed to construct Mqtt: " + err)
        }

        try {
            if (typeof instance === "Aws") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Aws.validateJSON(instance); // throw an exception if no match
                // create Aws from JS object
                this.actualInstance = Aws.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Aws
            errorMessages.push("Failed to construct Aws: " + err)
        }

        try {
            if (typeof instance === "Radresponder") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Radresponder.validateJSON(instance); // throw an exception if no match
                // create Radresponder from JS object
                this.actualInstance = Radresponder.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Radresponder
            errorMessages.push("Failed to construct Radresponder: " + err)
        }

        try {
            if (typeof instance === "Azure") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Azure.validateJSON(instance); // throw an exception if no match
                // create Azure from JS object
                this.actualInstance = Azure.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Azure
            errorMessages.push("Failed to construct Azure: " + err)
        }

        try {
            if (typeof instance === "Thingworx") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Thingworx.validateJSON(instance); // throw an exception if no match
                // create Thingworx from JS object
                this.actualInstance = Thingworx.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Thingworx
            errorMessages.push("Failed to construct Thingworx: " + err)
        }

        try {
            if (typeof instance === "Snowflake") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                Snowflake.validateJSON(instance); // throw an exception if no match
                // create Snowflake from JS object
                this.actualInstance = Snowflake.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into Snowflake
            errorMessages.push("Failed to construct Snowflake: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `RouteSchema` with oneOf schemas Aws, Azure, Google, Http, Mqtt, Proxy, Radresponder, Snowflake, Thingworx. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `RouteSchema` with oneOf schemas Aws, Azure, Google, Http, Mqtt, Proxy, Radresponder, Snowflake, Thingworx. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>RouteSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RouteSchema} obj Optional instance to populate.
     * @return {module:model/RouteSchema} The populated <code>RouteSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        return new RouteSchema(data);
    }

    /**
     * Gets the actaul instance, which can be <code>Aws</code>, <code>Azure</code>, <code>Google</code>, <code>Http</code>, <code>Mqtt</code>, <code>Proxy</code>, <code>Radresponder</code>, <code>Snowflake</code>, <code>Thingworx</code>.
     * @return {(module:model/Aws|module:model/Azure|module:model/Google|module:model/Http|module:model/Mqtt|module:model/Proxy|module:model/Radresponder|module:model/Snowflake|module:model/Thingworx)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actaul instance, which can be <code>Aws</code>, <code>Azure</code>, <code>Google</code>, <code>Http</code>, <code>Mqtt</code>, <code>Proxy</code>, <code>Radresponder</code>, <code>Snowflake</code>, <code>Thingworx</code>.
     * @param {(module:model/Aws|module:model/Azure|module:model/Google|module:model/Http|module:model/Mqtt|module:model/Proxy|module:model/Radresponder|module:model/Snowflake|module:model/Thingworx)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = RouteSchema.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual intance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of RouteSchema from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/RouteSchema} An instance of RouteSchema.
     */
    static fromJSON = function(json_string){
        return RouteSchema.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
RouteSchema.prototype['fleets'] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
RouteSchema.prototype['filter'] = undefined;

/**
 * @member {module:model/SnowflakeTransform} transform
 */
RouteSchema.prototype['transform'] = undefined;

/**
 * @member {Number} throttle_ms
 */
RouteSchema.prototype['throttle_ms'] = undefined;

/**
 * @member {String} url
 */
RouteSchema.prototype['url'] = undefined;

/**
 * @member {Object.<String, String>} http_headers
 */
RouteSchema.prototype['http_headers'] = undefined;

/**
 * @member {Boolean} disable_http_headers
 * @default false
 */
RouteSchema.prototype['disable_http_headers'] = false;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
RouteSchema.prototype['timeout'] = 15;

/**
 * @member {String} alias
 */
RouteSchema.prototype['alias'] = undefined;

/**
 * @member {String} broker
 */
RouteSchema.prototype['broker'] = undefined;

/**
 * @member {Number} port
 */
RouteSchema.prototype['port'] = undefined;

/**
 * @member {String} username
 */
RouteSchema.prototype['username'] = undefined;

/**
 * @member {String} password
 */
RouteSchema.prototype['password'] = undefined;

/**
 * @member {String} topic
 */
RouteSchema.prototype['topic'] = undefined;

/**
 * Certificate with \\n newlines.  Field is input only, will not show contents on GET operations.
 * @member {String} certificate
 */
RouteSchema.prototype['certificate'] = undefined;

/**
 * Name of certificate.  If omitted, defaults to \"present\"
 * @member {String} certificate_name
 * @default 'present'
 */
RouteSchema.prototype['certificate_name'] = 'present';

/**
 * Key with \\n newlines.  Field is input only, will not show contents on GET operations.
 * @member {String} key
 */
RouteSchema.prototype['key'] = undefined;

/**
 * Name of PEM key.  If omitted, defaults to \"present\"
 * @member {String} private_key_name
 * @default 'present'
 */
RouteSchema.prototype['private_key_name'] = 'present';

/**
 * @member {String} region
 */
RouteSchema.prototype['region'] = undefined;

/**
 * @member {String} access_key_id
 */
RouteSchema.prototype['access_key_id'] = undefined;

/**
 * @member {String} access_key_secret
 */
RouteSchema.prototype['access_key_secret'] = undefined;

/**
 * @member {String} message_group_id
 */
RouteSchema.prototype['message_group_id'] = undefined;

/**
 * @member {String} message_deduplication_id
 */
RouteSchema.prototype['message_deduplication_id'] = undefined;

/**
 * @member {String} channel
 */
RouteSchema.prototype['channel'] = undefined;

/**
 * @member {Boolean} test_api
 * @default false
 */
RouteSchema.prototype['test_api'] = false;

/**
 * @member {String} data_feed_key
 */
RouteSchema.prototype['data_feed_key'] = undefined;

/**
 * @member {String} client_id
 */
RouteSchema.prototype['client_id'] = undefined;

/**
 * Client Secret is input only, will not display on GET operations
 * @member {String} client_secret
 */
RouteSchema.prototype['client_secret'] = undefined;

/**
 * @member {String} sas_policy_name
 */
RouteSchema.prototype['sas_policy_name'] = undefined;

/**
 * @member {String} sas_policy_key
 */
RouteSchema.prototype['sas_policy_key'] = undefined;

/**
 * @member {String} app_key
 */
RouteSchema.prototype['app_key'] = undefined;

/**
 * @member {String} organization_name
 */
RouteSchema.prototype['organization_name'] = undefined;

/**
 * @member {String} account_name
 */
RouteSchema.prototype['account_name'] = undefined;

/**
 * @member {String} user_name
 */
RouteSchema.prototype['user_name'] = undefined;

/**
 * PEM key with \\n newlines.  Field is input only, will not show contents on GET operations.
 * @member {String} pem
 */
RouteSchema.prototype['pem'] = undefined;


RouteSchema.OneOf = ["Aws", "Azure", "Google", "Http", "Mqtt", "Proxy", "Radresponder", "Snowflake", "Thingworx"];

export default RouteSchema;

