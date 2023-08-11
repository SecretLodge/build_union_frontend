import { Link } from 'react-scroll';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='header__container _container'>
          <a href='' className='header__logo logo'>
            <img
              src='./icons/union.svg'
              alt='Логотип Союз'
              className='logo__image'
            />
            <div className='logo__title'>
              СТРОЙ<span>CОЮЗ</span>59
            </div>
          </a>
          <a className='header__phone' href='tel:+7-912-059-00-01'>
            <img
              src='./icons/phone_icon.svg'
              alt='Телефон'
              className='phone__icon'
            />
            <div className='phone__number'>+7-912-059-00-01</div>
          </a>
        </div>
      </header>
      <main className='main'>
        <section className='page__main-block main-block'>
          <div className='main-block__container _container'>
            <div className='main-block__content'>
              <div className='main-block__header'>
                <h1 className='main-block__name'>СТРОЙСОЮЗ</h1>
              </div>
              <div className='main-block__info'>
                <div className='main-block__name main-block__first-name'>
                  <h1 className='first-name'>СТРОЙ</h1>
                </div>
                <div className='main-block__name main-block__last-name'>
                  <h2 className='last-name'>СОЮЗ</h2>
                </div>
              </div>
              <div className='main-block__button'>
                <Link
                  to='descripton-section'
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className='more-info__button'
                >
                  <div className='more-info__button-text'>УЗНАТЬ БОЛЬШЕ</div>
                  <img
                    className='more-info__button-icon'
                    src='/public/icons/arrow_icon.svg'
                    alt='Указатель для кнопки'
                  />
                </Link>
              </div>
            </div>
            <img
              src='/images/background.jpg'
              alt='Задний фон'
              className='main-block__image-background'
            />
            <img
              src='/images/Home.png'
              alt='Строящийся дом'
              className='main-block__image-home'
            />
            <div className='page__main-block-line'></div>
          </div>
        </section>
        <section className='page__block-about-company block-about-company'>
          <div id='descripton-section' className='block-about-company__header'>
            <img
              src='/icons/corporate_culture.svg'
              alt='Иконка для раздела о компании'
              className='block-about-company__header-icon'
            />
            <h3 className='block-about-company__header-text'>О КОМПАНИИ</h3>
          </div>
          <div className='_container'>
            <div className='block-about-company__body'>
              <div className='block-about-company__body-company-name body-company-name'>
                <div className='body-company-name_title body-company-name_title-first'>
                  <div className='title-first'>
                    <p className='special-designs'>СТРОЙСОЮЗ</p>
                    <p>— ЯВЛЯЮТСЯ</p>
                  </div>
                  <p className='title-second'>
                    <p>ОПЫТНЫМИ И НАДЁЖНЫМИ</p>
                    <span className='special-designs'>СПЕЦИАЛИСТАМИ</span>
                  </p>
                </div>
                <div className='body-company-name_title body-company-name_title-second'>
                  <div className='title-first'>
                    <p className='special-designs'>СТРОЙСОЮЗ</p>
                  </div>
                  <p className='title-second'>
                    <p>————ЯВЛЯЮТСЯ ОПЫТНЫМИ</p>
                    <p>И НАДЁЖНЫМИ СПЕЦИАЛИСТАМИ</p>
                  </p>
                </div>
              </div>
              <div className='block-about-company__body-company-descriptoin body-company-descriptoin'>
                <div className='body-company-descriptoin__text'>
                  <p>
                    Наша команда стремится создать комфортное и функциональное
                    пространство для наших клиентов. Мы уделяем особое внимание
                    деталям и работаем в тесном контакте с клиентами, чтобы
                    учесть все их пожелания и требования. Мы понимаем, что
                    строительство - это большой шаг, поэтому мы стараемся
                    сделать процесс максимально простым и удобным для наших
                    клиентов.
                  </p>
                  <p>
                    Если вы ищете надежную и квалифицированную строительную
                    компанию, обратитесь к нам. Мы готовы предложить вам
                    высококачественные услуги по доступным ценам. Наши клиенты -
                    наша главная ценность, и мы стремимся превзойти их ожидания.
                    С нами ваш проект будет в надежных руках, и вы получите
                    результат, о котором всегда мечтали.
                  </p>
                  <Link
                    to='properties-section'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className='descriptoin__button'
                  >
                    <div>ПОДРОБНЕЕ</div>
                    <img
                      src='/public/icons/white_arrow_icon.svg'
                      alt='Стрелка для кнопки'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom__line'></div>
        </section>
        <section className='page__block-services block-services'>
          <div id='properties-section' className='block-about-company__header'>
            <img
              src='/icons/technical-support.svg'
              alt='Иконка для раздела представляющего оказываемые услуги'
              className='block-about-company__header-icon'
            />
            <h3 className='block-about-company__header-text'>УСЛУГИ</h3>
          </div>
          <div className='block-services__body _container'>
            <div className='block-services__body-items'>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_1' />
                <label htmlFor='item_1' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>01</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>ДЕМОНТАЖ</div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Наш подход к демонтажу основан на точном планировании и
                      организации работы, чтобы минимизировать простои и
                      сократить время выполнения проекта. Мы гарантируем
                      качество и точность выполнения работ, что позволяет нам
                      достичь высоких результатов и удовлетворить потребности
                      наших клиентов.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_2' />
                <label htmlFor='item_2' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>02</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>
                      Строительно-монтажные работы
                    </div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Строительно-монтажные работы включают в себя возведение
                      зданий, реконструкцию, ремонт, установку инженерных
                      систем, таких как системы отопления, вентиляции,
                      сантехники и электрики. Мы также осуществляем монтаж окон,
                      дверей, перегородок и других элементов, необходимых для
                      создания функционального и комфортного пространства.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_3' />
                <label htmlFor='item_3' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>03</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>
                      Производство мебели из редких пород древесины
                    </div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Мы предлагаем индивидуальный подход к каждому проекту,
                      чтобы удовлетворить ваши уникальные потребности и
                      предпочтения. Мы разрабатываем дизайн и концепцию
                      совместно с вами, чтобы воплотить в жизнь вашу идею и
                      создать мебель, которая станет настоящим украшением вашего
                      интерьера.
                    </p>
                    <p className='item__content-description'>
                      Услуга включает в себя изготовление мебели для гостиной,
                      спальни, кухни, кабинета и других помещений. Мы также
                      предлагаем изготовление мебели по индивидуальным размерам
                      и проектам, чтобы полностью соответствовать вашим
                      требованиям и предоставить вам идеальное решение для
                      вашего пространства.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_4' />
                <label htmlFor='item_4' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>04</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>
                      Установка и обслуживание кондиционеров
                    </div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Наша команда экспертов обладает обширным опытом и
                      глубокими знаниями в области кондиционирования воздуха. Мы
                      предлагаем профессиональную установку кондиционеров,
                      учитывая особенности вашего помещения и ваши
                      индивидуальные потребности. Мы подберем наиболее
                      подходящую модель и установим ее с использованием
                      передовых технологий, гарантируя надежную и эффективную
                      работу.
                    </p>
                    <p className='item__content-description'>
                      Дополнительно, мы предлагаем регулярное обслуживание
                      кондиционеров, чтобы обеспечить их бесперебойную работу и
                      продлить их срок службы. Наша команда профессионалов
                      проведет все необходимые проверки и чистку системы, замену
                      фильтров, проверку на утечки и, при необходимости,
                      выполнит ремонтные работы. Также, мы предлагаем услуги по
                      заправке хладагента и настройке системы для достижения
                      оптимальной производительности.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_5' />
                <label htmlFor='item_5' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>05</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>Сварочные работы</div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Мы предлагаем широкий спектр сварочных услуг. Наша
                      экспертиза включает сварку разнообразных металлических
                      конструкций, включая промышленное оборудование, здания,
                      трубопроводы, контейнеры и другие изделия.
                    </p>
                    <p className='item__content-description'>
                      Мы гарантируем высокое качество и надежность сварочных
                      работ, создавая прочные и долговечные соединения. Все наши
                      работы выполняются в соответствии с необходимыми
                      стандартами безопасности и качества, чтобы обеспечить
                      безопасность и соответствие вашего проекта требованиям.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_6' />
                <label htmlFor='item_6' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>06</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>Остекление</div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Наша команда специалистов обеспечит вас качественными
                      материалами и передовыми технологиями, чтобы достичь
                      оптимального результата. Мы предлагаем различные типы
                      остекления, включая стеклопакеты, одинарное и двойное
                      остекление, а также специализированные стекла, такие как
                      тонированные, звукоизолирующие и энергосберегающие стекла.
                    </p>
                    <p className='item__content-description'>
                      Мы учитываем ваши индивидуальные потребности и особенности
                      помещения, чтобы предложить наилучшее решение. Наша
                      команда профессионалов проведет предварительный осмотр,
                      оценит условия и поможет вам выбрать подходящие материалы
                      для достижения желаемого эффекта.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_7' />
                <label htmlFor='item_7' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>07</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>
                      Остекление балконов
                    </div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Мы предлагаем разные варианты остекления балконов, включая
                      установку стеклопакетов, раздвижных систем, рамных
                      конструкций и других современных технологий. Наша команда
                      специалистов поможет вам выбрать наиболее подходящий
                      вариант остекления, учитывая архитектурные особенности
                      вашего здания и ваши предпочтения по дизайну.
                    </p>
                    <p className='item__content-description'>
                      Остекление балкона с нашей командой гарантирует высокое
                      качество и надежность. Мы используем только качественные
                      материалы, обеспечивая эффективную тепло- и звукоизоляцию,
                      а также защиту от пыли, ветра и осадков. Наши опытные
                      специалисты аккуратно установят остекление, обеспечивая
                      хорошую герметизацию и долговечность.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_8' />
                <label htmlFor='item_8' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>08</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>Столярные работы</div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Мы предоставляем широкий спектр столярных услуг,
                      включающих производство и установку различных изделий из
                      дерева, таких как двери, окна, лестницы, мебель, полы и
                      другие элементы для интерьера и экстерьера. Наша команда
                      специалистов готова помочь вам воплотить вашу идею в
                      реальность или предложить профессиональные рекомендации и
                      дизайнерские решения, отвечающие вашим потребностям и
                      стилю.
                    </p>
                    <p className='item__content-description'>
                      Мы придерживаемся высоких стандартов качества и используем
                      только надежное дерево и материалы, чтобы обеспечить
                      прочность, долговечность и эстетическую привлекательность
                      наших изделий. Наша команда столяров обладает глубокими
                      знаниями и мастерством, позволяющим создавать качественные
                      и точные изделия, которые отражают вашу индивидуальность и
                      соответствуют вашим ожиданиям.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_9' />
                <label htmlFor='item_9' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>09</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>
                      Экологические проекты
                    </div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Наша команда экспертов в области экологии и устойчивого
                      развития специализируется на разработке индивидуальных
                      проектов, учитывая уникальные особенности каждого клиента
                      и региона. Мы применяем комплексный подход, включающий
                      анализ экологического состояния, стратегическое
                      планирование, реализацию и мониторинг проектов.
                    </p>
                    <p className='item__content-description'>
                      Наши экологические проекты охватывают широкий спектр
                      аспектов, включая управление отходами,
                      энергоэффективность, водоуправление, озеленение,
                      реставрацию экосистем и разработку экологических
                      технологий. Мы стремимся создавать проекты, которые не
                      только снижают негативное влияние на окружающую среду, но
                      и способствуют улучшению качества жизни людей.
                    </p>
                    <p className='item__content-description'>
                      Мы активно сотрудничаем с государственными и
                      негосударственными организациями, коммерческими
                      предприятиями и частными лицами, чтобы совместно
                      разрабатывать и внедрять экологические проекты. Наша
                      основная цель - создание устойчивого будущего и
                      привнесение изменений в общество в направлении более
                      экологически ответственного развития.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='block-services__body-item'>
                <input className='input-service' type='checkbox' id='item_10' />
                <label htmlFor='item_10' className='item__header'>
                  <div className='body-item__design'>
                    <div className='design__number'>10</div>
                    <div className='design__line'></div>
                  </div>
                  <div className='body-item__name-service'>
                    <div className='name-services__text'>Вывоз мусора</div>
                    <img
                      src='/icons/arrow_down.svg'
                      alt='Стрелка для открытия'
                      className='name-services__arrow'
                    />
                  </div>
                </label>
                <div className='item__content-footer'>
                  <div className='item__content'>
                    <p className='item__content-description'>
                      Мы предлагаем услуги вывоза мусора, обеспечивая
                      эффективное и безопасное удаление отходов. Наша команда
                      оснащена современным оборудованием для эффективной работы
                      с различными видами мусора. Мы гарантируем соблюдение
                      экологических стандартов при утилизации отходов. Доверьте
                      нам задачу по вывозу мусора и наслаждайтесь чистой и
                      здоровой окружающей средой.
                    </p>
                    <Link
                      to='form-section'
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className='item__content-button'
                    >
                      <div>ПОДРОБНЕЕ</div>
                      <img
                        src='/icons/white_arrow_icon.svg'
                        alt='Стрелка для кнопки'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom__line'></div>
        </section>
        <section className='page__feedback-form'>
          <div id='form-section' className='feedback-form__body _container'>
            <div className='feedback-form__content content-form'>
              <div className='content-form__container'>
                <p className='content-form__header'>
                  ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
                </p>
                <div className='content-form__input'>
                  <div className='content-form__input-line'>
                    <input
                      type='text'
                      placeholder='Ваш Номер Телефона'
                      name='Номер телефона'
                      id=''
                    />
                    <input type='text' placeholder='Ваше Имя' name='Имя' />
                  </div>
                  <a href='' className='content-form__button'>
                    <p>ОТПРАВИТЬ</p>
                    <img
                      src='/public/icons/white_arrow_icon.svg'
                      alt='Стрелка для кнопки отправить'
                    />
                  </a>
                </div>
              </div>
              <img
                src='/images/Builder_on_home.png'
                alt=''
                className='feedback-form__img'
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='header__container _container'>
          <a href='' className='header__logo logo'>
            <img
              src='./icons/union_white.svg'
              alt='Логотип Союз'
              className='logo__image'
            />
            <div className='logo__title'>
              СТРОЙ<span>CОЮЗ</span>59
            </div>
          </a>
          <a className='header__phone' href='tel:+7-912-059-00-01'>
            <img
              src='./icons/phone_icon_white.svg'
              alt='Телефон'
              className='phone__icon'
            />
            <div className='phone__number'>+7-912-059-00-01</div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
