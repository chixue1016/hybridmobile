
function Cache() {

}

Cache.save = function(key, value) {
	sessionStorage.setItem(key, value);
};

Cache.get = function(key) {
	return sessionStorage.getItem(key);
};

function getSummaryType() {
	return Cache.get("summaryType");
}

function setSummaryType(summaryType) {
	return Cache.save("summaryType", summaryType);
}
