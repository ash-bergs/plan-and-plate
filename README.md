# Plan & Plate

Plan and Plate is a meal planning app that allows users to select from recipes, add them to their weekly menu, create shopping lists, and even manage how many leftovers they should have.

Not only that, it helps with what I find to be the most difficult part of meal planning - how can I avoid one REALLY long day cooking, and learn to batch cook a couple of times during the week instead. Recipes can be assigned to days and coordinated with one another, making it easier to overlap leftovers and change up your menu. Never eat 4-day-old steamed broccoli again!

## Stack

- NextJS
- Mantine & Styled components
- Jotai
- Prisma
- Supabase
- Project Roadmap

### Phase One: Recipe Viewer and Writer

At this point, there are no users; the app is a repository of sorts for recipes. Scroll through and view recipes, and export to a PDF for download. Feel free to add to the bunch with our Recipe Writer UI.

### Phase Two: Add Users and User Menus

We'll introduce user authentication (probably with NextAuth) and allow users to sign up so they can save and add recipes to their weekly meal plan.

Recipes will become optionally tied to users through a user_id foreign key (so old recipes will just be considered 'platform recipes', which will continue to grow as well).

Export weekly meal plans as a PDF.

### Phase Three: Add Weekly Manager

Users will gain a dashboard to see the recipes they have planned for the week and can drag-and-drop them to different days of the week to plan their cooking schedule.

## yarn scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

This project uses a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
