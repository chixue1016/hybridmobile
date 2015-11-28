package com.echarts.utils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class ServiceMapperConfig {
	 private static Map<String, String> summaryServicesMapper = new HashMap<String, String>();
	 private static Map<String, String> detailServicesMapper = new HashMap<String, String>();
	 private static final String[] types = 
			 new String[] { "failureOrg", "failureType", "failureSymptom", "failureReason" }; 
	 
	 static {
		try {
			initConfig();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	 }	
	
    private static void initConfig() throws IOException {
        Properties p = new Properties();     
        p.load(ServiceMapperConfig.class.getResourceAsStream("/service.properties")); 
      
        for ( String type : types) {
		    String summaryKey = "summary.list." + type;
		    summaryServicesMapper.put(type, p.getProperty(summaryKey));
		    String detailKey = "detail.card." + type;
		    detailServicesMapper.put(type, p.getProperty(detailKey));
	    }       
    }
    
    public static String mappedSummaryService( String type ) {
    	return summaryServicesMapper.get(type);
    }
    
    public static String mappedDetailService( String type ) {
    	return detailServicesMapper.get(type);
    }
}
