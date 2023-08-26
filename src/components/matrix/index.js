import {Component} from 'react'


import CardItems from '../cards/index'

import './index.css'

class Matrix extends Component {
    state = {yes:true,no:false,searchInput:'',displayResult:{},check:false}
    apple = () => {
        this.setState(prevState => ({
            yes: true,
            no:false
          }));
    }
    applee = () => {
        this.setState(prevState => ({
            no: true,
            yes:false
          }));
    }

    searchvalue = (event) => {
        console.log(event.target.value)
        this.setState({searchInput:event.target.value})

    }

    fetching = async() => {
        const {searchInput} = this.state
        try {
            const searchResponse = await fetch(`https://api.dexscreener.io/latest/dex/search?q=${searchInput}`)
            const searchData = await searchResponse.json()
            console.log(searchData)
            const m = searchData["pairs"]
            const updatedData = m.map((p) => ({
                chainid:p.chainId,
               dexid: p.dexId,
                fdv:p.fdv,
               pairadd: p.pairAddress,
               paircreate: p.pairCreatedAt,
               pricen: p.priceNative,
               priceu:p.priceUsd
              }));
              console.log(updatedData)
            const up = updatedData.slice(0,4)
            this.setState(pre => (
                {
                    displayResult:up,
                    check:true,
                    searchInput:''
                }
            ))
        }
        catch(error){
            console.log('error while fecting')
        }
    }

    fetching1 = async() => {
        const {searchInput} = this.state
        try {
            const searchResponse = await fetch(`https://api.dexscreener.io/latest/dex/tokens/${searchInput}`)
            const searchData = await searchResponse.json()
            console.log(searchData)
            const m = searchData["pairs"]
            console.log(m)
            const updatedData = m.map((p) => ({
                chainid:p.chainId,
               dexid: p.dexId,
                fdv:p.fdv,
               pairadd: p.pairAddress,
               paircreate: p.pairCreatedAt,
               pricen: p.priceNative,
               priceu:p.priceUsd
              }));
              console.log(updatedData)
            const up = updatedData.slice(0,4)
            this.setState(pre => (
                {
                    displayResult:up,
                    check:true,
                    searchInput:''
                }
            ))
            
        }
        catch(error){
            console.log('error while fecting')
        }
    }

