# WanderSphere Travel Tours Website

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

WanderSphere is a modern, responsive web application for booking travel packages, including flights, hotels, and tours. Built with React and leveraging the power of Framer Motion for smooth animations, this website offers a seamless and engaging user experience for travelers looking to plan their next adventure.

## 🌟 Features

- **Dynamic Package Listings**: Browse through a variety of travel packages
- **Search Functionality**: Easily find specific packages
- **Detailed Package Information**: View comprehensive details about each package
- **Booking System**: Streamlined process for selecting travel dates and guests
- **Responsive Design**: Great experience on both desktop and mobile devices
- **Animations**: Smooth transitions powered by Framer Motion

## 🛠️ Tech Stack

- React
- React Router
- Framer Motion
- Tailwind CSS
- Axios
- Date-fns
- React Slick

## 🗂️ Project Structure

```
src/
├── components/
│   ├── booking/
│   │   ├── BookingConfirmation.jsx
│   │   ├── BookingForm.jsx
│   │   └── PaymentForm.jsx
│   ├── home/
    │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   └── Testimonials.jsx
│   ├── layout/
    │   ├── Footer.jsx
    │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── loader/
│   │   └── LoadingSpinner.jsx
│   └── packages/
│       ├── PackageCard.jsx
│       └── PackageList.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FlightDetail.jsx
│   ├── Home.jsx
│   ├── HotelDetails.jsx
│   ├── PackageDetails.jsx
│   ├── Packages.jsx
│   └── TourDetails.jsx
├── mockdata/
│   ├── HotelMockData.json
│   ├── TestimonialMockData.js
│   └── TourMockData.json
└── App.jsx
```

## 🚀 Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abba-F-Daniel1/travel-tours-website
   ```

2. Navigate to the project directory:
   ```sh
   cd travel-tours-website
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your Amadeus API credentials:
   ```
   VITE_AMADEUS_CLIENT_ID=your_client_id
   VITE_AMADEUS_CLIENT_SECRET=your_client_secret
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173/`

## 🌐 API Integration

This project uses the Amadeus API for fetching flight information. Sign up for an account at [Amadeus for Developers](https://developers.amadeus.com/) to obtain your API credentials.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🖼️ Screenshots

### Desktop Views
<p float="left">
  <img src="https://github.com/user-attachments/assets/4ddaf059-dabd-4d60-a178-498c5c2c7bf8" width="49%" />
  <img src="https://github.com/user-attachments/assets/2dfb60af-3de4-474b-a006-8df16db04e47" width="49%" />
</p>
<p float="left">
  <img src="https://github.com/user-attachments/assets/93214468-2ede-4bc6-a6a7-f3b0294429fd" width="49%" />
  <img src="https://github.com/user-attachments/assets/cec2aca1-be39-4e55-bd47-e50b146749b8" width="49%" />
</p>

### Mobile Views
<p float="left">
  <img src="https://github.com/user-attachments/assets/363234e3-0819-4826-8375-c5d5789c81af" width="24%" />
  <img src="https://github.com/user-attachments/assets/2d56c44b-574c-4995-bc49-bfd395badd69" width="24%" />
  <img src="https://github.com/user-attachments/assets/811bd833-174a-4cef-ba5a-5e9303f2cdfb" width="24%" />
  <img src="https://github.com/user-attachments/assets/1a7a674d-ca22-4005-86ee-68ad48bc2087" width="24%" />
</p>

## 📬 Contact

Abba Daniel - https://x.com/FrederickAbba - abba.fred.daniel@gmail.com

Project Live Link: [travel-tours-website-two.vercel.app](https://travel-tours-website-two.vercel.app/)
