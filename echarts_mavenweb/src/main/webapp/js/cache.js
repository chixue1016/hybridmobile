
function Cache() {

}

Cache.save = function(key, value) {
	sessionStorage.setItem(key, value);
};

Cache.get = function(key) {
	return sessionStorage.getItem(key);
};
