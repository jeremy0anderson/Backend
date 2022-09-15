import * as React from "react";
import {motion} from 'framer-motion';
import {Text} from "@nextui-org/react";
import PropTypes, {object} from 'prop-types';





export const skillsArr = [
    {
        skill: 'React',
        link: 'https://cdn.svgporn.com/logos/react.svg',
        progress: "90%"
    },
    {
        skill: 'Javascript',
        link: 'https://cdn.svgporn.com/logos/javascript.svg',
        progress: "100%"
    },
    {
        skill: 'MongoDB',
        link: 'https://cdn.svgporn.com/logos/mongodb.svg',
        progress: "80%"
    },
    {
        skill: 'GraphQL',
        link: 'https://cdn.svgporn.com/logos/graphql.svg',
        progress: "70%"
    },
    {
        skill: 'React/Router',
        link: 'https://cdn.svgporn.com/logos/react-router.svg',
        progress: "90%"
    },
    {
        skill: 'JWT',
        link: 'https://cdn.svgporn.com/logos/jwt-icon.svg',
        progress: "90%"
    },
    {
        skill: 'MUI',
        link: 'https://cdn.svgporn.com/logos/material-ui.svg',
        progress: "90%"
    },
    {
        skill: 'Framer',
        link: 'https://cdn.svgporn.com/logos/framer.svg',
        progress: "80%"
    },
    {
        skill: 'HTML5',
        link: 'https://cdn.svgporn.com/logos/html-5.svg',
        progress: "100%"
    },
    {
        skill: 'CSS3',
        link: 'https://cdn.svgporn.com/logos/css-3.svg',
        progress: "100%"
    },
    {
        skill: 'Express',
        link: 'https://cdn.svgporn.com/logos/express.svg',
        progress: "100%"
    },
    {
        skill: 'Node',
        link: 'https://cdn.svgporn.com/logos/nodejs.svg',
        progress: "100%"
    },
    {
        skill: 'Apollo',
        link: 'https://cdn.svgporn.com/logos/apollostack.svg',
        progress: "80%"
    },
    {
        skill: 'jQuery',
        link: 'https://cdn.svgporn.com/logos/jquery.svg',
        progress: "70%"
    },
    {
        skill: 'Handlebars',
        link: 'https://cdn.svgporn.com/logos/handlebars.svg',
        progress: "100%"
    },
    {
        skill: 'Bulma',
        link: 'https://cdn.svgporn.com/logos/bulma.svg',
        progress: "100%"
    },
    {
        skill: "Sequelize",
        link: "https://cdn.svgporn.com/logos/sequelize.svg",
        progress: "100%"
    },
    {
        skill: 'Socket.io',
        link: 'https://cdn.svgporn.com/logos/socket.io.svg',
        progress: "80%"
    },
    {
        skill: 'WebStorm',
        link: 'https://cdn.svgporn.com/logos/webstorm.svg',
        progress: "100%"
    },
    {
        skill: 'VS Code',
        link: 'https://cdn.svgporn.com/logos/visual-studio-code.svg',
        progress: "100%"
    },
    {
        skill: 'MySQL',
        link: 'https://cdn.svgporn.com/logos/mysql.svg',
        progress: "80%"
    },
    {
        skill: "GitHub",
        link: "https://cdn.svgporn.com/logos/github-icon.svg",
        progress: "90%",
        
    }
];

const containerVariants = {
    hidden:{
        opacity:0,
        y:-50,
        transition: {
            type: 'spring',
            duration:0.7,
            staggerChildren: .045
        }
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            type: "spring", bounce: 0.1,
            duration: 0.8,
            staggerChildren: .045
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y:200,
        transition: {
            type: "spring", bounce: 0.2,
            duration: 0.7,
        }
    },
    visible:delay =>{
        return {
            opacity: 1,
            y:0,
           transition: {
            type: "spring", bounce: 0.2,
               duration: 1
        }
    }
    }
}
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            replay: false
        }
        this.skillRef=React.createRef();
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState, snapshot) {}
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.state !== nextState || this.props !== nextProps || this.context !== nextContext;}
    componentWillUnmount() {}
    toggle(){
        this.setState({...this.state, open:!this.state.open})
    }
    render(){
        const mainBox= {
            hidden: {
                opacity:0,
                transition: {
                    staggerChildren: .045
                }
            },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: .025
                }
            }
        }
        const Div = motion.div;
        const Image = motion.img;
        return(
           <Div
              // layoutScroll={true}
              style={{
                  overflow: 'hidden',
                  width: "100%",
                  padding: 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: "auto"}}
              initial={"hidden"}
              whileInView={"visible"}
              variants={containerVariants}
              id="Skills">
               {this.props.skillSet.map(({skill, link, progress, init}, index)=>{
                   return (
                      <Div
                         className={"single-skill background-blur"}
                         style={{
                             background: `linear-gradient(112deg, hsla(15, 100%, 90%, 0.4) -40%, hsla(290, 100%, 90%, 0.5) 100%)`,
                             borderRadius: 15,
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'center',
                             margin: "5px 5px",
                             overflow: 'hidden',
                             height: 120,
                             width: 120,
                         }}
                         variants={itemVariants}
                         key={skill+"card"+index}
                         whileHover={{scale:1.1}}>
                          
                          <Div
                             
                             style={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                             key={skill+"-img-container"}>
                              <Image className={"single-skill-img"} width={70} height={70} src={link} alt={skill+"-image"}/>
                              <Text
                                 key={skill+"text"}>
                                  {skill}
                              </Text>
                          </Div>
                          
                       </Div>
                   )
               })}
               
           </Div>
        )
    }
}
Skills.propTypes = {
    skillSet: PropTypes.arrayOf(object)
    
}
export default Skills;