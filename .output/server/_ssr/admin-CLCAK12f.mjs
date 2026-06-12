import { n as readContent } from "./content-XYN0YFXN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CLCAK12f.js
var $$splitComponentImporter = () => import("./admin-BWS-sARB.mjs");
var Route = createFileRoute("/admin/")({
	loader: async () => readContent(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
