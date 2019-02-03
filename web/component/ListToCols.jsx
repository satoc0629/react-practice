/**
 * 列の集合
 */
import React from 'react';

export default class ListToCol extends React.Component {

    /**
     *
     * @param props.list<Object>
     */
    constructor(props) {
        super(props)

    }

    render() {
        let initial = 0
        let keyGenerator = () => {
            initial = initial + 1
            return initial
        }
        return (
            <>
                <div className="list-group">
                    {this.props.list.map(e =>
                        <div className="list-group-item text-center my-auto" key={keyGenerator()}>
                            {e}
                        </div>
                    )
                    }
                </div>
            </>
        )
    }
}