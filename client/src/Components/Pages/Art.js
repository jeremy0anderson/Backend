import React, {Component} from 'react';
import art from '../../assets/art.png';
import {ParticleSingleImage} from '../Motion/particle-image';
import {motion} from 'framer-motion';
import hank from '../../assets/hank.png';
class Art extends Component {
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
              <motion.div className={"ParticleContainer"} style={{position: 'relative', top: 100, width: "100v", height: '100vh',}}>
                  <ParticleSingleImage repulse={100} src={hank} density={100} size={3}/>
              </motion.div>
        );
    }
}


export default Art;
