/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.fao.unredd.servlet;

import it.geosolutions.unredd.services.data.CategoryPOJO;
import it.geosolutions.unredd.services.data.ModelDomainNames;
import it.geosolutions.unredd.services.data.ResourcePOJO;
import it.geosolutions.unredd.services.data.utils.ResourceDecorator;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.fao.unredd.Util;

/**
 *
 * @author sgiaccio
 * @author DamianoG (first revision v2.0)
 */
public class LayerUpdateReprocess extends AdminGUIAbstractServlet {
     
    /**
     * 
     */
    private static final long serialVersionUID = 8526394477976603977L;

    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Long   layerId   = Long.parseLong(request.getParameter("layerUpdateId"));
        
        ResourcePOJO unreddLayerUpdateRes = manager.getResource(layerId, false);
        if(!CategoryPOJO.LAYERUPDATE.equals(unreddLayerUpdateRes.getCategory())){
            throw new IOException("The requested resource with Layer id '" + layerId + "' is not a LayerUpdate resource as expected... this should never happen...");
        }
        ResourceDecorator unreddLayerUpdate = new ResourceDecorator(unreddLayerUpdateRes);
        
        String layerName = unreddLayerUpdate.getFirstAttributeValue(ModelDomainNames.LAYERUPDATE_LAYER);
        String year      = unreddLayerUpdate.getFirstAttributeValue(ModelDomainNames.LAYERUPDATE_YEAR);
        String month     = unreddLayerUpdate.getFirstAttributeValue(ModelDomainNames.LAYERUPDATE_MONTH);
        
        //System.out.println("Saving flow config: " + Util.getGeostoreFlowSaveDir(getServletContext()) + File.separator + "reprocess"); // DEBUG
        Util.saveReprocessFile(getServletContext(), getXml(layerName, year, month), Util.getGeostoreFlowSaveDir(getServletContext()));
        
        //RequestDispatcher rd = request.getRequestDispatcher("LayerUpdateList?layer=" + layerName);
        //rd.forward(request, response);
        response.sendRedirect("LayerUpdateList?layer=" + layerName);
    }

    private String getXml(String layerName, String year, String month) {
        StringBuilder xml = new StringBuilder("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n");
        xml.append("<ReprocessLayer>\n");
        xml.append("\t<layerName>").append(layerName).append("</layerName>\n");
        if (month != null) xml.append("\t<month>").append(month).append("</month>\n");
        xml.append("\t<year>").append(year).append("</year>\n");
        xml.append("</ReprocessLayer>\n");
        
        return xml.toString();
    }
}
