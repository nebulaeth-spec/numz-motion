export type CaseCopy = {short:string;title:string;diagram?:[string,string]};
export type SourceLink = {label:string;url:string;kind:'account'|'live'};
export type CaseDate = {label:string;value:string;kind:'published'|'launched'|'announced'|'event'|'awarded'|'metadata'};
export type FindingImage = {src:string;originalSrc?:string;width:number;height:number;canvas?:'light'|'dark';ru:{alt:string;caption?:string};en:{alt:string;caption?:string}};
export type FindingMediaGroup = {afterParagraph:number;images:FindingImage[];layout?:'single'|'pair'};
export type BrandFinding = {id:string;links:SourceLink[];ru:string[];en:string[];images?:FindingImage[];mediaGroups?:FindingMediaGroup[];date?:CaseDate};
export type BrandCase = {id:string;name:string;topics:string[];who:string;ru:CaseCopy;en:CaseCopy;findings:BrandFinding[];date?:CaseDate;hideDiagram?:boolean};
export const brands: BrandCase[] = [
  {
    "id": "ambrook",
    "name": "Ambrook",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Ali Aas",
    "date": {
      "label": "24 Oct 2025",
      "value": "2025-10-24",
      "kind": "published"
    },
    "ru": {
      "short": "Жанр для AI-рекламы",
      "title": "Новая техника получила свой жанр"
    },
    "en": {
      "short": "A genre for AI advertising",
      "title": "A new technique found its own genre"
    },
    "findings": [
      {
        "id": "surrealism",
        "ru": [
          "В рекламе Ambrook фотография фургона, заваленного бумагами, стала отправной точкой для сюрреалистических AI-сцен — например, рабочего стола посреди поля. Creative Director Ali Aas связывает появление собственного правила использования AI именно с этими опытами: сюрреализм нашёл место в бренде, который строился вокруг аутентичности.",
          "Рекламу начали делать и другие команды. Сотрудники продаж могли превращать идеи из разговоров с клиентами в объявления самостоятельно. Роль creative director постепенно смещалась от изготовления материалов к помощи коллегам и оценке их работы."
        ],
        "en": [
          "An Ambrook ad showing a van overwhelmed by paperwork became a starting point for surreal AI scenes, including a desk in a field. Creative Director Ali Aas traces a rule for using AI to these experiments: surrealism found a place in a brand grounded in authenticity.",
          "Other teams also began making ads. Sales colleagues could turn ideas from customer conversations into advertisements themselves. The creative director’s role gradually shifted from making the work to helping colleagues and assessing their output."
        ],
        "links": [
          {
            "label": "Ali Aas, On Art and Marketing",
            "url": "https://ambrook.com/blog/inside-ambrook/on-art-and-marketing",
            "kind": "account"
          }
        ]
      }
    ],
    "hideDiagram": true
  },
  {
    "id": "brex",
    "name": "Brex AI",
    "topics": [
      "extension",
      "production"
    ],
    "who": "Steph Lusby, Studio Freight",
    "date": {
      "label": "Sep 2023",
      "value": "2023-09",
      "kind": "launched"
    },
    "ru": {
      "short": "Наследование цвета и формы",
      "title": "AI унаследовал цвет автоматизации"
    },
    "en": {
      "short": "Inherited color and form",
      "title": "AI inherited the colour of automation"
    },
    "findings": [
      {
        "id": "existing-cues",
        "ru": [
          "Для Brex AI сохранили флаг и добавили к словесному знаку обозначение AI. В палитре опирались на уже существующий teal, который связывался с автоматизацией; синие тона дополняли основной оранжевый. Новая функция получила более выраженную собственную среду, продолжая прежнее значение цвета.",
          "Флаг стал и объёмным объектом. Для него предусмотрели три композиционных роли: самостоятельный акцент, фон и оболочку для изображения интерфейса."
        ],
        "en": [
          "Brex AI kept the flag and added an AI tag to the wordmark. Its palette drew on the existing teal associated with automation, with blues complementing the main orange. The new function gained a more distinct environment by extending an established colour meaning.",
          "The flag also became a three-dimensional object with three composition roles: a standalone accent, a background and a container for interface imagery."
        ],
        "links": [
          {
            "label": "Steph Lusby, Brex AI",
            "url": "https://www.stephlusby.com/brex-ai",
            "kind": "account"
          }
        ]
      }
    ],
    "hideDiagram": true
  },
  {
    "id": "figma",
    "name": "Figma",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Figma Brand Studio, Damien Correll, Jefferson Cheng, Leandro Castelao, Maria Chimishkyan, Carly Ayres, Becca Ramos",
    "date": {
      "label": "16 Sep 2024",
      "value": "2024-09-16",
      "kind": "published"
    },
    "ru": {
      "short": "Общие действия и сборка системы",
      "title": "У разных фигур общая грамматика",
      "diagram": [
        "Выделение",
        "Редактирование"
      ]
    },
    "en": {
      "short": "Shared actions and system building",
      "title": "Different shapes share a grammar",
      "diagram": [
        "Selection",
        "Editing"
      ]
    },
    "findings": [
      {
        "id": "action-grammar",
        "ru": [
          "В обновлении Figma 2024 года разнообразные фигуры получили общие состояния и действия. При переходе от выделения к редактированию квадратные узлы становятся круглыми. Наложение, раскрытие и группировка превращают отдельные элементы в композиции, связанные с работой в продукте.",
          "Степень активности тоже получила видимое выражение. Пассивная фигура залита одним цветом, активная получает паттерн, гиперактивная — более широкий спектр цветов. Так рисунок может показывать состояние объекта ещё до движения."
        ],
        "en": [
          "Figma’s 2024 refresh gave varied shapes shared states and actions. Square selection handles become round points when a shape enters editing. Overlap, reveal and clustering turn individual elements into compositions connected to work in the product.",
          "Activity also has a visual state. A passive shape has a solid fill, an activated one carries a pattern, and a hyper-activated one uses a wider colour spectrum. The drawing can signal a state before it moves."
        ],
        "links": [
          {
            "label": "Figma, Evolving our visual language",
            "url": "https://www.figma.com/blog/figma-on-figma-evolving-our-visual-language/",
            "kind": "account"
          }
        ]
      },
      {
        "id": "figma-web-system",
        "ru": [
          "В веб-системе Figma светлый и тёмный блоки цитаты раньше существовали отдельно. Цветовые переменные и режимы позволили сохранить один компонент: фон меняется, роли текста и ошибок остаются заданными, а названия токенов совпадают с кодом.",
          "Кнопку, расширявшуюся при наведении, команда проверила рядом с другим содержимым. На странице тарифов эффект мешал соседним элементам и одинаковой ширине кнопок. От понравившегося прототипа отказались после этой проверки."
        ],
        "en": [
          "Figma’s web system once had separate light and dark quote components. Colour variables and modes made a shared component possible: backgrounds change, text and error roles stay defined, and token names match the code.",
          "The team tested a button that expanded on hover alongside other content. On pricing pages, the effect interfered with neighbouring elements and consistent button widths. That context was enough to rule out an otherwise appealing prototype."
        ],
        "links": [
          {
            "label": "Becca Ramos, Updating our web system",
            "url": "https://www.figma.com/blog/updating-our-web-system-for-a-new-era/",
            "kind": "account"
          }
        ],
        "date": {
          "label": "13 Nov 2024",
          "value": "2024-11-13",
          "kind": "published"
        }
      }
    ]
  },
  {
    "id": "mercury",
    "name": "Mercury",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Sarah Mohammadi, Andreion de Castro",
    "date": {
      "label": "11 Mar 2026",
      "value": "2026-03-11",
      "kind": "published"
    },
    "ru": {
      "short": "Финансовые данные как изображения",
      "title": "Данные выбирают предметы для натюрморта"
    },
    "en": {
      "short": "Financial data as imagery",
      "title": "Data chooses the objects in a still life"
    },
    "findings": [
      {
        "id": "manual-refinement",
        "ru": [
          "В Mercury Insights международные платежи могут появиться в виде глобуса, а travel как крупнейшая категория расходов — в виде лобстера. Чем больше транзакций, тем полнее натюрморт. Он меняется вместе с финансовой активностью компании, а обычные графики и подробные данные остаются рядом.",
          "Andreion de Castro построил логику расположения предметов, затем вручную уточнял композиции. Ранние цветочные варианты казались слишком явно сгенерированными; небольшие сдвиги отдельных объектов помогали собрать более естественный натюрморт. Палитру при этом подбирали в продолжение уже существующего языка Insights. Система соединяет выбор предметов по данным с композицией, которую по-прежнему редактируют вручную."
        ],
        "en": [
          "In Mercury Insights, international payments can appear as a globe, while travel as the highest spending category can become a lobster. More transactions produce a fuller still life. The picture changes with the company’s financial activity, alongside conventional charts and detailed data.",
          "Andreion de Castro developed placement logic, then refined compositions by hand. Early flower arrangements felt too visibly generated; small shifts of individual objects helped produce a more natural still life. Its palette was developed in relation to Insights’ existing visual language. The system combines a data-driven choice of objects with a composition that is still edited by hand."
        ],
        "links": [
          {
            "label": "Mercury, Financial data as still life",
            "url": "https://mercury.com/blog/insights-financial-data-art",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/mercury-objects-0s.webp",
                "width": 1920,
                "height": 1080,
                "ru": {
                  "alt": "Лобстер из точек на столе Mercury Insights, образ категории travel"
                },
                "en": {
                  "alt": "A point-rendered lobster on the Mercury Insights table, representing travel spending"
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ],
    "hideDiagram": true
  },
  {
    "id": "morph",
    "name": "Morph",
    "topics": [
      "character",
      "variation"
    ],
    "who": "Studio Freight",
    "ru": {
      "short": "Границы эксперимента с мерчем",
      "title": "Новый стиль без нового персонажа",
      "diagram": [
        "Форма сохраняется",
        "Обработка меняется"
      ]
    },
    "en": {
      "short": "The limits of a merchandise experiment",
      "title": "A new style without a new character",
      "diagram": [
        "Shape held",
        "Treatment changed"
      ]
    },
    "findings": [
      {
        "id": "render-treatments",
        "ru": [
          "Разрабатывая мерч Morph, Studio Freight сначала одновременно изменила цвета, шрифты и самого Morphy — большеглазого персонажа бренда. По оценке студии, результат слишком отдалился от Morph. При следующей попытке дизайнеры вернулись к прежним 3D-рендерам героя и стали менять способ их обработки: объёмное изображение переводили в точечный растр и пиксельную графику.",
          "Зелёный снова стал главным цветом, а жёлтый, розовый и синий — дополнительными акцентами. Шрифты при этом могли меняться: в работу вошли и тяжёлые гротески, и пиксельные начертания. Границу новой попытки задали прежний Morphy и иерархия цветов; фактура и шрифт стали полем мерч-эксперимента."
        ],
        "en": [
          "While developing Morph merchandise, Studio Freight initially changed the colors, type and Morphy himself, the brand’s wide-eyed character. The studio felt the result had moved too far from Morph. On the next pass, the designers returned to the existing 3D renders and varied their treatment, translating the dimensional image into halftone and pixel graphics.",
          "Green became the leading color again, with yellow, pink and blue as supporting accents. Typography remained flexible, including heavy sans serifs and pixel fonts. The revised approach kept Morphy and the colour hierarchy as its reference points, opening texture and type to the merchandise experiment."
        ],
        "links": [
          {
            "label": "Studio Freight, Morph",
            "url": "https://studiofreight.com/work/morph",
            "kind": "account"
          }
        ],
        "images": [
          {
            "src": "./assets/morph-poster.webp",
            "width": 1500,
            "height": 2000,
            "ru": {
              "alt": "Зелёный плакат Morph: Morphy в точечном растре, округлая надпись web3 и мелкий пиксельный знак"
            },
            "en": {
              "alt": "Green Morph poster with a halftone Morphy, rounded web3 lettering and a small pixel mark"
            }
          },
          {
            "src": "./assets/morph-bag.webp",
            "width": 1500,
            "height": 2000,
            "ru": {
              "alt": "Визуал зелёной сумки на ухе: растровое изображение Morphy над крупной надписью Morph"
            },
            "en": {
              "alt": "A green bag pictured on an ear, with a halftone Morphy above large Morph lettering"
            }
          }
        ]
      }
    ]
  },
  {
    "id": "notion",
    "name": "Notion",
    "topics": [
      "character",
      "variation"
    ],
    "who": "Notion, Rob Giampietro, Roman Muradov, Katie Chang",
    "date": {
      "label": "10 Jul 2024",
      "value": "2024-07-10",
      "kind": "published"
    },
    "ru": {
      "short": "Кадрирование, цвет и авторство",
      "title": "Знакомый рисунок получил другой масштаб",
      "diagram": [
        "Удалённая фигура",
        "Крупный план"
      ]
    },
    "en": {
      "short": "Framing, color and authorship",
      "title": "Familiar drawings at a different scale",
      "diagram": [
        "Distant figure",
        "Close profile"
      ]
    },
    "findings": [
      {
        "id": "framing",
        "ru": [
          "В кампании Notion 2024 года Rob Giampietro предложил приблизиться к персонажам Roman Muradov: вместо отдалённых фигур появились крупные профили. Такое кадрирование освободило место для сюжета внутри головы персонажа. Знакомый рисунок получил новую тему благодаря смене масштаба."
        ],
        "en": [
          "For Notion’s 2024 campaign, Rob Giampietro suggested moving closer to Roman Muradov’s characters. Large profiles replaced distant figures, making room for a story inside each character’s mind. A change in scale gave the familiar drawings a new subject."
        ],
        "links": [
          {
            "label": "Katie Chang, Notion",
            "url": "https://www.notion.com/blog/the-thinking-behind-our-latest-brand-campaign#:~:text=Move%20in%20closer.",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/notion-early-illustrations.webp",
                "width": 1703,
                "height": 447,
                "ru": {
                  "alt": "Ранние иллюстрации Notion с небольшими фигурами людей"
                },
                "en": {
                  "alt": "Earlier Notion illustrations with small full-body figures"
                },
                "canvas": "light"
              },
              {
                "src": "./assets/notion-hero-delivery.webp",
                "width": 2400,
                "height": 952,
                "ru": {
                  "alt": "Крупные головы персонажей на билборде Notion 2024 года"
                },
                "en": {
                  "alt": "Large character heads on a 2024 Notion billboard"
                },
                "originalSrc": "./assets/notion-hero.png"
              }
            ],
            "layout": "single"
          }
        ]
      },
      {
        "id": "color-by-context",
        "ru": [
          "Цвет менялся по другой причине: чёрно-белые объявления терялись в городе. Кампания получила яркие жёлтый, синий и красный. Наружной рекламе требовалось выделяться среди городского шума, тогда как рабочий интерфейс приложения сохранил сдержанность."
        ],
        "en": [
          "Color changed for a different reason: monochrome ads disappeared into the city. The campaign gained bold yellow, blue and red. Outdoor advertising needed to stand out in a busy environment, while the app’s working interface remained restrained."
        ],
        "links": [
          {
            "label": "Katie Chang, Notion",
            "url": "https://www.notion.com/blog/the-thinking-behind-our-latest-brand-campaign#:~:text=While%20we%20refrain",
            "kind": "account"
          },
          {
            "label": "BUCK, Notion campaign",
            "url": "https://buck.co/work/notion-think-it-make-it",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/notion-buck-outdoor-delivery.webp",
                "width": 2400,
                "height": 1601,
                "ru": {
                  "alt": "Жёлтые, синие и красные материалы Notion на станции и турникетах"
                },
                "en": {
                  "alt": "Yellow, blue and red Notion campaign materials across a station and ticket gates"
                },
                "originalSrc": "./assets/notion-buck-outdoor.jpg"
              }
            ],
            "layout": "single"
          }
        ]
      },
      {
        "id": "notion-faces",
        "ru": [
          "Notion Faces выросла из портретов сотрудников в конструктор для сообщества. Попытка обучить AI давала слабые результаты и теряла оттенки кожи; ручная доводка могла обслужить коллег, но не открытый сервис. Команда выбрала детали, нарисованные несколькими иллюстраторами по общей сетке и с заданными кистями.",
          "Критерий качества сместился от точного сходства к самовыражению. Giampietro приводит простой пример: праздничная шляпа может отличать коллегу лучше, чем похожий на остальных схематичный портрет. Выбор аксессуаров стал частью замысла конструктора."
        ],
        "en": [
          "Notion Faces grew from employee portraits into a community tool. An AI trial produced weak results and lost skin tones; manual repair could serve colleagues, but not a public service. The team chose components drawn by several illustrators using a shared grid and prescribed brushes.",
          "The goal shifted from exact likeness to expression. Giampietro gives a simple example: a party hat can distinguish a colleague better than another similar, simplified portrait. Choosing accessories became part of the tool’s purpose."
        ],
        "links": [
          {
            "label": "Rob Giampietro, Notion Faces interview",
            "url": "https://interfacecafe.com/notion-faces-rob-giampietro-on-scaling-a-human-centered-brand/",
            "kind": "account"
          },
          {
            "label": "Notion, Create avatars with Notion Faces",
            "url": "https://www.notion.com/help/notion-faces",
            "kind": "account"
          }
        ],
        "date": {
          "label": "5 Aug 2025",
          "value": "2025-08-05",
          "kind": "published"
        }
      }
    ]
  },
  {
    "id": "phantom",
    "name": "Phantom",
    "topics": [
      "extension",
      "variation"
    ],
    "who": "Bakken & Bæck, F37, Gianluca Alla, Martin Nicolausson, Digo Digital, Anton Hjertstedt",
    "ru": {
      "short": "Выразительность отдельного продукта",
      "title": "Более смелый язык для Phantom Cash",
      "diagram": [
        "Основная система",
        "Расширение Cash"
      ]
    },
    "en": {
      "short": "Expression for one product",
      "title": "A more expressive language for Phantom Cash",
      "diagram": [
        "Core system",
        "Cash extension"
      ]
    },
    "findings": [
      {
        "id": "cash-extension",
        "ru": [
          "Для Phantom Cash студия Bakken & Bæck получила бриф на более выразительный язык, рассчитанный на широкую финансовую аудиторию. Градиенты, стикеры и 3D вошли в расширение, охватившее страницу Cash, карту, токен и онбординг.",
          "Для крупных надписей семейство Phantom Sans дополнили начертанием с инктрапами. Вместе с новой графикой оно оформляет путь конкретного предложения: от знакомства с Cash на сайте до карты и онбординга внутри приложения."
        ],
        "en": [
          "For Phantom Cash, Bakken & Bæck received a brief for a more expressive visual language aimed at a broader consumer finance audience. Gradients, stickers and 3D became part of an extension spanning the Cash page, card, token and onboarding.",
          "A Phantom Sans inktrap weight was added for display text. Alongside the new imagery, it gives this particular offering a continuous path from the Cash website to its card and in-app onboarding."
        ],
        "links": [
          {
            "label": "Bakken & Bæck, Phantom",
            "url": "https://bakkenbaeck.com/case/phantom#:~:text=Having%20established%20the%20core%20Phantom%20brand",
            "kind": "account"
          },
          {
            "label": "Phantom Cash, live site",
            "url": "https://phantom.com/cash",
            "kind": "live"
          },
          {
            "label": "Seyi Taylor, Introducing Phantom Cash",
            "url": "https://phantom.com/learn/blog/introducing-phantom-cash",
            "kind": "account"
          }
        ]
      }
    ],
    "date": {
      "label": "30 Sep 2025",
      "value": "2025-09-30",
      "kind": "announced"
    }
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "topics": [
      "variation",
      "evolution"
    ],
    "who": "PORTO ROCHA, Robinhood, Lauren Bamford, Sarah Pritchard",
    "ru": {
      "short": "Графика для новых финансовых тем",
      "title": "Вместо общего мира — отдельные предметы"
    },
    "en": {
      "short": "Graphics for new financial subjects",
      "title": "From an entire world to individual objects"
    },
    "findings": [
      {
        "id": "image-language",
        "ru": [
          "Прежняя Robinhood показывала детальные футуристические города. По объяснению PORTO ROCHA, этот мир плохо расширялся на растущий набор финансовых продуктов. Его сменили технические иллюстрации, которые проще воспроизводить на разных масштабах, и фотографии отдельных предметов.",
          "В фотографиях двойной желток мог говорить о доходности, звенья цепи — о криптовалюте. В фотографических кредитах проекта указаны Lauren Bamford и Sarah Pritchard. Знакомое перо уточнили, а яркий зелёный акцент выделили на фоне чёрного, белого и нейтральных оттенков. Отдельный предмет стал единицей расширения: новую финансовую тему можно было представить своей предметной метафорой."
        ],
        "en": [
          "Robinhood’s earlier identity pictured detailed futuristic cities. PORTO ROCHA explains that this world struggled to serve an expanding range of financial products. Technical illustrations that were easier to reproduce at different scales took its place, alongside photographs of individual objects.",
          "In the photography, a double-yolked egg could suggest returns and linked chains could suggest cryptocurrency. The project credits Lauren Bamford and Sarah Pritchard for photography. The familiar feather was refined, with vivid green accents set against black, white and neutral tones. The individual object became the unit for introducing another financial subject through its own metaphor."
        ],
        "links": [
          {
            "label": "PORTO ROCHA, Robinhood",
            "url": "https://www.portorocha.com/robinhood",
            "kind": "account"
          },
          {
            "label": "Robinhood, A new visual identity",
            "url": "https://robinhood.com/newsroom/a-new-visual-identity/",
            "kind": "account"
          }
        ]
      }
    ],
    "hideDiagram": true,
    "date": {
      "label": "10 Oct 2024",
      "value": "2024-10-10",
      "kind": "launched"
    }
  },
  {
    "id": "cointracker",
    "name": "CoinTracker",
    "topics": [
      "production"
    ],
    "who": "Bakken & Bæck, Jude Sue, Beth Dobson",
    "hideDiagram": false,
    "ru": {
      "short": "Меньше типов, больше комбинаций",
      "title": "Двадцать восемь страниц, восемь конструкций",
      "diagram": [
        "28 отдельных страниц",
        "8 типов страниц"
      ]
    },
    "en": {
      "short": "Fewer types, more combinations",
      "title": "Twenty-eight pages, eight structures",
      "diagram": [
        "28 individual pages",
        "8 page types"
      ]
    },
    "findings": [
      {
        "id": "cointracker",
        "ru": [
          "При обновлении сайта CoinTracker команда Bakken & Bæck предложила заменить 28 индивидуально спроектированных страниц восемью типами с повторно используемыми модулями. Различия между страницами сохранились в содержании и сборке; каждому разделу больше не требовалась отдельная конструкция.",
          "CoinTracker Pro при этом предназначен и для крупных заголовков, и для плотных транзакционных данных. Общую типографику проверяли на маркетинговых и продуктовых страницах ещё до завершения всей системы. Бренд собирался сразу на двух разных нагрузках: привлечь внимание и дать прочитать финансовую информацию."
        ],
        "en": [
          "For CoinTracker’s website refresh, Bakken & Bæck proposed replacing 28 individually designed pages with eight page types built from reusable modules. Pages could differ through their content and assembly without each requiring a separate structure.",
          "CoinTracker Pro was intended for both large headlines and dense transaction data. The shared typography was tested on marketing and product pages before the whole system was complete. The brand was built around two different demands at once: attracting attention and making financial information readable."
        ],
        "links": [
          {
            "label": "Bakken & Bæck, Q&A: CoinTracker",
            "url": "https://bakkenbaeck.com/journal/conversations-on-collaborating",
            "kind": "account"
          },
          {
            "label": "Jude Sue, Defining CoinTracker’s new brand",
            "url": "https://www.cointracker.com/blog/defining-cointrackers-new-brand",
            "kind": "account"
          }
        ]
      }
    ],
    "date": {
      "label": "9 Apr 2025",
      "value": "2025-04-09",
      "kind": "published"
    }
  },
  {
    "id": "new-generation",
    "name": "New Generation",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Henke Kongsvoll, Sam Hunt",
    "hideDiagram": true,
    "ru": {
      "short": "Параметры вместо одного рисунка",
      "title": "У знака есть управляемая геометрия"
    },
    "en": {
      "short": "Parameters instead of one drawing",
      "title": "A mark with adjustable geometry"
    },
    "findings": [
      {
        "id": "new-generation",
        "ru": [
          "Bakken & Bæck превратила знак New Generation в набор изменяемых параметров: точку схода, ширину панелей, расстояния и радиусы углов. Двумерная сетка позволяла управлять формой; при возвращении в 3D к ней добавились камера и поле зрения, а результат снова переводили в вектор.",
          "Авторы проверили пропорции Fibonacci и supergolden — разные способы задавать рост размеров, — но отказались от них из-за пересечений панелей и неудачного ритма. Для итоговой конструкции выбрали plastic ratio, другое соотношение для наращивания длин и промежутков. Это авторский отбор геометрии: дизайнеры подбирали отношения, с которыми панели складывались в нужную композицию."
        ],
        "en": [
          "Bakken & Bæck turned New Generation’s mark into adjustable geometry: a vanishing point, panel widths, spacing and corner radii. A two-dimensional grid made the form controllable; returning to 3D added camera settings and field of view before the result was traced back into vector artwork.",
          "The authors tried Fibonacci and supergolden proportions, two ways to make dimensions grow, but rejected them because of overlapping panels and an unsatisfactory rhythm. They chose the plastic ratio, another relationship for increasing panel lengths and gaps. The choice was a design judgement: they selected proportions that let the panels form the composition they wanted."
        ],
        "links": [
          {
            "label": "Henke Kongsvoll and Sam Hunt, New Generation",
            "url": "https://bakkenbaeck.com/journal/new-generation",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/new-generation-parameters-27.65s.webp",
                "width": 3840,
                "height": 2160,
                "ru": {
                  "alt": "Изменение точки схода в геометрии знака New Generation"
                },
                "en": {
                  "alt": "Changing the vanishing point in New Generation’s mark geometry"
                }
              }
            ],
            "layout": "single"
          },
          {
            "afterParagraph": 2,
            "images": [
              {
                "src": "./assets/new-generation-ratios-2.55s.webp",
                "width": 3840,
                "height": 2160,
                "ru": {
                  "alt": "Геометрическая конструкция New Generation с длинами панелей, промежутками и камерой"
                },
                "en": {
                  "alt": "New Generation construction with panel lengths, spacing and camera settings"
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ],
    "date": {
      "label": "19 Nov 2025",
      "value": "2025-11-19",
      "kind": "published"
    }
  },
  {
    "id": "speakeasy",
    "name": "Speakeasy",
    "topics": [
      "variation",
      "production"
    ],
    "who": "basement.studio",
    "hideDiagram": true,
    "ru": {
      "short": "Оптические версии знака",
      "title": "Маленький знак не становится большим"
    },
    "en": {
      "short": "Optical versions of a mark",
      "title": "The small mark is not a large mark"
    },
    "findings": [
      {
        "id": "speakeasy",
        "ru": [
          "В брендбуке Speakeasy знак показан на светлом и тёмном фоне при ширине 100, 50 и 25 пикселей. Для малого размера внутренние элементы раздвинуты, чтобы промежутки не слипались. Но увеличивать эту версию обратно запрещено: поправка, которая помогает маленькому знаку, меняет рисунок большого. Поэтому вместе с оптическими вариантами передаётся правило выбора между ними."
        ],
        "en": [
          "Speakeasy’s brand book shows the mark on light and dark backgrounds at widths of 100, 50 and 25 pixels. Internal elements are spaced further apart for small sizes so the gaps stay open. But that version must not be enlarged: a correction that helps a small mark alters the drawing of a large one. The optical variants come with a rule for choosing between them."
        ],
        "links": [
          {
            "label": "basement.studio, Speakeasy",
            "url": "https://basement.studio/post/whatever-it-takes-to-craft-a-brand-even-a-long-flight",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/speakeasy-mark-system-frame-10.webp",
                "width": 1921,
                "height": 1081,
                "ru": {
                  "alt": "Оптические версии знака Speakeasy для 100, 50 и 25 пикселей на двух фонах"
                },
                "en": {
                  "alt": "Speakeasy optical mark variants at 100, 50 and 25 pixels on light and dark backgrounds"
                }
              },
              {
                "src": "./assets/speakeasy-mark-system-frame-14.webp",
                "width": 1921,
                "height": 1081,
                "ru": {
                  "alt": "Страница Incorrect use: нижнее правое правило запрещает увеличивать оптически скорректированный малый знак",
                  "caption": "Нижнее правое правило ограничивает масштаб: версию для уменьшения нельзя использовать в крупных размерах."
                },
                "en": {
                  "alt": "Incorrect use page: the bottom-right rule prohibits using the reduction version at larger sizes",
                  "caption": "The bottom-right rule limits scale: the reduction version must not be used at larger sizes."
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ],
    "date": {
      "label": "15 Jul 2025",
      "value": "2025-07-15",
      "kind": "published"
    }
  },
  {
    "id": "granola",
    "name": "Granola",
    "topics": [
      "production",
      "variation"
    ],
    "who": "Ragged Edge",
    "hideDiagram": true,
    "ru": {
      "short": "Передача иллюстрационного почерка",
      "title": "Следующую иллюстрацию задают словами"
    },
    "en": {
      "short": "Passing on an illustration style",
      "title": "The next illustration starts with words"
    },
    "findings": [
      {
        "id": "granola",
        "ru": [
          "Для Granola Ragged Edge разработала многослойные коллажи и внутренний инструмент их продолжения. В демонстрации автор задаёт, что нужно сделать, настроение, метафору и цвет; интерфейс возвращает варианты в общей манере cut-and-paste.",
          "В одном примере запрос на миниатюру о видении и амбиции разделён на три решения: что изображение должно сопровождать, какое чувство передать и какую метафору использовать. Масштаб замысла соединяется с планетами вокруг общей идеи и синим цветом; результатом становится коллаж с Землёй. Те же поля позволяют следующему автору задать другое содержание, чувство и метафору внутри предложенного коллажного почерка."
        ],
        "en": [
          "For Granola, Ragged Edge developed layered collages and an internal tool for making more of them. In the demonstration, the author specifies what to make, a feeling, a metaphor and a colour; the interface returns variations within the shared cut-and-paste treatment.",
          "One example separates a thumbnail about vision and ambition into three decisions: what the image accompanies, the feeling it should convey and the metaphor it uses. The scale of the ambition is paired with planets orbiting a shared idea and the color blue, producing an Earth collage. Those fields give the next author a way to specify a different image within the established collage treatment."
        ],
        "links": [
          {
            "label": "Ragged Edge, Granola",
            "url": "https://raggededge.com/partnerships/granola",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/granola-findings-generator-5.467s.webp",
                "width": 1920,
                "height": 1080,
                "ru": {
                  "alt": "Поля Make, Feeling, Metaphor и Color рядом с коллажем Земли"
                },
                "en": {
                  "alt": "Make, Feeling, Metaphor and Color fields beside an Earth collage"
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ]
  },
  {
    "id": "comet",
    "name": "Comet",
    "topics": [
      "extension",
      "variation"
    ],
    "who": "Aaron Marks",
    "hideDiagram": true,
    "ru": {
      "short": "Временный язык запуска",
      "title": "Выразительность может быть рассчитана на запуск"
    },
    "en": {
      "short": "A temporary launch language",
      "title": "An expressive system can belong to a launch"
    },
    "findings": [
      {
        "id": "comet",
        "ru": [
          "Когда Studio Freight делала сайт запуска Comet, окончательного набора функций ещё не было. Команда построила опыт вокруг окна браузера: посетитель как будто оказывался внутри него. Пиксельную WebGL-сетку отвергли как слишком холодную, сохранив саму метафору окна.",
          "Aaron Marks допускает, что с развитием продукта такую страницу сменит обычный маркетинговый сайт. Он оценивает её как работу для момента запуска: представить ещё формирующийся браузер и вызвать желание его попробовать."
        ],
        "en": [
          "When Studio Freight made Comet’s launch site, the final feature set was still taking shape. The team built the experience around a browser window, placing the visitor inside it. An early WebGL pixel grid was rejected as too cold, while the window metaphor survived.",
          "Aaron Marks accepts that an evolving product may later need a conventional marketing site. He judges this page in its launch context: introducing a browser that was still taking shape and making people want to try it."
        ],
        "links": [
          {
            "label": "Aaron Marks, Launching Comet with Perplexity",
            "url": "https://themanifest.fyi/articles/launching-comet",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 2,
            "images": [
              {
                "src": "./assets/comet-window.webp",
                "width": 2358,
                "height": 1560,
                "ru": {
                  "alt": "Вытянутое окно браузера открывает небо на странице запуска Comet"
                },
                "en": {
                  "alt": "An elongated browser window opens onto sky on Comet’s launch page"
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ],
    "date": {
      "label": "Jan 2026",
      "value": "2026-01",
      "kind": "published"
    }
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "topics": [
      "extension",
      "variation"
    ],
    "who": "Tonik, LangChain",
    "hideDiagram": true,
    "ru": {
      "short": "Событие и внешний бренд-кит",
      "title": "Свобода конференции и строгость логотипа сосуществуют"
    },
    "en": {
      "short": "An event and an external brand kit",
      "title": "An event’s freedom can coexist with a fixed logo"
    },
    "findings": [
      {
        "id": "langchain",
        "ru": [
          "Для Interrupt26 Tonik отказалась от первого намерения держаться близко к основному LangChain. Ветвящаяся сетка, градиентные блоки и четыре цветовых направления стали отдельным языком события. Цвет одновременно различал зоны площадки, а сетка переходила со сцены на постеры, мерч и навигацию.",
          "Публичная страница Brand Assets у LangChain задаёт пропорции логотипа и готовые варианты для светлого и тёмного фона. В этих источниках правила относятся к разным объектам: один описывает знак, другой — сетку, цвет и навигацию конференции."
        ],
        "en": [
          "For Interrupt26, Tonik moved away from its initial plan to stay close to LangChain’s core identity. A branching grid, gradient blocks and four colour directions formed the event’s own language. Colour also identified venue zones, while the grid extended across the stage, posters, merchandise and wayfinding.",
          "LangChain’s public Brand Assets page specifies logo proportions and ready-made light and dark versions. The two sources address different objects: one defines a mark, while the other describes the conference’s grid, colour and wayfinding."
        ],
        "links": [
          {
            "label": "Tonik, Interrupt26 by LangChain",
            "url": "https://www.tonik.com/case-studies/interrupt26-by-langchain",
            "kind": "account"
          },
          {
            "label": "LangChain, Brand Assets",
            "url": "https://www.langchain.com/brand-assets",
            "kind": "account"
          }
        ]
      }
    ],
    "date": {
      "label": "2026",
      "value": "2026",
      "kind": "event"
    }
  },
  {
    "id": "irys",
    "name": "Irys",
    "topics": [
      "character",
      "production"
    ],
    "who": "Jordan Hetzer, Studio Freight",
    "hideDiagram": true,
    "ru": {
      "short": "Продолжение силами команды",
      "title": "Характер системы зависит от того, кто её продолжает"
    },
    "en": {
      "short": "A system the team can continue",
      "title": "A system changes with the people who continue it"
    },
    "findings": [
      {
        "id": "irys",
        "ru": [
          "Для Irys Studio Freight выбрала плоскую графику и выразительную типографику с учётом внутренней команды 2D-анимации. AI-рендеры разрезали на фактуры; затем команда клиента оживляла их. Sprites оставались отдельными от словесного знака, хотя появлялись широко.",
          "После передачи аниматоры по-своему развили персонажей. Jordan Hetzer рассказывает, что сначала это расходилось с его ожиданиями и потребовало отпустить часть первоначального замысла. Именно интерпретация команды клиента стала продолжением студийной работы."
        ],
        "en": [
          "For Irys, Studio Freight chose flat graphics and expressive typography around the client’s 2D animation team. AI renders were cut into textures, then animated in-house. The sprites remained separate from the wordmark even though they appeared widely.",
          "After handoff, the animators developed their own interpretation of the characters. Jordan Hetzer describes having to let go of expectations about how the work would continue. The client team’s interpretation became the next stage of the studio’s design."
        ],
        "links": [
          {
            "label": "Jordan Hetzer, Shaping a Brand to Smile Back",
            "url": "https://themanifest.fyi/articles/smile-back",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/irys-expression-delivery.webp",
                "width": 2358,
                "height": 1404,
                "ru": {
                  "alt": "Словесный знак Irys на одной стороне и типографика с персонажами на соседней"
                },
                "en": {
                  "alt": "Irys wordmark on one face, with typography and sprites on the adjacent face"
                },
                "originalSrc": "./assets/irys-expression.png"
              }
            ],
            "layout": "single"
          }
        ]
      }
    ],
    "date": {
      "label": "Oct 2025",
      "value": "2025-10",
      "kind": "published"
    }
  },
  {
    "id": "mailchimp",
    "name": "Mailchimp",
    "topics": [
      "character",
      "motion"
    ],
    "who": "Mailchimp, DIA, Lauren Coutts",
    "hideDiagram": true,
    "ru": {
      "short": "Роли героя, движения и платформы",
      "title": "Не каждое действие принадлежит Freddie"
    },
    "en": {
      "short": "Roles for character, motion and platform",
      "title": "Freddie does not own every action"
    },
    "findings": [
      {
        "id": "mailchimp-1",
        "ru": [
          "В 2017 году Mailchimp не перенесла знаменитый high five Freddie в новый сценарий Facebook Ads. Отправка письма происходила сразу, а запуск рекламы подразумевал ожидание. Команда выбрала рогатку и шар, летящий через облака; забавную надуваемую обувь отвергли, потому что она плохо объясняла действие."
        ],
        "en": [
          "In 2017, Mailchimp did not carry Freddie’s familiar high five into its new Facebook Ads flow. Sending an email was immediate; launching an ad involved waiting. The team chose a slingshot and a ball travelling through clouds, rejecting a playful pump shoe because it did not explain the action."
        ],
        "links": [
          {
            "label": "Mailchimp, Designing the Freddie High Five",
            "url": "https://mailchimp.com/resources/designing-the-freddie-high-five-animation-for-facebook-ads/",
            "kind": "account"
          }
        ]
      },
      {
        "id": "mailchimp-2",
        "ru": [
          "В motion-системе Mailchimp и DIA исходным жестом стало подмигивание Freddie. Авторы распространили его поведение на типографику, переходы и другие графические элементы. Узнаваемая мимика героя стала отправной точкой для движения всего семейства материалов."
        ],
        "en": [
          "Mailchimp and DIA based a motion system on Freddie’s wink, extending its behaviour into typography, transitions and other graphic elements. The character’s facial gesture became the starting point for motion across the family of materials."
        ],
        "links": [
          {
            "label": "Mailchimp + DIA, Motion Identity",
            "url": "https://www.oneclub.org/awards/theoneshow/-award/43477/motion-identity/",
            "kind": "account"
          }
        ],
        "date": {
          "label": "2022",
          "value": "2022",
          "kind": "awarded"
        }
      },
      {
        "id": "mailchimp-3",
        "ru": [
          "Для клиентских email-шаблонов команда пошла ещё дальше: уменьшила визуальную громкость собственного бренда. Простые фотографии и согласованная sans-serif типографика помогали представить в шаблоне другую компанию. Платформа оставляла место авторству пользователя на той поверхности, которую он выпускал от своего имени."
        ],
        "en": [
          "For customer email templates, the team made Mailchimp itself quieter. Simple photography and consistent sans-serif typography made it easier to imagine a different company inside the template. The platform left room for the user’s authorship on work published in the user’s name."
        ],
        "links": [
          {
            "label": "Lauren Coutts, Mailchimp email templates",
            "url": "https://mailchimp.com/resources/new-email-templates/",
            "kind": "account"
          }
        ],
        "date": {
          "label": "2025",
          "value": "2025",
          "kind": "metadata"
        }
      }
    ],
    "date": {
      "label": "19 Apr 2017",
      "value": "2017-04-19",
      "kind": "published"
    }
  },
  {
    "id": "aave",
    "name": "Aave",
    "topics": [
      "character",
      "variation"
    ],
    "who": "Aave",
    "hideDiagram": true,
    "ru": {
      "short": "Два исполнения Ronnie",
      "title": "Знак и персонаж имеют разные степени свободы"
    },
    "en": {
      "short": "Two treatments of Ronnie",
      "title": "The mark and the character have different freedoms"
    },
    "findings": [
      {
        "id": "aave",
        "ru": [
          "Aave отдельно представляет словесный знак, Ghost Logomark и маскота Ronnie. Для логотипа опубликованы ограничения деформации, цвета и расположения; Ronnie при этом показан в двух техниках: контурной и airbrush.",
          "Одна поза Ronnie существует как контур и как airbrush, поэтому смена техники здесь относится к исполнению героя. Точность воспроизведения знака и разработка иллюстрации оказываются разными задачами внутри одной системы."
        ],
        "en": [
          "Aave presents its wordmark, Ghost Logomark and Ronnie mascot separately. The logo has rules for distortion, colour and placement, while Ronnie is shown in two treatments: line and airbrush.",
          "The same pose survives a change of drawing technique, placing the variation in Ronnie’s treatment. Reproducing the mark accurately and developing a character illustration are separate tasks in the published system."
        ],
        "links": [
          {
            "label": "Aave, Brand",
            "url": "https://aave.com/brand",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/aave-ronnie-line.webp",
                "width": 820,
                "height": 820,
                "ru": {
                  "alt": "Ronnie со скейтбордом в контурном исполнении"
                },
                "en": {
                  "alt": "Ronnie with a skateboard in a line treatment"
                },
                "canvas": "light"
              },
              {
                "src": "./assets/aave-ronnie-airbrush.webp",
                "width": 820,
                "height": 820,
                "ru": {
                  "alt": "Та же поза Ronnie в airbrush-исполнении"
                },
                "en": {
                  "alt": "The same Ronnie pose in an airbrush treatment"
                },
                "canvas": "light"
              }
            ],
            "layout": "pair"
          }
        ]
      }
    ]
  },
  {
    "id": "cohere",
    "name": "Cohere",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Pentagram",
    "hideDiagram": true,
    "ru": {
      "short": "Инструменты для новых форм",
      "title": "Вариативность передали вместе с инструментами"
    },
    "en": {
      "short": "Tools for producing new forms",
      "title": "Variation was delivered with its tools"
    },
    "findings": [
      {
        "id": "cohere",
        "ru": [
          "В основе Cohere у Pentagram лежит ячеистая геометрия Вороного. Для её продолжения команда подготовила Figma-плагин, компоненты, которые формируют ячейки вокруг контейнеров и слов, и отдельный Cinema 4D-инструмент для объёмных форм.",
          "В 3D-инструменте меняются количество объектов, масштаб, палитра и поверхность, включая стекло. Figma-плагин решает другую производственную задачу: создаёт плоские ячейки вокруг контейнеров и слов. У команды есть отдельные средства для продолжения двухмерной и объёмной частей айдентики."
        ],
        "en": [
          "Pentagram built Cohere’s identity around Voronoi cells. To continue that language, the team created a Figma plug-in, components that form cells around containers and words, and a separate Cinema 4D tool for three-dimensional forms.",
          "The 3D tool changes object count, scale, palette and surface, including glass. The Figma plug-in serves a different production task, creating flat cells around containers and words. Each part of the identity has an authoring tool suited to its format."
        ],
        "links": [
          {
            "label": "Pentagram, Cohere",
            "url": "https://www.pentagram.com/work/cohere",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "ramp",
    "name": "Ramp",
    "topics": [
      "production"
    ],
    "who": "Paul Jun",
    "hideDiagram": true,
    "ru": {
      "short": "Отбор между генерацией и выдачей",
      "title": "Повторяемый формат становится инструментом"
    },
    "en": {
      "short": "Curation between generation and delivery",
      "title": "A recurring format becomes a tool"
    },
    "findings": [
      {
        "id": "ramp",
        "ru": [
          "Paul Jun описывает, как в Ramp начали с самых частых форматов: презентаций, whitepapers и одностраничных материалов. Дизайнеры определяли композицию, повествование и типографику, а разработчики превращали эти решения в систему. По его рассказу, документ из Slack может возвращаться редактируемой презентацией в HTML, PDF и PowerPoint.",
          "Для коллажей Jun описывает другую цепочку: около дюжины отобранных образцов, инструмент генерации, выбор удачных вариантов дизайнером и общая библиотека. Получение изображения и допуск к использованию остаются разными этапами. Новый бренд или кампанию автор относит к работе людей; автоматизации передаётся уже найденный повторяемый способ производства."
        ],
        "en": [
          "Paul Jun describes Ramp starting with its recurring decks, whitepapers and one-pagers. Designers defined composition, narrative and typography; builders turned those decisions into a system. In his account, a document submitted through Slack can return as an editable presentation in HTML, PDF and PowerPoint.",
          "For collages, Jun describes another sequence: roughly a dozen selected examples, a generator, designer selection and a shared asset library. Producing an image and approving its use remain separate steps. He keeps a new identity or campaign close to people, while software takes on an established production pattern."
        ],
        "links": [
          {
            "label": "Paul Jun, Brand as software",
            "url": "https://ramp.design/blog/brand-as-software",
            "kind": "account"
          },
          {
            "label": "Paul Jun, collage workflow",
            "url": "https://x.com/PaulJun_/status/2090858203605049749",
            "kind": "account"
          }
        ]
      }
    ],
    "date": {
      "label": "4 Aug 2026",
      "value": "2026-08-04",
      "kind": "published"
    }
  },
  {
    "id": "zerion",
    "name": "Zerion",
    "topics": [
      "variation",
      "production"
    ],
    "who": "Zerion",
    "hideDiagram": true,
    "ru": {
      "short": "Графика и комплект для партнёра",
      "title": "Сложность растёт поверх общего основания"
    },
    "en": {
      "short": "Graphics and a partner kit",
      "title": "Complexity builds on a shared base"
    },
    "findings": [
      {
        "id": "zerion-1",
        "ru": [
          "Zerion показывает четыре ступени графики: цветные треугольники, паттерны, дополнительные формы и иллюстрации. В простой и более насыщенной композициях сохраняется веерное основание, а поверхность и наполнение усложняются."
        ],
        "en": [
          "Zerion shows four stages of graphics: coloured triangles, patterns, additional shapes and illustrations. The simpler and richer compositions retain a fan-like base as their surfaces and contents become more elaborate."
        ],
        "links": [
          {
            "label": "Zerion, Visual Language",
            "url": "https://design.zerion.io/visual-language",
            "kind": "account"
          }
        ]
      },
      {
        "id": "zerion-2",
        "ru": [
          "Для партнёрских страниц существует более узкий комплект. Лицензируемый Aeonik заменён системным шрифтом с единственным весом 500; заданы секции, ширина и интервалы. Партнёр подставляет свои header и footer, а страницу проверяет Zerion. Авторство партнёра сосредоточено в его собственном обрамлении страницы; типографика и композиция общих секций уже выбраны в комплекте."
        ],
        "en": [
          "Its partner website kit is narrower. Licensed Aeonik is replaced with a system font at a single 500 weight; sections, width and spacing are specified. Partners insert their own header and footer, then Zerion reviews the page. The partner’s authorship is concentrated in its own page framing; the kit preselects the typography and layout for the shared sections."
        ],
        "links": [
          {
            "label": "Zerion, Vibe Web",
            "url": "https://design.zerion.io/vibe-web",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "turbopuffer",
    "name": "turbopuffer",
    "topics": [
      "character",
      "extension"
    ],
    "who": "Simon Eskildsen, turbopuffer",
    "hideDiagram": true,
    "ru": {
      "short": "Новый сюжет в знакомом мире",
      "title": "Новый персонаж связывается с прежней формой"
    },
    "en": {
      "short": "A new story in a familiar world",
      "title": "A new character meets an existing form"
    },
    "findings": [
      {
        "id": "turbopuffer",
        "ru": [
          "В сентябре 2026 года turbopuffer представила корову, чтобы объяснить, почему продукты «puff». В материалах кампании она существует как настоящая корова на постере фильма и как пиксельный персонаж игры. На cowpuffs коровьи пятна соединены с округлой рыбоподобной формой пуффера.",
          "Базовый пуффер при этом остаётся на превью основного сайта. Технический changelog от 15 сентября оформлен текстом в моноширинной вёрстке и обходится без коровы. Корова добавляет сюжет кампании рядом с сайтом, представленным пуффером, и отдельной текстовой подачей технических обновлений."
        ],
        "en": [
          "In September 2026, turbopuffer introduced a cow to explain why its products “puff”. Campaign materials show a real cow on a film poster and a pixel character in a game preview. The cowpuffs combine cow-like patches with the rounded, fish-like shape of a puffer.",
          "The original puffer remains on the main site’s preview image. The September 15 technical changelog uses monospaced text and contains no cow. The cow adds a campaign storyline alongside the puffer-led site and a separate, text-led channel for technical updates."
        ],
        "links": [
          {
            "label": "Simon Eskildsen, introducing the cow",
            "url": "https://x.com/Sirupsen/status/2098072903505829913",
            "kind": "account"
          },
          {
            "label": "turbopuffer, August changelog",
            "url": "https://x.com/turbopuffer/status/2099924882016600474",
            "kind": "account"
          },
          {
            "label": "turbopuffer supply, cowpuff",
            "url": "https://turbopuffer.supply/",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 2,
            "images": [
              {
                "src": "./assets/turbopuffer-cowpuffs.jpg",
                "width": 2048,
                "height": 1536,
                "ru": {
                  "alt": "Cowpuffs: округлые пуфферы с коровьими пятнами"
                },
                "en": {
                  "alt": "Cowpuffs: round puffer figures with cow patches"
                }
              },
              {
                "src": "./assets/turbopuffer-changelog.jpg",
                "width": 4494,
                "height": 2646,
                "ru": {
                  "alt": "Продуктовый changelog turbopuffer в моноширинной вёрстке без коровы"
                },
                "en": {
                  "alt": "A turbopuffer product changelog in monospaced type without the cow"
                }
              }
            ],
            "layout": "pair"
          }
        ]
      }
    ],
    "date": {
      "label": "10 Sep 2026",
      "value": "2026-09-10",
      "kind": "published"
    }
  },
  {
    "id": "github",
    "name": "GitHub",
    "topics": [
      "motion"
    ],
    "who": "GitHub",
    "hideDiagram": true,
    "ru": {
      "short": "Движение по задаче и объекту",
      "title": "Одно движение получает разные права в разных задачах"
    },
    "en": {
      "short": "Motion by task and object",
      "title": "The same movement has different permissions"
    },
    "findings": [
      {
        "id": "github",
        "ru": [
          "В motion-guide GitHub утилитарное движение помогает понять изменение, а кампания может сильнее работать с ритмом и выразительностью. Ограничение зависит и от объекта: типовой прыжок текста запрещён, движение персонажа может стать исключением.",
          "Переходам назначены конкретные задачи. Горизонтальный сдвиг связывает виды одного уровня, превращение контейнера показывает связь действия с последующим содержимым, а раскрытие внутри элемента оставлено подтверждениям вроде сохранения или копирования."
        ],
        "en": [
          "GitHub’s motion guide prioritises clarity for utility motion while allowing campaigns more rhythm and expression. The object matters too: generic bouncing text is discouraged, with an exception for movement connected to a character.",
          "Transitions have specific jobs. A lateral move links views at the same level; a transforming container connects an action to what follows; a reveal inside an element is reserved for confirmations such as saving or copying."
        ],
        "links": [
          {
            "label": "GitHub, Motion identity",
            "url": "https://brand.github.com/motion/principles",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "cash-app",
    "name": "Cash App",
    "topics": [
      "variation",
      "production"
    ],
    "who": "BUCK",
    "hideDiagram": true,
    "ru": {
      "short": "Тон отдельно от назначения",
      "title": "Характер рисунка и его работа — разные вопросы"
    },
    "en": {
      "short": "Tone separate from function",
      "title": "An illustration’s character and its job are separate questions"
    },
    "findings": [
      {
        "id": "cash-app",
        "ru": [
          "Вместе с Cash App BUCK отдельно определяла тон и функцию иллюстраций. Панель Tone называет четыре качества: Charming, Simple, Specific и Confident — обаяние, простоту, конкретность и уверенность. В пояснении студия уточняет границы, например charming, but not cute: обаятельно, но не умильно.",
          "Функцию BUCK проверяла на реальных местах в интерфейсе. Изображения могли разделять манеру рисунка и при этом решать разные задачи. Поэтому в руководстве вслед за характером иллюстрации рассматривается её роль на конкретной продуктовой поверхности."
        ],
        "en": [
          "BUCK and Cash App defined illustration tone and function separately. The Tone panel names four qualities: Charming, Simple, Specific and Confident. In the accompanying text, the studio qualifies those terms, for example charming, but not cute.",
          "BUCK assessed function through actual interface placements. Illustrations could share a drawing style while serving different purposes. The guide therefore considers an image’s character alongside its role on a particular product surface."
        ],
        "links": [
          {
            "label": "BUCK, Cash App Illustration System",
            "url": "https://buck.co/work/cash-app-illustration-system",
            "kind": "account"
          }
        ],
        "mediaGroups": [
          {
            "afterParagraph": 1,
            "images": [
              {
                "src": "./assets/cashapp-tone.webp",
                "width": 2880,
                "height": 1190,
                "ru": {
                  "alt": "Предметные метафоры Cash App на авторской панели Tone"
                },
                "en": {
                  "alt": "Cash App object metaphors on the original Tone panel"
                }
              }
            ],
            "layout": "single"
          }
        ]
      }
    ]
  }
];
