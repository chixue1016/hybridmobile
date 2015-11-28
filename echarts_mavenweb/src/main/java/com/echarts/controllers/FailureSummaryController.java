package com.echarts.controllers;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.echarts.utils.MaConfig;
import com.echarts.utils.MaRequestBuilder;
import com.echarts.utils.ServiceMapperConfig;

@Controller
public class FailureSummaryController {
	private static final String BEGIN_TIME_OF_ONE_MONTH		= "01 00:00:00";
	private static final String LAST_TIME_OF_ONE_MONTH		= "31 23:59:59";	
	
	@RequestMapping("/failureSummary.jsonp")
	public JSONObject loadFailureSummary(
			@RequestParam String user, 
			@RequestParam String password,
			@RequestParam String groupId,
			@RequestParam String userId,
			@RequestParam String token,
			@RequestParam String startMonth,
			@RequestParam String endMonth,
			@RequestParam String summaryType) throws Exception {	

		// ²ÎÊý
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("userid",  userId);
		parameters.put("groupid", groupId);
		parameters.put("bmonth",  beginTimeOf(startMonth)); 
		parameters.put("emonth",  lastTimeOf(endMonth));
		
		String action = ServiceMapperConfig.mappedSummaryService(summaryType);
		MaRequestBuilder builder = new MaRequestBuilder();
		builder.commonService()
			   .actionName(action)
			   .parameters(parameters)
			   .user(user)
			   .password(password)
			   .token(token)			   
			   .build();
		
		HttpClient client = new HttpClient();
		String url = MaConfig.getConfig().url;
		PostMethod post = new PostMethod(url);
		post.setQueryString(builder.getRequest());
		
		int status = client.executeMethod(post);		
		if(status != HttpStatus.SC_OK){
			return null;		
		}
		
		String responseString = post.getResponseBodyAsString();			
		//responseString = new String(out.toByteArray(), "UTF-8");
		System.out.println(responseString);
		JSONObject responseJson = new JSONObject(responseString);
		
		JSONObject summariesJson =	responseJson
				.getJSONObject("data")
				.getJSONObject("resultctx");
				//.getJSONArray("data");
		
		return summariesJson;
		/*
		List<FailureSummary> summaries = new ArrayList<FailureSummary>();
		for (int i = 0; i < summariesJson.length(); i++) {
			JSONObject oneSummaryJson = summariesJson.getJSONObject(i);
			FailureSummary oneSummary = new FailureSummary();
			oneSummary.setId(oneSummaryJson.getString("id"));
			oneSummary.setName(oneSummaryJson.getString("name"));
			oneSummary.setHaltedTimes(oneSummaryJson.getString("haltedTimes"));
			oneSummary.setHaltedHours(oneSummaryJson.getString("haltedHours"));			
			summaries.add(oneSummary);
		}
		
		return summaries;*/
	}	
	
	private String beginTimeOf(String month) {
		return month + "-" + BEGIN_TIME_OF_ONE_MONTH;
	}
	
	private String lastTimeOf(String month) {
		return month + "-" + LAST_TIME_OF_ONE_MONTH;
	}
}
