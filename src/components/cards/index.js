import './index.css'
const   CardItems = (props) => {
    const {userDetails} = props
    const {chainid,dexid,fdv,pairadd,paircreate,pricen,priceu} = userDetails
    console.log(userDetails)
      return (
        <li className='items'>
             <p className='para'>Pair Created At : ${paircreate}</p>
             <p className='para'>ChainID : ${chainid}</p>
             <p className='para'>dexId : ${dexid}</p>
             <p className='para'>fdv : ${fdv}</p>
             <p className='para'>Price Native : ${pricen}</p>
             <p className='para'>Pair USD: ${priceu}</p>
             <p className='para'>Pair Address: ${pairadd}</p>

        </li>
    )

}

export default CardItems