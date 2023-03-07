
import { useState } from 'react'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import './Confirm.css'







function ConfirmList({cart, setCart}){

  function Delete(x){
    let redata = cart.filter((item)=>{
      return item.id !== x
    })
    setCart(redata)
  }

  return cart.map((item,index) => {
    return(
      <figure key={index}>
                  <p><img src={item.img} alt={item.product}/></p>
                  <figcaption>
                    <dl>
                      <dt>예약정보</dt>
                      <dd>{item.id + item.people + item.total}</dd>
                    </dl>
                    <dl>
                      <dt>예약상품</dt>
                      <dd>{item.product}</dd>
                    </dl>
                    <dl>
                      <dt>예약자</dt>
                      <dd>{item.uname}</dd>
                    </dl>
                    <dl>
                      <dt>전화번호</dt>
                      <dd>{item.tel}</dd>
                    </dl>
                    <dl>
                      <dt>예약인원</dt>
                      <dd>{item.people}</dd>
                    </dl>
                    <dl>
                      <dt>총가격</dt>
                      <dd>{item.total}</dd>
                    </dl>            
                  </figcaption>
                  <p id='conclose'><FaTrashAlt onClick={() => {Delete(item.id)}}/></p>
                </figure>
    )
  })
}




function Confirm({cart,setCart}){
  const [query,setQuery] = useState('')

  let CFdata = cart.filter((item) => {
    return (item.product.toLowerCase().includes(query.toLowerCase()) || item.uname.toLowerCase().includes(query.toLocaleLowerCase())|| item.tel.includes(query)
    )
  })

 

  if(cart.length <= 0){
    return(
      <article id='empty'>
        <h2>비었습니다</h2>
      </article>
    )
  }


  return(
    <article id='confirm'>
      <h2>Confrim</h2>
      <div id="conwrap">
        <div id="cosearch">
          <form>
            <fieldset>
              <label htmlFor="csearch"><FaSearch/></label>
              <input type='text' id="csearch" name="csearch" onChange={(e) => setQuery(e.target.value)}/>
            </fieldset>
          </form>
        </div>
        <div id="condata">
            <ConfirmList cart = {CFdata} setCart ={setCart} />
        </div>
      </div>
    </article>

  )
}


export default Confirm