package com.echarts.test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class SortTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> numbers = new ArrayList<Integer>();
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(1);
		numbers.add(1);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		numbers.add(5);
		numbers.add(2);
		numbers.add(1);
		numbers.add(1);
		numbers.add(2);
		numbers.add(5);
		
		Collections.sort(numbers, new Comparator<Integer>(){

			@Override
			public int compare(Integer num1, Integer num2) {
				// TODO Auto-generated method stub
				if (num1 == num2) return 0;
				return num1 > num2 ? 1 : -1;
			}
			
		});
		
		System.out.println(numbers);
	}

}
