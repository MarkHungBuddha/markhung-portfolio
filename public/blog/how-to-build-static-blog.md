---
title: Building and Deploying a Static Portfolio on AWS
date: 2024-03-01
author: Mark Hung
tags: [AWS, Cloudflare, CI/CD, Static Sites]
image: 🚀
description: Lessons from taking a React portfolio from domain registration to automated S3 and CloudFront deployment.
---

# Building and Deploying a Static Portfolio on AWS

This article records the infrastructure decisions behind my portfolio: Cloudflare for domain management, Amazon S3 for static storage, CloudFront for delivery, and GitHub Actions for automated deployments.

## Architecture

The site is a React and TypeScript application compiled into static assets. The production path is intentionally small:

- **Domain and DNS:** Cloudflare
- **Static asset storage:** Amazon S3
- **Content delivery:** Amazon CloudFront
- **Continuous deployment:** GitHub Actions

This architecture avoids maintaining an application server while still providing HTTPS, global caching, and repeatable deployments.

## Domain and TLS setup

I originally considered managing the domain through Route 53, but Cloudflare was a better fit for this project. The CloudFront distribution still requires an ACM certificate before the custom domain can serve HTTPS.

The setup sequence was:

1. Request the certificate through AWS Certificate Manager.
2. Add the DNS validation records in Cloudflare.
3. Attach the validated certificate to CloudFront.
4. Point the public hostname to the CloudFront distribution.

## Continuous deployment

The deployment workflow runs whenever changes reach the main branch:

1. Check out the repository.
2. Install the locked npm dependencies.
3. Run the TypeScript and Vite production build.
4. Synchronize the generated assets to S3.
5. Invalidate CloudFront so the new release becomes available.

AWS credentials and resource identifiers belong in GitHub Actions secrets, never in the workflow file or source code. A stronger production setup uses GitHub OIDC with a narrowly scoped IAM role instead of long-lived access keys.

## Caching lessons

Hashed JavaScript and CSS assets can use long-lived immutable caching because every content change produces a new filename. HTML and unhashed content should use short cache lifetimes or revalidation so visitors do not keep stale pages.

## What I learned

The implementation was straightforward; the important work was at the boundaries between services: certificate validation, DNS records, cache behavior, and IAM permissions. Treating infrastructure and deployment as part of the product made the site easier to operate and safer to change.
