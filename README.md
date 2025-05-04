
# 🧪 Swag Labs Login Automation (Cypress)

This project contains a basic automation suite using **Cypress** to test the login functionality of the [Swag Labs](https://www.saucedemo.com) demo web app.

---

## ✅ What It Covers

This test suite validates the login flow for all supported user types:

- `standard_user`
- `locked_out_user`
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

Each login test verifies:

- Input fields are visible
- Correct credentials are filled in
- Login button is clicked
- System response is handled per user type

---

## 🛠️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/swaglabs-cypress.git
   cd swaglabs-cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run Cypress tests**

   - To open the Cypress Test Runner:
     ```bash
     npx cypress open
     ```

   - To run tests in headless mode:
     ```bash
     npx cypress run
     ```

---

## 🧠 Test Approach

- **Framework:** [Cypress](https://www.cypress.io/)
- **Language:** JavaScript
- **Strategy:** Data-driven testing using fixtures and custom commands
- **Configuration:** Handled in `cypress.config.js`

### Highlights

- Reusable `cy.Login()` custom command for login steps
- All test data and selectors are managed in `elements.json`
- Tests are structured in `index.spec.cy.js` to iterate through user types

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   └── index.spec.cy.js         # Main test suite
├── fixtures/
│   └── elements.json            # User credentials and selectors
├── support/
│   ├── commands.js              # Cypress command definitions
│   └── login.actions.js         # Custom login logic
cypress.config.js                # Cypress configuration
package.json                     # Project metadata and dependencies
```

---

## 📌 Notes

- Tests focus only on the login workflow for each user type.
- Project emphasizes maintainability via modular structure and fixtures.
- Selectors are based on `data-test` attributes for reliability.


