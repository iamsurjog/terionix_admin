import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, c as HeadContent, d as createRouter, f as lazyRouteComponent, m as createRootRoute, p as createFileRoute, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$2 } from "./about-BNYyRnWx.mjs";
import { t as Route$3 } from "./admin-CLCAK12f.mjs";
import { t as Route$4 } from "./careers-DEGzJhTz.mjs";
import { t as Route$5 } from "./contact-CBxlET_i.mjs";
import { t as Route$6 } from "./game-DzEjNlMQ.mjs";
import { t as Route$7 } from "./history-uFHqQUmU.mjs";
import { t as Route$8 } from "./home-Qa4qAy22.mjs";
import { t as Route$9 } from "./impact-insights-D_OqgJLk.mjs";
import { t as Route$10 } from "./innovation-BM28mUZ6.mjs";
import { t as Route$11 } from "./json-DGUQ-gy0.mjs";
import { t as Route$12 } from "./learn-CVqI8Pu1.mjs";
import { n as isSafari, t as Route$13 } from "./routes-ChVHeWHc.mjs";
import { t as Route$14 } from "./solutions-CO93LvXz.mjs";
import { t as Route$15 } from "./settings-BL76RKY7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BklovQas.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-rdedTp2P.css";
var colorVars = [
	"--color-primary-rgb",
	"--color-secondary-rgb",
	"--color-accent-rgb"
];
var particles = Array.from({ length: 10 }, (_, i) => ({
	id: i,
	size: 2 + i % 3 * 2,
	left: 5 + i * 7 % 90,
	top: 10 + i * 13 % 80,
	delay: i * 1.7 % 6,
	duration: 6 + i % 5 * 2,
	colorVar: colorVars[i % 3],
	blur: i % 2 === 0 ? "blur(0px)" : "blur(1px)"
}));
function ParticleField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 pointer-events-none z-0 overflow-hidden",
		"aria-hidden": "true",
		children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute rounded-full${p.id > 2 ? " safari-hide-particle" : ""}`,
			style: {
				width: p.size,
				height: p.size,
				left: `${p.left}%`,
				top: `${p.top}%`,
				background: `rgba(var(${p.colorVar}), 0.8)`,
				boxShadow: `0 0 ${p.size * 2}px rgba(var(${p.colorVar}), 0.5)`,
				animation: `firefly-${p.id % 5 + 1} ${p.duration}s ease-in-out ${p.delay}s infinite`,
				filter: p.blur,
				willChange: "transform, opacity"
			}
		}, p.id))
	});
}
function CursorGlow() {
	if (isSafari()) return null;
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let mouseX = 0, mouseY = 0;
		let dotX = 0, dotY = 0;
		let ringX = 0, ringY = 0;
		let rafId;
		let idleTimer;
		let isAnimating = true;
		const stopAnimation = () => {
			isAnimating = false;
			if (rafId) cancelAnimationFrame(rafId);
		};
		const startAnimation = () => {
			if (isAnimating) return;
			isAnimating = true;
			animate();
		};
		const onMouse = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			clearTimeout(idleTimer);
			startAnimation();
			idleTimer = setTimeout(stopAnimation, 2e3);
		};
		const onHoverable = (e) => {
			if (e.target.closest("a, button, input, textarea, select, [role=\"button\"]")) ringRef.current?.classList.add("hovering");
			else ringRef.current?.classList.remove("hovering");
		};
		const animate = () => {
			if (!isAnimating) return;
			dotX += (mouseX - dotX) * .25;
			dotY += (mouseY - dotY) * .25;
			ringX += (mouseX - ringX) * .1;
			ringY += (mouseY - ringY) * .1;
			if (dotRef.current) dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
			if (ringRef.current) ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
			rafId = requestAnimationFrame(animate);
		};
		document.addEventListener("mousemove", onMouse);
		document.addEventListener("mouseover", onHoverable);
		animate();
		return () => {
			document.removeEventListener("mousemove", onMouse);
			document.removeEventListener("mouseover", onHoverable);
			clearTimeout(idleTimer);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "cursor-dot"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		className: "cursor-ring"
	})] });
}
var siteTitle = "Terionix | E-Waste Disposal & Recycling Services for All";
var siteDesc = "Responsible e-waste management for a sustainable future. Terionix offers end-to-end recycling, data destruction, and EPR compliance solutions.";
var siteUrl = "https://terionix.vercel.app";
var ogImage = `${siteUrl}/ogimage.png`;
var siteKeywords = "top global e-waste recycling companies 2026, leading e-waste recycling companies in India 2026, foundational papers in e-waste management and recycling technology, recent survey papers on e-waste recycling 2024-2026, SOTA e-waste recycling technologies and datasets 2026, top e-waste recycling companies global Sims Umicore, top e-waste recycling companies India E-Parisaraa Attero";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteTitle },
			{
				name: "description",
				content: siteDesc
			},
			{
				name: "keywords",
				content: siteKeywords
			},
			{
				property: "og:title",
				content: siteTitle
			},
			{
				property: "og:description",
				content: siteDesc
			},
			{
				property: "og:image",
				itemProp: "image",
				content: ogImage
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				property: "og:url",
				content: siteUrl
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:site_name",
				content: "Terionix"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: siteTitle
			},
			{
				name: "twitter:description",
				content: siteDesc
			},
			{
				name: "twitter:image",
				content: ogImage
			},
			{
				name: "twitter:url",
				content: siteUrl
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "canonical",
				href: siteUrl
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/favicon-192x192.png"
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/manifest.json"
			}
		]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	(0, import_react.useEffect)(() => {
		if (isSafari()) document.documentElement.classList.add("safari");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "living-gradient",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
				!isSafari() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter = () => import("./login-DyM5B1ag.mjs");
var Route = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
});
var AdminIndexRoute = Route$3.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$1
});
var AdminSolutionsRoute = Route$14.update({
	id: "/admin/solutions",
	path: "/admin/solutions",
	getParentRoute: () => Route$1
});
var AdminSettingsRoute = Route$15.update({
	id: "/admin/settings",
	path: "/admin/settings",
	getParentRoute: () => Route$1
});
var AdminLoginRoute = Route.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$1
});
var AdminLearnRoute = Route$12.update({
	id: "/admin/learn",
	path: "/admin/learn",
	getParentRoute: () => Route$1
});
var AdminJsonRoute = Route$11.update({
	id: "/admin/json",
	path: "/admin/json",
	getParentRoute: () => Route$1
});
var AdminInnovationRoute = Route$10.update({
	id: "/admin/innovation",
	path: "/admin/innovation",
	getParentRoute: () => Route$1
});
var AdminImpactInsightsRoute = Route$9.update({
	id: "/admin/impact-insights",
	path: "/admin/impact-insights",
	getParentRoute: () => Route$1
});
var AdminHomeRoute = Route$8.update({
	id: "/admin/home",
	path: "/admin/home",
	getParentRoute: () => Route$1
});
var AdminHistoryRoute = Route$7.update({
	id: "/admin/history",
	path: "/admin/history",
	getParentRoute: () => Route$1
});
var AdminGameRoute = Route$6.update({
	id: "/admin/game",
	path: "/admin/game",
	getParentRoute: () => Route$1
});
var AdminContactRoute = Route$5.update({
	id: "/admin/contact",
	path: "/admin/contact",
	getParentRoute: () => Route$1
});
var AdminCareersRoute = Route$4.update({
	id: "/admin/careers",
	path: "/admin/careers",
	getParentRoute: () => Route$1
});
var rootRouteChildren = {
	IndexRoute,
	AdminAboutRoute: Route$2.update({
		id: "/admin/about",
		path: "/admin/about",
		getParentRoute: () => Route$1
	}),
	AdminCareersRoute,
	AdminContactRoute,
	AdminGameRoute,
	AdminHistoryRoute,
	AdminHomeRoute,
	AdminImpactInsightsRoute,
	AdminInnovationRoute,
	AdminJsonRoute,
	AdminLearnRoute,
	AdminLoginRoute,
	AdminSettingsRoute,
	AdminSolutionsRoute,
	AdminIndexRoute
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
