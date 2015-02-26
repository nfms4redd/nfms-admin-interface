<%@page import="it.geosolutions.unredd.services.data.ResourcePOJO"%>
<%@page import="org.apache.commons.lang.StringEscapeUtils"%>
<%@page import="java.util.List"%>
<%@page import="org.fao.unredd.servlet.StatsDefDelete"%>
<%@page import="org.fao.unredd.LayerManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="bodyContent">
        <h1>Layer</h1>
        <h2>${layer.name}</h2>
        <table class="edit">
            <tr>
                <th>
                    Layer type
                </td>
                <th>
                    ${layer.layerType}
                </td>
            </tr>
            <tr>
                <td title="Absolute path where the geotiff has to be copied in, during ingestion flow">
                    Staging mosaic path
                </td>
                <td>
                    ${layer.mosaicPath}
                </td>
            </tr>
            <tr>
                <td title="Absolute path where the geotiff has to be copied in, during publish flow">
                    Dissemination mosaic path
                </td>
                <td>
                    ${layer.dissMosaicPath}
                </td>
            </tr>
            <tr>
                <td title="Relative path where the orig/ data has to be moved in">
                    Destination original data absolute path
                </td>
                <td>
                    ${layer.origDataDestPath}
                </td>
            </tr>
            <tr>
                <td title="Raster width in pixels">
                    Pixel width
                </td>
                <td>
                    ${layer.rasterPixelWidth}
                </td>
            </tr>
            <tr>
                <td title="Raster height in pixels">
                    Pixel height
                </td>
                <td>
                    ${layer.rasterPixelHeight}
                </td>
            </tr>
            <tr>
                <td title="Min x bound">
                    Min x
                </td>
                <td>
                    ${layer.rasterX0}
                </td>
            </tr>
            <tr>
                <td title="Max x bound">
                    Max x
                </td>
                <td>
                    ${layer.rasterX1}
                </td>
            </tr>
            <tr>
                <td title="Min y bound">
                    Min y
                </td>
                <td>
                    ${layer.rasterY0}
                </td>
            </tr>
            <tr>
                <td title="Max y bound">
                    Max y
                </td>
                <td>
                    ${layer.rasterY1}
                </td>
            </tr>
            <%
                if ("vector".equals(((LayerManager)request.getAttribute("layer")).getLayerType())) {
            %>
                <tr>
                    <td title="Name of the numeric feature attribute to set in the raster">
                        Attribute name
                    </td>
                    <td>
                        ${layer.rasterAttribName}
                    </td>
                </tr>
                <tr>
                    <td title="Optional CQL filter used to filter the features to be reported on the raster">
                        CQL filter
                    </td>
                    <td>
                        ${layer.rasterCqlFiletr}
                    </td>
                </tr>
                <tr>
                    <td title="No-data value for the raster">
                        No-data value
                    </td>
                    <td>
                        ${layer.rasterNoData}
                    </td>
                </tr>
            <% } %>
            <tr>
                <td title="No-data value for the raster">
                    <a class="btn btn-primary btn-sm" role="button" href="LayerUpdateList?layer=${layer.name}">Layer Updates</a>
                </td>
                <td>
                    <%
                        List<ResourcePOJO> layerUpdates = (List<ResourcePOJO>)request.getAttribute("layerUpdates");
                        for (ResourcePOJO res : layerUpdates) {
                    %>
                            <%= res.getName() %>
                            <br>
                    <%
                        }
                    %>
                </td>
            </tr>
            <tr>
                <td title="No-data value for the raster">
                    <a class="btn btn-primary btn-sm" role="button" href="StatsDefList?layer=${layer.name}">Stats Defs</a>
                </td>
                <td>
                    <%
                        List<ResourcePOJO> statsDefs = (List<ResourcePOJO>)request.getAttribute("statsDefs");
                        for (ResourcePOJO res : statsDefs) {
                    %>
                            <a href="StatsDefShow?name=<%= res.getName() %>"><%= res.getName() %></a>
                            <br>
                    <%
                        }
                    %>
                </td>
            </tr>
            <tr>
                <td title="Name of the numeric feature attribute to set in the raster">
                    Data
                </td>
                <td>
                    <pre><%= StringEscapeUtils.escapeHtml((String)request.getAttribute("storedData")) %></pre>
                </td>
            </tr>
        </table>
        <div id="tools">
            <a class="btn btn-primary btn-sm" role="button" href="LayerEditForm?id=${layer.id}">edit</a>
        </div>
</c:set>

<t:mainlayout>
	${bodyContent}
</t:mainlayout>