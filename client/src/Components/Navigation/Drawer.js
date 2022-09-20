import React, {Component} from 'react';
import {motion} from 'framer-motion';
class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
          this.toggle=this.toggle.bind(this);
          this.toggleOpen=this.toggleOpen.bind(this);
          this.toggleClosed=this.toggleClosed.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {
          window.addEventListener('resize', this.toggleClosed);
    }
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
      toggleOpen(){
            this.setState({
                  ...this.state,
                  open:true
            })
      }
      toggleClosed(){
            this.setState({
                  ...this.state,
                  open:false
            })
      }
      toggle(){
          this.setState({
            ...this.state,
            open:!this.state.open
          })
      }
    render() {
        return (
            <motion.div id={"Drawer"}>
                  <motion.div>
                        <motion.ul>
                              {this.props.items.map((item, index)=>{
                              
                              })}
                        </motion.ul>
                  </motion.div>
            </motion.div>
        );
    }
}

Drawer.propTypes = {};

export default Drawer;
