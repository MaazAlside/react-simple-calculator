interface NumberProps {

    number: string;
    onClick: () => void;

  }

function Number(props: NumberProps){

    return (
        <>
        <button className="number" onClick={props.onClick}>
            {props.number}
        </button>
        </>
    )
}

export default Number;