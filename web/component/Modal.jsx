import * as React from "react";

export default class Modal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{display: 'block'}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}