---
title: 使用 AWS 建置與部署靜態作品集網站
date: 2024-03-01
author: Mark Hung
tags: [AWS, Cloudflare, CI/CD, 靜態網站]
image: 🚀
description: 從網域設定到自動部署，記錄 React 作品集部署至 S3 與 CloudFront 的實作經驗。
---

# 使用 AWS 建置與部署靜態作品集網站

這篇文章記錄作品集網站背後的基礎設施設計：使用 Cloudflare 管理網域、Amazon S3 儲存靜態檔案、CloudFront 負責內容傳遞，並透過 GitHub Actions 自動部署。

## 系統架構

網站使用 React 與 TypeScript 開發，建置後產生純靜態檔案。正式環境的組成刻意保持精簡：

- **網域與 DNS：** Cloudflare
- **靜態檔案儲存：** Amazon S3
- **內容傳遞：** Amazon CloudFront
- **持續部署：** GitHub Actions

這套架構不需要維護應用程式伺服器，同時保有 HTTPS、全球快取與可重現的部署流程。

## 網域與 TLS 設定

我一開始考慮使用 Route 53 管理網域，但 Cloudflare 更符合這個專案的需求。CloudFront 若要使用自訂網域，仍需先建立 ACM 憑證。

設定順序如下：

1. 透過 AWS Certificate Manager 申請憑證。
2. 在 Cloudflare 加入 DNS 驗證紀錄。
3. 將驗證完成的憑證綁定至 CloudFront。
4. 將公開網域指向 CloudFront distribution。

## 持續部署

當變更進入主要分支後，部署流程會自動執行：

1. 取得儲存庫程式碼。
2. 安裝 lockfile 指定的 npm 相依套件。
3. 執行 TypeScript 與 Vite 正式環境建置。
4. 將產生的檔案同步至 S3。
5. 清除 CloudFront 快取，使新版本生效。

AWS 憑證與資源識別碼必須存放於 GitHub Actions secrets，不應寫入 workflow 或原始碼。更完善的正式環境做法，是使用 GitHub OIDC 搭配最小權限 IAM Role，取代長期有效的 Access Key。

## 快取策略

檔名含內容雜湊的 JavaScript 與 CSS 可以設定長期 immutable 快取，因為內容變更後檔名也會改變。HTML 與未雜湊的內容則應使用較短的快取時間或重新驗證，避免使用者長期取得舊版本。

## 實作心得

網站本身的建置並不複雜，真正需要仔細處理的是服務之間的邊界：憑證驗證、DNS 紀錄、快取行為與 IAM 權限。將基礎設施與部署視為產品的一部分，能讓網站更容易維運，也更安全地持續更新。
