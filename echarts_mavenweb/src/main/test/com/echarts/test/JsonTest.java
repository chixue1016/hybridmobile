package com.echarts.test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.echarts.models.User;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonTest {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		ObjectMapper mapper = new ObjectMapper();
		User userA = new User();
		userA.setId("1");
		userA.setName("zcc1");
		User userB = new User();
		userB.setId("2");
		userB.setName("zcc2");
		List<User> users = new ArrayList<User>();
		users.add(userA);
		users.add(userB);
		String jsonUser = mapper.writeValueAsString(users);
		System.out.println(jsonUser);
		
		User[] nextUser = mapper.readValue(jsonUser, User[].class);
		System.out.println(nextUser[1].getId());
	}

}
