import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as Route } from "./about-BNYyRnWx.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CHfdU3Bq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminAbout() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "About Us",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "About Us Page",
			onSave: (vals) => writeSection("about", vals),
			defaultValues: data.about,
			validate: (v) => {
				const o = v;
				if (!o.heading?.prefix?.trim()) return "Heading prefix is required";
				if (!o.heading?.highlight?.trim()) return "Heading highlight is required";
				if (!o.paragraphs?.length) return "At least one paragraph is required";
				return null;
			},
			children: (values, onChange) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Prefix",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.prefix,
							onChange: (v) => onChange("heading.prefix", v),
							placeholder: "e.g. About"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Highlight (colored)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.highlight,
							onChange: (v) => onChange("heading.highlight", v),
							placeholder: "e.g. Us"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Page Content"
					}), values.paragraphs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-text/50 font-medium uppercase tracking-wide",
							children: ["Paragraph ", i + 1]
						}), p.segments.map((seg, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: j === 0 ? "Text" : "Continuation",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: seg.text,
								onChange: (v) => onChange(`paragraphs.${i}.segments.${j}.text`, v),
								placeholder: "Enter text...",
								rows: 3
							})
						}) }, j))]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Quick Links"
					}), values.links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: link.label,
								onChange: (v) => onChange(`links.${i}.label`, v),
								placeholder: "Link label"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: link.href,
								onChange: (v) => onChange(`links.${i}.href`, v),
								placeholder: "/page"
							})
						})]
					}, i))]
				})
			] })
		})]
	});
}
//#endregion
export { AdminAbout as component };
