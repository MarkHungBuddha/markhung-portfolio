---
title: 架設靜態履歷網頁與部落格的完整指南
date: 2024-03-01
author: Mark Hung
tags: [AWS, CloudFlare, CI/CD, 靜態網站]
image: 🚀
description: 從網域註冊到 CI/CD 自動部署，完整記錄使用 CloudFlare、AWS S3 和 CloudFront 架設靜態網站的過程與心得。
---

# 架設靜態履歷網頁與部落格的完整指南

這篇文章記錄了我從零開始架設個人履歷網站和部落格的完整過程，包含遇到的問題和解決方案。整個架構採用 CloudFlare + AWS CloudFront + AWS S3，並搭配 GitHub Actions 實現自動化部署。

## 起因

想要註冊一個自己的網域來展示作品和記錄學習歷程，同時練習使用現代前端技術棧（React + TypeScript）。

## 技術選型

### 前端框架

工作上部分新專案採用 React + TypeScript，雖然我比較少接觸，但想至少了解這個技術棧的基本運作方式，因此決定採用它來建立個人網站。

### 架構設計

最終決定採用以下架構：
- **網域管理**: CloudFlare
- **CDN**: AWS CloudFront
- **靜態檔案託管**: AWS S3
- **自動部署**: GitHub Actions

## 實作步驟

### 1. 網域註冊的波折

一開始打算使用 AWS Route 53 註冊網域，但一直無法正常註冊，寄信詢問客服也石沉大海。後來決定嘗試其他註冊網域的方式。

### 2. 改用 CloudFlare 註冊網域

發現 CloudFlare 註冊網域的年費比 Route 53 便宜非常多！

**建議**：
- 如果服務已經跟 AWS 深度綁定，還是推薦使用 Route 53 註冊網域
- 如果只是要用 AWS S3 做靜態網站，CloudFlare 是更經濟實惠的選擇

### 3. 建立靜態網站

一開始先建立一個預設網站，部署到 AWS S3 bucket 上，並且架設好 CloudFront CDN。

### 4. SSL 憑證設定

讓 CloudFlare 透過 DNS 註冊 CNAME 時遇到一個問題：

**解決方案**：
1. 需要先透過 **AWS Certificate Manager (ACM)** 建立 SSL 憑證
2. 將憑證驗證記錄先註冊到 CloudFlare 的 DNS
3. 等待憑證驗證通過後，才能完成設定

### 5. 設定 GitHub CI/CD 自動部署

為了讓網站可以自動更新，設定了 GitHub Actions 工作流程。

#### 建立工作流程檔案

需要建立 `.github/workflows/deploy.yml` 並進行適當設定。

#### 安全性注意事項

**重要**：敏感資料（如 AWS 金鑰）都要透過 **GitHub Actions secrets and variables** 儲存，絕對不要寫在 `deploy.yml` 檔案中！

#### AWS IAM 權限設定

1. 前往 AWS 建立專門給 GitHub CI/CD 使用的 IAM 使用者
2. 只允許存取 S3 和 CloudFront 服務
3. 如果想要更精細的權限控制，可以編寫自訂的 JSON policy



### 6. 測試 CI/CD 流程

設定完成後，測試 CI/CD 是否正常運作：

1. 推送程式碼到 GitHub
2. 檢查 GitHub Actions 執行狀態
3. 確認檔案是否成功上傳到 S3
4. 驗證 CloudFront 快取是否正確清除
5. 訪問網站確認更新已生效

### 7. 實作部落格功能

這次除了個人履歷網站之外，還希望兼顧個人 blog 的功能。但這次沒有想做後端，所以採用折衷方案：

**解決方案**：讓網頁直接讀取 Markdown 檔案並進行渲染。



這篇文章本身就是用這種方式實作出來的！

## 專案檔案結構

```
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD 工作流程
├── public/
│   └── blog/                   # 部落格 Markdown 文章
│       └── how-to-build-static-blog.md
├── src/                        # React 原始碼
└── package.json
```

## 關鍵技術要點

### CloudFlare 設定
- DNS 管理
- SSL/TLS 加密
- 網域轉址

### AWS S3 設定
- 啟用靜態網站託管
- 設定 bucket policy 允許公開讀取
- 正確的 CORS 設定

### AWS CloudFront 設定
- 設定 origin 為 S3 bucket
- 配置 SSL 憑證
- 設定快取行為

### GitHub Actions 工作流程
- 自動建置專案
- 上傳檔案到 S3
- 清除 CloudFront 快取

