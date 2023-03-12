import './Content.css'
import lineIcon from '../images/mobileLines.png'
export const Content = ()=>{
    return(
        <div className="titles">
            
            <div className='subTitle1'>
                <span >Зарабатывайте<br/> больше</span>
                    <div className='linearText'>с WELBEX</div>
                        <span className='extraTitle' style={{opacity:'0.8',fontSize:'18px'}}>Развиваем и контролируем<br/> продажи за вас</span>

            </div>
<div className='subTitle2'>
<div style={{gridArea: ' span 2 / span 2',fontSize:'18px',fontWeight:'500'}}><div/><span>Вместе с <span className='linearTextSpan'>бесплатной</span><br/><span className='linearTextSpan'>консультацией</span> мы дарим:</span><div/></div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className='title' ><img className='lineIcon' src={lineIcon}/>Виджеты</div>
    <span className='extraTitles'>30 готовых<br/> решений</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className='title'><img className='lineIcon' src={lineIcon}/>Dashboard</div>
<span className='extraTitles' >с показателями<br/> вашего бизнеса</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <div  className='title'><img className='lineIcon' src={lineIcon}/>Skype Аудит</div>
    <span className='extraTitles' >отдела продаж<br/> и CRM системы</span>
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
    <div   className='title'><img className='lineIcon' src={lineIcon}/>35 дней</div>
    <span className='extraTitles' >использования<br/> CRM</span>
    </div>
    <div style={{gridArea: ' span 2 / span 2'}}>
         <button className='consultationBtn'>Получить консультацию</button>
    </div>
</div>



        </div>
    )
}