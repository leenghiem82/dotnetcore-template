import * as ol from 'openlayers';
import * as map from './map/index';
import * as React from 'react';

let view = new ol.View({
	center: [16138132.437689442, -4551054.994842214],
	zoom: 10
});

export class VicMap extends React.Component<any,any> {
	constructor(prop) {
		super(prop);
		this.state = {
			view: new ol.View({
				center: [16138132.437689442, -4551054.994842214],
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