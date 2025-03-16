var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab1'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Дорожная сеть',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Дорожная сеть'
            });
var format_building_5 = new ol.format.GeoJSON();
var features_building_5 = format_building_5.readFeatures(json_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_5.addFeatures(features_building_5);
var lyr_building_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_5, 
                style: style_building_5,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_5.png" /> building'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_lab1_3.setVisible(true);lyr__4.setVisible(true);lyr_building_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_YandexSatellite_1,lyr_OSMStandard_2,lyr_lab1_3,lyr__4,lyr_building_5];
lyr_lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr__4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'horse': 'horse', 'trail_visi': 'trail_visi', 'descriptio': 'descriptio', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'sac_scale': 'sac_scale', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_building_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'building:levels': 'building:levels', 'shop': 'shop', 'name:ru': 'name:ru', 'amenity': 'amenity', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'addres': 'addres', });
lyr_lab1_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr__4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tracktype': 'TextEdit', 'horse': 'TextEdit', 'trail_visi': 'TextEdit', 'descriptio': 'TextEdit', 'footway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'oneway': 'TextEdit', 'sac_scale': 'TextEdit', 'man_made': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'foot': 'TextEdit', 'service': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_building_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'religion': 'TextEdit', 'training': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'building:levels': 'TextEdit', 'shop': 'TextEdit', 'name:ru': 'TextEdit', 'amenity': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'addres': 'TextEdit', });
lyr_lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr__4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'horse': 'no label', 'trail_visi': 'no label', 'descriptio': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'sac_scale': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_building_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'building:levels': 'no label', 'shop': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'addres': 'no label', });
lyr_building_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});