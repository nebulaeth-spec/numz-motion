export type CaseCopy = {short:string;title:string;decision:string;question:string;application:string;test:string;failure:string;limit:string;diagram:[string,string]};
export type BrandFinding = {id:string;source:string;url:string;ru:string[];en:string[]};
export type CaseDate = {label:string;value:string;kind:'published'|'launched'};
export type BrandCase = {id:string;name:string;topics:string[];dates:string;who:string;source:string;published:string;url:string;related:string;ru:CaseCopy;en:CaseCopy;findings?:BrandFinding[];date?:CaseDate};
export const brands: BrandCase[] = [
  {
    "id": "ambrook",
    "name": "Ambrook",
    "topics": [
      "variation",
      "production"
    ],
    "dates": "2024–2025",
    "who": "Ali Aas",
    "source": "Ali Aas, Creative Director at Ambrook",
    "published": "24 Oct 2025",
    "date": {"label":"24 Oct 2025","value":"2025-10-24","kind":"published"},
    "url": "https://ambrook.com/blog/inside-ambrook/on-art-and-marketing",
    "related": "mercury",
    "ru": {
      "short": "Дать экспериментам конкретную территорию",
      "title": "Свободу можно передать вместе с границей",
      "decision": "Ali Aas описывает, как рекламу стали создавать разные участники команды. Для AI-изображений выделили конкретную территорию: сюрреалистические сцены. Роль Creative Director постепенно сместилась к тому, чтобы помогать другим производить и оценивать материалы.",
      "question": "Как дать нескольким авторам свободу, сохранив точность финансовой коммуникации?",
      "application": "Разделить в брифе образные сцены и изображения реального продукта или данных. Для первой области описать допустимый вымысел; для второй задать требования к точности.",
      "test": "Передать новому автору два задания: образный анонс и объяснение функции. Проверить, понятно ли ему, где можно фантазировать, а где нужны реальные состояния продукта.",
      "failure": "Если каждую иллюстрацию всё равно приходится согласовывать, уточнить границу на отклонённых примерах.",
      "limit": "Это рассказ участника. Он не устанавливает эффект правила на аудиторию или допустимость конкретных финансовых обещаний.",
      "diagram": [
        "Образная сцена",
        "Фактическое объяснение"
      ]
    },
    "en": {
      "short": "Give experiments a defined territory",
      "title": "Delegate freedom with a usable boundary",
      "decision": "Ali Aas describes advertising production spreading across the team. AI imagery had a specific territory: surreal scenes. The Creative Director’s role shifted toward enabling other people to make and evaluate the work.",
      "question": "How can several makers have freedom while financial communication stays accurate?",
      "application": "Separate imaginative scenes from depictions of the actual product or data in our brief. Describe the permitted fiction in the first area and the accuracy required in the second.",
      "test": "Give a new maker two assignments: an imaginative announcement and a feature explanation. Check whether they can tell where to invent and where to use real product states.",
      "failure": "If every illustration still needs approval, refine the boundary using rejected examples.",
      "limit": "This is a participant’s account. It establishes neither audience impact nor the acceptability of particular financial claims.",
      "diagram": [
        "Imaginative scene",
        "Factual explanation"
      ]
    }
  },
  {
    "id": "brex",
    "name": "Brex AI",
    "topics": [
      "extension",
      "evolution"
    ],
    "dates": "2023",
    "who": "Steph Lusby Studio Freight",
    "source": "Steph Lusby, In-house Design Manager",
    "published": "Project launched Sep 2023",
    "date": {"label":"Sep 2023","value":"2023-09","kind":"launched"},
    "url": "https://www.stephlusby.com/brex-ai",
    "related": "phantom",
    "ru": {
      "short": "Развить уже существующую ассоциацию",
      "title": "У расширения может быть знакомая отправная точка",
      "decision": "В описании запуска Brex AI к имени добавили AI, сохранив флаг. В палитру вошёл teal, который раньше использовали для автоматизации. Новое предложение связали с существующим визуальным смыслом.",
      "question": "Как дать отдельной функции свой характер и сохранить связь с основным брендом?",
      "application": "До разработки отдельного знака проверить, есть ли у функции подходящий элемент в нашей системе: цветовая роль, форма или действие. У молодого бренда такие ассоциации могут ещё не сложиться.",
      "test": "Собрать рядом базовую коммуникацию и анонс функции. Попросить читателя объяснить, что у них общее и чем они различаются, без пояснения дизайнера.",
      "failure": "Если связь существует только в нашей легенде, сначала закрепить элемент в базовой коммуникации.",
      "limit": "Портфолио описывает решение 2023 года. Оно не доказывает узнавание перехода аудиторией и не является текущим руководством Brex.",
      "diagram": [
        "Существующий элемент",
        "Расширение функции"
      ]
    },
    "en": {
      "short": "Extend an association that already exists",
      "title": "An extension can start with a familiar cue",
      "decision": "The Brex AI launch added AI to the name while retaining the flag. Its palette included teal, previously used for automation. The new offering connected to an existing visual association.",
      "question": "How can a feature have its own character and remain part of the main brand?",
      "application": "Before commissioning a separate mark, look for a suitable cue in our system: a color role, shape or action. A young brand may not yet have established those associations.",
      "test": "Place the core communication beside a feature announcement. Ask a reader what connects them and what differs, without a designer explaining the relationship.",
      "failure": "If the connection only exists in our explanation, establish the cue in core communication first.",
      "limit": "The portfolio describes a 2023 decision. It does not establish audience recognition or serve as Brex’s current guidelines.",
      "diagram": [
        "Existing cue",
        "Feature extension"
      ]
    }
  },
  {
    "id": "figma",
    "name": "Figma",
    "topics": [
      "variation",
      "motion"
    ],
    "dates": "2024",
    "who": "Damien Correll Jefferson Cheng Leandro Castelao Maria Chimishkyan Carly Ayres",
    "source": "Figma Brand Studio, reported by Carly Ayres",
    "published": "16 Sep 2024",
    "date": {"label":"16 Sep 2024","value":"2024-09-16","kind":"published"},
    "url": "https://www.figma.com/blog/figma-on-figma-evolving-our-visual-language/",
    "related": "morph",
    "ru": {
      "short": "Объединить разные формы общим действием",
      "title": "Вариативности можно задать грамматику действий",
      "decision": "Система 2024 года описывает состояния фигур и действия с ними: выделение, редактирование, перекрытие и раскрытие. Квадратные узлы выделения становятся круглыми при редактировании. Общий язык задают конкретные переходы между состояниями.",
      "question": "Что может связывать рисунок, 3D и motion, кроме одинакового стиля исполнения?",
      "application": "Попросить дизайнера предложить одно действие, связанное с нашим продуктом, и показать его в рисунке и 3D. В брифе фиксировать начальное состояние, переход и результат. Не копировать редакторские рамки Figma.",
      "test": "Показать два исполнения одного сообщения. Проверить, можно ли прочитать одинаковое действие и смысл до объяснения автора.",
      "failure": "Если связь держится только на одинаковой анимации или длинном объяснении, переработать приём.",
      "limit": "Авторы описывают визуальную грамматику. Источник не предъявляет измерения узнаваемости без логотипа.",
      "diagram": [
        "Выделение",
        "Редактирование"
      ]
    },
    "en": {
      "short": "Connect different forms through a shared action",
      "title": "Give variation a grammar of actions",
      "decision": "The 2024 system describes shape states and actions: selection, editing, overlap and reveal. Square selection nodes become round when editing. Specific transitions between states provide a shared language.",
      "question": "What can connect illustration, 3D and motion beyond a matching rendering style?",
      "application": "Ask a designer for one action connected to our product, shown in illustration and 3D. Specify its starting state, transition and result in the brief. Avoid copying Figma’s editing handles.",
      "test": "Show two treatments of the same message. Check whether the same action and meaning can be read before the maker explains them.",
      "failure": "If the connection depends only on matching animation or a long explanation, rework the device.",
      "limit": "The authors describe a visual grammar. The source does not present a measure of recognition without a logo.",
      "diagram": [
        "Selection",
        "Editing"
      ]
    }
  },
  {
    "id": "linear",
    "name": "Linear",
    "topics": [
      "motion",
      "production"
    ],
    "dates": "2025",
    "who": "Robb Böhnke",
    "source": "Robb Böhnke, Linear engineering",
    "published": "21 Oct 2025",
    "date": {"label":"21 Oct 2025","value":"2025-10-21","kind":"published"},
    "url": "https://linear.app/now/linear-liquid-glass",
    "related": "notion",
    "ru": {
      "short": "Разделить вкус и ограничение реализации",
      "title": "У отказа от эффекта могут быть разные причины",
      "decision": "В адаптации Liquid Glass преломление исключили по двум причинам: нужные пиксельные данные были недоступны, а сам эффект мог мешать чтению плотного интерфейса. Это два разных основания для одного решения.",
      "question": "Когда выразительную технику стоит ограничить в материалах с финансовыми данными?",
      "application": "Раздельно оценивать реализуемость эффекта и чтение информации. Техническое ограничение не превращать в постоянный запрет стиля. Если эффект мешает чтению, ограничивать его на конкретных носителях.",
      "test": "Сравнить один аналитический материал с эффектом и без него при одинаковых числах и композиции. Отдельно выяснить стоимость и ограничения реализации.",
      "failure": "Если значения читаются хуже, убрать эффект из этого формата. Если проблема только техническая, сохранить возможность вернуться к нему позже.",
      "limit": "Это объяснение инженерного решения и опасений команды, а не опубликованный сравнительный тест читаемости.",
      "diagram": [
        "Возможность реализации",
        "Чтение информации"
      ]
    },
    "en": {
      "short": "Separate taste from implementation constraints",
      "title": "An omitted effect can have two different causes",
      "decision": "Linear’s Liquid Glass adaptation omitted refraction for two reasons: the required pixel data was unavailable, and the effect could impair reading in a dense interface. Two different constraints informed the same decision.",
      "question": "When should an expressive technique be restricted around financial information?",
      "application": "Assess technical feasibility and reading separately. Do not turn a technical limitation into a permanent style prohibition. When an effect impairs reading, restrict it in the relevant formats.",
      "test": "Compare one analytical piece with and without the effect, keeping numbers and composition unchanged. Investigate implementation cost and constraints separately.",
      "failure": "If values become harder to read, remove the effect from that format. If the obstacle is only technical, leave room to revisit it.",
      "limit": "This explains an engineering decision and the team’s concerns. It is not a published comparative readability test.",
      "diagram": [
        "Implementation",
        "Reading"
      ]
    }
  },
  {
    "id": "mercury",
    "name": "Mercury",
    "topics": [
      "variation",
      "production"
    ],
    "dates": "2026",
    "who": "Sarah Mohammadi Andreion de Castro",
    "source": "Andreion de Castro, interviewed by Sarah Mohammadi",
    "published": "11 Mar 2026",
    "date": {"label":"11 Mar 2026","value":"2026-03-11","kind":"published"},
    "url": "https://mercury.com/blog/insights-financial-data-art",
    "related": "ambrook",
    "ru": {
      "short": "Найти ручную работу внутри генератора",
      "title": "Красивый результат ещё не описывает производство",
      "decision": "В работе над художественными натюрмортами для Mercury Insights вычислительные методы сочетались с ручной корректировкой композиций. Автор описывает эту работу в разработке системы, но не устанавливает объём ручного труда при каждом дальнейшем выпуске.",
      "question": "Как понять, сможет ли команда самостоятельно производить вариативную графику?",
      "application": "Если выбираем генеративный конструктор, включить в приёмку новые входные данные и список ручных вмешательств. Узнать, кто исправляет неудачные результаты и какие навыки ему нужны.",
      "test": "Дать конструктору ранее не показанные наборы данных, включая крайние случаи. Зафиксировать, какие изображения готовы сразу, а какие требуют автора.",
      "failure": "Если без постоянной художественной коррекции выпуск невозможен, учитывать её как часть производства. Не принимать инструмент за автономную систему.",
      "limit": "Из интервью нельзя заключать, что каждую пользовательскую картинку вручную дорабатывают. Применение к нам нужно при выборе генеративного производства.",
      "diagram": [
        "Вычислительная композиция",
        "Ручная корректировка"
      ]
    },
    "en": {
      "short": "Find the manual work inside the generator",
      "title": "A polished output does not describe production",
      "decision": "The artistic still lifes for Mercury Insights combined computational methods with manual composition adjustments. The author describes this work during development, without establishing how much manual effort each later output requires.",
      "question": "How do we know whether the team can produce varied graphics independently?",
      "application": "If we choose a generative tool, include unseen inputs and a list of manual interventions in its acceptance review. Identify who fixes weak outputs and which skills they need.",
      "test": "Run unseen inputs, including edge cases. Record which images are ready to publish and which require their creator.",
      "failure": "If production always requires artistic correction, plan for that work. Do not accept the tool as an autonomous system.",
      "limit": "The interview does not establish that every customer image is manually retouched. This application matters if we choose generative production.",
      "diagram": [
        "Computed composition",
        "Manual adjustment"
      ]
    }
  },
  {
    "id": "morph",
    "name": "Morph",
    "topics": [
      "character",
      "variation"
    ],
    "dates": "",
    "who": "Studio Freight Morph",
    "source": "Studio Freight, Morph merchandise case study",
    "published": "Publication date not stated",
    "url": "https://studiofreight.com/work/morph",
    "related": "figma",
    "ru": {
      "short": "Отделить форму героя от техники изображения",
      "title": "Новая техника не требует нового персонажа",
      "decision": "Первая мерч-итерация с новыми цветами, типографикой и перерисованным героем, по оценке Studio Freight, слишком далеко ушла от Morph. Команда вернулась к исходным рендерам и ведущему зелёному, сохранив растровые и пиксельные обработки.",
      "question": "Как менять художественную технику и не переделывать героя каждый раз?",
      "application": "В первых пробах сохранять конструкцию персонажа и менять только обработку: контур, растр, пиксели или объём. Изменение самой формы вынести в отдельную пробу. Так станет понятнее, что именно нарушает связь с исходным образом.",
      "test": "Сравнить три версии одного сообщения: исходную, с другой техникой и с изменённой формой. Сохранить композицию и палитру, чтобы не смешивать причины различий.",
      "failure": "Если даже новая обработка делает персонажа чужим, искать более устойчивые признаки формы. Если герой ещё не выбран, использовать упражнение при выборе.",
      "limit": "Возврат к исходнику основан на оценке студии. Кейс не измеряет узнаваемость и не задаёт универсальное число допустимых изменений.",
      "diagram": [
        "Форма сохраняется",
        "Обработка меняется"
      ]
    },
    "en": {
      "short": "Separate character shape from rendering",
      "title": "A new medium can keep the same character",
      "decision": "Studio Freight judged an early merchandise direction with new colors, type and a redrawn character too far from Morph. The team returned to the original renders and a leading green, retaining halftone and pixel treatments.",
      "question": "How can we change artistic techniques without redesigning the character each time?",
      "application": "In the first explorations, hold the character’s construction and change its treatment: outline, halftone, pixels or volume. Test shape changes separately. This makes it easier to identify what breaks continuity.",
      "test": "Compare three versions of one message: the original, a different treatment and an altered shape. Hold composition and palette to avoid mixing the causes of difference.",
      "failure": "If a new treatment alone makes the character feel unrelated, look for more stable shape cues. If no character is chosen yet, use this exercise during selection.",
      "limit": "The return to the original was a studio judgment. The case neither measures recognition nor sets a universal number of permitted changes.",
      "diagram": [
        "Shape held",
        "Treatment changed"
      ]
    }
  },
  {
    "id": "notion",
    "name": "Notion",
    "topics": [
      "character",
      "variation"
    ],
    "dates": "2024",
    "who": "Katie Chang Rob Giampietro Roman Muradov BUCK",
    "source": "Katie Chang, Head of Creative Strategy & Operations",
    "published": "10 Jul 2024",
    "date": {"label":"10 Jul 2024","value":"2024-07-10","kind":"published"},
    "url": "https://www.notion.com/blog/the-thinking-behind-our-latest-brand-campaign",
    "related": "morph",
    "ru": {
      "short": "Менять кадрирование вместе с задачей",
      "title": "Масштаб персонажа меняет доступный сюжет",
      "decision": "В кампании 2024 года удалённые фигуры показались команде слишком безличными. Крупные профили позволили показать мыслительную работу персонажей. Для городской среды добавили цвет: монохромная реклама терялась в окружении.",
      "question": "Как герой может работать на разных носителях без обязательного повторения одной позы?",
      "application": "Задать в брифе варианты кадрирования и сюжета под сообщение. Маленький пост, широкий баннер и продуктовое объяснение могут требовать разного масштаба героя. Если он вытесняет смысл, проверить вариант без него.",
      "test": "Разложить одну идею на три реальных формата. Проверить, что в каждом читается первым и сохраняется ли сообщение после обрезки.",
      "failure": "Если смысл требует подписи с объяснением рисунка, изменить ракурс или сюжет. Если герой не помогает сообщению, не делать его обязательным для этого носителя.",
      "limit": "Причины изменений описаны командой. Источник не даёт сопоставимого измерения внимания и не доказывает, что персонажа можно без потерь убрать из любого бренда.",
      "diagram": [
        "Удалённая фигура",
        "Крупный план"
      ]
    },
    "en": {
      "short": "Let framing follow the message",
      "title": "Character scale changes the story you can tell",
      "decision": "In the 2024 campaign, distant figures felt too impersonal to the team. Close profiles made the characters’ mental work visible. Color was added for the city, where monochrome advertising blended into its surroundings.",
      "question": "How can a character work across formats without repeating one compulsory pose?",
      "application": "Specify framing and story options around the message. A small post, wide banner and product explanation may need different character scales. If the character crowds out the meaning, test a version without it.",
      "test": "Adapt one idea to three real formats. Check what reads first in each and whether the message survives the crop.",
      "failure": "If the image needs a caption explaining its meaning, change the angle or story. If the character does not help, do not require it in that format.",
      "limit": "The team explains its rationale. The source offers no comparable attention measure and does not prove that any brand can remove its character without loss.",
      "diagram": [
        "Distant figure",
        "Close profile"
      ]
    }
  },
  {
    "id": "phantom",
    "name": "Phantom",
    "topics": [
      "extension",
      "variation"
    ],
    "dates": "",
    "who": "Bakken & Bæck F37 Gianluca Alla Martin Nicolausson Digo Digital Anton Hjertstedt",
    "source": "Bakken & Bæck, Phantom Cash case study",
    "published": "Publication date not stated",
    "url": "https://bakkenbaeck.com/case/phantom",
    "related": "brex",
    "findings": [{
      "id": "cash-extension",
      "source": "Bakken & Bæck, Phantom Cash case study",
      "url": "https://bakkenbaeck.com/case/phantom",
      "ru": [
        "Для Phantom Cash студия Bakken & Bæck получила бриф на более выразительный язык, рассчитанный на широкую финансовую аудиторию. Градиенты, стикеры и 3D вошли в расширение, охватившее страницу Cash, карту, токен и онбординг.",
        "Диапазон изменений оказался привязан к конкретному предложению внутри Phantom. Даже более смелая типографика продолжает существующее семейство: для крупных надписей добавлено начертание Phantom Sans с инктрапами. Здесь вариативность задана областью применения: новые приёмы объединяют поверхности Cash, сохраняя связь с основной системой."
      ],
      "en": [
        "For Phantom Cash, Bakken & Bæck received a brief for a more expressive visual language aimed at a broader consumer finance audience. Gradients, stickers and 3D became part of an extension spanning the Cash page, card, token and onboarding.",
        "The change had a defined scope: one offering within Phantom. Even the bolder typography extended an existing family, using a Phantom Sans inktrap weight for display. Here, variation is organized around a product: new techniques tie Cash’s surfaces together while retaining a connection to the core system."
      ]
    }],
    "ru": {
      "short": "Отдельный визуальный диапазон для Cash",
      "title": "Более смелый язык для Phantom Cash",
      "decision": "Кейс Bakken & Bæck описывает расширение для Phantom Cash: выразительную типографику, многотональные градиенты, стикеры и 3D. Этот набор относится к конкретному предложению внутри более широкого бренда.",
      "question": "Как попробовать более смелую технику без обязательной переделки всей системы?",
      "application": "Если отдельной функции нужно другое настроение, описать её расширение отдельно: где оно действует, что берёт из основы и какие новые приёмы добавляет. Затем проверить соседство с основной коммуникацией.",
      "test": "Собрать главную страницу, анонс функции и общий материал рядом. Проверить, различимы ли роли и понятно ли, что это один продуктовый мир.",
      "failure": "Если расширение выглядит как чужой бренд, усилить связь с основой. Если новые правила незаметно захватывают всё, заново определить их область.",
      "limit": "Кейс Cash не доказывает независимость Phantom от призрака в знаке и не описывает полную хронологию основной айдентики.",
      "diagram": [
        "Основная система",
        "Расширение Cash"
      ]
    },
    "en": {
      "short": "A distinct expressive range for Cash",
      "title": "A more expressive language for Phantom Cash",
      "decision": "Bakken & Bæck describes an extension for Phantom Cash: expressive type, multitone gradients, stickers and 3D. These elements belong to a particular offering within the wider brand.",
      "question": "How can we try a bolder technique without committing the whole system to it?",
      "application": "If a feature needs a different mood, define its extension separately: where it applies, what it inherits and which techniques it adds. Then check it alongside core communication.",
      "test": "Place the homepage, feature announcement and a shared communication together. Check whether their roles are clear and they still belong to one product world.",
      "failure": "If the extension feels like another brand, strengthen its connection to the core. If its rules spread everywhere, redefine their scope.",
      "limit": "The Cash case does not prove Phantom is independent of the ghost in its mark, or document the full chronology of its main identity.",
      "diagram": [
        "Core system",
        "Cash extension"
      ]
    }
  },
  {
    "id": "robinhood",
    "name": "Robinhood",
    "topics": [
      "production",
      "evolution"
    ],
    "dates": "",
    "who": "Devon Lach Carlo Luetto Tim Scales Angeline Toh PORTO ROCHA",
    "source": "Devon Lach, Creative Producer",
    "published": "Project account, publication date not stated",
    "url": "https://devonlach.com/robinhood-rebrand",
    "related": "ambrook",
    "ru": {
      "short": "Заложить внедрение в сам бриф",
      "title": "Разработка системы заканчивается раньше внедрения",
      "decision": "Продюсер Devon Lach указывает четыре месяца творческой разработки и больше года интеграции в сайт, приложение, кампании и мерч. Готовое направление было началом отдельной работы по переносу в разные части компании.",
      "question": "Какие результаты нужны нам кроме набора красивых образцов?",
      "application": "Добавить к брифу список носителей, порядок замены материалов и ответственного за внедрение. В приёмку включить формат, который автор системы заранее не отрисовывал.",
      "test": "Попросить другого дизайнера собрать этот формат по переданным правилам и исходникам. Записать, что ему пришлось дополнительно выяснять у автора.",
      "failure": "Если работа останавливается без создателя системы, дополнить правила или исходники. Календарь крупной компании не использовать как оценку нашего срока.",
      "limit": "Это календарь со слов участника, а не данные о бюджете или норматив для небольшой команды. Две длительности не задают точную последовательную шкалу.",
      "diagram": [
        "Разработка: 4 месяца",
        "Интеграция: больше года"
      ]
    },
    "en": {
      "short": "Put rollout into the brief",
      "title": "The system can be designed before it is deployed",
      "decision": "Creative Producer Devon Lach reports four months of creative development and over a year of integration across the website, app, campaigns and merchandise. A finished direction started another body of work across the company.",
      "question": "What do we need beyond a set of polished examples?",
      "application": "Add a format inventory, replacement sequence and rollout owner to the brief. Include a format the system’s creator has not already designed in the acceptance review.",
      "test": "Ask a different designer to make that format using the supplied rules and files. Record what they still need to ask the creator.",
      "failure": "If work stops without the creator, improve the rules or source files. Do not use a large company’s calendar as our schedule estimate.",
      "limit": "This is a participant’s timeline, not a budget or a benchmark for a small team. The two durations do not establish an exact sequential calendar.",
      "diagram": [
        "Development: 4 months",
        "Integration: over a year"
      ]
    }
  }
];
