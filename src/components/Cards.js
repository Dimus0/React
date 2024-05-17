import React, { useState } from "react";
import CardItem from './CardItem';
import './css/Cards.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Cards() {
    const [isOpen, setIsOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    const togglePopup = (content) => {
        setPopupContent(content);
        setIsOpen(!isOpen);
    }

    return (
        <div className="cards">
            <h1>News of the day!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/roma-napoli.jpg'
                            text='Roma snatched a draw against Napoli thanks to Abrahams debut goal - place in the Champions League is under threat'
                            label='Matches'
                            onClick={() => togglePopup({
                                image: 'images/roma-napoli.jpg',
                                title: 'Roma vs Napoli Match',
                                description: 'England international Abraham, who had last scored on April 29 last year, missed almost the whole of this season after tearing knee ligaments at the end of the last campaign. But the substitute striker was on hand in the 88th minute to nod home a perfect flick-on at a corner from Evan Ndicka, who started in defence after being cleared to play following his on-pitch collapse at Udinese earlier this month."I told myself for the corner just get myself in the right place and luckily I was there to score," Abraham told DAZN. Ive dreamed about this moment since the beginning of the season. I had a difficult injury and it was all about getting myself ready, my mind ready.'
                            })}
                        />
                        <CardItem
                            src='images/rebrov.jpg'
                            text='Ребров лікує егоїзм Шевченка, Динамо відмилося для Європи, розбірки майбутніх тренерів збірної'
                            label='Ukraine'
                            onClick={() => togglePopup({
                                image: 'images/rebrov.jpg',
                                title: 'Ребров лікує егоїзм Шевченка, Динамо відмилося для Європи, розбірки майбутніх тренерів збірної',
                                description: 'На черзі у нас 1996 рік, протягом якого Динамо оформило четверте чемпіонство в історії, яке дозволило взяти участь у наступній єврокампанії. Шубний скандал вдалося замяти. Чи не найголовнішою новиною 1996-го став анонс повернення до українського футболу Валерія Васильовича Лобановського, а також переїзд з Білорусі двох майбутніх легенд – Валентина Белькевича і Олександра Хацкевича.'
                            })}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/ronald-arahu.jpg'
                            text='Manchester United set their sights on Barcelonas leader - Mancunians ready to outbid Bayern Munich'
                            label='NEWS'
                            onClick={() => togglePopup({
                                image: 'images/ronald-arahu.jpg',
                                title: 'Manchester United Targeting Barcelona Leader',
                                description: 'More information about Manchester United\'s interest in Barcelona\'s leader'
                            })}
                        />
                        <CardItem
                            src='images/ancheloti.jpg'
                            text='Анчелотті, Мічел, Сімеоне серед претендентів на звання найкращого тренера сезону в Ла Лізі'
                            label='Ла Ліга'
                            onClick={() => togglePopup({
                                image: 'images/ancheloti.jpg',
                                title: 'La Liga Best Coach Candidates',
                                description: 'Анчелотті, Мічел, Сімеоне серед претендентів на звання найкращого тренера сезону в Ла Лізі'
                            })}
                        />
                        <CardItem
                            src='images/messi.jpg'
                            text='Мессі не прийшов в МЛС догравати: Ліонель проводить найкращий індивідуальний сезон в історії ліги'
                            label='Інтер Маямі'
                            onClick={() => togglePopup({
                                image: 'images/messi.jpg',
                                title: 'Messi in MLS',
                                description: 'Якщо і були якісь сумніви в тому, що Ліонель Мессі прийшов у МЛС грати, а не догравати, то вони розвіялися в першій грі цього сезону, коли він в черговий раз змусив всіх замовкнути.Захисник Реал Солт-Лейк впав на газон без будь-якої причини. В цей час Мессі з мячем прямував прямо на нього. Ендрю Броуді ще корчився від болю на краю штрафного.Свистка не було. Граємо далі. Замість того, щоб зупинитись, Мессі влаштував один із найвеселіших і водночас неповажних моментів у своїй кар’єрі: він перекинув м’яч через Броуді, оббіг суперника, підхопив його та пробив по воротах.Я був фішкою на землі, — сказав Броуді після матчу.'
                            })}
                        />
                    </ul>
                </div>
            </div>
            <Popup open={isOpen} onClose={() => setIsOpen(false)} closeOnDocumentClick contentStyle={{border: "30px"}} >
                <div className='popup-content'>
                    <img src={popupContent.image} alt={popupContent.title} className='popup-image' />
                    <h2>{popupContent.title}</h2>
                    <p>{popupContent.description}</p>
                </div>
            </Popup>
        </div>
    )
}

export default Cards;
