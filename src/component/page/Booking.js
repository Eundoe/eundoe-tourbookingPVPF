import { useState } from "react"
import './Booking.css'
import $ from 'jquery'
import { FaSortAmountDown, FaSearch, FaPlusCircle, FaMinusCircle, FaSortAmountUp} from 'react-icons/fa'



function BookDetail({item, format, setRegist, setCart, cart}){

  function Minus(){
    setRegist((format)=>{return {...format,people : format.people - 1}})
    if (format.people <= 0){
      window.alert('0명 보다 적은인원은 안됩니다.')
      setRegist((format) => {return {...format,people: 0}})
    }
    setRegist((format) => {return {...format, total: format.people * item.price}})
  }

  function Plus(){
    setRegist((format)=>{return {...format,people : format.people + 1}})
    if(format.people >= 30){
      window.alert('30명 이상의 단체손님은 별도 문의해주세요')
      setRegist((format) => {return {...format,people: 30}})
    }
    setRegist((format) => {return {...format, total: format.people * item.price}})
  }

  function ClientName(x){
    setRegist((format) => {return {...format, uname: x}})
  }
  function ClientTel(x){
    setRegist((format) => {return {...format, tel: x}})
  }


  function Check(){
    if(format.uname === "" || format.tel === 0 || format.people ===0){
      let alertList = []
      if (format.uname === ""){
        alertList.push('이름')
      }
      if (format.tel === 0){
        alertList.push('전화번호')
      }
      if (format.people === 0){
        alertList.push('인원수')
      }
      window.alert(`${alertList.join(',')}을 입력해주세요`)
      return false
    }
    else{
      Reserve()
    }
  }




  function Reserve(){
    setRegist((format) => {return {...format, id: format.id + 1}})
    setCart((cart) => {return [...cart, format]})
    
  }

return(
  <div id="reserve">
  <form>
    <fieldset>
      <ul>
        <li>
          <label htmlFor="uname">이름</label>
          <input type='text' id="uname" onChange={(e) => {ClientName(e.target.value)}}  />
        </li>
        <li>
          <label htmlFor="tell">연락처</label>
          <input type='tel' id="tell" onChange={(e) => {ClientTel(e.target.value)}} />
        </li>
        <li>
          <button><FaMinusCircle onClick={(e) => {Minus(); e.preventDefault();
          }}/></button>
          <span>{format.people}명</span>
          <button><FaPlusCircle onClick={(e) => {Plus(); e.preventDefault();
          }}/></button>
        </li>
      </ul>
      <div>
        <dl>
          <dt>총액</dt>
          <dd>{format.people * item.price}원</dd>
        </dl>
        <button onClick={(e) => {Check(); e.preventDefault()}}>예약하기</button>
      </div>
    </fieldset>
  </form>
</div>
)

}




function Plist({FiltData, setCart, cart}){
  const arr1 = FiltData
  const [regist,setRegist] = useState(
    {
      id : 0,
      product : "",
      uname : "",
      tel : 0,
      people : 0,
      total : 0,
      img : ''
    } 
  )

  function Clear(item){
    setRegist((regist) => {return {...regist,product : item.product,
    uname:'',people:0,total:0,img: item.img,tel : 0}})
  }
  
  function Toggling(e){
    let checkIn = $(e).parents('figure').next('div#reserve:not(:animated)').css('display')
    let trig = document.querySelectorAll('figcaption#detail>p>span')
    for(let i = 0 ; i < trig.length ; i++){
      trig[i].textContent = 'more_down'
      trig[i].classList.add("material-symbols-outlined")
  
    }

    if (checkIn === 'none'){
        $('div#reserve').slideUp(100)
        $(e).parents('figure').next('div#reserve').slideDown(100)
        e.textContent = 'more_up'
        e.classList.add("material-symbols-outlined")
    }
    if(checkIn === 'block'){
      $(e).parents('figure').next('div#reserve:not(:animated)').slideUp(100)
    
  }
  }

  return (arr1.map((item,index) => {  
    return (
          <li key={index}>
            <figure>
              <p><img src={item.img} alt={item.product}/></p>
              <figcaption id="detail">
                <dl>
                  <dt>상품명</dt>
                  <dd>{item.product}</dd>
                </dl>
                <dl>
                  <dt>관람일</dt>
                  <dd>{item.schedule.join(',')}</dd>
                </dl>
                <dl>
                  <dt>가격</dt>
                  <dd>{item.price}원</dd>
                </dl>
                <p type-value={index}><span className="material-symbols-outlined"  onClick={(e) => {Toggling(e.target); Clear(item)}}>
      more_down
      </span></p>
              </figcaption>
            </figure>
            <BookDetail item = {item} format = {regist} setRegist = {setRegist} setCart = {setCart} cart = {cart}/>
        </li>
    )
  }))
}

function BSerach({setQuery}){
  return(
    <form>
          <fieldset>
            <label htmlFor="bsearch"><FaSearch/></label>
            <input type='text' id="bsearch" name="bsearch"
            onChange={(e) => {setQuery(e.target.value)}}/>
          </fieldset>
    </form>
  )
}

function BSort({setMsort, setSsort}){
  return(
    <div id="sort">
    <ul>
      <li onClick={() => {setMsort
      ('default')}}>Default</li>
      <li onClick={() => {setMsort
      ('heritage')}}>Heritage</li>
      <li onClick={() => {setMsort
      ('entertain')}}>Entertain</li>
    </ul>
    <ul>
      <li><FaSortAmountUp onClick={() => {setSsort('olim')}}/></li>
      <li><FaSortAmountDown onClick={() => {setSsort('nlim')}}/></li>
    </ul>
    </div>
  )
}




function Booking({Bdata, setCart, cart}){
  const [query,setQuery] = useState('')
  const [msort,setMsort] = useState('default')
  const [ssort,setSsort] = useState('olim')

  let FiltData = Bdata.filter((item) => {
    if(msort === 'default'){
      return(
        Bdata && item.product.toLowerCase().includes(query.toLowerCase())
      )
    }
    return(
      item.type === msort && item.product.toLowerCase().includes(query.toLowerCase())
    )
  }).sort((a,b) => {
    let order = (ssort === 'olim') ? 1 : -1
    return (a.price < b.price) ? -1 * order : 1 * order
  })

  return(
    <article id="book">
      <h2>Booking system</h2>
      <div id="search">
        <BSerach setQuery = {setQuery}/>
        <BSort setMsort = {setMsort} setSsort = {setSsort}/>
      </div>
      <div id="bookwrap">
        <ul>
          <Plist FiltData = {FiltData} setCart = {setCart} cart = {cart}/>
        </ul>
      </div>
    </article>
  )
}


export default Booking