# 個人作品集網站

一個使用 React、TypeScript 和 Vite 建立的現代化響應式作品集網站。
履歷跟自傳是真的，但整個頁面是ai生的。
履歷跟自傳是真的，但整個頁面是ai生的。
履歷跟自傳是真的，但整個頁面是ai生的。


## 功能特色

- **主視覺區塊**：吸引眼球的首頁，搭配流暢動畫效果
- **關於我**：專業自我介紹，展示技能與統計數據
- **專案展示**：作品集展示區，包含 6 個範例專案
- **部落格**：技術文章發表，支援標籤與詳細資訊
- **聯絡資訊**：聯絡表單與社群媒體連結
- **響應式設計**：完美支援所有裝置尺寸
- **流暢動畫**：全站採用 CSS 動畫與過渡效果
- **深色/淺色模式**：依據系統偏好自動切換主題

## 技術堆疊

- **React 19** - UI 函式庫
- **TypeScript** - 型別安全
- **Vite** - 建置工具與開發伺服器
- **CSS3** - 現代化樣式設計

## 專案結構

```
src/
├── components/
│   ├── Header.tsx        # 導覽列與手機版選單
│   ├── Hero.tsx          # 主視覺區塊
│   ├── About.tsx         # 關於我與技能展示
│   ├── Projects.tsx      # 專案作品展示
│   ├── Blog.tsx          # 部落格文章區塊
│   ├── Contact.tsx       # 聯絡表單與資訊
│   └── Footer.tsx        # 頁尾與連結
├── App.tsx               # 主要應用程式元件
├── App.css               # 全域應用程式樣式
├── index.css             # 基礎樣式
└── main.tsx              # 進入點
```

## 開始使用

### 安裝套件

```bash
npm install
```

### 開發模式

啟動開發伺服器：

```bash
npm run dev
```

網站將在 `http://localhost:5173` 運行

### 建置專案

建置正式環境版本：

```bash
npm run build
```

建置後的檔案將位於 `dist/` 目錄。

### 預覽建置結果

預覽正式環境建置版本：

```bash
npm run preview
```

## 客製化設定

### 個人資訊

請更新以下檔案中的個人資訊：

1. **Header.tsx** - 導覽列中的名稱
2. **Hero.tsx** - 自我介紹與行動呼籲
3. **About.tsx** - 個人簡介、技能與統計數據
4. **Projects.tsx** - 實際專案與連結
5. **Blog.tsx** - 部落格文章
6. **Contact.tsx** - 聯絡資訊與電子郵件
7. **Footer.tsx** - 社群媒體連結

### 樣式設定

- 顏色與主題定義在 `index.css` 中使用 CSS 自訂屬性
- 主要色彩漸層為 `#646cff` 到 `#535bf2`
- 在各別元件的 `.css` 檔案中修改樣式

### 圖片設定

替換以下檔案中的 emoji 佔位符號：
- `Projects.tsx` - 專案圖片
- `Blog.tsx` - 部落格文章圖片
- `Hero.tsx` - 主視覺區塊圖片

您可以使用實際圖片來替換：
1. 將圖片新增至 `public/images/` 資料夾
2. 更新 `image` 屬性為 `<img src="/images/project.jpg" />`

## 部署方式

### 使用 GitHub Actions 自動化部署

本專案包含自動化部署至 AWS S3 的 GitHub Actions 工作流程：

1. 推送到 `dev` 分支會觸發部署工作流程
2. 專案會自動建置
3. 建置檔案會部署到 AWS S3
4. CloudFront 分發內容

### 手動部署至 AWS S3 + CloudFront

1. 建置專案：
   ```bash
   npm run build
   ```

2. 上傳 `dist/` 資料夾到您的 S3 儲存貯體

3. 設定 CloudFront 從 S3 儲存貯體提供服務

4. 使用 Route 53 設定自訂網域（選用）

### 部署至其他平台

建置後的 `dist/` 資料夾可以部署到：
- Vercel
- Netlify
- GitHub Pages
- 任何靜態網站託管服務

## 未來功能規劃

考慮新增以下功能：

- [ ] 使用 React Router 實作部落格文章路由
- [ ] 整合 CMS（Contentful、Sanity 等）
- [ ] 聯絡表單後端（EmailJS、Formspree）
- [ ] 數據分析（Google Analytics、Plausible）
- [ ] 使用 react-helmet 進行 SEO 優化
- [ ] 使用程式碼分割優化效能
- [ ] 為專案與部落格文章新增實際圖片
- [ ] 實作深色模式切換按鈕
- [ ] 新增載入動畫
- [ ] 建立 404 頁面

## 授權條款

MIT License - 歡迎使用此範本製作您自己的作品集！

## 聯絡方式

- Email: markhung@example.com
- GitHub: github.com/markhung
- LinkedIn: linkedin.com/in/markhung

---

使用 React + TypeScript + Vite 用心打造
