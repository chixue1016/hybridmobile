package com.echarts.utils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.util.EncodingUtil;
import org.json.JSONObject;

public class MaRequestBuilder {
	private final String MA_COMMON_SERVICE_ID = "umCommonService";
	private final String MA_LOGIN_SERVICE_ID = "ncLoginService";
	
	private String serviceId;
	
	private String appId;
	private String funCode;
	private String viewId;
	private String actionName;
	private Map<String, Object> parameters = new HashMap<String, Object>();
	
	private String user;
	private String password;
	private String token;
	
	
	// Ma请求数据
	private JSONObject data = new JSONObject();
	// Ma请求的所有信息
	private NameValuePair[] request;
	
	public MaRequestBuilder() throws IOException {
		this(MaConfig.getConfig());
	}
	
	private MaRequestBuilder(MaConfig config) {
		this.appId = config.appId;
		this.viewId = config.viewId;
		this.funCode = config.funCode;
	}
	
	public MaRequestBuilder commonService() {
		this.serviceId = MA_COMMON_SERVICE_ID;
		return this;
	}
	
	public MaRequestBuilder loginService() {
		this.serviceId = MA_LOGIN_SERVICE_ID;
		return this;
	}
	
	public MaRequestBuilder actionName(String actionName) {
		this.actionName = actionName;
		return this;
	}
	
	public MaRequestBuilder user(String user) {
		this.user = user;
		return this;
	} 
	
	public MaRequestBuilder password(String password) {
		this.password = password;
		return this;
	}
	
	public MaRequestBuilder token(String token) {
		this.token = token;
		return this;
	}
	
	public MaRequestBuilder parameters(Map<String, Object> parameters) {
		this.parameters = parameters;
		return this;
	}
	
	public void build() {	
		buildData();		
		buildRequest();		
	}
	
	private void buildRequest() {
		NameValuePair[] paras = new NameValuePair[] {
			new NameValuePair("tp", "none"),
			new NameValuePair("data", data.toString())
		};
			
		this.request = paras;	
	}
	
	private void buildData() {
		buildAppContext();			
		buildServiceContext();
		buildDeviceInfo();
		buildServiceId();
	}

	private void buildServiceId() {
		data.put("serviceid", serviceId);		
	}

	private void buildDeviceInfo() {
		JSONObject deviceinfo = new JSONObject();
		deviceinfo.put("devid", "39769b68352204061039923");
		deviceinfo.put("style", "android");
		deviceinfo.put("versionname", "1.0.0.0");
		
		data.put("deviceinfo", deviceinfo);
	}
	
	private void buildServiceContext() {		
		JSONObject servicecontext = new JSONObject();
		servicecontext.put("funcode", funCode);
		servicecontext.put("viewid", viewId);
				
		servicecontext.put("action", actionName);
		servicecontext.put("actionid", actionName);		
		servicecontext.put("actionname", actionName);
		
		JSONObject params = new JSONObject(parameters);		
		servicecontext.put("params", params);
		
		servicecontext.put("callback", "");
		
		data.put("servicecontext",  servicecontext);
	}
	

	private void buildAppContext() {		
		JSONObject appcontext = new JSONObject();
		appcontext.put("appid", appId);
		appcontext.put("user", user);
		appcontext.put("pass", password);
		appcontext.put("token", token);
		
		data.put("appcontext", appcontext);	
	}
	
	public NameValuePair[] getRequest() {
		return this.request;
	}
}
