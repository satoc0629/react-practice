import * as React from 'react';
import TrainLines from 'component/TrainLines'

export default class Application extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h1>Application Page
                </h1>
                <TrainLines/>
            </div>
        );
    }

}