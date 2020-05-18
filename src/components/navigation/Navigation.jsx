import React from "react";
import './navigation.scss'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {routes} from "../routes/router-path";
import {switchModalShow} from '../../actions/modal-actions';
import {actionNavElementItem} from '../../actions/navigation-action';



const Navigation = props => {
    const {switchModalShow, actionNavElementItem, navigationReducer} = props;


    const selectPageHandler = (routes) => {

        const closeModalWindow = false;
        switchModalShow(closeModalWindow);
        actionNavElementItem(routes);
    };
    const mapRoutes = () => {
        let array = [];
        let li;

        for (let item in routes) {

            let isActiveClass = routes[item].title === navigationReducer.title ? 'active_line' : '';
            li = <li key={routes[item].title} onClick={() => selectPageHandler(routes[item].title)}>
                <Link className={isActiveClass} to={routes[item].link}>{routes[item].title}</Link>
            </li>;
            array.push(li)
        }
        return array;
    };

    return (
        <div className='navigation-container'>
            <nav className='navigation-block'>
                <ul className='navigation-ul'>
                    {mapRoutes()}
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = store => {
    const {navigationReducer} = store;

    return {
        navigationReducer
    };
};

const mapDispatchToProps = {
    actionNavElementItem,
    switchModalShow
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

