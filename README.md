Home Services Marketplace – React Native MVP

Project Overview
This project is a mobile MVP (Minimum Viable Product) for a home services marketplace, developed as part of a technical test with a 48-hour time constraint.

The application allows users located in Casablanca to request a home service, upload a photo, receive a simulated AI diagnostic, compare service provider quotes, schedule a visit, confirm a cash payment, and rate the service.

The objective of this project is not  to build a full production application, but to demonstrate:
- Product thinking
- Clean and readable code
- Proper component and state management
- Clear data flow
- Ability to prioritize features under time constraints

---

Supported Services
The platform operates in **Casablanca only** and supports the following service categories:
- Plumbing
- Electricity
- Cleaning

---

User Flow
The app follows a simple and linear user journey:

1. Select a service category  
2. Describe the issue and upload a photo  
3. Receive a simulated AI diagnostic  
4. Compare available service provider quotes  
5. Schedule a visit (date & time)  
6. Confirm payment (cash only)  
7. Rate the service after completion  

Each screen represents one clear step in the process.

---

 AI Diagnostic (Mocked)
The AI diagnostic feature is intentionally simulated.

### How it works:
- Uses simple rule-based logic depending on the selected service category
- Returns a diagnostic result (issue, urgency, recommendation)
- No real AI model or external API is used

### Reasoning:
- Keeps the MVP focused and lightweight
- Demonstrates how AI could be integrated into the flow
- The logic is isolated and can easily be replaced with a real AI API in the future

---

Technical Stack
- **React Native (Expo)**
- **TypeScript**
- **React Navigation (Stack)**
- **Context API** for state management
- **Expo Image Picker** for photo upload

---

Project Structure
The project follows a clean and modular architecture:
src/
├─ navigation/ # App navigation
├─ screens/ # App screens (one per step)
├─ components/ # Reusable UI components
├─ context/ # Global state management
├─ services/ # Mocked business logic (AI, quotes)
├─ models/ # TypeScript data models
├─ utils/ # Constants and helpers

## How to Run the Project

1. Install dependencies
```bash
npm install

2. Start the application
npx expo start

3. Run on a device
Use Expo Go on a real device
Or run on an Android / iOS emulator

