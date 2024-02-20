<div align="center">
  <img src="./public/favicon.ico" width="100px" alt="Hamtarot Favicon" />
  <h1>HAMTAROT</h1>
  <a href="https://github.com/66022523/HAMTAROT/actions/workflows/test.yml">
    <img src="https://github.com/66022523/HAMTAROT/actions/workflows/test.yml/badge.svg" alt="Test Deploy Badge" />
  </a>
  <a href="https://github.com/66022523/HAMTAROT/deployments/Production">
    <img src="https://img.shields.io/website-up-down-green-red/https/hamtarot.vercel.app.svg?label=Production%20Deploy" alt="Production Deploy Badge" />
  </a>
</div>

เว็บไซต์ดูดวงที่คุณสามารถดูได้ตลอดเวลาไม่ว่าที่ไหนก็ตาม ซึ่งถูกสร้างและพัฒนาขึ้นด้วยเฟรมเวิร์ค [Nuxt.js](https://nuxt.com/) และ [DaisyUI](https://daisyui.com/) สำหรับการตกแต่งเว็บไซต์

## ความต้องการเบื้องต้น

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com)

## เครื่องมือ

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) [?](https://eslint.org/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) [?](https://prettier.io/)
- [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) [?](https://tailwindcss.com/)
- DaisyUI [?](https://daisyui.com/)
- Flaticon [?](https://www.flaticon.com/uicons/interface-icons)

> คลิก ? เพื่อเรียนรู้เพิ่มเติมหรือเข้าสู่เว็บไซต์

## ตั้งค่าโปรเจกต์

หากเครื่องจัดการแพ็คเกจของคุณไม่ตรงกับเอกสาร คณสามารถเปลี่ยนได้จากคำนำหน้าของคำสั่ง เช่น `npm` เป็น `pnpm` ทั้งนี้เราแนะนำให้ดูข้อมูลจากเว็บไซต์ทางการสำหรับวิธีใช้งาน:

- [npm](https://docs.npmjs.com/cli/)
- [pnpm](https://pnpm.io/pnpm-cli)
- [yarn](https://yarnpkg.com/getting-started/usage)
- [bun](https://bun.sh/docs)

1. เปิดบรรทัดคำสั่งแล้วรันคำสั่งดังนี้เพื่อโคลนโปรเจกต์:

```cmd
git clone https://github.com/66022523/HAMTAROT.git
```

2. ทำการเข้าไปในโฟลเดอร์ที่โคลนล่าสุดโดยรันคำสั่งดังนี้:

```cmd
cd HAMTAROT
```

3. ทำการติดตั้งส่วนประกอบที่จำเป็นในการพัฒนาโปรเจกต์:

```cmd
npm install
```

4. เปิด Visual Studio Code เพื่อแก้ไขโปรเจกต์:

```cmd
code .
```

## พัฒนาโปรเจกต์

เริ่มเปิดเซิร์ฟเวอร์ที่ http://localhost:3000:

```cmd
npm run dev
```

## สร้างเว็บไซต์

สร้างเว็บไซต์สำหรับการใช้งานจริงด้วยคำสั่งดังนี้:

```cmd
npm run build
```

หรือดูตัวอย่างเว็บไซต์ที่สร้างไว้ด้วยคำสั่งดังนี้:

```cmd
npm run preview
```
