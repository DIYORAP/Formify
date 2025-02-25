# Form Builder Application

A dynamic form-building application that enables users to create, save, and publish custom forms through an intuitive drag-and-drop interface. The application includes advanced analytics, user authentication, and customizable form elements.

## Features

- **Drag-and-Drop Form Builder**: Create forms effortlessly with a user-friendly interface.
- **Advanced Analytics**: Track form performance with metrics like total visits, submissions, submission rate, and bounce rate.
- **User Authentication**: Secure login and access management using Clerk.
- **Database Management**: PostgreSQL for robust data storage and user-specific handling.
- **Editable Forms**: Preview and edit modes to customize form elements and frontend output.
- **Theme Manager**: Customize colors, fonts, and sizes to match unique design needs.

## Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS, Shadcn-UI
- **Backend**: Prisma ORM, PostgreSQL
- **Authentication**: Clerk
- **State Management**: Redux
- **Deployment**: Versel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DIYORAP/Formify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd form-builder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_postgresql_url
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_signin_url
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_signup_url
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- Sign in to access form creation.
- Drag and drop components to design your form.
- Customize form fields and settings.
- Save, publish, and analyze form performance.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your fork and submit a pull request.

**Author**: [Parthik Diyora](https://linkedin.com/in/parthikdiyora10)
