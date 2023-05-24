package com.amal;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class sqServlet extends HttpServlet{

	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
	
		int k=(int) req.getAttribute("k");
		k*=k;
		PrintWriter out=res.getWriter();
		out.println("Square is : "+k);	
	}
}
