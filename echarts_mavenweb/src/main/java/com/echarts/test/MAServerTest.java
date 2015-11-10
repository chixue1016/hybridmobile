package com.echarts.test;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.multipart.MultipartRequestEntity;
import org.apache.commons.httpclient.methods.multipart.Part;
import org.apache.commons.httpclient.methods.multipart.StringPart;
import org.json.JSONObject;

import com.yonyou.uap.um.security.UMProtocolManager;

import junit.framework.TestCase;


public class MAServerTest extends TestCase {

	private HttpClient client = null;
	private PostMethod post = null;
	
	protected void setUp() throws Exception {
		client = new HttpClient();
		post = new PostMethod("http://10.1.72.79:80/umserver/core");
	}

	public void test(){
		try {
			JSONObject dataJson = new JSONObject();
			//appcontext
			JSONObject appcontext = new JSONObject();
			appcontext.put("appid", "A04500.nc.yonyou.com");
			appcontext.put("user", "zhoud");
			appcontext.put("pass", "yonyou1");
			//appcontext.put("token", "00000150d08bc7a139423538363245303345333236313338333342394430334541443730333343442e7365727665723293e21333b73280c9523745445598d5044c4ef625614f25e5f5ad8200000150d08bc7a1");
			dataJson.put("appcontext", appcontext);
			//servicecontext
			JSONObject servicecontext = new JSONObject();
			servicecontext.put("action", "loadTodayFill");
			servicecontext.put("actionid", "loadTodayFill");
			servicecontext.put("callback", "nothing");
			servicecontext.put("actionname", "loadTodayFill");
			servicecontext.put("viewid", "nc.mob.ui.am.controller.NCAMFailureController");
			JSONObject params = new JSONObject();
			params.put("groupid","0001A1100000000005TN");
			params.put("userid","1001A1100000000001KM");			
			servicecontext.put("params", params);
			dataJson.put("servicecontext", servicecontext);
			//deviceinfo
			JSONObject deviceinfo = new JSONObject();
			deviceinfo.put("devid", "1ca8a699000519126075");
			deviceinfo.put("style", "android");
			deviceinfo.put("versionname", "1.0.0");//android
			deviceinfo.put("", "android");
			deviceinfo.put("appverion", "1.0.0");//ios
			
			dataJson.put("deviceinfo", deviceinfo);
			//serviceid
			String serviceid = "umCommonService";
			dataJson.put("serviceid", serviceid);
			
			String dataStr = dataJson.toString();
			
			String tpStr = "none";//none
			StringPart tp = new StringPart("tp", tpStr);
		
			dataStr = UMProtocolManager.getEncryption(tpStr).decode(dataStr);
			StringPart data = new StringPart("data", dataStr);
			
			Part[] parts = new Part[]{tp,data};
			post.setRequestEntity(new MultipartRequestEntity(parts, post.getParams()));
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
				assertEquals("1", retJson.getJSONObject("data").getString("code"));
			}
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}


}

