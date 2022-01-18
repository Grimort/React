// import { Fragment } from "react";
// SAME AS BELOW
// const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1> Hello World !!!</h1>
//     </Fragment>
//   );
// };

import PropTypes from "prop-types";

export const FirstApp = ({ hi, subtitle }) => {
  const item = "Hello world";
  return (
    <>
      <h1>{item} !!!</h1>
      <h1>{hi} </h1>
      <p>{subtitle}</p>

      {/* <pre> {JSON.stringify(item)} !!!</pre> */}
      {/* <p> - My First APP -</p> */}
    </>
  );
};

FirstApp.propTypes = {
  hi: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: "Default Subtitle",
};

export default FirstApp;
