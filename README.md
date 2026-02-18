# tms (личная поддержка)
Личная maintenance-копия Chrome-расширения, поддерживаемая в рабочем состоянии под Manifest V3.

## Статус
- Личный maintenance-репозиторий
- Без публичных релизов и без публикации в Chrome Web Store
- Проверяется через загрузку распакованного расширения (Developer Mode)

## Upstream
- Основано на upstream-кодовой базе: https://github.com/Feverqwe/tSearch
- Неофициальная личная копия для поддержки (не “официальный форк”)

## Требования
- Google Chrome 88+
- Node.js и npm

## Сборка
npm install
npm run build

Watch-режим:
npm run dev

## Запуск (Chrome Developer Mode)
1. Откройте chrome://extensions
2. Включите Developer mode
3. Нажмите Load unpacked
4. Выберите папку dist/

Если что-то не работает:
- Пересоберите проект и нажмите Reload у расширения
- Проверьте консоль service worker: chrome://extensions → Service worker → Inspect
- При “залипшем” состоянии очистите данные расширения (хранилище/данные сайта) и загрузите заново

## Заметки о проекте
- MV3: фон через service worker; используется permission offscreen
- Есть popup и options page
- Есть omnibox keyword: tms
- Есть sandbox page (sandbox.html)
- Content scripts отсутствуют (по манифесту)
- В сборке встречается new Function(...) (следует учитывать при изменениях CSP/политик)
- В bundle service worker используются таймеры (setInterval/setTimeout)

## Лицензия
WTFPL — см. LICENSE.md.

## Дисклеймер
- Код предоставляется “как есть”, без гарантий
- Не является рекомендацией каких-либо сайтов/источников
- Ответственность за использование и конфигурацию — на пользователе
