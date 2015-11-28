package com.echarts.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.util.Properties;

public class MaConfig {
	 public String url, appId, funCode, viewId;
	 private static MaConfig instance;

	private MaConfig() {
    }
	
	public static MaConfig getConfig() throws IOException {
		if (instance == null) {
			instance = createConfig();
		}
		return instance;
	}
	
    private static MaConfig createConfig() throws IOException {
        final Properties p = new Properties();     
        p.load(MaConfig.class.getResourceAsStream("/ma.properties")); 

        final MaConfig c = new MaConfig();

        //c.url = URI.create(p.getProperty("ma.server.url"));
        c.url 		= p.getProperty("ma.server.url");
        c.appId 	= p.getProperty("ma.server.appid");
        c.funCode 	= p.getProperty("ma.server.funcode");
        c.viewId 	= p.getProperty("ma.server.viewid");       

        return c;
    }
}
