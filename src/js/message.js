import Translate from "nyc-lib/nyc/lang/Translate"

const ccLanguages = ['en', 'ar', 'bn', 'zh', 'fr', 'ht', 'ko', 'pl', 'ru', 'es', 'ur']
const languages = {}

ccLanguages.forEach(lang => {
	languages[lang] = Translate.DEFAULT_LANGUAGES[lang]
})

const messages = {}

messages.en = {
	cc_title: "Cooling Center Finder",
	btn_cooling_centers: "Cooling Centers",
	panel_note: '<p>New York City opens cooling centers in air-conditioned public facilities for those who experience physical discomfort in a heat wave.</p><p>To find a cooling center, simply type your address or intersection into the search field on the upper-left corner of the map and then hit “Enter”; or zoom and pan the map to your neighborhood location.</p><p>To search or view accessible centers, click the Accessible button below.</p><p>To search or view pet friendly centers, click the Pets Allowed button below.</p><p><b>NOTE:</b> Please check this site daily. Cooling centers may change hours of operation.</p><p><a href="https://www1.nyc.gov/site/em/ready/extreme-heat.page">Learn more about ways to stay cool.</a></p>',
	//acc_all: "All Centers",
	acc_only: "Accessible",
	btn_legend: "Legend",
	legend_comm: "Community Center",
	legend_senior: "Senior Center",
	legend_cornerstone: "Cornerstone Program",
	legend_library: "Library",
	legend_school: "School",
	legend_other: "Other",
	pop_name: "Name",
	pop_type: "Facility Type",
	pop_address: "Address",
	pop_phone: "Phone",
	pop_hours: "Hours",
	pop_extended: "Extended Hours",
	pop_access: "Wheelchair Accessible",
	pop_pet: "Pets Allowed",
  day: "Day",
	opens: "Opens",
	closes: "Closes",
	closed: "Closed",
	sunday:	"Sunday",
	monday: "Monday",
	tuesday: "Tuesday",
	wednesday:"Wednesday",
	thursday: "Thursday",	
	friday: "Friday",
	saturday: "Saturday",
	msg_extended: 'Hours may be extended during a heat emergency',
	'msg-vw-list': 'View Cooling Center list'
}
messages.zh = {
	cc_title: "尋找紐約市避暑中心",
	btn_cooling_centers: '避暑中心',
	panel_note: '<p>紐約市在設有空調的公共設施中，為在熱浪中感到不適的民眾開設避暑中心。</p><p>若要尋找一個避暑中心，只需在地圖左上角的搜索框中輸入您的地址或街道交叉點，再按下"Enter"鍵，或放大和平移地圖到您的鄰里位置。</p><p>若要搜尋或查詢無障礙設施的中心，請按下方的「僅限無障礙設施」按鈕。 </p><p>若要搜尋或查詢可允許寵物的中心，請按下方的「僅限允許寵物」按鈕。 </p><p><b>注意：</b> 請每天檢查本網站。避暑中心可能會改變開放時間。</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">進一步了解保持涼爽的各種方式。</a></p>',
	//acc_all: "所有中心",
	acc_only: "無障礙設施",
	btn_legend: '說明',
	legend_comm: "社區中心",
	legend_senior: "老年人中心",
	legend_cornerstone: "Cornerstone計畫 ",
	legend_library: "圖書館",
	legend_school: "學校",
	legend_other: "其他",
	pop_name: "設施名稱",
	pop_type: "設施種類",
	pop_address: "地址",
	pop_phone: "電話號碼",
	pop_hours: "開放時間",
	pop_extended: "加開時間",
	pop_access: "無障礙設施",
	pop_pet: "允許寵物",
	day: "日期",
	opens: "開放時間",
	closes: "關門時間",
	closed: "沒有開放",
	sunday:    "星期天",
	monday: "星期一",
	tuesday: "星期二",
	wednesday:"星期三",
	thursday: "星期四",    
	friday: "星期五",
	saturday: "星期六",
	msg_extended: "高溫緊急情況下開放時間可能會延長",
	'msg-vw-list': '查看所有避暑中心'
}
messages.fr = {
	cc_title: "Centres de rafraîchissement",
	btn_cooling_centers: 'Centres de<br>rafraîchissement',
	panel_note: "<p>La ville de New York ouvre des centres de rafraîchissement dans des locaux publics climatisés pour les personnes éprouvées par la chaleur.</p><p>Pour trouver un centre de rafraîchissement, tapez simplement votre adresse ou intersection de rues dans le champ de recherche du coin supérieur gauche de la carte, puis appuyez sur « Enter » (Saisir) ; ou effectuez un zoom et déplacez la carte vers votre quartier.</p><p>Pour rechercher ou afficher les centres accessibles, cliquez sur le bouton « Accessible » (pour personnes handicapées) ci-dessous. </p><p>Pour rechercher ou afficher uniquement les centres accessibles aux animaux de compagnie, cliquez sur le bouton « Animaux de compagnie autorisés » ci-dessous. </p><p><b>REMARQUE :</b> Revenez sur ce site quotidiennement. Les heures d’ouverture des centres de rafraîchissements peuvent varier.</p><p><a href='http://www1.nyc.gov/site/em/ready/extreme-heat.page' target='_blank'>En savoir plus sur les moyens de rester au frais.</a></p>",
	//acc_all: "Tous les centres",
	acc_only: "Accessible", 
	btn_legend: 'Légende',
	legend_comm: "Centre communautaire",
	legend_senior: "Centre pour personnes âgées",    
	legend_cornerstone: "Programme Cornerstone",
	legend_library: "Bibliothèque",
	legend_school: "École",
	legend_other: "Autre",
	pop_name: "Nom ",
	pop_type: "Type d’établissement ",
	pop_address: "Adresse ",
	pop_phone: "Téléphone ",
	pop_hours: "Heures ",
	pop_extended: "Horaires prolongés ",
	pop_access: "Accessible aux fauteuils roulants ",
	pop_pet: "Animaux de compagnie autorisés",
	day: "Jour",
	opens: "Ouvre à",
	closes: "Ferme à",
	closed: "Fermé",
	sunday: "Dimanche",
	monday: "Lundi",
	tuesday: "Mardi",
	wednesday:"Mercredi",
	thursday: "Jeudi",    
	friday: "Vendredi",
	saturday: "Samedi",
	msg_extended: "Les horaires peuvent être prolongés en cas de canicule",
	"msg-vw-list": "Voir la liste des centres de rafraîchissement"
}
messages.ar = {
	cc_title: "الباحث عن مركز تبريد في مدينة نيويورك",
	btn_cooling_centers: "مراكز التبريد",
	panel_note: '<div><p>تفتح مدينة نيويورك مراكز تبريد في المرافق العامة المكيفة لاستخدامها من طرف من يتضايقون من موجة الحر.</p><p>للعثور على مركز تبريد، ما عليك سوى كتابة عنوانك أو أسم أقرب تقاطع في حقل البحث في الزاوية العلوية اليسرى من الخريطة ثم الضغط على "إدخال"، أو تكبير الخريطة وتحريكها إلى موقع منطقتك.</p><p>للبحث او لعرض المراكز التي يسهل على ذوي الإعاقة الوصول اليها فقط، انقر على زر "قابل للوصول" في الاسفل. </p><p>للبحث او لعرض المراكز التي تقبل الحيوانات الاليفة، انقر على زر "الحيوانات الاليفة مقبولة".  </p><p><b>ملاحظة: </b>  يرجى مراجعة هذا الموقع يوميا، قد تغير مراكز التبريد ساعات العمل.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">تعرف على المزيد لكي تتمتع بجو بارد.</a></p></div>',
	//acc_all: "كافة المراكز", 
	acc_only: "قابل للوصول",
	btn_legend: "مفتاح الخريطة",
	legend_comm: "مركز مجتمعي ",
	legend_senior: "مركز لكبار السن", 
	legend_cornerstone: "يرنامج Cornerstone",
	legend_library: "مكتبة",
	legend_school: "مدرسة",
	legend_other: "آخر",
	pop_name: "الاسم",
	pop_type: "نوع المرفق",
	pop_address: "العنوان",
	pop_phone: "الهاتف",
	pop_hours: "ساعات العمل",
	pop_extended: "ساعات العمل الممتدة",
	pop_access: "متاح بالكرسي المتحرك",
	pop_pet: "الحيوانات الأليفة مقبولة",
	day: "يوم",
	opens: "يفتح",
	closes: "يغلق",
	closed: "مغلق",
	sunday:    "الأحد",
	monday: "الأثنين",
	tuesday: "الثلاثاء",
	wednesday:"الأربعاء",
	thursday: "الخميس",    
	friday: "الجمعة",
	saturday: "السبت",
	msg_extended: "قد تمدد ساعات العمل أثناء طوارئ ارتفاع درجات الحرارة",
	"msg-vw-list": "شاهد قائمة مراكز التبريد"
}

