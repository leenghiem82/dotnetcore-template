import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';
import {Map} from '../map';

export class FullScreen extends React.Component<any, any> {

  control: ol.control.FullScreen;

  options: any = {
    className: undefined,
    label: undefined,
    labelActive: undefined,
    tipLabel: undefined,
    keys: undefined,
    target: undefined,
    source: undefined,
	spanClass: undefined,
	spanActiveClass: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
	if (options.spanClass) {
		let spanElement = document.createElement("span");
		spanElement.className = options.spanClass;
		spanElement.innerText = options.label ? options.label : "";
		options.label = spanElement;
	}

	if (options.spanActiveClass) {
		let spanActiveElement = document.createElement("span");
		spanActiveElement.className = options.spanActiveClass;
		spanActiveElement.innerText = options.labelActive ? options.labelActive : "";
		options.labelActive = spanActiveElement;
	}

    this.control = new ol.control.FullScreen(options);
	this.context.mapComp.controls.push(this.control);

    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }

}

FullScreen['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
