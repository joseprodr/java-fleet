package com.fleet.servlets;

import com.fleet.dao.ContratoDao;
import com.fleet.dao.ProyectoDao;
import com.google.gson.Gson;
import java.io.IOException;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/proyectoSv")
public class ProyectoSv extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

       String nombre = request.getParameter("nombre");
       String codigo = request.getParameter("codigo");
       String contrato = request.getParameter("contrato");


        Map<String, String> respuesta = new LinkedHashMap<>();
        Gson gson = new Gson();
        String json = null;

        try {
            ProyectoDao cd = new ProyectoDao();
            cd.insert(nombre, codigo,contrato);
            respuesta.put("Exito", "Proyecto registrado correctamente");
            json = gson.toJson(respuesta);
        } catch (SQLException | ClassNotFoundException ex) {
            respuesta.put("Error", "Error desconocido "+ex.getMessage());
            json = gson.toJson(respuesta);

        } finally {
            response.getWriter().write(json);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        processRequest(req, resp);
    }
}
