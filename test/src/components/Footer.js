import telegram from '../images/telegram.png'
import whatsApp from '../images/whatsapp.png'
import viber from '../images/viber.png'
import './Footer.css'
export const Footer = ()=>{
    return(
<div className='footerContainer' >
        <div className='footerElements'>
            <div className='aboutUs'>
                <span className='aboutText'>О компании</span>
                <span style={{paddingTop:'20px'}}>Партнёрская программа</span>
                <span>Вакансии</span>
            </div>
         <div className='menuClass'>
            <span className='aboutText' >Меню</span>
            <span style={{paddingTop:'20px'}}>Расчёт стоимости</span>
            <span className='exptraText'>Услуги</span>
            <span className='exptraText'>Виджеты</span>
            <span className='exptraText' >Интеграции</span>
            <span className='exptraText'>Наши клиенты</span>

         
            <span ></span>
            <span style={{paddingTop:'45px'}}>Кейсы</span>
            <span className='exptraText'>Благодарственные письма</span>
            <span className='exptraText'>Сертификаты</span>
            <span className='exptraText'>Блог на Youtube</span>
            <span className='exptraText'>Вопрос / Ответ</span>
            </div>
            <div className='connectUs'>

                <span className='aboutText'>Контакты</span>
                <div style={{whiteSpace:'nowrap',paddingTop:'20px'}}>+7 555 555-55-55</div>
              <div>  <img src={telegram}/>
                <img src={whatsApp}/>
                <img src={viber}/></div>
                <span>Москва, Путевой проезд 3с1, к 902</span>
            </div>
        </div>
      
<div className='confidentialTerms'><div >©WELBEX 2022. Все права защищены.</div>
<div style={{textDecorationLine:'underline'}}>Политика конфиденциальности</div></div>
        </div>



        
    )
}