messages.bn = {
	cc_title: "কুলিং সেন্টার ফাইন্ডার",
	btn_cooling_centers: 'কুলিং সেন্টার',
	panel_note: '<p>তাপদাহে শারীরিক অস্বাচ্ছন্দ্যের শিকার হওয়া ব্যক্তিদের জন্য নিউ ইয়র্ক সিটি শীতাতপ নিয়ন্ত্রিত সরকারি স্থাপনাগুলোতে কুলিং সেন্টার খুলে থাকে৷</p><p>একটি কুলিং সেন্টার খুঁজে বের করতে, মানচিত্রের উপরে বাম কোণে অনুসন্ধানের ঘরে আপনার ঠিকানা বা ইন্টারসেকশনের নাম লিখুন এবং “Enter” চাপুন; অথবা মানচিত্রে আপনার মহল্লার অবস্থানের জায়গায় জুম ও প্যান করুন৷</p><p>হুইলচেয়ার প্রবেশযোগ্য সেন্টারগুলো খুঁজতে বা দেখতে, নিচের “হুইলচেয়ার প্রবেশযোগ্য” বাটনে ক্লিক করুন৷ </p><p>পোষা প্রাণী বান্ধব সেন্টারগুলো খুঁজতে বা দেখতে, নিচের “পোষা প্রাণী অনুমোদিত” বাটনে ক্লিক করুন৷ </p><p><b>দ্রষ্টব্য:</b>অনুগ্রহ করে এই সাইট প্রতিদিন চেক করুন৷ কুলিং সেন্টারগুলো খোলা থাকার সময়সূচি পরিবর্তিত হতে পারে৷</p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">ঠাণ্ডা থাকার উপায়গুলো সম্পর্কে আরো জানুন৷</a></p>',
	//acc_all: "সব সেন্টার",
	acc_only: "হুইলচেয়ার প্রবেশযোগ্য",
	btn_legend: 'ব্যাখ্যা',
	legend_comm: "কমিউনিটি সেন্টার",
	legend_senior: "সিনিয়র সেন্টার",
	legend_cornerstone: "Cornerstone কর্মসূচি",
	legend_library: "লাইব্রেরি",
	legend_school: "স্কুল",
	legend_other: "অন্যান্য",
	pop_name: "নাম",
	pop_type: "কেন্দ্রের ধরন",
	pop_address: "ঠিকানা",
	pop_phone: "ফোন",
	pop_hours: "সময়সূচি",
	pop_extended: "সম্প্রসারিত সময়সূচি",
	pop_access: "হুইলচেয়ার প্রবেশযোগ্য",
	pop_pet: "পোষা প্রাণী অনুমোদিত",
	day: "দিন",
	opens: "খোলা",
	closes: "বন্ধ",
	closed: "বন্ধ",
	sunday: "রবিবার",
	monday: "সোমবার",
	tuesday: "মঙ্গলবার",
	wednesday:"বুধবার",
	thursday: "বৃহস্পতিবার",    
	friday: "শুক্রবার",
	saturday: "শনিবার",
	msg_extended: "তাপ সংক্রান্ত জরুরি পরিস্থিতিতে সময় বাড়ানো হতে পারে",
	"msg-vw-list": "কুলিং সেন্টারগুলোর তালিকা দেখুন"
}
messages.ht = {
	cc_title: "Zouti pou Chèche Sant Refwadisman",
	btn_cooling_centers: 'Sant Refwadisman',
	panel_note: '<p>Vil New York ap louvri sant refwadisman nan etablisman piblik ki gen èkondisyone pou moun yo ki santi malèz fizik pandan yon kout chalè.</p><p>Pou jwenn yon sant refwadisman, tou senpleman tape adrès ou oswa entèseksyon ou nan chan rechèch la sou kwen anwo a goch nan kat la epi apre sa teke “Antre”; oswa agrandi epi fè yon panorama kat la nan kote katye ou ye a.</p><p>Pou chèche oswa wè sant ki aksesib yo, klike sou bouton "Aksesib" ki anba a. </p><p>Pou chèche oswa wè sant ki aksepte bèt kay yo, klike sou bouton "Pèmèt Bèt Kay" ki anba a. </p><p><b>NÒT:</b> Tanpri tcheke sit sa a chak jou. Sant refwadisman yo ka chanje orè fonksyònman yo.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">Jwenn plis enfòmasyon sou fason pou rete fre.</a></p>',
	//acc_all: "Tout Sant yo",
	acc_only: "Aksesib",
	btn_legend: 'Lejann',
	legend_comm: "Sant Kominotè",
	legend_senior: "Sant pou Moun Aje",
  legend_cornerstone: "Pwogram Cornerstone",
	legend_library: "Bibliyotèk",
	legend_school: "Lekòl",
	legend_other: "Lòt",
	pop_name: "Non",
	pop_type: "Kalite Etablisman",
	pop_address: "Adrès",
	pop_phone: "Telefòn",
	pop_hours: "Orè Fonksyonman",
	pop_extended: "Orè Pwolonje",
	pop_access: "Aksesib pou Chèz-Woulant",
	pop_pet: "Pèmèt Bèt Kay",
	day: "Jou",
	opens: "Ouvri",
	closes: "Fèmen",
	closed: "Fèmen",
	sunday:	"Dimanch",
	monday: "Lendi",
	tuesday: "Madi",
	wednesday: "Mèkredi",
	thursday: "Jedi",	
	friday: "Vandredi",
	saturday: "Samdi",
	msg_extended: 'Èdtan yo ka pwolonje pandan yon ijans chalè.',
	"msg-vw-list": "Gade lis Sant Refwadisman yo"
}
messages.ko = {
	cc_title: "뉴욕시 쿨링 센터 검색",
	btn_cooling_centers: '쿨링 센터',
	panel_note: '<p>뉴욕시는 폭염 중에 신체적인 불편을 겪는 분들을 위해 냉방시설이 된 공공시설 내에 쿨링 센터를 운영하고 있습니다.</p><p>쿨링 센터를 찾으시려면 주소 또는 교차로 이름을 지도의 왼쪽 상단에 위치한 검색창에 입력한 후 ‘Enter’(엔터)’를 누르시기 바랍니다. 또는 귀하의 인근 위치로 지도를 확대/축소 또는 움직여 찾으시기 바랍니다.</p><p>장애인이 접근 가능한 센터만을 검색하려면 아래의 ‘장애인 편의 시설’ 버튼을 클릭하십시오.</p><p>반려동물 이용 가능 센터만을 검색하려면 아래의 ‘반려동물 허용’ 버튼을 클릭하십시오.</p><p><b>비고:</b> 본 사이트를 매일 확인하시기 바랍니다. 쿨링 센터의 운영 시간이 바뀔수 있습니다.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">더위를 피할수 있는 방법들을 확인해 보세요.</a></p>',
	//acc_all: "모든 센터",
	acc_only: "장애인 편의 시설",
	legend_cornerstone: "Cornerstone 프로그램",
	btn_legend: '범례',
	legend_comm: "커뮤니티 센터",
	legend_senior: "노인 센터",
	legend_library: "도서관",
	legend_school: "학교",
	legend_other: "기타",
	pop_name: "시설명",
	pop_type: "시설 종류",
	pop_address: "주소",
	pop_phone: "전화번호",
	pop_hours: "운영 시간",
	pop_extended: "연장 운영 시간",
	pop_access: "휠체어 이용 가능",
	pop_pet: "반려동물 허용", 
	day: "요일",
	opens: "개관",
	closes: "폐관",
	closed: "휴관",
	sunday: "일요일",
	monday: "월요일",
	tuesday: "화요일",
	wednesday:"수요일",
	thursday: "목요일",    
	friday: "금요일",
	saturday: "토요일",
	msg_extended: "폭염 비상시에는 운영 시간 변경 가능",
	"msg-no": "없음",
	"msg-vw-list": "쿨링 센터 목록 보기"
}
messages.pl = {
	cc_title: "Znajdź centrum chłodzenia",
	btn_cooling_centers: 'Centra chłodzenia',
	panel_note: "<p>Miasto Nowy Jork otwiera centra chłodzenia w klimatyzowanych obiektach publicznych dla osób doświadczających trudności fizycznych podczas fali upałów.</p><p>W celu znalezienia centrum chłodzenia, należy po prostu wpisać adres lub skrzyżowanie w pole wyszukiwania w lewym górnym rogu mapy i nacisnąć “Enter” lub powiększyć mapę wokół własnej lokalizacji.</p><p>Żeby wyszukać lub zobaczyć centra dostępne dla osób niepełnosprawnych, naciśnij poniższy przycisk “Dostępne dla niepełnosprawnych”. </p><p>Żeby wyszukać lub zobaczyć centra dostępne dla zwierząt domowych, naciśnij poniższy przycisk “Zwierzęta domowe dozwolone”. </p><p><b>UWAGA:</b>Prosimy o codzienne sprawdzanie tej strony. Centra chłodzenia mogą zmieniać godziny otwarcia.</p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">Dowiedz się więcej o tym, jak się chłodzić.</a>.</p>",
	//acc_all: "Wszystkie centra",
	acc_only: "Dostępne dla niepełnosprawnych",
	btn_legend: 'Legenda',
	legend_comm: "Ośrodek społeczno-kulturalny",
	legend_senior: "Ośrodek dla emerytów",
	legend_cornerstone: "Program Środowiskowy",
	legend_library: "Biblioteka",
	legend_school: "Szkoła",
	legend_other: "Inne",
	pop_name: "Imię i nazwisko",
	pop_type: "Rodzaj obiektu",
	pop_address: "Adres",
	pop_phone: "Numer telefonu",
	pop_hours: "Godziny otwarcia",
	pop_extended: "Przedłużone godziny otwarcia",
	pop_access: "Dostępne dla wózków inwalidzkich",
	pop_pet: "Zwierzęta domowe dozwolone",
  day: "Dzień",
	opens: "Otwarte",
	closes: "Zamknięte",
	closed: "Zamknięte",
	sunday:	"niedziela",
	monday: "poniedziałek",
	tuesday: "wtorek",
	wednesday:"środa",
	thursday: "czwartek",	
	friday: "piątek",
	saturday: "sobota",
	msg_extended: "Godziny otwarcia mogą być przedłużone w czasie zagrażających zdrowiu temperatur.",
	"msg-vw-list": "Zobacz listę centrów chłodzenia"
}
messages.ru = {
	cc_title: "Поиск центров охлаждения",
	btn_cooling_centers: 'Центры<br>охлаждения',
	panel_note: '<p>В Нью-Йорке открываются центры охлаждения в кондиционированных общественных зданиях для тех, кто испытывает физический дискомфорт в период сильной жары.</p><p>Чтобы найти центр охлаждения, введите ваш адрес или перекресток в поисковую строку в верхнем левом углу карты и нажмите клавишу ввода; либо увеличьте изображение и найдите на карте ваш район.</p><p>Для поиска или просмотра центров, доступных для лиц с ограниченными возможностями, нажмите ниже кнопку «Доступные». </p><p>Для поиска или просмотра центров, где разрешены домашние животные, нажмите ниже кнопку «Допускаются дом. животные». </p><p><strong>ПРИМЕЧАНИЕ:</strong> Проверяйте этот сайт ежедневно. Часы работы центров охлаждения могут измениться.</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">Узнайте о том, как избежать перегревания.</a></p>',
	//acc_all: "Все центры",
	acc_only: "Доступные",
	btn_legend: 'Легенда',
	legend_note: "Прежде чем отправиться в центр охлаждения, позвоните и уточните часы его работы.",
	legend_searched: "Адрес, указанный для поиска",
	legend_comm: "Общественный центр",
	legend_senior: "Центр для пожилых",
	legend_cornerstone: "Программа Cornerstone",
	legend_library: "Библиотека",
	legend_school: "Школа",
	legend_other: "Другой",
	pop_name: "Ф.И.О.",
	pop_type: "Тип учреждения",
	pop_address: "Адрес",
	pop_phone: "Телефон",
	pop_hours: "Часы работы",
	pop_extended: "Продленные часы работы",
	pop_access: "Доступ для инвалидных колясок",
	pop_pet: "Допускаются дом. животные",
	day: "День",
	opens: "Открыто",
	closes: "Закрыто",
	closed: "Закрыто",
	sunday:	"воскресенье",
	monday: "понедельник",
	tuesday: "вторник",
	wednesday: "среда",
	thursday: "четверг",	
	friday: "пятница",
	saturday: "суббота",
	msg_extended: "в случае экстремальной жары часы могут быть продлены",
	"msg-vw-list": "Смотреть список центров охлаждения"
}
messages.es = {
	cc_title: "Directorio de centros de enfriamiento",
	btn_cooling_centers: 'Centros de<br>enfriamiento',
	panel_note: '<p>La Ciudad de Nueva York abre centros de enfriamiento en instalaciones públicas con aire acondicionado, para quienes experimenten molestias físicas durante una ola de calor.</p><p>Para encontrar un centro de enfriamiento, simplemente escriba su dirección o intersección en el campo de búsqueda en la esquina superior izquierda del mapa y luego presione "Enter"; o amplíe y explore el mapa correspondiente a su vecindario.</p><p>Para buscar o ver los centros con acceso para personas con discapacidades, haga clic en el botón "Accesible" (para personas con discapacidades) a continuación. </p><p>Para buscar o ver los centros que admiten mascotas, haga clic en el botón "Se permiten mascotas" a continuación.</p><p><strong>NOTA:</strong>  Revise este sitio a diario. El horario de atención de los centros de refrigeración puede cambiar.</p><p><a href=\"http://www1.nyc.gov/site/em/ready/extreme-heat.page\" target=\"_blank\">Obtenga más información sobre formas de mantenerse fresco.</a>.</p>',
	//acc_all: "Todos los centros",
	acc_only: "Accesible",
	btn_legend: 'Leyenda',
	legend_comm: "Centro comunitario",
	legend_senior: "Centro para personas mayores",
  legend_cornerstone: "Programa Cornerstone",
	legend_library: "Biblioteca",
	legend_school: "Escuela",
	legend_other: "Otro",
	pop_name: "Nombre",
	pop_type: "Tipo de instalación",
	pop_address: "Dirección",
	pop_phone: "Teléfono",
	pop_hours: "Horario",
	pop_extended: "Horario extendido",
	pop_access: "Acceso para sillas de ruedas",
	pop_pet: "Se permiten mascotas",
	day: "Día",
	opens: "Abierto",
	closes: "Cerrado",
	closed: "Cerrado",
	sunday:	"Domingo",
	monday: "Lunes",
	tuesday: "Martes",
	wednesday:"Miércoles",
	thursday: "Jueves",	
	friday: "Viernes",
	saturday: "Sábado",
	msg_extended: "El horario puede extenderse durante una emergencia de calor.",
	"msg-vw-list": "Ver lista de centros de enfriamiento"
}
messages.ur = {
	cc_title: "کولنگ سینٹر  تلاش کرنے کا ذریعہ",
	btn_cooling_centers: 'کولنگ سینٹر (ٹھنڈا رہنے کے مراکز)',
	panel_note: '<p>نیو یارک شہر میں گرمی کی شدت سے جسمانی تکلیف کا سامنا کرنے والے افراد کے لئے ایئر کنڈیشنڈ والی عوامی عمارتوں میں کولنگ سینٹر کھلے ہیں۔</p><p>کولنگ سینٹر کو تلاش کرنے کے لئے نقشے کے اوپربائیں کونے پر تلاش کے خانے میں اپنا ایڈریس لکھیں اور پھر "Enter" دبائیں؛ یا نقشہ کو اپنا علاقہ دیکھنے کے لئے بڑا اور قریب کریں۔</p><p>"قابل رسائی" والے مراکز تلاش کرنے یا دیکھنے کے لئے نیچے معذور کیلئے والے بٹن پر کلک کریں۔</p><p>پالتو جانوروں کے ہمراہ داخلے والے مراکز کیلئے نیچے "پالتو جانوروں کے داخلے" والے بٹن پر کلک کریں۔ </p><p><b>نوٹ: </b>براہ مہربانی اس سائٹ کو روزانہ ملاحظہ کریں۔ کولنگ سینٹر اوقات کار تبدیل کر سکتے ہیں۔</p><p><a href="http://www1.nyc.gov/site/em/ready/extreme-heat.page" target="_blank">ٹھنڈا رہنے کے طریقوں کے بارے میں مزید معلومات حاصل کریں۔</a></p>',
	//acc_all: "تمام مراکز",
	acc_only: "قابل رسائی",
	btn_legend: 'علامات',
	legend_comm: "کمیونٹی سینٹر",
	legend_senior: "سینئیر سینٹر",
  legend_cornerstone: "Cornerstone پروگرام",
	legend_library: "لائبریری",
	legend_school: "سکول",
	legend_other: "دیگر",
	pop_name: "نام",
	pop_type: "سہولیات کی نوعیت",
	pop_address: 'پتا',
	pop_phone: 'فون',
	pop_hours: "اوقات",
	pop_extended: "توسیع شدہ اوقات",
	pop_access: "وہیل چیئر قابل رسائی",
	pop_pet: "پالتو جانوروں کے داخلے",
	day: "دن",
	opens: "کھولو",
	closes: "بند",
	closed: "بند",
	sunday:	"اتوار",
	monday: "پیر",
	tuesday: "منگل",
	wednesday: "بدھ",
	thursday: "جمعرات",	
	friday: "جمعہ",
	saturday: "ہفتہ",
	msg_extended: 'شدید گرمی کے دوران اوقات میں توسیع کی جاسکتی ہے',
	"msg-vw-list": "کولنگ سینٹرز کی فہرست دیکھئیے"
}

export default {messages, languages}