import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from '../util';
import {Map} from '../map';

export class Zoom extends React.Component<any, any> {

  control: ol.control.Zoom;

  options: any = {
    duration: undefined,
    className: undefined,
    zoomInLabel: undefined,
    zoomOutLabel: undefined,
    zoomInTipLabel: undefined,
    zoomOutTipLabel: undefined,
    zoomInSpanClass: undefined,
    zoomOutSpanClass: undefined,
    delta: undefined
  };

  events: any = {
    'change': undefined,
    'propertychange': undefined
  };

  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    if (options.zoomInSpanClass) {
		let spanInElement = document.createElement("span");
		spanInElement.className = options.zoomInSpanClass;
		spanInElement.innerText = options.zoomInLabel ? options.zoomInLabel : "";
		options.zoomInLabel = spanInElement;
	}

	if (options.zoomOutSpanClass) {
		let spanOutElement = document.createElement("span");
		spanOutElement.className = options.zoomOutSpanClass;
		spanOutElement.innerText = options.zoomOutLabel ? options.zoomOutLabel : "";
		options.zoomOutLabel = spanOutElement;
	}

	this.control = new ol.control.Zoom(options);
	this.context.mapComp.controls.push(this.control);
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }
  }
}

Zoom['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
