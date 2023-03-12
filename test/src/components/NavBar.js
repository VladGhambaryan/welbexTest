import './NavBar.css'
import telegram from '../images/telegram.png'
import whatsApp from '../images/whatsapp.png'
import viber from '../images/viber.png'
import logo from '../images/logo_welbex.png'


export  const NavBar = ()=>{

    return(
<>
        <div className='navCon'>
          <div className='headerTitles'>
              <div className='navLogo'>
                  <img src={logo} width='140px' height='24px'/>

              </div>
              
              <div>Услуги</div>
              <div>Виджеты</div>
              <div>Интеграции</div>
              <div>Кейсы</div>
              <div>Сертификаты</div>

          </div>
          <div className='headerContactUs'>
                <div style={{whiteSpace:'nowrap'}}>+7 555 555-55-55</div>
                <img src={telegram}/>
                <img src={whatsApp}/>
                <img src={viber}/>
            </div>
           
       


        </div>
        <div className='navBarSubTitle' >крупный интегратор CRM в Росcии и ещё 8 странах</div>


</>
    )
}