import React, {Component} from 'react';
import {motion} from 'framer-motion';
import {Menu, MenuSpin} from "motion-ui-react";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state={
        
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
        return (
            <motion.div>
            
            </motion.div>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