   surya = () => {
     const{yes} = this.state
     if(yes === true){
        this.fetching1()
     }
     else{
        this.fetching()
     }
  }
    render() {
        const {yes,no,searchInput,displayResult,check} = this.state
        console.log(displayResult)
        const back = yes?'cross1':'cross'
        const bull =  no?'cross1':'cross'
        const headvalue = yes?'Token Search Results':'Pair Address Search Results'
        console.log(back)
        return (
            
            
            <div className='flexing'>
            <div className = 'side-bar'>
            <div>
                <div className='cross'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
  <path d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z" fill="white"/>
</svg>
                <h1 className='net-head'>
                 NFTify
                </h1>
                </div>
                <div className={back} onClick = {this.apple}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z" fill="white"/>
                </svg>
                <h1 className='address'>
                Token Address
                </h1>
                </div>
                <div className = {bull} onClick={this.applee}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z" fill="white"/>
                </svg>
                <h1 className='address'>
                    Pair Address
                </h1>
                </div>
                </div>
                <div  className = "cross2">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="34" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_32_78)">
                    <path d="M17.981 0H6C2.70476 0 0 2.70476 0 6.01905V18C0 21.2952 2.70476 24 6 24H17.981C21.2952 24 24 21.2952 24 17.981V6.01905C24 2.70476 21.2952 0 17.981 0ZM15.219 12H12.9524V19.4286H10.0952V12H8.57143V8.95238H9.90476V7.65714C9.90476 6.4381 10.5143 4.51429 13.0857 4.51429H15.4286V7.04762H13.7714C13.5048 7.04762 13.1429 7.21905 13.1429 7.80952V8.95238H15.4857L15.219 12Z" fill="#F30050"/>
                </g>
                <defs>
                    <clipPath id="clip0_32_78">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="34" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_32_82)">
                <path d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM7.99366 19.4227H4.5678V9.52578H7.99366V19.4227ZM6.2617 8.00318C5.29104 8.00318 4.51071 7.22284 4.51071 6.25219C4.51071 5.28153 5.29104 4.50119 6.2617 4.50119C7.23236 4.50119 8.01269 5.28153 8.01269 6.25219C7.99366 7.22284 7.21332 8.00318 6.2617 8.00318ZM19.4322 19.4227H19.4132H16.5583V14.6265C16.5583 13.4655 16.406 11.981 14.8263 11.981C13.2086 11.981 12.9421 13.2371 12.9421 14.5504V19.4227H10.0872V9.52578H12.7518V10.8581H12.8279C13.2466 10.0968 14.2173 9.50675 15.7399 9.50675C18.8803 9.50675 19.4322 11.3148 19.4322 13.9984V19.4227Z" fill="#F30050"/>
                </g>
                <defs>
                <clipPath id="clip0_32_82">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="34" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_32_86)">
                    <path d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM17.9477 8.99287C17.9477 9.1261 17.9477 9.25932 17.9477 9.39255C17.9477 13.3894 14.8644 17.9952 9.21174 17.9952C7.47978 17.9952 5.86201 17.5004 4.51071 16.6439C4.75813 16.663 4.98652 16.682 5.23394 16.682C6.68041 16.682 7.99366 16.2062 9.04044 15.3878C7.68914 15.3688 6.56622 14.4933 6.16653 13.2942C6.35686 13.3323 6.54718 13.3513 6.73751 13.3513C7.023 13.3513 7.30849 13.3132 7.55591 13.2371C6.18557 12.9516 5.13878 11.7336 5.13878 10.268V10.23C5.51943 10.4584 6.01427 10.5916 6.50912 10.6106C5.69072 10.0777 5.13878 9.14513 5.13878 8.09834C5.13878 7.5464 5.29104 7.03252 5.55749 6.57574C7.0801 8.40286 9.32593 9.60191 11.8763 9.73514C11.8192 9.50675 11.8002 9.27836 11.8002 9.04997C11.8002 7.3751 13.1705 6.0238 14.8644 6.0238C15.7399 6.0238 16.5393 6.38541 17.1102 6.97542C17.8144 6.84219 18.4615 6.59477 19.0515 6.23315C18.8232 6.93736 18.3283 7.52736 17.7002 7.90801C18.3283 7.83188 18.9183 7.67962 19.4703 7.4322C19.0515 8.04124 18.5377 8.57415 17.9477 8.99287Z" fill="#F30050"/>
                </g>
                <defs>
                    <clipPath id="clip0_32_86">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                </div>
            </div>
            <div className='bg-Container'> 
                <div className='cross10'>
                    <input type ="text"  className='search' placeholder='search' onChange={this.searchvalue}
                     value = {searchInput}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18" fill="none" onClick={this.surya}>
                      <path d="M7.2365 4.37598e-08C8.61202 -0.000151186 9.9591 0.391678 11.1199 1.12959C12.2808 1.8675 13.2073 2.92092 13.7909 4.16646C14.3746 5.412 14.5912 6.79807 14.4154 8.1623C14.2396 9.52653 13.6787 10.8124 12.7984 11.8693L17.79 16.8609C17.8766 16.9413 17.94 17.0436 17.9733 17.157C18.0066 17.2704 18.0088 17.3907 17.9795 17.5052C17.9502 17.6197 17.8906 17.7242 17.8069 17.8076C17.7233 17.8911 17.6186 17.9504 17.504 17.9794C17.3897 18.0087 17.2695 18.0067 17.1562 17.9735C17.0429 17.9403 16.9406 17.8772 16.8601 17.7908L11.8685 12.7992C10.9753 13.5429 9.91608 14.0606 8.78051 14.3084C7.64494 14.5562 6.46639 14.5268 5.34455 14.2229C4.22272 13.9189 3.19059 13.3492 2.33549 12.5619C1.48039 11.7747 0.82746 10.7931 0.431939 9.70022C0.0364171 8.60731 -0.0900637 7.43521 0.0631954 6.28307C0.216454 5.13094 0.644945 4.03266 1.31242 3.08114C1.9799 2.12962 2.86672 1.35285 3.89788 0.816543C4.92905 0.280232 6.07421 0.000153495 7.2365 4.37598e-08ZM1.31495 7.23739C1.31495 8.01501 1.46811 8.78502 1.7657 9.50345C2.06328 10.2219 2.49946 10.8747 3.04933 11.4245C3.5992 11.9744 4.25199 12.4106 4.97042 12.7081C5.68886 13.0057 6.45887 13.1589 7.2365 13.1589C8.01413 13.1589 8.78415 13.0057 9.50258 12.7081C10.221 12.4106 10.8738 11.9744 11.4237 11.4245C11.9735 10.8747 12.4097 10.2219 12.7073 9.50345C13.0049 8.78502 13.1581 8.01501 13.1581 7.23739C13.1581 5.66691 12.5342 4.16075 11.4237 3.05026C10.3132 1.93976 8.807 1.31589 7.2365 1.31589C5.66601 1.31589 4.15984 1.93976 3.04933 3.05026C1.93882 4.16075 1.31495 5.66691 1.31495 7.23739Z" fill="white"/>
                      </svg>
                   <div className='connect'>
                    <p className='surya'>connect</p>
                   </div>
                </div>
                <h1 className='mainHeading'>
                 {headvalue}
                </h1>
                <div>
                <ul className="list-container">
          {check &&  displayResult.map(eachUser => (
            <CardItems
              userDetails={eachUser}
              key={eachUser.fdv}
            />
          ))}
        </ul>
                </div>
                </div>

            </div>
   
    
        )
    }
}

export default Matrix