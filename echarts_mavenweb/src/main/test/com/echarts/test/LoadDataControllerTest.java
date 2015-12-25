package com.echarts.test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.echarts.controllers.LoadDataController;
import com.echarts.models.User;

public class LoadDataControllerTest {
	@Test
	public void shouldReturnTheSpecifiedUser() {
		String username = "zcc21";
		User expectedUser = new User();
		expectedUser.setName(username);
		
		LoadDataController controller = new LoadDataController();
		assertEquals(expectedUser.getName(), controller.signIn(username).getName());
	}
}
