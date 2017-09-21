import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NswMap }  from './NswMap';
import { VicMap }  from './VicMap';
import { QldMap }  from './QldMap';
import { ActMap }  from './ActMap';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
	render() {
		return (
			<div>
				<input id="pac-input" type="text" placeholder="Search by address" />
				<ActMap />
			</div>
		);

	}
}