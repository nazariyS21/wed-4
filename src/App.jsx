import './App.scss';
import './index.scss';
import './assets/static.scss';
import LocationIcon from './icons/location';
import ChurchIcon from './icons/church';
import GlassesIcon from './icons/glasses';
// import CountdownTimer from './components/CountDown';

function App() {
  return (
    <div className='app'>
      <section className='header_section'>
        <div className='dates'>
          <h3 className='pacifico'>Save the Date</h3>
          <h3 className='pacifico'>19.07.25</h3>
        </div>
        <div className='photo'>IMAGE</div>
      </section>

      <section className='short_preview_section'>
        <h5 className='big_text vertical_date'>
          <span>19</span>
          <span>07</span>
          <span>25</span>
        </h5>
        <h5 className='regular_text paragraph'>
          Два серця, одна історія , безліч щасливих моментів попереду! Ми запрошуємо вас
          стати частиною важливої події і розділити цей день з нами.
        </h5>
      </section>

      {/* <CountdownTimer /> */}

      <section className='names_section'>
        <h5 className='title'>DIANA</h5>
        <h5 className='match_char'>E</h5>
        <h5 className='title'>VITALII</h5>
      </section>

      <section className='location_section'>
        <div className='item'>
          <ChurchIcon />
          <h5>Шлюб</h5>
          <h4>Церква Успіння Пресвятої Богородиці (с. Яблунів). </h4>
          <a
            href='https://maps.app.goo.gl/XxtpXvJEhDUFakuv8'
            className='location_link'>
            <LocationIcon />
          </a>
        </div>

        <div className='item'>
          <GlassesIcon />
          <h5>Святкування</h5>
          <h4>
            Ресторан <span className='pacifico'>LION</span> (м. Хоростків) час 13:00
          </h4>
          <a
            href='https://maps.app.goo.gl/GBAv9VmXqH3RzKvVA'
            className='location_link'>
            <LocationIcon />
          </a>
        </div>
      </section>

      <section className='dress_code_section'>
        <div className='header'>
          <h3>Dress code</h3>
          <h5>
            Кожна деталь цього дня особлива для нас, ваш стиль - не виняток. Ми обрали
            палітру кольорів, просимо вас підтримати її у своїх образах.
          </h5>
        </div>
        <div className='content'>
          <div className='image_container'>
            <img
              src='/public/images/color_section_image2.jpg'
              alt=''
            />
          </div>
          <div className='colors'>
            <h5>Colors</h5>
            <div className='dc_color_1'></div>
            <div className='dc_color_2'></div>
            <div className='dc_color_3'></div>
            <div className='dc_color_4'></div>
            <div className='dc_color_5'></div>
            <div className='dc_color_6'></div>
            <div className='dc_color_7'></div>
            <div className='dc_color_8'></div>
          </div>
        </div>
      </section>

      <section className='footer_section'>
        <h5>Свої побажання несіть в серцях, а подарунки в конвертах</h5>
        <h5>З нетерпінням чекаємо!</h5>
        <h3>Ви будете?</h3>
      </section>
    </div>
  );
}

export default App;
