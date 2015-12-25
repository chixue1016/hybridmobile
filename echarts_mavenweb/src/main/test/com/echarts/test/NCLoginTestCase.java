package com.echarts.test;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.multipart.MultipartRequestEntity;
import org.apache.commons.httpclient.methods.multipart.Part;
import org.apache.commons.httpclient.methods.multipart.StringPart;
import org.json.JSONObject;



import junit.framework.TestCase;

public class NCLoginTestCase extends TestCase {
	
	private HttpClient client = null;
	private PostMethod post = null;

	protected void setUp() throws Exception {
		client = new HttpClient();
		post = new PostMethod("http://10.1.72.79:80/umserver/core");
	}

	protected void tearDown() throws Exception {
		super.tearDown();
	}
	
	public void testNCLogin(){
		try {
			JSONObject dataJson = new JSONObject();
			//appcontext
			JSONObject appcontext = new JSONObject();
			appcontext.put("appid", "A04500.nc.yonyou.com");
			appcontext.put("user", "zhoud");
			appcontext.put("pass", "yonyou1");
			dataJson.put("appcontext", appcontext);
			//servicecontext
			JSONObject servicecontext = new JSONObject();
			servicecontext.put("action", "umLogin");
			servicecontext.put("actionid", "umLogin");
			servicecontext.put("callback", "");
			servicecontext.put("actionname", "umLogin");
			servicecontext.put("funcode", "A04500");
			dataJson.put("servicecontext", servicecontext);
			//deviceinfo
			JSONObject deviceinfo = new JSONObject();
			deviceinfo.put("devid", "39769b68352204061039923");
			deviceinfo.put("style", "android");
			deviceinfo.put("versionname", "1.0.0.0");
			dataJson.put("deviceinfo", deviceinfo);
			//serviceid
			String serviceid = "ncLoginService";
			dataJson.put("serviceid", serviceid);
			
			String dataStr = dataJson.toString();
			NameValuePair[] pair = new NameValuePair[]{
					new NameValuePair("tp", "none"),
					new NameValuePair("data", dataStr)
			};
			post.setQueryString(pair);
			int status = client.executeMethod(post);
			if(status == HttpStatus.SC_OK){
				byte[] response = post.getResponseBody();
				String res = new String(response);
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


