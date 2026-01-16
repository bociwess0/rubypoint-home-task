# RubyPoint – Frontend Home Exercise

This repository contains a small frontend application built as part of the RubyPoint interview process.  
The goal of the task was to demonstrate frontend structure, state management, and data-driven UI behavior within a limited time scope.

### 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Download and Extract the ZIP
Extract it to a folder of your choice, for example, Desktop or a working directory.


### 2️⃣ Open the Project in Terminal
```
cd path/to/rubypoint-home-task
```

### 3️⃣ Install Dependencies
```
npm install
```

### 3️⃣ Run the development server
```
npm run dev
```

The application will start at:
👉 http://localhost:5173

### 🧪 Running Tests

To execute the unit tests:

```
npx vitest
```

The project uses Vitest and React Testing Library for testing utilities and UI behavior.
<br><br>

### 🎯 What I focused on

Given the time constraint, I focused on:

#### Clear component structure
* Separating responsibilities between list, detail view, and visualization components.

#### Predictable state management
* Keeping a single source of truth in the root component and using unidirectional data flow.

#### Data-driven UI
* Rendering both the detail view and the geometry diagram directly from structured data.

#### Clarity over complexity
* Avoiding unnecessary abstractions or libraries while keeping the solution easy to reason about.

#### Responsiveness
* Ensuring the layout remains usable on smaller screens using a simple flex-based layout.
<br><br>


### ⚖️ Tradeoffs & assumptions

#### State management
* All state is kept in the App component. For this scope, this keeps the data flow simple and explicit.

#### Static data source
* Parts are loaded from a local data file instead of an API, as backend integration was explicitly out of scope.

#### SVG for visualization
* SVG was chosen for the geometry diagram to keep the visualization simple, scalable, and data-driven without introducing Canvas or 3D complexity.

#### Styling
* Tailwind CSS was used to achieve a clean and consistent layout quickly without custom CSS.
<br><br>


### 🔧 What I would improve with more time

* Extract shared state logic into a custom hook or introduce server-state management once data comes from an API
* Add basic integration tests covering list selection and status updates across components
* Improve visual hierarchy and spacing for larger datasets
* Add loading and empty states to better reflect real-world scenarios

<br><br>


### 🧪 Tests

* Added a small unit test using Vitest and React Testing Library
* The test focuses on the most important interaction in the app:
changing a part’s status and propagating that change via callbacks
<br><br>

### 👨‍💻 Author

Developed by: Bogdan Djordjevic

GitHub: [bociwess0](https://github.com/bociwess0)
