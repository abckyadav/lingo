<a name="readme-top"></a>

# Lingo - Interactive platform for language learning.

#### Live link - [`https://lingo-eosin.vercel.app/`](https://lingo-eosin.vercel.app/)

![Lingo - Interactive platform for language learning.](/.github/landing_page.png "landing page")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/abckyadav "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/abckyadav/lingo/?icon=github&color=black&scale=1.01)](https://github.com/abckyadav/lingo/blob/main/LICENSE "GitHub license")
[![GitHub branches](https://flat.badgen.net/github/branches/abckyadav/lingo/?icon=github&color=black&scale=1.01)](https://github.com/abckyadav/lingo/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/abckyadav/lingo/?icon=github&color=black&scale=1.01)](https://github.com/abckyadav/lingo/commits "Github commits")
[![GitHub pull requests](https://flat.badgen.net/github/prs/abckyadav/lingo/?icon=github&color=black&scale=1.01)](https://github.com/abckyadav/lingo/pulls "GitHub pull requests")
[![Vercel status](https://camo.githubusercontent.com/bd437f93df58db5a5e8e8790572201121f525d051d2db58318ba0b91ef573384/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56657263656c2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465)](https://lingo-eosin.vercel.app/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
lingo/

    ├── actions
│   ├── challenge-progress.ts
│   ├── user-progress.ts
│   └── user-subscription.ts
├── app
│   ├── admin
│   │   ├── app.tsx
│   │   ├── challengeOption
│   │   ├── challenges
│   │   ├── course
│   │   ├── lesson
│   │   ├── page.tsx
│   │   └── unit
│   ├── api
│   │   ├── challengeOptions
│   │   ├── challenges
│   │   ├── courses
│   │   ├── lessons
│   │   ├── units
│   │   └── webhooks
│   ├── buttons
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── lesson
│   │   ├── Card.tsx
│   │   ├── challenge.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── layout.tsx
│   │   ├── [lessonId]
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   ├── question-bubble.tsx
│   │   ├── quiz.tsx
│   │   └── result-card.tsx
│   ├── (main)
│   │   ├── courses
│   │   ├── layout.tsx
│   │   ├── leaderboard
│   │   ├── learn
│   │   ├── quests
│   │   └── shop
│   └── (marketing)
│       ├── footer.tsx
│       ├── header.tsx
│       ├── layout.tsx
│       └── page.tsx
├── components
│   ├── feed-wrapper.tsx
│   ├── mobile-header.tsx
│   ├── mobile-sidebar.tsx
│   ├── modals
│   │   ├── exit-modal.tsx
│   │   ├── hearts-modal.tsx
│   │   └── practice-modal.tsx
│   ├── promo.tsx
│   ├── quests.tsx
│   ├── sidebar-item.tsx
│   ├── sidebar.tsx
│   ├── sticky-wrapper.tsx
│   ├── ui
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── sonner.tsx
│   └── user-progress.tsx
├── components.json
├── db
│   ├── drizzle.ts
│   ├── queries.ts
│   └── schema.ts
├── drizzle.config.ts
├── lib
│   ├── admin.ts
│   ├── constants.ts
│   ├── stripe.ts
│   └── utils.ts
├── LICENSE.txt
├── middleware.ts
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── public
├── README.md
├── scripts
│   ├── challenge-options.ts
│   ├── challenges.ts
│   ├── courses.ts
│   ├── lessons.ts
│   ├── prod.ts
│   ├── reset.ts
│   ├── seed.ts
│   └── units.ts
├── store
│   ├── use-exit-modal.ts
│   ├── use-hearts-modal.ts
│   └── use-practice-modal.ts
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/learn
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/learn

```

5. Admin login id for testing purpose

email id -

```
vadih57177@fundapk.com
```

password -

```
Admin@2025Admin
```

6. Obtain Clerk Authentication Keys

   1. **Source**: Clerk Dashboard or Settings Page
   2. **Procedure**:
      - Log in to your Clerk account.
      - Navigate to the dashboard or settings page.
      - Look for the section related to authentication keys.
      - Copy the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` provided in that section.

7. Retrieve Neon Database URI

   1. **Source**: Database Provider (e.g., Neon, PostgreSQL)
   2. **Procedure**:
      - Access your database provider's platform or configuration.
      - Locate the database connection details.
      - Replace `<user>`, `<password>`, `<host>`, and `<port>` placeholders in the URI with your actual database credentials.
      - Ensure to include `?sslmode=require` at the end of the URI for SSL mode requirement.

8. Fetch Stripe API Key and Webhook Secret

   1. **Source**: Stripe Dashboard
   2. **Procedure**:
      - Log in to your Stripe account.
      - Navigate to the dashboard or API settings.
      - Find the section related to API keys and webhook secrets.
      - Copy the `STRIPE_API_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

9. Specify Public App URL

   1. **Procedure**:
      - Replace `http://localhost:3000` with the URL of your deployed application.

10. Identify Clerk Admin User IDs

    1. **Source**: Clerk Dashboard or Settings Page
    2. **Procedure**:
       - Log in to your Clerk account.
       - Navigate to the dashboard or settings page.
       - Find the section related to admin user IDs.
       - Copy the user IDs provided, ensuring they are separated by commas and spaces.

11. Save and Secure:

    - Save the changes to the `.env` file.

12. Install Project Dependencies using `bun install`

13. Run the Seed Script:

In the same terminal, run the following command to execute the seed script:

```bash
bun db:push && bun db:prod

```

14. If any error occurs you can also reset the database usin `bun db:reset`

15. Verify Data in Database:

Once the script completes, check your database to ensure that the courses, units, lessons, challenges and challenge-options data has been successfully seeded.

16. Now app is fully configured 👍 and you can start using this app using `bun dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots

Home Page ![Home Page](/.github/home_page.png "Home Page")
Challenge ![Challenge](/.github/challenge.png "Challenge")
Finish ![Congratulation](/.github/congratulation.png "Finish")
Quests ![Quests](/.github/quests.png "Quests")
Shop ![Shop](/.github/shop.png "Shop")
Leaderboard ![Leaderboard](/.github/leaderboard.png "Leaderboard")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in Lingo.

- Special Thanks to Kenney Assets: https://kenney.nl/
- Voicemaker: https://voicemaker.in/
- Elevenlabs AI: https://elevenlabs.io/
- Flagpack: https://flagpack.xyz/

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/abckyadav?style=social&label=Follow&maxAge=2592000)](https://github.com/abckyadav "Follow Me")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
