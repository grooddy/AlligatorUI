// NewsDataService.js
const NewsDataService = {
  fetchData: function(url) {
      return fetch(url, {
          method: 'GET'
      })
          .then(response => response.json())
          .catch(error => {
              console.error('Error fetching data:', error);
              return []; // Возвращаем пустой массив в случае ошибки
          });
  },

  fetchAllNewsPagination: function(page, pageSize) {
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('pageSize', pageSize);
      const apiUrl = `https://alligator-api.onrender.com/api/news?${params.toString()}`;
      return this.fetchData(apiUrl);
  },

  fetchAllNews: async function() {
      try {
          const data = await this.fetchData('https://alligator-api.onrender.com/api/news');
          return data;
      } catch (error) {
          console.error('Error fetching news:', error);
          throw error;
      }
  },

  fetchNewsById: function(id) {
      const apiUrl = `https://alligator-api.onrender.com/api/news/${id}`;
      return this.fetchData(apiUrl);
  }
};

export default NewsDataService;

/*
    [
        {
            "id": 0,
            "date": "2024-06-03 10:32",
            "src": "https://alligator.te.ua/userfiles/news/173_1.jpg",
            "title": "Royal Card LIMITED",
            "description": "Вибирайте тривалість свого заходу  світ активного та здорового життя з ексклюзивним абонементом Royal Card Limited на 3, 6 та 12 місяців",
            "text": "allest details! Yoevices: We are proud to offer you full access to all our services. Enjoy relaxing in the pool, relax in the spa, work on yourself in the gym and join a variety of basic group programs. Choose your term, use all the advantages of Royal Card Limited and allow yourself to enjoy your health for a long time"
        },
            {
            "id": 1,
            "date": "2024-06-03 10:32",
            "src": "https://alligator.te.ua/userfiles/news/170_2.jpg",
            "title": "Black Weekend SALE 24-26.11.23",
            "description": "24-26.11.23",
            "text": "З 24 по 26 листопада 2023 року не пропустіть шанс влаштувати собі неперевершений відпочинок за зниженою ціною! Знижка -20% на квитки в наш аквапарк дарує неймовірні враження за більш доступну ціну! Розважайтеся в серці водних пригод, занурюючись у безмежний світ веселих гірок та водяних розваг. Це чудова нагода насолодитися яскравими моментами разом із сім'єю та друзями, забуваючи про рутину та насолоджуючись атмосферою радості. Зробіть свій вікенд незабутнім разом із нашим аквапарком. "
        },
        {
            "id": 2,
            "date": "2024-06-03 10:32",
            "src": "https://alligator.te.ua/userfiles/news/169_1.jpg",
            "title": "-11% на абонемент Royal Card",
            "description": "Скільки? Девʼять чи десять? Одинадцять років!«Алігатор» святкує день народження",
            "text": "З нагоди 11 річниці даруємо символічну знижку - 11% на абонемент Royal Cardr Royal Card - це безліміт на усі основні послуги комплексу без обмежень у часі перебування та кількості відвідувань на 30 днів <br> - тренуйтеся в залі <br>- відвідуйте басейн<br>  - комбінуйте з груповими програмами basic: табата, fit mix, zumba, cтретчинг, йога, пілатес, мма, кікбоксинг<br>- релаксуйте в зоні спа: хаммам та іч-сауни <br> - користуйтеся закритим залами: кросфіт, єдиноборств"
        },
        {
            "id": 3,
            "date": "2024-06-03 10:32",
            "src": "https://alligator.te.ua/aligator.org.ua/userfiles/image/%D0%9F%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0_%D0%B0%D0%BA%D0%B2%D0%B0%D0%BF%D0%B0%D1%80%D0%BA%20-%20%D0%B4%D0%BE%202%20%D0%BC%D0%B1.jpg",
            "title": "News 4",
            "description": "abracadabra weweq wqeq rr qxxxqwe",
            "text": "extended lorem ipsum loremwqwqwe qweqew ewqwe w qe  wqewqew qewt  yeyrerert rrrrwr ewre wreewr"
        }
    ]
*/