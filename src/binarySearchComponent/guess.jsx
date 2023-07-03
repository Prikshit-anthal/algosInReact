import React, {Component} from 'react';
import RangeSlider from "./doubleSlider";
import { Button } from 'antd/lib/radio';

class Guess extends Component {
    render() {
        return (
            <div >
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <center style={{justifyContent:"center"}}>
                            <RangeSlider
                                upper={this.props.upper}
                                lower={this.props.lower}
                                max={this.props.max}
                            />
                        </center>
                    </div>
                </div>

               <h1 style={{fontSize:'2.5em'}}>
                    Is you number greater than {this.getMid()}?
                </h1> <br />
                <Button
                    className='btn btn-lg btn-success m-2'
                    onClick={this.props.yesButton}
                >Yes</Button>
                <Button
                    className='btn btn-lg btn-danger m-2'
                    onClick={this.props.noButton}
                >No</Button> <br/>
            </div>
        );
    }
    getMid = () => {
        const mid = Math.floor( (this.props.upper+this.props.lower)/2);
        return mid;
    }
}

export default Guess;