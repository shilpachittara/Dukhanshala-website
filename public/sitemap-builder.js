require("babel-register")({
	presets: ["es2015", "react"]
});

const router = require("../src/route").default;
const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
	'/:store': [
		{ store: []}
	],
	'/:store/otp': [
		{ store: [
		] }
	],
	'/:store/confirmation': [
		{ store: [
			
		]}
	],
	'/:store/otp': [
		{ store: [
		]}
	],
	'/:store/checkout': [
		{ store: [
		]}
	],
	'/:store/order/detail': [
		{ store: [
			
		]}
	]
	
};

(
	new Sitemap(router)
		.applyParams(paramsConfig)
		.build('https://www.dukaanshala.com')
		.save('./sitemap.xml')
);
