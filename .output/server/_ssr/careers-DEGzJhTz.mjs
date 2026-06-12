import { n as readContent } from "./content-XYN0YFXN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-DEGzJhTz.js
var $$splitComponentImporter = () => import("./careers-CfRkWf8e.mjs");
var Route = createFileRoute("/admin/careers")({
	loader: async () => readContent(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
