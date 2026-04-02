# Finance Dashboard UI

## Overview

This project is a frontend finance dashboard application developed to demonstrate modern UI design, state management, and component-based architecture. The application enables users to track financial activity, analyze transactions, and derive meaningful insights through an intuitive and responsive interface.

The implementation focuses on clarity, usability, and scalability rather than backend complexity. All data is handled on the frontend using mock data and managed efficiently through a centralized state.

---

## Approach

The application is designed using a modular and scalable architecture. Each feature is broken down into reusable components to ensure maintainability and readability.

State management is handled using Zustand, which provides a lightweight and efficient way to manage global application state such as transactions, filters, and user roles.

The UI is structured into logical sections:
- Dashboard overview for quick financial summaries
- Transactions section for detailed data exploration
- Insights section for analytical observations

The design prioritizes simplicity, ensuring that users can easily navigate and understand the data without unnecessary complexity.

---

## Features

### Dashboard Overview
- Displays key financial metrics including total balance, total income, and total expenses
- Provides a clear snapshot of the user's financial status
- Structured using responsive grid layout for different screen sizes

### Transactions Management
- Displays a list of transactions with date, amount, category, and type
- Supports search and filtering based on category
- Ensures data is easy to scan and interpret

### Role-Based Interface
- Simulates role-based access control on the frontend
- Viewer role has read-only access
- Admin role can add new transactions
- Role switching is implemented using a simple UI control for demonstration

### Insights Section
- Identifies the highest spending category
- Provides basic analysis of expense distribution
- Demonstrates how raw data can be transformed into useful information

---

## State Management

The application uses Zustand for managing global state. The store is responsible for:

- Managing transaction data
- Handling filtering logic
- Managing user role (admin or viewer)
- Updating UI reactively when state changes

This approach ensures a clean separation between business logic and UI components.

---

## User Interface and Experience

The UI is designed with the following principles:

- Clean and readable layout
- Logical grouping of related information
- Minimal and distraction-free design
- Responsive behavior across different screen sizes
- Clear interaction patterns for filtering and role switching

Edge cases such as empty data and dynamic updates are handled to maintain a consistent user experience.

---

## Technical Design

- Component-based architecture for reusability
- Separation of concerns between data, state, and UI
- Scalable folder structure for future enhancements
- Efficient rendering using React best practices

---

## Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository or extract the provided ZIP file

2. Navigate to the project directory

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the application in your browser at the provided local URL

---

## Assumptions

- The application uses static mock data for demonstration
- No backend integration is implemented
- Role-based access is simulated on the frontend

---

## Evaluation Criteria Alignment

### Design and Creativity
The interface is designed with a clean and intuitive layout, focusing on usability and clarity of information.

### Responsiveness
The layout adapts to different screen sizes using responsive design techniques.

### Functionality
All required features are implemented, including dashboard overview, transaction management, filtering, and role-based behavior.

### User Experience
The application provides a smooth and simple user experience with clear navigation and interaction flows.

### Technical Quality
The codebase follows a modular structure with reusable components and clean separation of concerns.

### State Management
Zustand is used effectively to manage global state and ensure consistent UI updates.

### Documentation
This README provides a clear overview, setup instructions, and explanation of the implementation approach.

### Attention to Detail
Edge cases are handled, UI consistency is maintained, and interactions are implemented thoughtfully.

---

## Future Enhancements

- Integration with backend APIs
- Advanced filtering and sorting options
- Data visualization with charts
- Dark mode support
- Data export functionality
