import './Next.css'

const Next = ({next, setNext}) => {

    const handleNext = () => {
        setNext(!next);
    }

    return (
        <button onClick={handleNext} className="next">Next</button>
    )
}

export default Next;