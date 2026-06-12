import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as writeSection, i as Textarea, n as Field, r as Input, t as AdminSection } from "./AdminSection-CjrmhaXe.mjs";
import { t as isAuthenticated } from "./auth-B7ki30i8.mjs";
import { t as AdminNavbar } from "./AdminNavbar-CvbUnKSa.mjs";
import { t as Route } from "./contact-CBxlET_i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-X_UjdbmJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminContact() {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!isAuthenticated()) navigate({ to: "/admin/login" });
	}, [navigate]);
	const data = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "font-sans text-text",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNavbar, {
			active: "Contact Us",
			links: data.navbar.links,
			logo: data.site.logo,
			siteName: data.site.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSection, {
			title: "Contact Us Page",
			onSave: (vals) => writeSection("contact", vals),
			defaultValues: data.contact,
			validate: (v) => {
				const o = v;
				if (!o.heading?.prefix?.trim()) return "Heading prefix is required";
				if (!o.heading?.highlight?.trim()) return "Heading highlight is required";
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
							placeholder: "e.g. Contact"
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
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tab 1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.tabs[0],
							onChange: (v) => onChange("tabs.0", v),
							placeholder: "e.g. General Inquiry"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tab 2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: values.tabs[1],
							onChange: (v) => onChange("tabs.1", v),
							placeholder: "e.g. Career"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-sm",
							children: "General Inquiry Segment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Segment Heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.generalSegment.heading,
								onChange: (v) => onChange("generalSegment.heading", v)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Segment Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.generalSegment.description,
								onChange: (v) => onChange("generalSegment.description", v),
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Submit Button Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.generalForm.submitText,
								onChange: (v) => onChange("generalForm.submitText", v)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-sm",
							children: "Career Segment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Segment Heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.careerSegment.heading,
								onChange: (v) => onChange("careerSegment.heading", v)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Segment Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.careerSegment.description,
								onChange: (v) => onChange("careerSegment.description", v),
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Submit Button Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.careerForm.submitText,
								onChange: (v) => onChange("careerForm.submitText", v)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-medium text-sm",
							children: "Quote Request Segment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Quote Segment Heading",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.quoteSegment.heading,
								onChange: (v) => onChange("quoteSegment.heading", v)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Quote Segment Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: values.quoteSegment.description,
								onChange: (v) => onChange("quoteSegment.description", v),
								rows: 2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Quote Submit Button Text",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: values.quoteForm.submitText,
								onChange: (v) => onChange("quoteForm.submitText", v)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-medium text-xs text-primary uppercase tracking-wider mt-4 mb-2",
							children: "Requester Types"
						}),
						values.quoteForm?.types?.map((type, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono text-text/40 w-24",
								children: type.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: `"${type.id}" Label`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: type.label,
									onChange: (v) => onChange(`quoteForm.types.${i}.label`, v)
								})
							})]
						}, type.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-text/40 mt-2",
							children: "These toggle options appear at the top of the quote request form."
						})
					]
				})
			] })
		})]
	});
}
//#endregion
export { AdminContact as component };
