var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AreaPerumahanLutech_1 = new ol.format.GeoJSON();
var features_AreaPerumahanLutech_1 = format_AreaPerumahanLutech_1.readFeatures(json_AreaPerumahanLutech_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahanLutech_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanLutech_1.addFeatures(features_AreaPerumahanLutech_1);
var lyr_AreaPerumahanLutech_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanLutech_1, 
                style: style_AreaPerumahanLutech_1,
                popuplayertitle: 'Area Perumahan Lutech',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanLutech_1.png" /> Area Perumahan Lutech'
            });
var format_BlogA_2 = new ol.format.GeoJSON();
var features_BlogA_2 = format_BlogA_2.readFeatures(json_BlogA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlogA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlogA_2.addFeatures(features_BlogA_2);
var lyr_BlogA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlogA_2, 
                style: style_BlogA_2,
                popuplayertitle: 'Blog A',
                interactive: true,
                title: '<img src="styles/legend/BlogA_2.png" /> Blog A'
            });
var format_BlogB_3 = new ol.format.GeoJSON();
var features_BlogB_3 = format_BlogB_3.readFeatures(json_BlogB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlogB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlogB_3.addFeatures(features_BlogB_3);
var lyr_BlogB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlogB_3, 
                style: style_BlogB_3,
                popuplayertitle: 'Blog B',
                interactive: true,
                title: '<img src="styles/legend/BlogB_3.png" /> Blog B'
            });
var format_Fasilitas_4 = new ol.format.GeoJSON();
var features_Fasilitas_4 = format_Fasilitas_4.readFeatures(json_Fasilitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_4.addFeatures(features_Fasilitas_4);
var lyr_Fasilitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_4, 
                style: style_Fasilitas_4,
                popuplayertitle: 'Fasilitas',
                interactive: true,
                title: '<img src="styles/legend/Fasilitas_4.png" /> Fasilitas'
            });
var format_Taman_5 = new ol.format.GeoJSON();
var features_Taman_5 = format_Taman_5.readFeatures(json_Taman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_5.addFeatures(features_Taman_5);
var lyr_Taman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_5, 
                style: style_Taman_5,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_5.png" /> Taman'
            });
var format_JalanKomplek_6 = new ol.format.GeoJSON();
var features_JalanKomplek_6 = format_JalanKomplek_6.readFeatures(json_JalanKomplek_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKomplek_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKomplek_6.addFeatures(features_JalanKomplek_6);
var lyr_JalanKomplek_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKomplek_6, 
                style: style_JalanKomplek_6,
                popuplayertitle: 'Jalan Komplek',
                interactive: true,
                title: '<img src="styles/legend/JalanKomplek_6.png" /> Jalan Komplek'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AreaPerumahanLutech_1.setVisible(true);lyr_BlogA_2.setVisible(true);lyr_BlogB_3.setVisible(true);lyr_Fasilitas_4.setVisible(true);lyr_Taman_5.setVisible(true);lyr_JalanKomplek_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AreaPerumahanLutech_1,lyr_BlogA_2,lyr_BlogB_3,lyr_Fasilitas_4,lyr_Taman_5,lyr_JalanKomplek_6];
lyr_AreaPerumahanLutech_1.set('fieldAliases', {'id': 'id', 'Luas': 'Luas', });
lyr_BlogA_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'LUAS': 'LUAS', 'Status': 'Status', });
lyr_BlogB_3.set('fieldAliases', {'id': 'id', 'LUAS': 'LUAS', 'NAMA': 'NAMA', });
lyr_Fasilitas_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Taman_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_JalanKomplek_6.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', 'Panjang': 'Panjang', });
lyr_AreaPerumahanLutech_1.set('fieldImages', {'id': '', 'Luas': '', });
lyr_BlogA_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'LUAS': 'TextEdit', 'Status': 'TextEdit', });
lyr_BlogB_3.set('fieldImages', {'id': 'TextEdit', 'LUAS': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_Fasilitas_4.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Taman_5.set('fieldImages', {'id': '', 'Nama': '', 'Luas': '', });
lyr_JalanKomplek_6.set('fieldImages', {'id': '', 'Nama Jalan': '', 'Panjang': '', });
lyr_AreaPerumahanLutech_1.set('fieldLabels', {'id': 'no label', 'Luas': 'header label - always visible', });
lyr_BlogA_2.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', 'LUAS': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_BlogB_3.set('fieldLabels', {'id': 'no label', 'LUAS': 'inline label - always visible', 'NAMA': 'header label - always visible', });
lyr_Fasilitas_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - visible with data', });
lyr_Taman_5.set('fieldLabels', {'id': 'no label', 'Nama': 'header label - visible with data', 'Luas': 'header label - visible with data', });
lyr_JalanKomplek_6.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'header label - visible with data', 'Panjang': 'inline label - always visible', });
lyr_JalanKomplek_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});