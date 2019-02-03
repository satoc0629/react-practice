import data from './data'
import * as React from "react";

export default class HierarchyTable extends React.Component {

    /**
     * @param props.consumer 選択結果のリストを引数に取る関数
     */
    constructor(props) {
        super(props)
        this.state = {data: data}
        this.state.data.junkai.map(e => e.items.map(i => i.selected = false))
    }

    render() {
        return (
            <table className={"table table-bordered"}>
                <thead>
                <tr>
                    <th scope="col">level</th>
                    <th scope="col">content</th>
                </tr>
                </thead>
                <tbody className="btn-group-toggle" data-toggle="buttons">
                {this.state.data.junkai.map(e =>
                    <React.Fragment key={e.id}>
                        <tr key={`${e.id}_${e.items[0].id}`}>
                            <td scope="row" rowSpan={e.items.length}>{e.id}</td>
                            <td>
                                <div type={"checkbox"} className={"btn junkai-btn d-flex"}
                                     onClick={() => this.select(e.id, e.items[0])}>
                                    {e.items[0].name}
                                </div>
                            </td>
                        </tr>
                        {
                            e.items.slice(1).map(i =>
                                <tr key={`${e.id}_${i.id}`}>
                                    <td scope="row">
                                        <div type={"checkbox"} className={"btn junkai-btn d-flex"}
                                             onClick={() => this.select(e.id, i)}>
                                            {i.name}
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </React.Fragment>
                )}
                </tbody>
            </table>
        )
    }

    select(dataId, element) {
        let data = this.state.data
        if (element.selected) {
            data.junkai.filter(e => e.id === dataId).map(e => e.items.filter(i => i.id === element.id).map(i => i.selected = false))
        } else {
            data.junkai.filter(e => e.id === dataId).map(e => e.items.filter(i => i.id === element.id).map(i => i.selected = true))
        }
        this.setState({data: data},
            () => this.props.consumer(this.state.data.junkai))
    }
}