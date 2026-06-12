import { n as readContent } from "./content-XYN0YFXN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BNYyRnWx.js
var $$splitComponentImporter = () => import("./about-CHfdU3Bq.mjs");
var Route = createFileRoute("/admin/about")({
	loader: async () => readContent(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
