import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./innovation-BM28mUZ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/innovation-ChfViB4I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminInnovation() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Innovation",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Innovation Page",
			onSave: (vals) => writeSection("innovation", vals),
			defaultValues: data.innovation,
			validate: (v) => {
				const o = v;
				if (!o.heading?.prefix?.trim()) return "Heading prefix is required";
				if (!o.heading?.highlight?.trim()) return "Heading highlight is required";
				if (!o.intro?.trim()) return "Intro text is required";
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
							placeholder: "e.g. Innovation at"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heading Highlight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.heading.highlight,
							onChange: (v) => onChange("heading.highlight", v),
							placeholder: "e.g. Terionix"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Intro Text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.intro,
						onChange: (v) => onChange("intro", v),
						placeholder: "Page intro",
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-sm",
						children: "Innovation Sections"
					}), values.sections?.map((sec, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white/50 rounded-lg border border-primary/10 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-text/50 font-medium uppercase tracking-wide",
								children: ["Section ", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "ID (slug)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: sec.id,
										onChange: (v) => onChange(`sections.${i}.id`, v),
										placeholder: "labs"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Title",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: sec.title,
										onChange: (v) => onChange(`sections.${i}.title`, v),
										placeholder: "Section title"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Body",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: sec.body,
									onChange: (v) => onChange(`sections.${i}.body`, v),
									rows: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-text/60",
									children: "Highlights"
								}), sec.highlights?.map((hl, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: hl,
										onChange: (v) => onChange(`sections.${i}.highlights.${j}`, v),
										placeholder: "Highlight text"
									})
								}, j))]
							})
						]
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-medium text-sm",
					children: "Call to Action"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "CTA Text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: values.cta?.text,
						onChange: (v) => onChange("cta.text", v),
						rows: 2
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Button Label",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.cta?.buttonLabel,
							onChange: (v) => onChange("cta.buttonLabel", v)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Button Href",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.cta?.buttonHref,
							onChange: (v) => onChange("cta.buttonHref", v)
						})
					})]
				})
			] })
		})]
	});
}
//#endregion
export { AdminInnovation as component };
