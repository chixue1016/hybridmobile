package com.echarts.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FailureSummary {
	@JsonProperty("id")
	private String id;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("haltedTimes")
	private String haltedTimes;
	
	@JsonProperty("haltedHours")
	private String haltedHours;


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHaltedTimes() {
		return haltedTimes;
	}

	public void setHaltedTimes(String haltedTimes) {
		this.haltedTimes = haltedTimes;
	}

	public String getHaltedHours() {
		return haltedHours;
	}

	public void setHaltedHours(String haltedHours) {
		this.haltedHours = haltedHours;
	}

}
