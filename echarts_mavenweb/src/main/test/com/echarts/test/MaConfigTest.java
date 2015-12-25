package com.echarts.test;

import java.io.IOException;

import com.echarts.utils.MaConfig;

public class MaConfigTest {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		MaConfig config = MaConfig.getConfig();
		System.out.println(config.url);
	}

}
