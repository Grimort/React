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

const FirstApp = ({ hi }) => {
  const item = "Hello world";
  return (
    <>
      <h1>{item} !!!</h1>
      <h1>{hi} !!!</h1>

      {/* <pre> {JSON.stringify(item)} !!!</pre> */}
      <p> - My First APP -</p>
    </>
  );
};

FirstApp.propTypes = {
  hi: PropTypes.string.isRequired,
};

export default FirstApp;
