import {Popup} from './popup';
import {ClusterStyle} from './style/cluster-style';
import {MarkerStyle} from './style/marker-style';
import {GeoCoderControl} from './control/geo-coder-control';
import {GeoCoderComponent} from './control/geo-coder-component';

let custom = {
  style: {
    MarkerStyle: MarkerStyle,
    ClusterStyle: ClusterStyle
  },
  Popup: Popup,
  control: {
	  GeoCoderControl: GeoCoderControl,
	  GeoCoderComponent: GeoCoderComponent
  }
};

export {custom};

