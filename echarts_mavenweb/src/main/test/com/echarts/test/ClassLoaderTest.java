package com.echarts.test;

import java.net.URL;
import java.net.URLClassLoader;

import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.web.servlet.DispatcherServlet;

public class ClassLoaderTest {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		
		Super parent = new Super();
		parent.setI(10);
		
		
		ClassLoader app = ClassLoaderTest.class.getClassLoader();
		System.out.println(app);
		System.out.println(app.getClass().getClassLoader());
		
		ClassLoader ext = app.getParent();
		System.out.println(ext);
		System.out.println(ext.getClass().getClassLoader());
		
		URL url = new URL("file:/D:/spring-webmvc-4.0.0.RELEASE-sources.jar");
		URLClassLoader urlLoader = new URLClassLoader(new URL[]{url});
		System.out.println("url: " + url.getClass().getClassLoader());
		System.out.println("urlLoader : " + urlLoader);
		System.out.println("urlLoader parent : " + urlLoader.getParent());
		
		Class dispatcherClass = urlLoader.loadClass("org.springframework.web.servlet.DispatcherServlet");
		DispatcherServlet dispatcher = (DispatcherServlet) dispatcherClass.newInstance();
		System.out.println("dispatcherClass : " + dispatcherClass.getClassLoader());
		System.out.println("dispatcher : " + dispatcher.getClass().getClassLoader());
	
		URL url2 = new URL("file:/D:/4.0.0.RELEASE/spring-webmvc-4.0.0.RELEASE-sources.jar");
		URLClassLoader urlLoader2 = new URLClassLoader(new URL[]{url2});
		Class dispatcherClass2 = urlLoader2.loadClass("org.springframework.web.servlet.DispatcherServlet");
		DispatcherServlet dispatcher2 = (DispatcherServlet) dispatcherClass2.newInstance();
		System.out.println("dispatcherClass2 : " + dispatcherClass2.getClassLoader());
		System.out.println("dispatcher2 : " + dispatcher2.getClass().getClassLoader());
		System.out.println(dispatcherClass.equals(dispatcherClass2));
		
		System.out.println("DocumentFactory : " + DocumentBuilderFactory.class.getClassLoader());
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		System.out.println("factoryImpl : " + factory + "; loader : " + factory.getClass().getClassLoader());
	}

}

class Super {
	private int i;
	private String s;
	
	public int getI() {
		return i;
	}
	public void setI(int i) {
		this.i = i;
	}
	public String getS() {
		return s;
	}
	public void setS(String s) {
		this.s = s;
	}
	
	
	
}
