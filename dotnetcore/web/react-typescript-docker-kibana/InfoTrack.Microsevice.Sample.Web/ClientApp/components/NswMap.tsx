import * as ol from 'openlayers';
import * as map from './map/index';
import * as React from 'react';

export class NswMap extends React.Component<any,any> {
	constructor(prop) {
		super(prop);
		this.state = {
			view: new ol.View({
				center: ol.proj.transform([151.209900, -33.865143], 'EPSG:4326', 'EPSG:3857'),
				zoom: 12,
				minZoom: 5,
				maxZoom: 19
			}),
			source: new ol.source.XYZ({
				url: 'http://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Base_Map/MapServer/tile/{z}/{y}/{x}',
				attributions: [
					new ol.Attribution({
						html: '© Copyright ' + new Date().getFullYear() + ' LPI'
					})
				]
			})
		}
	}

	render() {
		return (
			<map.Map view={this.state.view}>
				<map.Layers>
					<map.layer.Tile source={this.state.source}  />
				</map.Layers>
			</map.Map>
		);
	}
}