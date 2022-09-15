import React from "react";
import {motion} from 'framer-motion';
function LogoFn() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 0.3 + i * 0.5;
            return {
                pathLength: 1.01,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 2.5},
                    opacity: { delay, duration: 0.1 }
                }
            };
        }
    };
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 3334 3334"
            inital={"hidden"}
            animate={"visible"}
        >
            <motion.path fill="none" d="M0 0H3333.33V3333.33H0z" variants={draw} custom={1}/>
            <motion.g variants={draw} custom={1}>
                <motion.path variants={draw} custom={1} fill="url(#_Linear1)" d="M0 0H3333.33V3333.33H0z"></motion.path>
                <motion.g variants={draw} custom={1} fill="none" fillRule="nonzero" stroke="#000" strokeWidth="25">
                    <motion.path variants={draw} custom={1} d="M2112.19 0v2079.25c0 105.825-17.082 187.775-51.252 245.862-34.165 58.088-88.3 102.371-162.391 132.854-74.096 30.479-161.051 45.721-260.863 45.721-99.813 0-112.205-24.049-112.205-24.049M1530.65 2485.75l-125.277-148.37M1525.48 2474.46v858.871"></motion.path>
                    <motion.path variants={draw} custom={1} d="M1523.86 2233.82v-878.106c0-169.893 294.974-208.578 294.974-38.686"></motion.path>
                </motion.g>
                <motion.path
                    variants={draw} custom={1}
                    fillRule="nonzero"
                    stroke="#000"
                    strokeWidth="12.5"
                    d="M1530.65 2874.82s247.219 59.471 474.303 8.299c482.64-108.759 444.12-597.992 444.12-597.992s-1.61-297.314-1.61-406.451c0-187.297 193.558-184.353 193.558 2.945 0 412.006-.622 414.667-.622 414.667h154.642v-820.772c0-217.481-534.627-217.481-534.627 0v807.253c0 105.825-21.201 187.775-63.607 245.862-42.401 58.088-109.585 102.377-201.538 132.854-253.54 84.035-463.001 21.672-463.001 21.672l-1.618 191.663zM1807.32 582.709s-247.219-59.47-474.303-8.299c-482.64 108.76-444.12 597.993-444.12 597.993s1.61 297.314 1.61 406.451c0 187.297-193.557 184.352-193.557-2.945 0-412.006.622-414.668.622-414.668H542.93v820.773c0 217.481 534.626 217.481 534.626 0v-807.253c0-105.825 21.201-187.775 63.608-245.862 42.401-58.088 109.584-102.377 201.538-132.855 253.539-84.035 463-21.671 463-21.671l1.618-191.664z"
                ></motion.path>
                <motion.path
                    variants={draw} custom={1}
                    fillRule="nonzero"
                    d="M1221.28 1995.98l181.98 1.195c0 122.366 9.005 140.911 44.607 176.514 35.602 35.602 84.734 53.487 147.567 53.487 46.333 0 86.321-9.633 119.958-28.9 33.638-19.267 56.804-45.433 69.5-78.504 12.692-33.071 19.042-85.838 19.042-158.3V.002h184.696v1951.98c0 105.825-14.121 187.775-42.367 245.863-28.242 58.087-72.992 102.37-134.237 132.854-61.25 30.479-133.13 45.721-215.638 45.721-122.496 0-216.275-31.921-281.329-95.759-65.058-63.837-96.317-158.729-93.779-284.679z"
                ></motion.path>
                <motion.path
                    variants={draw}
                    custom={1}
                    fillRule="nonzero"
                    d="M1988.49 1300.21l-179.021 62.232c0-180.583-68.599-256.281-195.133-256.281-46.334 0-86.321 9.634-119.959 28.9-33.637 19.267-56.804 45.434-69.5 78.504-12.691 33.071-19.041 85.838-19.041 158.3v1961.47H1221.14v-1951.98c0-105.825 14.121-187.775 42.367-245.862 28.241-58.088 72.991-102.371 134.237-132.855 61.25-30.479 133.129-45.72 215.638-45.72 122.495 0 216.275 31.921 281.329 95.758 65.058 63.838 96.316 121.582 93.779 247.532z"
                ></motion.path>
            </motion.g>
            {/*<defs>*/}
                {/*<linearGradient*/}
                {/*    id="_Linear1"*/}
                {/*    x1="0"*/}
                {/*    x2="1"*/}
                {/*    y1="0"*/}
                {/*    y2="0"*/}
                {/*    gradientTransform={{rotate:45, scale:4714.04}}*/}
                {/*    gradientUnits="userSpaceOnUse"*/}
                {/*>*/}
                {/*    <stop offset="0" stopColor="#db4a00"></stop>*/}
                {/*    <stop offset="0.15" stopColor="#ff3400"></stop>*/}
                {/*    <stop offset="0.81" stopColor="#ce0e2c"></stop>*/}
                {/*    <stop offset="1" stopColor="#cb0037"></stop>*/}
                {/*</linearGradient>*/}
            {/*</defs>*/}
        </motion.svg>
    );
}
const LogoRef = React.forwardRef((props, ref)=>{
    return <LogoFn ref={ref} {...props}/>
}), Logo = motion(LogoRef);


export default LogoFn;