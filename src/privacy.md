---
title: Privacy Policy
layout: layout.njk
permalink: /privacy/
---

# Privacy Policy

<p class="last-updated">Last Updated: February 15, 2026</p>

## Introduction

Tastemaker ("we," "our," or "us") is a mobile application that helps you track preferences and compare products to make confident decisions. This Privacy Policy explains how we collect, use, and protect your information when you use Tastemaker.

## Information We Collect

### Account Information

When you sign in with Google, we collect:

- **Email address** - Used to identify your account
- **Display name** - Shown in the app (if provided by Google); you may edit this within the app
- **Profile photo URL** - Displayed in your profile (if provided by Google)
- **Avatar color** - A profile color you select within the app, displayed alongside your name

### App Data

When you use Tastemaker, we store the data you create:

- **Comparisons** - Names, settings, and rating type for your comparison projects
- **Options** - Items you're comparing within each comparison, including optional emoji identifiers
- **Ratings** - Scores and notes you assign to options, with timestamps

### Shared Comparison Data

When you participate in shared comparisons with other users, we store:

- **Member information** - Your display name, avatar color, and profile photo are visible to other members of the shared comparison
- **Invite codes** - Codes generated to invite others, along with their creation and expiration dates
- **Shared ratings** - Your ratings within shared comparisons are visible to other members (unless the comparison uses hidden ratings mode, in which case others see your ratings only after they have rated the same option)

### Push Notification Data

If you enable push notifications, we collect:

- **Push notification tokens** - Device tokens used to deliver notifications, stored with platform type (iOS or Android) and registration timestamp

### User Preferences

We store your app preferences, including:

- Theme setting (light, dark, or system)
- Default rating type and last-used rating type
- Dashboard density and sort order preferences
- Rating display preferences
- Notification settings

### Information We Do Not Collect

Tastemaker does not collect:

- Device identifiers or advertising IDs
- Location data
- Usage analytics or behavioral data

### Error Monitoring

We use Sentry, a third-party error monitoring service, to track application errors and crashes in production. When an error occurs, Sentry may collect:

- **Error details** - Stack traces, error messages, and error types
- **User identifier** - Your anonymous user ID (not your name or email) to help us identify patterns across errors

Sentry is only active in production builds and does not collect behavioral or usage analytics.

## How We Use Your Information

We use your information to:

- **Provide app functionality** - Store and sync your comparisons, options, and ratings
- **Authenticate your account** - Verify your identity when you sign in
- **Sync across devices** - Keep your data available on any device where you sign in
- **Enable collaboration** - Share comparison data with other users you invite to shared comparisons
- **Send push notifications** - Notify you of activity in your shared comparisons (if you enable notifications)
- **Monitor errors** - Identify and fix application errors to improve reliability

We do not:

- Sell your data to third parties
- Use your data for advertising
- Create user profiles for marketing purposes

## Data Sharing

### Shared Comparisons

When you create or join a shared comparison, certain data is visible to other members of that comparison:

- Your display name, avatar color, and profile photo
- Options you add to the comparison
- Ratings and notes you provide (subject to hidden ratings mode settings)

Shared comparisons support up to 6 members. Only users who have been invited and accepted an invite can access a shared comparison. All other data, including your personal comparisons, account settings, and email address, remains private to your account.

### Third-Party Service Providers

We share data with the third-party services listed in the "Third-Party Services" section below, solely for the purposes described.

## Data Storage and Security

### Where Your Data Is Stored

Your data is stored in Firebase Firestore, a cloud database service operated by Google. Firebase servers are located in the United States.

### Local Data Caching

Tastemaker uses Firebase offline persistence, which means your data is also cached locally on your device to enable offline access and improve performance. This local cache is managed by Firebase and is tied to your authenticated session.

### How We Protect Your Data

- **Encryption in transit** - All data transmitted between your device and our servers uses TLS encryption
- **Encryption at rest** - Firebase encrypts stored data by default
- **Access controls** - Server-side security rules ensure you can only access your own data and shared comparisons you are a member of
- **Input validation** - All user input is validated on both the client and server to prevent security vulnerabilities
- **Rate limiting** - Server-side rules limit the rate of data creation to prevent abuse

## Third-Party Services

Tastemaker uses the following third-party services:

| Service | Provider | Purpose |
| --- | --- | --- |
| Firebase Authentication | Google | User sign-in and account management |
| Firebase Firestore | Google | Data storage and synchronization |
| Firebase Cloud Functions | Google | Server-side business logic (account deletion, data export, notifications) |
| Firebase Cloud Messaging | Google | Push notification delivery |
| Google Sign-In | Google | Authentication via Google account |
| Sentry | Functional Software | Error monitoring and crash reporting (production only) |

Google services are governed by [Google's Privacy Policy](https://policies.google.com/privacy). Sentry is governed by [Sentry's Privacy Policy](https://sentry.io/privacy/).

## Your Rights

### View Your Data

All data you create in Tastemaker is visible to you within the app. You can view your comparisons, options, and ratings at any time.

### Export Your Data

You can export a copy of all your data:

1. Open Tastemaker
2. Go to **Settings**
3. Tap **Export Data**

The export includes your profile information, all comparisons you own, and all ratings you have made. The data is provided in JSON format.

### Delete Your Account

You can permanently delete your account and all associated data:

1. Open Tastemaker
2. Go to **Settings**
3. Tap **Delete Account**
4. Confirm the deletion

Account deletion is permanent and removes:

- Your user profile
- All comparisons you created, including their options and ratings
- Your ratings and membership in shared comparisons created by others
- All invite codes you created
- Your push notification tokens

This action cannot be undone.

## Data Retention

We retain your data for as long as your account exists. When you delete your account, all associated data is permanently removed from our servers.

## Children's Privacy

Tastemaker is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us and we will delete that information.

## Changes to This Policy

We may update this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review this policy periodically.

For significant changes that affect how we handle your data, we will notify you through the app or via email.

## Contact Us

If you have questions about this Privacy Policy or our data practices, please contact us at:

**Email:** privacy@trytastemaker.com
