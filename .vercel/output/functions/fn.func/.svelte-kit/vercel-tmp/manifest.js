export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-25Th.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-26ThIt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-35XLt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-36XLtIt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-45Lt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-46LtIt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-55Rg.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-56It.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-65Md.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-66MdIt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-75Bd.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-76BdIt.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-95Blk.woff2","fonts/neue-haas-grotesk/display/NHaasGroteskDSPro-96BlkIt.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-55Rg.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-56It.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-65Md.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-66MdIt.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-75Bd.woff2","fonts/neue-haas-grotesk/text/NHaasGroteskTXPro-76BdIt.woff2","fonts/voyage/voyage-bold.woff2","fonts/voyage/voyage-regular.woff2","images/drag-icon.png","images/scroll-icon.png","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".woff2":"font/woff2",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.0c60fb87.js","app":"_app/immutable/entry/app.eab17b9c.js","imports":["_app/immutable/entry/start.0c60fb87.js","_app/immutable/chunks/scheduler.dd28e2fa.js","_app/immutable/chunks/singletons.df432809.js","_app/immutable/entry/app.eab17b9c.js","_app/immutable/chunks/scheduler.dd28e2fa.js","_app/immutable/chunks/index.43f321c1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work/[slug]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
