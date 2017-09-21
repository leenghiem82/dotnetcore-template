import * as React from 'react';
import * as ol from 'openlayers';
import {GeoCoderControl} from './geo-coder-control';
import {Util} from '../../util';
import {Map} from '../../map';

export class GeoCoderComponent extends React.Component<any, any> {

  control: GeoCoderControl;
  geoCoder: any;
  searchBox: any;
  
  options: any = {
    provider: undefined,
    key: undefined,
	label: undefined,
	spanClass: undefined,
    placeholder: undefined,
    lang: undefined
  };

  events: any = {
    'place_changed': undefined
  };

  constructor(props) { super(props); }

  render() { 
    return (<div>{this.props.children}</div>);
  }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
	var m : any = document.getElementById('pac-input');
	 new google.maps.places.SearchBox(m);
	  //this.control = new GeoCoderControl(options);
	  //this.geoCoder = this.control.geoCoder;
	  //this.context.mapComp.controls.push(this.control)
	  //this.geoCoder = this.control.geoCoder;

	  //regitster events
	  //let olEvents = Util.getEvents(this.events, this.props);
	  //for(let eventName in olEvents) {
//      this.control.on(eventName, olEvents[eventName]);
	  //}

  }

}

GeoCoderComponent['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
