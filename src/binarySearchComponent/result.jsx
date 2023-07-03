import React, {Component} from 'react';
import { Button } from 'antd';

class Result extends Component {
    render() {
        return (
          <div>
            <span style={{ fontSize: '1.5em' }}>
              Your number is {this.props.res}
            </span>{' '}
            <br />
            <Button type='primary' onClick={this.props.onRestart}>
              Restart
            </Button>
          </div>
        )
    }
}

export default Result;