import './CounterButton.css'

function CounterButton({sign, onClick})
{
    return (
        <button className="counterButton" onClick={onClick}>{sign}</button>
    )
}

export default CounterButton;
