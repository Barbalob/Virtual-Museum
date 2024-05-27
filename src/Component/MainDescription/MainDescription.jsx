import React from 'react';
import './MainDescription.scss'
import srcGold from "../../assets/gold.svg"

const MainDescription = () => {
    return (
        <div className='main-description'>
            {/* <h2 className='main-description-title'>Добро пожаловать<br/> в музей</h2> */}
            <img src={srcGold} alt="" className="decor"/>
            <p className="main-description-text">Рубеж XVII–XVIII вв. как для Британии, так и для России стал периодом кризиса, переходом от «культуры духа» к «культуре разума». Уход от ренессансных моделей институционального развития, связанный с глубинной перестройкой механизмов осуществления власти, культуры и знания, не мог не отразиться на бытовых практиках воспитания, обучения, формирования семьи, рождения ребенка и пр. Трансформация нравственных постулатов и ценностей в процессе преодоления системного кризиса переходной эпохи оказала существенное влияния на последующее развитие Британии и России.
                <br/><br/>В событийной истории двух стран этого периода усматривается немало сходного. «Кризис середины XVII века» в полной мере проявился в истории Англии и России: «смута», «папистская угроза», династический кризис. И даже 1649 г. стал, может быть, самым значимым в том и другом случае. Казнь короля Карла I Стюарта в Англии и принятие Соборного Уложения 1649 г. в России могут рассматриваться в качестве решающего «акта» в противоборстве «старого» и «нового», шире – победы нового «служилого сословия» над старой аристократической элитой. 
                <br/><br/>Естественная история стала подосновой для развития гражданской и моральной философии, положив начало формированию современных образовательных институций. Развитие визуальных практик позволило осуществить переформатирование традиционных мировоззренческих установок, привнеся новые подходы в стратегии репрезентации географического пространства и мира природы – флоры и фауны. Многочисленные культурные, религиозные и бытовые нормы были подвергнуты пересмотру и обсуждению как в трудах отдельных мыслителей, так и среди членов вновь образовавшихся сообществ. 
                <br/><br/>Общим «местом» становится и начало активной колониальной экспансии во второй половине XVI – XVII в., имеющей в значительной степени спорадический характер. Решающая победа над воинственным «другим/чужим» как для России (татарская угроза), так и для Англии (Испания) относится к 80-м гг. XVI в. (поход Ермака Тимофеевича в Сибирь 1581 г. и победа над Непобедимой армадой 1588 г.). Еще одно немаловажное «совпадение» – ранг «Великой державы» и та, и другая держава получают в результате серии победоносных войн первой четверти XVIII в.
                <br/><br/>Великий проект эпохи Просвещения как идеи прогрессивного развития человечества испытывает сегодня серьезные вызовы современности – «стандартизация» жизни человека, глобализация, а также дискуссия о том, что следует понимать под прогрессивным развитием человечества. В значительной степени эти явления были порождены модернизационными процессами в европейских странах Нового времени. Истоки этих процессов берут свое начало в системном кризисе переходной эпохи XVII–XVIII вв., их преодоление напрямую связано с ее перепрочтением – декодированием – через властные репрезентации идентичности человека в целостности единого культурного пространства. Проект призван, используя цифровые возможности современного образования, представить значимые для современного человека концепты в виде информационного ресурса. Обращение к сопоставительному анализу интеллектуальных практик в британской и русской культурах переходной эпохи дает возможность декодировки кризиса нравственных постулатов и ценностей современного человека. 
                <br/><br/>Однако не подлежит никакому сомнению – перед нами две разные культуры! Дорогой читатель, приглашаем вас в мир бинарных оппозиций двух культур – британской и русской. Мы рады предложить вашему вниманию «путешествие» в эпоху перемен XVII–XVIII вв. с акцентом на поисках интеллектуалами Британии и России новой национально-государственной и персональной идентичности в стремительно меняющемся мире.</p>
            <img src={srcGold} alt="" className="decor"/>

        </div>
    );
};

export default MainDescription;