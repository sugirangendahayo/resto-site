# React Project Structure

This directory contains a well-organized React application structure following best practices for scalability and maintainability.

## 📁 Folder Structure

### `/components`
**Purpose**: Reusable UI components that can be used across the application
**Contents**:
- `ui/` - Basic UI elements (Button, Input, Card, Modal, etc.)
- `common/` - Shared components (Header, Footer, Sidebar, Navigation, etc.)
- `forms/` - Form-related components (FormField, FormValidation, etc.)
- `layout/` - Layout-specific components (Grid, Container, Section, etc.)

**Guidelines**:
- Components should be small, focused, and reusable
- Use PascalCase for component names
- Include index.js files for cleaner imports
- Each component should have its own folder with component file, styles, and tests

---

### `/pages`
**Purpose**: Page-level components that represent entire routes/views
**Contents**:
- `Home/` - Homepage component
- `About/` - About page component
- `Contact/` - Contact page component
- `Dashboard/` - Dashboard page component
- etc.

**Guidelines**:
- Each page is a major route in your application
- Pages can contain multiple components
- Include route-specific logic and data fetching
- Use lazy loading for better performance

---

### `/hooks`
**Purpose**: Custom React hooks for reusable stateful logic
**Contents**:
- `useAuth.js` - Authentication logic
- `useLocalStorage.js` - Local storage management
- `useDebounce.js` - Debouncing functionality
- `useFetch.js` - API data fetching
- `useForm.js` - Form state management
- etc.

**Guidelines**:
- Hooks should start with "use"
- Make them reusable across components
- Separate business logic from UI components
- Include proper TypeScript types if using TS

---

### `/utils`
**Purpose**: Pure utility functions and helpers
**Contents**:
- `helpers.js` - General helper functions
- `formatters.js` - Data formatting functions
- `validators.js` - Input validation functions
- `constants.js` - Application constants
- `calculations.js` - Mathematical/computational functions
- etc.

**Guidelines**:
- Pure functions (no side effects)
- Reusable across the application
- Well-documented with JSDoc
- Unit tested for reliability

---

### `/services`
**Purpose**: API communication and external service integrations
**Contents**:
- `api.js` - API client configuration
- `authService.js` - Authentication API calls
- `userService.js` - User-related API calls
- `productService.js` - Product-related API calls
- `storageService.js` - Storage abstraction layer
- etc.

**Guidelines**:
- Handle all external API communication
- Include error handling and retry logic
- Use consistent response formats
- Separate from UI components

---

### `/contexts`
**Purpose**: React Context providers for global state management
**Contents**:
- `AuthContext.js` - Authentication state
- `ThemeContext.js` - Theme management
- `CartContext.js` - Shopping cart state
- `NotificationContext.js` - Global notifications
- etc.

**Guidelines**:
- Use for global state that doesn't change frequently
- Provide context and custom hooks together
- Include default values and error boundaries
- Consider performance optimization

---

### `/constants`
**Purpose**: Application-wide constants and configuration
**Contents**:
- `api.js` - API endpoints and configuration
- `routes.js` - Application routes
- `theme.js` - Theme constants
- `validation.js` - Validation rules
- `config.js` - Environment-specific config
- etc.

**Guidelines**:
- Centralize all magic numbers and strings
- Use descriptive names
- Group related constants together
- Export as named constants

---

### `/styles`
**Purpose**: Global styles, CSS modules, and styling utilities
**Contents**:
- `globals.css` - Global CSS styles
- `variables.css` - CSS custom properties
- `components/` - Component-specific styles
- `utilities.css` - Utility classes
- `themes/` - Theme-specific styles

**Guidelines**:
- Use CSS modules for component-specific styles
- Define design tokens and variables
- Follow consistent naming conventions
- Include responsive design utilities

---

### `/types`
**Purpose**: TypeScript type definitions (if using TypeScript)
**Contents**:
- `api.ts` - API response types
- `user.ts` - User-related types
- `product.ts` - Product-related types
- `common.ts` - Common/shared types
- `index.ts` - Type exports

**Guidelines**:
- Define interfaces for all data structures
- Use generic types where appropriate
- Export types for easy importing
- Keep types in sync with actual data

---

### `/layouts`
**Purpose**: Layout components that structure the application
**Contents**:
- `MainLayout.jsx` - Main application layout
- `AuthLayout.jsx` - Authentication pages layout
- `AdminLayout.jsx` - Admin dashboard layout
- `PublicLayout.jsx` - Public pages layout

**Guidelines**:
- Define the overall page structure
- Include navigation, footer, sidebar
- Handle responsive layout changes
- Use composition for flexibility

---

### `/store`
**Purpose**: State management (Redux, Zustand, or other state libraries)
**Contents**:
- `index.js` - Store configuration
- `slices/` - Redux Toolkit slices or Zustand stores
- `selectors/` - State selectors
- `middleware/` - Custom middleware
- `actions/` - Action creators (if not using slices)

**Guidelines**:
- Organize by feature/domain
- Keep store structure flat when possible
- Include proper TypeScript types
- Handle async actions properly

---

## 🚀 Getting Started

1. **Components**: Start building reusable UI components in `/components`
2. **Pages**: Create page components in `/pages` for each route
3. **Hooks**: Extract reusable logic into custom hooks in `/hooks`
4. **Services**: Set up API communication in `/services`
5. **State**: Choose state management approach and set up in `/store` or `/contexts`

## 📋 Best Practices

- **File Naming**: Use PascalCase for components, camelCase for utilities
- **Index Files**: Use index.js for cleaner imports
- **Barrels**: Export related items from index files
- **Testing**: Keep test files alongside source files or in separate `__tests__` folders
- **Documentation**: Include JSDoc comments for functions and components

## 🎯 Next Steps

1. Move existing `App.jsx` logic to appropriate folders
2. Set up routing structure in `/pages`
3. Create base UI components in `/components/ui`
4. Configure API services in `/services`
5. Choose and set up state management solution

This structure provides a solid foundation for building scalable React applications while maintaining code organization and developer productivity.
