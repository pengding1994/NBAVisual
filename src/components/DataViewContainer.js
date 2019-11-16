import React from 'react';
import { ShotChart } from './ShotChart';
import { Slider, InputNumber, Row, Col } from 'antd';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
    };

    handleMinCountChange = (minCount) => {
        this.setState({ minCount })
    };

    render() {
        const { playerId } = this.props;
        const { minCount } = this.state;
        return (
            <div className="data-view">
                <ShotChart playerId={playerId} minCount={minCount}/>
                <div className="filters">
                    <Row>
                        <Col span={12}>
                            <Slider
                                min={1}
                                max={20}
                                onChange={this.handleMinCountChange}
                                value={typeof minCount === 'number' ? minCount : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ marginLeft: 16 }}
                                value={minCount}
                                onChange={this.handleMinCountChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
