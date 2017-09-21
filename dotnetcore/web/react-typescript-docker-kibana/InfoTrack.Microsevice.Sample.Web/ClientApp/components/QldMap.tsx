import * as ol from 'openlayers';
import * as map from './map/index';
import * as React from 'react';

export class QldMap extends React.Component<any,any> {
	constructor(prop) {
		super(prop);
		this.state = {
			view: new ol.View({
				center: [17038317.337256964, -3178480.09644102],
				zoom: 10
			})
		}
	}

	render() {
		return (
			<map.Map view={this.state.view}>
				<map.Layers>
					<map.layer.Tile />
				</map.Layers>
			</map.Map>
		);
	}
}