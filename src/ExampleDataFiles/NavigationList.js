import React, { useState, useEffect } from 'react';

const NavigationList = () => {
  const [menuItems, setMenuItems] = useState(null); // Изначально устанавливаем значение null, пока данные не будут получены


  useEffect(() => {
    fetch('https://alligator-api.onrender.com/menu', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
        setMenuItems([]); // Установим пустой массив в случае ошибки
      });
  }, []);


  return menuItems;
};

export default NavigationList;


/*export const NavigationList = [
    {
      "name": "НОВИНИ",
      "path": "",
      "position": 1,
      "subMenu": [
  
      ]
    },
    {
      "name": "АКВАПАРК",
      "path": "",
      "position": 2,
      "subMenu": [
        {
          "name": "ТАРИФИ",
          "path": "",
          "position": 1
        },
        {
          "name": "АКЦІЇ",
          "path": "",
          "position": 2
        },
        {
          "name": "ПРАВИЛА",
          "path": "",
          "position": 3
        },
        {
          "name": "Галерея",
          "path": "",
          "position": 4
        },
        {
          "name": "Дитячий день народження",
          "path": "",
          "position": 5
        },
        {
          "name": "АКВАБАР",
          "path": "",
          "position": 6
        },
        {
          "name": "Якість води",
          "path": "",
          "position": 7
        },
        {
          "name": "НОВОРІЧНІ КОРПОРАТИВИ",
          "path": "",
          "position": 8
        }
      ]
    },
    {
      "name": "SPA-ЦЕНТР",
      "path": "",
      "position": 3,
      "subMenu": [
        {
          "name": "Масажний кабінет",
          "path": "",
          "position": 1
        },
        {
          "name": "Хаммам",
          "path": "",
          "position": 2
        },
        {
          "name": "Інфрачервона сауна",
          "path": "",
          "position": 3
        },
        {
          "name": "Правила SPA зони",
          "path": "",
          "position": 4
        }
      ]
    },
    {
      "name": "ФІТНЕС ЦЕНТР",
      "path": "",
      "position": 4,
      "subMenu": [
        {
          "name": "ТАРИФИ та РОЗКЛАД",
          "path": "",
          "position": 1
        },
        {
          "name": "ТРЕНАЖЕРНИЙ ЗАЛ",
          "path": "",
          "position": 2
        },
        {
          "name": "ВАЖКА АТЛЕТИКА",
          "path": "",
          "position": 3
        },
        {
          "name": "WORKOUT - кросфіт",
          "path": "",
          "position": 4
        },
        {
          "name": "КАРДІО HIIT",
          "path": "",
          "position": 5
        },
        {
          "name": "TABATA PRO",
          "path": "",
          "position": 6
        },
        {
          "name": "ГРУПОВІ ПРОГРАМИ BASIC",
          "path": "",
          "position": 7
        },
        {
          "name": "ЄДИНОБОРСТВА",
          "path": "",
          "position": 8
        },
        {
          "name": "ПЛАВАННЯ",
          "path": "",
          "position": 9
        },
        {
          "name": "Правила фітнес-центру",
          "path": "",
          "position": 10
        },
        {
          "name": "АКВА ФІТНЕС",
          "path": "",
          "position": 11
        },
        {
          "name": "ТРЕНЕРИ",
          "path": "",
          "position": 12
        }
      ]
    },
    {
      "name": "ТУРИЗМ",
      "path": "",
      "position": 5,
      "subMenu": [
        {
          "name": "НАШІ ЕКСКУРСІЇ",
          "path": "",
          "position": 1
        },
        {
          "name": "КАЛЕНДАР ТУРІВ",
          "path": "",
          "position": 2
        },
        {
          "name": "АКВАТУРИ",
          "path": "",
          "position": 3
        },
        {
          "name": "АКЦІЇ",
          "path": "",
          "position": 4
        },
        {
          "name": "УМОВИ УЧАСТІ В ТУРІ",
          "path": "",
          "position": 5
        },
        {
          "name": "ПАМ’ЯТКА ТУРИСТА",
          "path": "",
          "position": 6
        },
        {
          "name": "ФОТО З НАШИХ ПОЇЗДОК",
          "path": "",
          "position": 7
        }
      ]
    },
    {
      "name": "ГОТЕЛЬ",
      "path": "",
      "position": 6,
      "subMenu": [
        {
          "name": "НОМЕРА ТА ЦІНИ",
          "path": "",
          "position": 1
        },
        {
          "name": "Бронювання",
          "path": "",
          "position": 2
        },
        {
          "name": "ПРАВИЛА ПРОЖИВАННЯ",
          "path": "",
          "position": 3
        },
        {
          "name": "Послуги",
          "path": "",
          "position": 4
        }
      ]
    },
    {
      "name": "РЕСТОРАН",
      "path": "",
      "position": 7,
      "subMenu": [
        {
          "name": "МЕНЮ",
          "path": "",
          "position": 1
        },
        {
          "name": "БАНКЕТИ",
          "path": "",
          "position": 2
        },
        {
          "name": "ВЕСІЛЛЯ",
          "path": "",
          "position": 3
        },
        {
          "name": "ДИТЯЧЕ МЕНЮ",
          "path": "",
          "position": 4
        },
        {
          "name": "КЕЙТЕРИНГ",
          "path": "",
          "position": 5
        },
        {
          "name": "НАШІ АКЦІЇ",
          "path": "",
          "position": 6
        }
      ]
    },
    {
      "name": "САУНА",
      "path": "",
      "position": 7,
      "subMenu": [
        {
          "name": "САУНА В ТЕРНОПОЛІ",
          "path": "",
          "position": 1
        },
        {
          "name": "Правила",
          "path": "",
          "position": 2
        }
      ]
    },
    {
      "name": "КОНТАКТИ",
      "path": "6",
      "position": 9,
      "subMenu": [
  
      ]
    }
  ]
  
  
  /*[
    {
      "name": "name-1",
      "path": "/path/1",
      "position": 1,
      "subMenu": [
  
      ]
    },
    {
      "name": "name-2",
      "path": "107",
      "position": 2,
      "subMenu": [
        {
          "name": "name-2-1",
          "path": "107",
          "position": 1,
          "subMenu": [
  
          ]
        },
        {
          "name": "name-2-2",
          "path": "107",
          "position": 2,
          "subMenu": [
  
          ]
        }
      ]
    },
    {
      "name": "name-3",
      "path": "107",
      "position": 3,
      "subMenu": [
        {
          "name": "name-3-1",
          "path": "107",
          "position": 1,
          "subMenu": [
            {
              "name": "name-3-1-1",
              "path": "107",
              "position": 1,
              "subMenu": [
  
              ]
            },
            {
              "name": "name-3-1-2",
              "path": "107",
              "position": 2,
              "subMenu": [
  
              ]
            }
          ]
        }
      ]
    }
  ]*/