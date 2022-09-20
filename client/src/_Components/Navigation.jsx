import React, {Component} from 'react';
import {motion} from 'framer-motion';
import "../Styles/Navigation.css";
import {Text} from "@nextui-org/react";
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
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
            <motion.div id={"Navigation"}>
                  <motion.div className={'fixed background-blur centered'} id={"Navbar"}>
                      <motion.div className={"absolute"} id={"Toolbar"}>
                          <Text>h</Text>
                      </motion.div>
                  </motion.div>
                  <motion.div id={"Drawer"}>
                  
                  </motion.div>
                  
            </motion.div>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
