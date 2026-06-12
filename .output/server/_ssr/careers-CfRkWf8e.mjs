import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./careers-DEGzJhTz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-CfRkWf8e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCareers() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Careers",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Careers Page",
			onSave: (vals) => writeSection("careers", vals),
			defaultValues: data.careers,
			validate: (v) => {
				const o = v;
				if (!o.heading?.prefix?.trim()) return "Heading prefix is required";
				if (!o.heading?.highlight?.trim()) return "Heading highlight is required";
				if (!o.subtitle?.trim()) return "Subtitle is required";
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
							placeholder: "e.g. Careers at"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Highlight (colored)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.highlight,
							onChange: (v) => onChange("heading.highlight", v),
							placeholder: "e.g. Terionix"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subtitle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.subtitle,
						onChange: (v) => onChange("subtitle", v),
						placeholder: "Intro text",
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Why Terionix (benefits list)"
					}), values.whyTerionix.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: item.text,
								onChange: (v) => onChange(`whyTerionix.${i}.text`, v),
								placeholder: "Benefit text"
							})
						})
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Job Categories"
					}), values.categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium uppercase tracking-wide",
								children: ["Category ", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Category Title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: cat.title,
									onChange: (v) => onChange(`categories.${i}.title`, v),
									placeholder: "e.g. Technical & IT"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-text/60",
									children: "Roles"
								}), cat.roles.map((role, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: role,
										onChange: (v) => onChange(`categories.${i}.roles.${j}`, v),
										placeholder: "Role description"
									})
								}) }, j))]
							})
						]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-sm",
							children: "Call to Action"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "CTA Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.cta.text,
								onChange: (v) => onChange("cta.text", v),
								placeholder: "Text before button",
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Button Label",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.cta.buttonLabel,
								onChange: (v) => onChange("cta.buttonLabel", v),
								placeholder: "e.g. Apply Now"
							})
						})
					]
				})
			] })
		})]
	});
}
//#endregion
export { AdminCareers as component };
