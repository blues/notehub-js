/**
 * Compile-only smoke test for the generated TypeScript declarations.
 *
 * This file is never executed — `pnpm run test:types` runs `tsc --noEmit` over it, which
 * fails if the generated `.d.ts` files are malformed, stop resolving each other, or lose
 * their types. It exercises a representative consumer surface: the client, an API class
 * with both a params-object method and a positional method, model field types, model
 * constructors, enum classes, enum-backed field narrowing, and the oneOf wrapper API. The
 * `@ts-expect-error` lines assert the declarations are real types (not `any`) — if a
 * regression widens them or drops a member, that directive becomes unused and tsc fails,
 * catching the regression.
 */
import * as NotehubJs from "@blues-inc/notehub-js";

// ApiClient singleton + bearer auth are typed.
const client = NotehubJs.ApiClient.instance;
client.authentications["personalAccessToken"].accessToken = "token";

async function run() {
  const api = new NotehubJs.DeviceApi();

  // Optional params object + typed paginated return.
  const res = await api.getDevices("app:123", { pageSize: 10, tag: ["a"] });
  const sn: string | undefined = res.devices?.[0]?.serial_number;
  const voltage: number | undefined = res.devices?.[0]?.voltage;
  const provisioned: Date | undefined = res.devices?.[0]?.provisioned;

  // Single-object return with a required string field.
  const device = await api.getDevice("app:123", "dev:1");
  const uid: string = device.uid;

  // Enum classes expose string-literal members.
  const role: "owner" = NotehubJs.Role.owner;

  return { sn, voltage, provisioned, uid, role };
}

// Methods are typed, not `any`: omitting the required `deviceUID` argument must error.
// @ts-expect-error - missing required parameter `deviceUID`
new NotehubJs.DeviceApi().getDevice("app:123");

// Model classes expose their runtime positional constructors with typed params.
new NotehubJs.Device([], "app:123", new Date(), 20, "dev:1", 3.7);
// @ts-expect-error - Device's required positional constructor arguments are missing
new NotehubJs.Device();

// Enum-backed model fields are literal unions, not widened to `string`. Indexed-access
// types keep this independent of the constructors above; it fails if a field regresses.
const sourceType: "event" | "heartbeat" =
  null as unknown as NotehubJs.CreateMonitor["source_type"];
const messageType: "text" | "blocks" | undefined =
  null as unknown as NotehubJs.MonitorAlertRoutesInner["message_type"];

// oneOf wrapper models expose the actual-instance runtime API (constructor takes a
// variant; getActualInstance/setActualInstance/toJSON/fromJSON exist), not a plain model.
function oneOf() {
  const email = null as unknown as NotehubJs.EmailNotification;
  const route = new NotehubJs.MonitorAlertRoutesInner(email);
  route.setActualInstance(email);
  const variant:
    | NotehubJs.EmailNotification
    | NotehubJs.SlackBearerNotification
    | NotehubJs.SlackWebHookNotification
    | null = route.getActualInstance();
  const parsed = NotehubJs.MonitorAlertRoutesInner.fromJSON("{}");
  return { variant, parsed };
}

void run;
void oneOf;
void sourceType;
void messageType;
