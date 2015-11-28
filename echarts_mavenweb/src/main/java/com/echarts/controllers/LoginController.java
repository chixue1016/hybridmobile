package com.echarts.controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.echarts.models.LoginContext;
import com.echarts.utils.MaConfig;
import com.echarts.utils.MaRequestBuilder;

@Controller
public class LoginController {
	private final String SERVICE_ID = "ncLoginService";
	private final String ACTION_NAME = "umLogin";
	private final String APP_ID = "A04500.nc.yonyou.com";
	private final String FUN_CODE = "A04500";
	
	@RequestMapping("/login.jsonp")
	public JSONObject login(@RequestParam String user, @RequestParam String password) throws Exception {
		HttpClient client = new HttpClient();
		
		String url = MaConfig.getConfig().url;
		PostMethod post = new PostMethod(url);
		
		MaRequestBuilder builder = new MaRequestBuilder();
		builder.loginService()
			   .actionName("umLogin")
			   .user(user)
			   .password(password)
			   .build();		

		post.setQueryString(builder.getRequest());
		
		int status = client.executeMethod(post);		
		if(status != HttpStatus.SC_OK){
			return null;
		}
		
		String responseString = getResponse(post);
		System.out.println(responseString);
		JSONObject responseJson = new JSONObject(responseString);
		JSONObject loginContext = responseJson.getJSONObject("data").getJSONObject("resultctx");
		/*String token = retContext.getString("token");
		String userId = retContext.getString("userid");
		String groupId = retContext.getString("groupid");
		
		
		
		LoginContext context = new LoginContext();
		context.setToken(token);
		context.setGroupId(groupId);
		context.setUserId(userId);*/
		return loginContext;
	}

	private String getResponse(PostMethod post) throws IOException, UnsupportedEncodingException {
		InputStream in = post.getResponseBodyAsStream();
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		int len = -1;
		while((len = in.read()) != -1){
			out.write(len);
		}
		String retStr = new String(out.toByteArray(), "UTF-8");
		return retStr;
	}
	
	private String buildHost(String host, String port) {		
		return "http://" + host + ":" + port + "/umserver/core/";
	}
}
