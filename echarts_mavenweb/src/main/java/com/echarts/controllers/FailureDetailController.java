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
import org.apache.commons.lang.StringUtils;

@Controller
public class FailureDetailController {
	private static final String BEGIN_TIME_OF_ONE_MONTH		= "01 00:00:00";
	private static final String LAST_TIME_OF_ONE_MONTH		= "31 23:59:59";
	
	@RequestMapping("/failureDetail.jsonp")
	public JSONObject loadFailureDetail(
			@RequestParam String user, 
			@RequestParam String password,
			@RequestParam String groupId,
			@RequestParam String userId,
			@RequestParam String token,
			@RequestParam String startMonth,
			@RequestParam String endMonth,
			@RequestParam String summaryType,
			@RequestParam String id,
			@RequestParam(value="detailId", required=false) String detailId) throws Exception {	

		String mappedSummaryDataIdName = mappedSummaryDataIdNameFor(summaryType);
		// ²ÎÊý
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("userid",  userId);
		parameters.put("groupid", groupId);
		parameters.put(mappedSummaryDataIdName,  id);
		parameters.put("bmonth",  beginTimeOf(startMonth)); 
		parameters.put("emonth",  lastTimeOf(endMonth));
		if (StringUtils.isNotEmpty(detailId)) {
			parameters.put("pk_failure_type", detailId);
		}
		
		String action = ServiceMapperConfig.mappedDetailService(summaryType);
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
		JSONObject datasJson = responseJson.getJSONObject("data").getJSONObject("resultctx");
		return datasJson;
	/*	JSONArray failureTypeDetailsJson = datasJosn.getJSONArray("failureType");
		JSONArray failureReasonDetailsJson = datasJosn.getJSONArray("failureReason");
		JSONArray failureSymptomDetailsJson = datasJosn.getJSONArray("failureSymptom");
		
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
	
	private String mappedSummaryDataIdNameFor(String summaryType) {
		// TODO Auto-generated method stub
		String result = "";
		switch(summaryType) {
		case "failureOrg" :
			result = "pk_org";
			break;
		case "failureType" :
			result = "pk_failure_type";
			break;
		case "failureReason" :
			result = "pk_failure_symptom";
			break;
		case "failureSymptom" :
			result = "pk_failure_symptom";
			break;
		default:
			result = "";
		}
		return result;
	}

	private String beginTimeOf(String month) {
		return month + "-" + BEGIN_TIME_OF_ONE_MONTH;
	}
	
	private String lastTimeOf(String month) {
		return month + "-" + LAST_TIME_OF_ONE_MONTH;
	}
}
