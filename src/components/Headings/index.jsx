import './index.css'

const Headings = ({frontHeading, backHeading}) => {
    return (
        <>
        <div className='HeadingsContainer'>
            <h1 className='frontHeading'>{frontHeading}</h1>
            <h1 className='backHeading'>{backHeading}</h1>
        </div>
        </>
    );

}

export default Headings;