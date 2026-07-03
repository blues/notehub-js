/**
 * Compile-only smoke test for the generated TypeScript declarations.
 *
 * This file is never executed — `pnpm run test:types` runs `tsc --noEmit` over it, which
 * fails if the generated `.d.ts` files are malformed, stop resolving each other, or lose
 * their types. It exercises a representative consumer surface: the client, an API class
 * with both a params-object method and a positional method, model field types, and an
 * enum class. The `@ts-expect-error` line asserts the declarations are real types (not
 * `any`) — if a regression widens them to `any`, that directive becomes unused and tsc
 * fails, catching the regression.
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

void run;
