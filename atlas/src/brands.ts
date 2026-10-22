export type CaseCopy = {short:string;title:string;diagram:[string,string]};
export type SourceLink = {label:string;url:string;kind:'account'|'live'};
export type BrandFinding = {id:string;links:SourceLink[];ru:string[];en:string[]};
export type CaseDate = {label:string;value:string;kind:'published'|'launched'};
export type BrandCase = {id:string;name:string;topics:string[];who:string;ru:CaseCopy;en:CaseCopy;findings:BrandFinding[];date?:CaseDate};
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
      "short": "Сюрреализм как территория для AI",
      "title": "Новая техника получила свой жанр",
      "diagram": [
        "Фотографическая сцена",
        "Сюрреалистическая сцена"
      ]
    },
    "en": {
      "short": "Surrealism as a territory for AI",
      "title": "A new technique found its own genre",
      "diagram": [
        "Photographic scene",
        "Surreal scene"
      ]
    },
    "findings": [
      {
        "id": "surrealism",
        "ru": [
          "В рекламе Ambrook фотография фургона, заваленного бумагами, стала отправной точкой для AI-экспериментов. Ali Aas развила сюжет до сюрреалистических сцен, включая рабочий стол посреди поля. Так у новой техники появился конкретный жанр внутри бренда, построенного на аутентичности.",
          "Одновременно рекламу начали создавать коллеги из других команд, а Creative Director всё больше помогала им оценивать и развивать работу. Здесь свобода расширялась через освоенную практику: сначала автор находил рабочий подход, затем передавал его другим."
        ],
        "en": [
          "An Ambrook ad showing a van overwhelmed by paperwork became a starting point for AI experiments. Ali Aas extended the idea into surreal scenes, including a desk in a field. A new technique gained a specific genre within a brand grounded in authenticity.",
          "Colleagues across the company also began making ads, while the Creative Director increasingly helped them develop and assess the work. In this account, creative freedom grew through practiced methods: an author explored an approach, then enabled others to use it."
        ],
        "links": [
          {
            "label": "Ali Aas, On Art and Marketing",
            "url": "https://ambrook.com/blog/inside-ambrook/on-art-and-marketing",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "brex",
    "name": "Brex AI",
    "topics": [
      "extension",
      "evolution"
    ],
    "who": "Steph Lusby Studio Freight",
    "date": {
      "label": "Sep 2023",
      "value": "2023-09",
      "kind": "launched"
    },
    "ru": {
      "short": "Новая палитра с прежней точкой опоры",
      "title": "AI начался с уже знакомых элементов",
      "diagram": [
        "Существующий элемент",
        "Расширение функции"
      ]
    },
    "en": {
      "short": "A new palette with an existing anchor",
      "title": "AI began with cues already in the brand",
      "diagram": [
        "Existing cue",
        "Feature extension"
      ]
    },
    "findings": [
      {
        "id": "existing-cues",
        "ru": [
          "Для запуска Brex AI в сентябре 2023 года команда добавила AI к словесному знаку, сохранив флаг. Синяя палитра включала бирюзовый, который уже обозначал автоматизацию в маркетинговых материалах. Объёмную графику построили на форме того же флага.",
          "Расширение связали с основой сразу на двух уровнях: через знакомую форму и прежнее назначение цвета. Поэтому новая техника имела объяснимое происхождение внутри бренда. Портфолио показывает устройство этой связи; её узнавание аудиторией отдельно не измерено."
        ],
        "en": [
          "For the September 2023 Brex AI launch, the team added AI to the wordmark and retained the flag. A blue palette incorporated teal, already used for automation in marketing. The same flag inspired the 3D graphics.",
          "The extension connected to the core through both an existing shape and an established color role. The new treatment had a traceable origin within the brand. The portfolio explains that relationship; it does not separately measure whether audiences recognized it."
        ],
        "links": [
          {
            "label": "Steph Lusby, Brex AI",
            "url": "https://www.stephlusby.com/brex-ai",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "figma",
    "name": "Figma",
    "topics": [
      "variation",
      "motion"
    ],
    "who": "Damien Correll Jefferson Cheng Leandro Castelao Maria Chimishkyan Carly Ayres",
    "date": {
      "label": "16 Sep 2024",
      "value": "2024-09-16",
      "kind": "published"
    },
    "ru": {
      "short": "Разные формы, общие действия",
      "title": "У разных фигур общая грамматика",
      "diagram": [
        "Выделение",
        "Редактирование"
      ]
    },
    "en": {
      "short": "Different forms, shared actions",
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
          "В обновлении Figma 2024 года разнообразные фигуры получили общие состояния и действия. Квадратные узлы обозначают выделение, круглые — редактирование. Наложение, раскрытие и группировка превращают отдельные элементы в композиции, связанные с работой в продукте.",
          "Общность здесь поддерживает поведение: новая фигура может войти в язык через знакомые действия. Авторы оставили набор форм открытым для пополнения, одновременно описав, как они взаимодействуют. Это конкретный способ расширять библиотеку без отдельного набора правил для каждого нового объекта."
        ],
        "en": [
          "Figma’s 2024 refresh gave varied shapes shared states and actions. Square nodes indicate selection; round nodes indicate editing. Overlap, reveal and clustering turn individual elements into compositions connected to work in the product.",
          "Behavior provides continuity: a new shape can enter the language through familiar actions. The designers left the collection open to additions while describing how its elements interact. This gives an expanding library a common grammar without requiring separate rules for every new object."
        ],
        "links": [
          {
            "label": "Figma, Evolving our visual language",
            "url": "https://www.figma.com/blog/figma-on-figma-evolving-our-visual-language/",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "linear",
    "name": "Linear",
    "topics": [
      "motion",
      "production"
    ],
    "who": "Robb Böhnke",
    "date": {
      "label": "21 Oct 2025",
      "value": "2025-10-21",
      "kind": "published"
    },
    "ru": {
      "short": "Своё стекло для плотного интерфейса",
      "title": "Выразительность с выбором ограничений",
      "diagram": [
        "Возможность реализации",
        "Чтение информации"
      ]
    },
    "en": {
      "short": "Custom glass for a dense interface",
      "title": "Expression with deliberate constraints",
      "diagram": [
        "Implementation",
        "Reading"
      ]
    },
    "findings": [
      {
        "id": "selective-adoption",
        "ru": [
          "Linear воссоздала Liquid Glass самостоятельно, чтобы управлять формой и поведением навигации. Преломление исключили по двум причинам: нужные пиксельные данные были недоступны, а искажение текста могло мешать работе в плотном интерфейсе.",
          "В рассказе инженера Robb Böhnke технический предел и дизайнерское суждение остаются разными основаниями. Такое различие сохраняет пространство для развития: доступность технологии может измениться, а требования к чтению данных всё равно потребуют отдельной оценки. Опасение команды здесь не выдаётся за результат сравнительного исследования."
        ],
        "en": [
          "Linear recreated Liquid Glass to control its navigation’s shape and behavior. It omitted refraction for two reasons: the necessary pixel data was unavailable, and distorted text could interfere with focused work in a dense interface.",
          "Engineer Robb Böhnke’s account separates a technical limit from a design judgment. That distinction leaves room to evolve: a technology may become available, while the demands of reading information still require their own assessment. The team’s concern is not presented as the result of a comparative study."
        ],
        "links": [
          {
            "label": "Robb Böhnke, A Linear spin on Liquid Glass",
            "url": "https://linear.app/now/linear-liquid-glass",
            "kind": "account"
          }
        ]
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
    "who": "Sarah Mohammadi Andreion de Castro",
    "date": {
      "label": "11 Mar 2026",
      "value": "2026-03-11",
      "kind": "published"
    },
    "ru": {
      "short": "Художественная работа внутри генератора",
      "title": "Композиция не закончилась на алгоритме",
      "diagram": [
        "Вычислительная композиция",
        "Ручная корректировка"
      ]
    },
    "en": {
      "short": "Art direction inside the generator",
      "title": "Composition continued beyond the algorithm",
      "diagram": [
        "Computed composition",
        "Manual adjustment"
      ]
    },
    "findings": [
      {
        "id": "manual-refinement",
        "ru": [
          "Для Mercury Insights художник Andreion de Castro создавал натюрморты на основе финансовых данных. Логику расположения объектов он сочетал с ручными сдвигами и уточнениями композиции, чтобы результат сохранял органичность. Палитру и общее ощущение связывали с уже существующим языком Insights.",
          "В этом процессе правила размещения и художественная оценка дополняли друг друга. Генеративность описывает способ построения изображения, но сама по себе не означает отсутствие ручной работы. Интервью раскрывает разработку системы; сколько вмешательств требует каждый последующий выпуск, из него неизвестно."
        ],
        "en": [
          "For Mercury Insights, artist Andreion de Castro developed still lifes from financial data. He combined placement logic with manual shifts and compositional refinements to keep the result organic. Palette and overall character connected the work to Insights’ existing visual language.",
          "Placement rules and artistic judgment complemented each other. Generative describes how an image is constructed; it does not by itself imply an absence of manual work. The interview describes system development, without establishing how much intervention each subsequent output requires."
        ],
        "links": [
          {
            "label": "Mercury, Financial data as still life",
            "url": "https://mercury.com/blog/insights-financial-data-art",
            "kind": "account"
          }
        ]
      }
    ]
  },
  {
    "id": "morph",
    "name": "Morph",
    "topics": [
      "character",
      "variation"
    ],
    "who": "Studio Freight Morph",
    "ru": {
      "short": "Новая фактура прежнего персонажа",
      "title": "Другой материал, знакомая форма",
      "diagram": [
        "Форма сохраняется",
        "Обработка меняется"
      ]
    },
    "en": {
      "short": "A new texture for an existing character",
      "title": "A different treatment, a familiar form",
      "diagram": [
        "Shape held",
        "Treatment changed"
      ]
    },
    "findings": [
      {
        "id": "render-treatments",
        "ru": [
          "Разрабатывая мерч Morph, Studio Freight сначала одновременно изменила палитру, типографику и изображение Morphy. Направление показалось студии слишком далёким от бренда. Команда вернулась к исходным 3D-рендерам, превратила их в растр и пиксельную графику, а ведущую роль снова отдала зелёному.",
          "Эксперимент сохранился в обработке изображения, тогда как исходный персонаж и главный цвет стали опорами. Кейс показывает конкретную границу вариативности, найденную через неудачную попытку. Это оценка самих дизайнеров, а не измеренный порог узнаваемости."
        ],
        "en": [
          "While developing Morph merchandise, Studio Freight initially changed the palette, typography and depiction of Morphy together. The studio felt the direction had drifted too far. It returned to the original 3D renders, applied halftone and pixel treatments, and restored green as the leading color.",
          "Experimentation continued through image treatment, with the original character and lead color providing anchors. The case reveals a specific boundary found through a rejected exploration. It records the designers’ judgment rather than a measured threshold of recognition."
        ],
        "links": [
          {
            "label": "Studio Freight, Morph",
            "url": "https://studiofreight.com/work/morph",
            "kind": "account"
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
    "who": "Katie Chang Rob Giampietro Roman Muradov BUCK",
    "date": {
      "label": "10 Jul 2024",
      "value": "2024-07-10",
      "kind": "published"
    },
    "ru": {
      "short": "Новый ракурс и цвет знакомого рисунка",
      "title": "Знакомый рисунок получил другой масштаб",
      "diagram": [
        "Удалённая фигура",
        "Крупный план"
      ]
    },
    "en": {
      "short": "New framing and color for familiar drawings",
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
          "В кампании Notion 2024 года рисунки Roman Muradov приблизили: вместо удалённых фигур появились крупные профили. Это позволило показать, что происходит внутри головы персонажа. Новый сюжет возник из изменения кадрирования при сохранении авторского языка."
        ],
        "en": [
          "Notion’s 2024 campaign moved closer to Roman Muradov’s characters, replacing distant figures with large profiles. The framing made room to depict what happens inside their minds. A new story emerged through a change of scale within the same illustrator’s language."
        ],
        "links": [
          {
            "label": "Katie Chang, Notion",
            "url": "https://www.notion.com/blog/the-thinking-behind-our-latest-brand-campaign#:~:text=Move%20in%20closer.",
            "kind": "account"
          }
        ]
      },
      {
        "id": "color-by-context",
        "ru": [
          "Цвет менялся по другой причине: чёрно-белые объявления терялись в городе. Кампания получила яркие жёлтый, синий и красный, тогда как приложение сохранило сдержанность. В этом решении интенсивность палитры зависела от среды: наружная реклама и рабочий инструмент получили разную степень выразительности."
        ],
        "en": [
          "Color changed for a different reason: monochrome ads disappeared into the city. The campaign gained bold yellow, blue and red, while the app remained restrained. Palette intensity followed the setting, giving outdoor advertising and a working tool different degrees of expression."
        ],
        "links": [
          {
            "label": "Katie Chang, Notion",
            "url": "https://www.notion.com/blog/the-thinking-behind-our-latest-brand-campaign#:~:text=While%20we%20refrain",
            "kind": "account"
          }
        ]
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
    "who": "Bakken & Bæck F37 Gianluca Alla Martin Nicolausson Digo Digital Anton Hjertstedt",
    "ru": {
      "short": "Отдельный визуальный диапазон для Cash",
      "title": "Более смелый язык для Phantom Cash",
      "diagram": [
        "Основная система",
        "Расширение Cash"
      ]
    },
    "en": {
      "short": "A distinct expressive range for Cash",
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
          "Диапазон изменений оказался привязан к конкретному предложению внутри Phantom. Даже более смелая типографика продолжает существующее семейство: для крупных надписей добавлено начертание Phantom Sans с инктрапами. Здесь вариативность задана областью применения: новые приёмы объединяют поверхности Cash, сохраняя связь с основной системой."
        ],
        "en": [
          "For Phantom Cash, Bakken & Bæck received a brief for a more expressive visual language aimed at a broader consumer finance audience. Gradients, stickers and 3D became part of an extension spanning the Cash page, card, token and onboarding.",
          "The change had a defined scope: one offering within Phantom. Even the bolder typography extended an existing family, using a Phantom Sans inktrap weight for display. Here, variation is organized around a product: new techniques tie Cash’s surfaces together while retaining a connection to the core system."
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
          }
        ]
      }
    ]
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "topics": [
      "production",
      "evolution"
    ],
    "who": "Devon Lach Carlo Luetto Tim Scales Angeline Toh PORTO ROCHA",
    "ru": {
      "short": "Разработка и внедрение как разные работы",
      "title": "Четыре месяца дизайна, больше года внедрения",
      "diagram": [
        "Разработка: 4 месяца",
        "Интеграция: больше года"
      ]
    },
    "en": {
      "short": "Development and rollout as distinct work",
      "title": "Four months of design, over a year of rollout",
      "diagram": [
        "Development: 4 months",
        "Integration: over a year"
      ]
    },
    "findings": [
      {
        "id": "rollout",
        "ru": [
          "Продюсер Devon Lach описывает ребрендинг Robinhood с PORTO ROCHA через два масштаба работы: четыре месяца творческой разработки и больше года интеграции в сайт, приложение, кампании и мерч.",
          "Этот разрыв показывает, насколько малая часть проекта видна в презентации готового стиля. Распространение системы по носителям стало самостоятельной работой. Сроки крупной компании не дают норматива для маленькой команды, но делают видимой часть брендинга, которую легко потерять за финальными изображениями."
        ],
        "en": [
          "Producer Devon Lach describes Robinhood’s rebrand with PORTO ROCHA through two scales of work: four months of creative development and more than a year of integration across the website, app, campaigns and merchandise.",
          "The difference reveals how little of a project is visible in a presentation of its finished style. Extending the system across those surfaces became substantial work in itself. A large company’s schedule offers no benchmark for a small team, but makes a frequently unseen part of branding tangible."
        ],
        "links": [
          {
            "label": "Devon Lach, Robinhood rebrand",
            "url": "https://devonlach.com/robinhood-rebrand",
            "kind": "account"
          }
        ]
      }
    ]
  }
];
