# Secure Attendance Tracker App

A modern, cross-platform mobile application for tracking attendance using biometric face verification and GPS geofencing. This system is designed to provide a secure, efficient, and reliable alternative to traditional attendance methods.

---

### Core Features

*   **Biometric Authentication:** Users log their attendance using real-time face verification.
*   **GPS Geofencing:** Attendance can only be logged when the user is within a predefined geographical area.
*   **Role-Based Access Control:**
    *   **Users:** Can log their attendance and view their personal history.
    *   **Admins:** Can manage users, view all attendance logs, and generate reports.
*   **Secure Backend:** Built on Google Firebase for reliable and secure data storage and authentication.
*   **Admin Dashboard:** Provides an at-a-glance overview of system activity.
*   **Reporting:** Admins can generate and export attendance reports.

---

### Technology Stack

*   **Frontend:** React Native (with Expo)
*   **Navigation:** React Navigation (Stack, Drawer, Tabs)
*   **Backend:** Google Firebase (Authentication, Firestore)
*   **Device APIs:** Expo Camera, Expo Location

---

### Project Status

**Current Phase: UI Prototype Development**

The application is currently in the UI prototyping phase. The user interface and navigation are being built out with static, mocked data. The backend and database integration will occur in a subsequent phase.

---

### Setup and Installation

To run this project in a development environment, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd attendance-tracker
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the application:**
    ```bash
    npx expo start
    ```
    Scan the QR code with the Expo Go app on your mobile device.

---

### Author

*   **Jeff Martinez** - BSIT Student