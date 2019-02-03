import * as React from 'react';
import HierarchyTable from "../component/HierarchyTable";
import Modal from "../component/Modal";

export default class Application extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <h1>Application Page</h1>
                <HierarchyTable
                    consumer={(junkai) => {
                        if (junkai && junkai.length !== 0)
                            junkai.map(e => {
                                e.items.filter(i=>i.selected).map(i =>
                                    console.log(`${i.id}:${i.name}`)
                                )
                            })
                    }
                    }/>
            </div>
        )
    }


}