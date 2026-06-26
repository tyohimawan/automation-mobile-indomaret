# Automation Mobile Indomaret

End-to-end mobile automation test suite for the **Klik Indomaret** Android app, built with WebdriverIO, Appium, and Cucumber BDD.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [WebdriverIO](https://webdriver.io/) | v9 | Test runner & browser/device API |
| [Appium](https://appium.io/) | v3 | Mobile automation server |
| [UiAutomator2](https://github.com/appium/appium-uiautomator2-driver) | v7 | Android driver |
| [Cucumber](https://cucumber.io/) | v9 | BDD framework |
| TypeScript | v4 | Language |

---

## Prerequisites

- Node.js >= 18
- Java JDK >= 11 (required by Appium)
- Android SDK with `adb` available on your `PATH`
- A physical Android device or emulator connected and authorised (`adb devices`)

---

## Installation

```bash
npm install
```

Install the UiAutomator2 Appium driver if not already installed:

```bash
npx appium driver install uiautomator2
```

---

## Configuration

### 1. Environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

```env
USER_PHONE=your-phone-number
USER_PASSWORD=your-password
```

> `.env` is gitignored and never committed.

### 2. Device ID

By default the test runner targets device `8881b8d1`. Override it with an environment variable:

```bash
DEVICE_ID=<your-device-udid> npm run wdio
```

Find your device UDID with:

```bash
adb devices
```

---

## Running Tests

Start Appium in one terminal:

```bash
npm run appium
```

Run the test suite in another terminal:

```bash
npm run wdio
```

Or set both env vars inline:

```bash
DEVICE_ID=emulator-5554 npm run wdio
```

---

## Project Structure

```
src/
├── screen/                   # Page Object Models
│   ├── home/
│   │   ├── berandaScreen.ts  # Home screen & nav bar
│   │   ├── searchScreen.ts   # Search input & result list
│   │   └── productScreen.ts  # Product detail page
│   ├── profile/
│   │   └── akunScreen.ts     # Account / login screen
│   ├── cart/
│   │   └── cartScreen.ts     # Cart, shipping, total payment
│   └── payment/
│       └── pembayaranScreen.ts  # Payment method & confirmation
│
├── utils/
│   ├── selectors/            # Element selectors (barrel-exported)
│   │   ├── home/
│   │   ├── profile/
│   │   ├── cart/
│   │   ├── payment/
│   │   └── index.ts
│   └── testData/
│       └── credentials.ts    # Reads USER_PHONE / USER_PASSWORD from .env
│
└── tests/                    # Cucumber feature files & step definitions
    ├── login/
    │   └── loginSteps.ts
    └── purchase/
        ├── purchase.feature
        └── purchaseSteps.ts

wdio.conf.ts                  # WebdriverIO + Appium configuration
.env                          # Local credentials (gitignored)
.env.example                  # Credential template (committed)
```

---

## Test Coverage

### Happy Path

| Scenario | Feature File |
|---|---|
| Login and purchase item via Virtual Account BCA | `src/tests/purchase/purchase.feature` |

The scenario covers the full end-to-end purchase flow:

1. Navigate to account screen
2. Login with credentials from `.env`
3. Search for a product
4. Add to cart and select shipping method
5. **Assert** total payment = item price + shipping cost
6. Proceed to payment and confirm via Virtual Account BCA

### Negative Scenarios (documented)

Documented as comments in [purchase.feature](src/tests/purchase/purchase.feature):

- Login with incorrect password
- Attempting to purchase an out-of-stock item
- Total payment mismatch (harga barang + ongkir ≠ total bayar)

---

## Failure Handling

On scenario failure, a screenshot is automatically saved to `./screenshots/` with the scenario name as the filename. The `screenshots/` directory is gitignored.

---

## Architecture

The project follows the **Page Object Model (POM)** pattern:

- **Selectors** (`src/utils/selectors/`) — raw UiSelector strings, isolated from all logic
- **Screen classes** (`src/screen/`) — encapsulate interactions with a single screen
- **Step definitions** (`src/tests/`) — thin glue between Gherkin steps and screen methods
- **Credentials** (`src/utils/testData/credentials.ts`) — single entry point for sensitive test data loaded from `.env`

This separation means a UI change only requires editing one selector file, not touching screen logic or test steps.
