package com.echarts.views;

import java.io.OutputStream;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.CollectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

public class MappingJackson2JsonpView extends MappingJackson2JsonView {
	/**
	* Default content type. Overridable as bean property.
	*/	
	public static final String DEFAULT_CONTENT_TYPE = "application/javascript";
	 
	public MappingJackson2JsonpView() {
		super();
	}
	
	@Override
	public String getContentType() {	
		return DEFAULT_CONTENT_TYPE;	
	}
	
	@Override
	public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
		if( "GET".equals(request.getMethod().toUpperCase()) ) {
			Map<String, String[]> params = request.getParameterMap();
			if ( params.containsKey("callback") ) {
				OutputStream out = response.getOutputStream();
				String responseJsonp = params.get("callback")[0] + "(";				
		
				Set<String> renderedAttributes = (!CollectionUtils.isEmpty(getModelKeys()) ? getModelKeys() : model.keySet());
				for (Entry<String, ?> entry : model.entrySet()) {
					if (!(entry.getValue() instanceof BindingResult) && renderedAttributes.contains(entry.getKey())) {					
						responseJsonp += entry.getValue().toString();
					}					
				}
				responseJsonp += ")";
				
				//out.write(model.toString().getBytes());
				//super.render(model, request, response);
				out.write(responseJsonp.getBytes("UTF-8"));
				response.setContentType("application/javascript");
			} else { 
				super.render(model, request, response);
			}			
		} else {
			super.render(model, request, response);
		}
	}
	
	@Override 
	protected Object filterModel(Map<String, Object> model) {
		Set<Object> result = new HashSet<Object>(model.size());
		Set<String> renderedAttributes = (!CollectionUtils.isEmpty(getModelKeys()) ? getModelKeys() : model.keySet());
		for (Map.Entry<String, Object> entry : model.entrySet()) {
			if (!(entry.getValue() instanceof BindingResult) && renderedAttributes.contains(entry.getKey())) {
				result.add(entry.getValue());
			}
		}
		return result;
	}
}
