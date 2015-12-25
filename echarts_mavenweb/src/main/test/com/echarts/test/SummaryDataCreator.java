package com.echarts.test;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;

public class SummaryDataCreator {
	private static final String[] types = new String[] {
			"failureOrg", "failureType", "failureReason", "failureSymptom"
	};
	private static final String JS_FILE_EXTENSION 	= "js";
	private static final String JSON_FILE_EXTENSION	= "json";
	
	private static int DETAILS_COUNT 	= 6;
	private static int SUMMARIES_COUNT 	= 200;
	
	public static JSONObject createSummaries( String summaryType ) throws IOException {		
		String name = mappedTypeName(summaryType);
		JSONArray summariesJson = new JSONArray();
		Random random = new Random(100);
		for (int i = 1; i < SUMMARIES_COUNT + 1; i++) {
			JSONObject oneSummary = new JSONObject();
			oneSummary.put("id", i);
			oneSummary.put("name", name + " #" + i);
			oneSummary.put("haltedTimes", random.nextInt(100));
			oneSummary.put("haltedHours", random.nextInt(200));
			summariesJson.put(oneSummary);
		}
		
		JSONObject result = new JSONObject();
		result.put("data", summariesJson);
		
		return result;
		
	}
	
	// 详情数据
	public static JSONObject createDetails ( String summaryType ) {
		JSONObject result = new JSONObject();
		for (int i = 1; i < SUMMARIES_COUNT + 1; i++) {
			JSONObject oneDetail = createDetail( summaryType );			
			result.put(String.valueOf(i), oneDetail);			
		}
		return result;
	}
	public static JSONObject createDetail ( String summaryType, String id) {
		JSONObject result = new JSONObject();		
		JSONObject oneDetail = createDetail( summaryType );			
		
		return result;
	}
	
	private static JSONObject createDetail ( String summaryType ) {
		JSONObject typeDetails = new JSONObject();
		for (String type : types) {			
			if (summaryType.equals(type)) {
				continue;
			}
			
			JSONArray oneTypeDetail = nameAndValuesFor( type );
			typeDetails.put(type, oneTypeDetail);
		}	
		
		return typeDetails;
	}
	private static JSONArray nameAndValuesFor( String type ) {
		Random random = new Random();
		String name = mappedTypeName(type);
		JSONArray details = new JSONArray();
		for ( int i = 1; i < DETAILS_COUNT + 1; i++ ) {
			JSONObject oneDetail = new JSONObject();
			oneDetail.put("name", name + " #" + i);
			oneDetail.put("value", random.nextInt(100));
			details.put(oneDetail);
		}
	
		return details;	
	}
	
	// 生成JS变量数据
	public static String createJsVariableData(String summaryType, boolean summaried ) throws IOException {
		
		JSONObject datasJson = ( summaried ) ?  createSummaries( summaryType ) : createDetails(summaryType);
	
		String postfixedName = ( summaried ) ?  "Summaries" : "Details";	
		String first = summaryType.substring(0, 1);
		String typeName = summaryType.replaceFirst(first, first.toUpperCase());
		String variableName = "pseudo" + typeName + postfixedName;
		
		String variableString = "var " + variableName + " = " + datasJson.toString() + ";";
		
		return variableString;
	}
	
	public static void createEachFileForOneType(String summaryType, String fileExtension, boolean summaried) throws IOException {
		String postfixedName = ( summaried ) ?  "Summaries" : "Details";
		File file = new File( summaryType + postfixedName + "_" + SUMMARIES_COUNT + "." + fileExtension);
		System.out.println(file.getAbsolutePath());
		FileWriter writer = new FileWriter(file);
		writer.write(createJsVariableData( summaryType, summaried ));
		writer.close();
	}
	
	public static void createOneFileForAllTypes( String fileExtension, boolean summaried) throws IOException {		
		StringBuilder builder = new StringBuilder();
		for (String type : types) {			
			builder.append( createJsVariableData( type, summaried ) + "\n" );			
		}
		String prefixedName = ( summaried ) ?  "summaryDatas" : "detailDatas";
		File file = new File( prefixedName + "_" + SUMMARIES_COUNT + "." + fileExtension );
		FileWriter writer = new FileWriter(file);
		writer.write(builder.toString());
		writer.close();
	}
	
	public static void main(String[] args) throws IOException {		
		int count = 2000;
		for (String type : types) {
			createEachFileForOneType(type, JS_FILE_EXTENSION, true);
			createEachFileForOneType(type, JS_FILE_EXTENSION, false);
		}
		
		createOneFileForAllTypes(JS_FILE_EXTENSION, true);	
		createOneFileForAllTypes(JS_FILE_EXTENSION, false);	
		
	
	}
	
	private static String mappedTypeName( String type ) {
		String name;
		switch ( type ) {
		case "failureOrg" :
			name = "故障组织";
			break;
		case "failureType" :
			name = "故障类别";
			break;
		case "failureReason" :
			name = "故障原因";
			break;
		case "failureSymptom" :
			name = "故障现象";
			break;
		default :
			name = "";
		}
		return name;
		
	}
}
