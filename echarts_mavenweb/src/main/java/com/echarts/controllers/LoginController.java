package com.echarts.controllers;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.echarts.models.LoginContext;

@Controller
public class LoginController {
	private final String SERVICE_ID = "ncLoginService";
	private final String ACTION_NAME = "umLogin";
	private final String APP_ID = "A04500.nc.yonyou.com";
	private final String FUN_CODE = "A04500";
	
	@RequestMapping("/login.jsonp")
	public LoginContext login(@RequestParam String user, @RequestParam String password) throws Exception {
		HttpClient client = new HttpClient();
		
		String host = "";
		String port = "";
		String url = buildHost(host, port);
		PostMethod post = new PostMethod(url);
		
		JSONObject dataJson = new JSONObject();
		JSONObject appcontext = buildAppContext(user, password);
		dataJson.put("appcontext", appcontext);
				
		JSONObject servicecontext = buildServiceContext();		
		dataJson.put("servicecontext", servicecontext);
		
		JSONObject deviceinfo = buildDeviceInfo();
		dataJson.put("deviceinfo", deviceinfo);
		
		//serviceid		
		dataJson.put("serviceid", SERVICE_ID);
		
		String dataStr = dataJson.toString();
		NameValuePair[] pair = new NameValuePair[] {
				new NameValuePair("tp", "none"),
				new NameValuePair("data", dataStr)
		};
		post.setQueryString(pair);
		
		int status = client.executeMethod(post);
		if(status == HttpStatus.SC_OK){
			InputStream in = post.getResponseBodyAsStream();
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			int len = -1;
			while((len = in.read()) != -1){
				out.write(len);
			}
			String retStr = new String(out.toByteArray());
			System.out.println(retStr);
			JSONObject retJson = new JSONObject(retStr);
			
		}
		
		LoginContext context = new LoginContext();
		context.setGroupId("group111");
		context.setUserId("user222");
		return context;
	}
	
	private String buildHost(String host, String port) {		
		return "http://" + host + ":" + port + "/umserver/core/";
	}
	
	private JSONObject buildDeviceInfo() {
		//deviceinfo
		JSONObject deviceinfo = new JSONObject();
		deviceinfo.put("devid", "39769b68352204061039923");
		deviceinfo.put("style", "android");
		deviceinfo.put("versionname", "1.0.0.0");
		return deviceinfo;
	}
	
	private JSONObject buildServiceContext() {
		//servicecontext
		JSONObject servicecontext = new JSONObject();
		servicecontext.put("action", "");
		servicecontext.put("actionid", "");
		servicecontext.put("callback", "");
		servicecontext.put("actionname", ACTION_NAME);
		servicecontext.put("funcode", FUN_CODE);
		return servicecontext;
	}
	private JSONObject buildAppContext(String user, String password) {
		//appcontext
		JSONObject appcontext = new JSONObject();
		appcontext.put("appid", APP_ID);
		appcontext.put("user", user);
		appcontext.put("pass", password);
		return appcontext;	
	}
}
