# 1. Create Sveltekit

```bash
npm create svelte@latest HelloWorld
npm run dev -- --open
```

# 2. Git

```bash
git init && git add -A && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sveltekits/HelloWorld.git
git push -u origin main
```

# 3. TailwindCss

## ➊ install

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
--> Created Tailwind CSS config file: tailwind.config.cjs
--> Created PostCSS config file: postcss.config.js

npm install -D prettier prettier-plugin-tailwindcss
```

## ➋ tailwind.config.cjs 파일 내용 변경

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [], ==> content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: []
};
```

## ➌ src/app.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

// vscode에서는 플러그인
// PostCSS Language Support를 설치하면 더 이상 경고 문구가 보이지 않는다
```

## ➍ +layout.svelte

```javas
<script lang="ts">
    import '../app.css';
</script>
```

# 4. Prisma

## ➊ install

```bash
npm install --save-dev prisma@latest
npm install --save @prisma/client@latest
```

## ➋ Prisma 초기화

```bash
# 프리즈마 초기화
npx prisma init
--> prisma 폴더 생성, schema.prisma 생성
```

## ➌ schema.prisma 설정

```javascript
generator client {
  provider = "pisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Article {
    id Int @id @default(autoincrement())
    title String
    content String
}
```

## ➍ 마이그레이션(database에 테이블 생성)

```bash
npx prisma db push # 모든 테이블 초기
```

===========================================================

➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓

(01)(02)(03)(04)(05)(06)(07)(08)(09)(10)(11)(12)(13)(14)(15)(16)(17)(18)(19)(20)

(一)(二)(三)(四)(六)(七)(九)(十)◎

一二三四五六七八九十
