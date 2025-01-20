# Cat Pinterest

Одностраничное приложение для просмотра фотографий котиков с возможностью добавления их в избранное. Макет для проекта в Figma доступен по [ссылке](https://bit.ly/3utxaL2).

### Функционал
- Бесконечная прокрутка фотографий котиков
- Добавление/удаление фотографий котиков из избранного
- Локальное хранение избранных фотографий котиков

## Технологии

- React
- React Query
- React Router
- React Intersection Observer
- TypeScript
- Vite
- [The Cat API](https://thecatapi.com)

## Системные требования

- Node.js
- npm

## Инструкция по использованию
1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/akurashkevich/cat-pinterest.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd cat-pinterest
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Создайте файл `.env` в корне проекта и добавьте ваш API ключ:
   ```bash
   VITE_API_KEY=your_cat_api_key
   ```
5. Для запуска проекта в режиме разработки:
   ```bash
   npm run dev
   ```
6. Для сборки проекта:
   ```bash
   npm run build
   ```

## Демо

Netlify: [ссылка](https://playful-twilight-cdbd72.netlify.app/)
