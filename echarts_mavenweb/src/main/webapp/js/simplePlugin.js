var SimplePlugin = function() {};

SimplePlugin.prototype.hello = function(name, successCallback, failureCallback) {
	return PhoneGap.exec(successCallback, failureCallback, 'SimplePlugin', 'hello', [ name ]);
};

//PhoneGap.addConstructor(function() {
//	cordova.addPlugin('simpleplugin', new SimplePlugin());
//});

if (!window.plugins) 
	window.plugins = {};
if (!window.plugins.simpleplugin) 
	window.plugins.simpleplugin = new SimplePlugin();
