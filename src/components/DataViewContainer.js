import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    };

    handleMinCountChange = _.debounce((minCount) => {
        console.log(`handleMinCountChange, ${minCount}`);
        this.setState({ minCount })
    }, 500);

    render() {
        const { playerId } = this.props;
        const { minCount } = this.state;
        return (
            <div className="data-view">
                <ShotChart playerId={playerId} minCount={minCount}/>
                <div className="filters">
                    <CountSlider handleMinCountChange={this.handleMinCountChange} defaultValue={2}/>
                </div>
            </div>
        );
    }
}
