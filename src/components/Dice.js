function Dice(props) {
    // console.log('dice', props);
    const styles = {
        backgroundColor: props.isHeld ? '#59E391': 'white'
    }
    return (
        <div onClick={() => props.holdDice(props.id)} className="dice-face" style={styles}>
            <h2>{props.value}</h2>
        </div>
    )
}

export default Dice;