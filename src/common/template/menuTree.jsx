import React from 'react'

export default props => (
    <li className="treeView">
        <a href>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
            <icon className="fa fa-angle-left pull-right"></icon>
        </a>
        <ul className="treeview-menu">
            {props.children}
        </ul>
    </li>
)