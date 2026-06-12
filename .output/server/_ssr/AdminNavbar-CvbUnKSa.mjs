import { r as __toESM } from "../_runtime.mjs";
import { N as require_jsx_runtime, P as require_react, g as useNavigate, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as logout } from "./auth-B7ki30i8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminNavbar-CvbUnKSa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminNavbar({ active, links, logo, siteName }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const location = useLocation();
	const handleLogout = async () => {
		await logout();
		navigate({ to: "/admin/login" });
	};
	const isChildActive = (children) => {
		if (!children) return false;
		return children.some((child) => location.pathname === `/admin${child.to}`);
	};
	const isAnyActive = (link) => {
		if (link.type === "dropdown" && link.children) return isChildActive(link.children);
		return location.pathname === `/admin${link.to}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admin",
							className: "flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo,
								alt: siteName,
								className: "h-30 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-primary/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-accent motion-preset-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-accent uppercase tracking-wider",
								children: "Admin"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-1",
					children: [
						links.map((link) => link.type === "dropdown" && link.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group",
							onMouseEnter: () => setOpenDropdown(link.name),
							onMouseLeave: () => setOpenDropdown(null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `px-4 py-2 font-sans text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 ${isAnyActive(link) ? "text-white bg-primary shadow-lg shadow-primary/25" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: `w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`,
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									strokeWidth: 2.5,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M19 9l-7 7-7-7"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${openDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white/90 backdrop-blur-xl rounded-2xl border border-primary/10 shadow-2xl shadow-primary/10 py-2 min-w-[200px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" }), link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/admin${child.to}`,
										className: `block px-5 py-2.5 font-sans text-sm transition-all duration-200 ${location.pathname === `/admin${child.to}` ? "text-primary font-semibold bg-primary/5" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-1 h-1 rounded-full transition-all ${location.pathname === `/admin${child.to}` ? "bg-primary scale-150" : "bg-transparent"}` }), child.name]
										})
									}, child.name))]
								})
							})]
						}, link.name) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/admin${link.to}`,
							className: `px-4 py-2 font-sans text-sm font-medium rounded-full transition-all duration-300 ${isAnyActive(link) ? "text-white bg-primary shadow-lg shadow-primary/25" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
							children: link.name
						}, link.name)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admin/game",
							className: `px-4 py-2 font-sans text-sm font-medium rounded-full transition-all duration-300 ${active === "Recycling Game" ? "text-white bg-primary shadow-lg shadow-primary/25" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
							children: "Game"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admin/json",
							className: `px-4 py-2 font-sans text-sm font-medium rounded-full transition-all duration-300 ${active === "JSON" ? "text-white bg-primary shadow-lg shadow-primary/25" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
							children: "JSON"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleLogout,
							className: "ml-2 px-4 py-2 font-sans text-sm font-medium rounded-full text-error hover:bg-error-soft transition-all",
							children: "Logout"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleLogout,
						className: "text-xs font-medium text-error hover:text-error-deep transition-colors px-2 py-1",
						children: "Logout"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "relative w-10 h-10 flex items-center justify-center rounded-lg text-text hover:bg-primary/5 transition-colors",
						"aria-label": "Toggle menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-5 h-4 relative flex flex-col justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}` })
							]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background/95 backdrop-blur-xl border-t border-primary/10 px-4 pb-4 pt-2 space-y-1",
				children: [
					links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMobileDropdownItem, {
						link,
						active,
						onClose: () => setOpen(false)
					}, link.name)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/admin/game",
						onClick: () => setOpen(false),
						className: `block py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${active === "Recycling Game" ? "text-white bg-primary shadow-lg shadow-primary/20" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
						children: "Game"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/admin/json",
						onClick: () => setOpen(false),
						className: `block py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${active === "JSON" ? "text-white bg-primary shadow-lg shadow-primary/20" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
						children: "JSON"
					})
				]
			})
		})]
	});
}
function AdminMobileDropdownItem({ link, active, onClose }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const location = useLocation();
	const hasActiveChild = link.children?.some((c) => location.pathname === `/admin${c.to}`);
	if (link.type !== "dropdown" || !link.children) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `/admin${link.to}`,
		onClick: onClose,
		className: `block py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${location.pathname === `/admin${link.to}` ? "text-white bg-primary shadow-lg shadow-primary/20" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
		children: link.name
	}, link.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setExpanded(!expanded),
		className: `w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${hasActiveChild ? "text-primary bg-primary/5" : "text-text/70 hover:text-primary hover:bg-primary/5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: `w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`,
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			strokeWidth: 2.5,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M19 9l-7 7-7-7"
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `overflow-hidden transition-all duration-200 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-4 pl-3 border-l-2 border-primary/10 space-y-0.5 py-1",
			children: link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `/admin${child.to}`,
				onClick: onClose,
				className: `block py-2 px-4 rounded-lg text-sm transition-all ${location.pathname === `/admin${child.to}` ? "text-primary font-semibold bg-primary/5" : "text-text/60 hover:text-primary hover:bg-primary/5"}`,
				children: child.name
			}, child.name))
		})
	})] });
}
//#endregion
export { AdminNavbar as t };
