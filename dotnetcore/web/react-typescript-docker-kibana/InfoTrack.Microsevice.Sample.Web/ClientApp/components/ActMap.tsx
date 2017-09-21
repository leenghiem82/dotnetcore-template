import * as ol from 'openlayers';
import * as map from './map/index';
import * as React from 'react';

const iconFeature = new ol.Feature({
	geometry: new ol.geom.Point(
		ol.proj.transform([-72.0704, 46.678], 'EPSG:4326', 'EPSG:3857')
	),
	name: 'Null Island'
});

const marker = new map.custom.style.MarkerStyle('https://openlayers.org/en/v4.0.1/examples/data/icon.png');

export class ActMap extends React.Component<any,any> {
	geocodeControl: any;
	overlay: any;
	geoCoder: any;
	popup: any;

	constructor(prop) {
		super(prop);
		
		this.state = {
			view: new ol.View({
				center: [16600752.15583908, -4202378.213123887],
				zoom: 12
			}),
			interactionType: 'Polygon',
			source: new ol.source.Vector({ features: [iconFeature] })
		}

		this.drawend = this.drawend.bind(this);
	}

	drawend(e) {
		console.log('xxxxxxxxxxxxx, draw end', e);
	}

	geocode = event => {
		const lat = parseFloat(event.detail.lat), lon = parseFloat(event.detail.lon);
		const point = new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326','EPSG:3857'));
		const feature = new ol.Feature({geometry: point, name: 'foo'});
		this.state.source.clear();
		this.state.source.addFeature(feature);
		this.geocodeControl.locate({lon: lon, lat: lat, duration: 2000});
	}

	showPopup = (evt) => {
		this.overlay.setPosition(evt.coordinate);
		var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
		this.geoCoder.reverse(lonlat[0], lonlat[1]).then(result => {
			console.log('address...............', result.address);
			this.popup.setContents(`<b>${result.address}</b>`);
			this.popup.show();
		});
	}

	render() {
		return (
			<map.Map view={this.state.view}>
				<map.Layers>
					<map.layer.Tile />
					<map.layer.Vector 
						style={marker.style}
						source={this.state.source} />
				</map.Layers>
				<map.Controls>
					<map.control.FullScreen spanClass="glyphicon glyphicon-fullscreen" spanActiveClass="glyphicon glyphicon-remove" />
					<map.control.Zoom zoomInSpanClass="glyphicon glyphicon-zoom-in" zoomOutSpanClass="glyphicon glyphicon-zoom-out" />
					<map.custom.control.GeoCoderComponent
						ref={cmp => { console.log('cmp', cmp);
							this.geocodeControl = cmp && cmp.control;
							this.geoCoder = cmp && cmp.geoCoder;
						}}
						provider='google'
						key="AIzaSyCUT8RfSqcd8zruxjqW4CSxK9sX1zr_HjI"
						spanClass="glyphicon glyphicon-search"
						placeholder="Search by address"
						lang="en-US"
						onPlace_changed={this.geocode} />
				</map.Controls>
				<map.Interactions>
					<map.interaction.Draw
						onDrawend={this.drawend}
						type={this.state.interactionType} />
				</map.Interactions>
			</map.Map>
		);
	}
}