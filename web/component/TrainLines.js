import * as React from "react"
// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

// スタイルシートを読み込む
import '../index.scss';
import data from './data'

export default class TrainLines extends React.Component {


    constructor(props) {
        super(props)
        this.state = {data: data}
        this.state.data.lines.map(e => e.selected = undefined)
    }

    render() {
        return (
            <>
                <div className={""}>路線リスト</div>
                <div className="card-group bg-light">
                    {
                        this.state.data.lines.map((line) =>
                            <button type="button" className={"card btn btn-outline-light"} data-toggle="button"
                                    aria-pressed="false" autoComplete="off" onClick={this.selected.bind(this, line)}
                                    key={line.id}
                            >
                                <div className={""}>
                                    <img className={"card-img-top border border-white rounded-circle"}
                                         src={this.state.data.icons.filter(e => e.id === line.id)[0].src}/>
                                    <div className={"card-body"}>
                                        <p className="card-text" key={line.id}>{line.id + ":" + line.name}</p>
                                    </div>
                                </div>
                            </button>
                        )
                    }
                </div>
                <div>
                    {this.state.data.lines.filter(l => l.selected).map(t =>
                        <>
                            <div>{t.name}</div>
                            <div className={"row bg-light"} key={t.id}>
                                {
                                    this.state.data.bases.filter(base => base.lineid === t.id).map(b =>

                                        <div className={"card card-body border border-primary col-md-4"} key={b.id}>
                                            <p className={"card-text"} key={b.id}>
                                                {b.id + ':' + b.name}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    }

    selected(line) {
        console.log("selected : " + line.selected)
        if (!line.selected) {
            this.state.data.lines.filter(e => e.id === line.id)[0].selected = true
        } else {
            this.state.data.lines.filter(e => e.id === line.id)[0].selected = false
        }
        this.setState({data: this.state.data})
        this.state.data.lines.map(e =>
            console.log(e.id + "(" + e.name + ") : " + e.selected)
        )
    }
}