import ReactDom from 'react-dom'
import Application from './page/Application'
import React from "react"
// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';

// スタイルシートを読み込む
import './index.scss';

ReactDom.render(<Application/>, document.getElementById('app'))
