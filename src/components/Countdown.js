import React from "react";

function Countdown(props) {
    const [number, setNumber] = React.useState(0);
    let interval = null;

    // React.useEffect(()=> {
    //  interval= setInterval(() => {
    //     setNumber(prevNum => prevNum + 1);
    // },1000)

    // return () => clearInterval(interval);
    // }, [])

  return <div>{number}s</div>;
}

export default Countdown;
