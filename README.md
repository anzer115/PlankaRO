# PlankaRO - Event Organization Website

PlankaRO is a web application designed for organizing events with efficient user management. It provides users with a platform to create, manage, and participate in events seamlessly, with a modern user interface.

## Features

- **User Management**: Users can register and log in.
- **Event Booking**: Users can view and book events with relevant details.
- **Responsive UI**: Built with HTML, CSS, and Bootstrap for compatibility across devices.
- **Enhanced UI**: Tailwind CSS for modern and intuitive design.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Frontend**: HTML, CSS, Bootstrap, Tailwind CSS
- **Version Control**: Git, GitHub

## Installation

To set up PlankaRO on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/anzer115/PlankaRO.git
```
### Navigate to the Project Directory

```bash
cd PlankaRO
```
### Install Dependencies
```bash
npm install
```
### Set up Environment Variables
```bash
MONGO_URL=your_mongodb_url
```
### Run the Application
```bash
node app.js
```
The app will now be running at http://localhost:3000.

## Instructions

### 1. Explore the First Page

- **Access the Home Page**: Navigate to the `/` route to view the homepage of the PlankaRO application. This page will list all the available events.

### 2. Select an Event

- **View Event Details**: On the homepage, locate the event you’re interested in. Click the **View** button next to the event to be redirected to the event's details page.

### 3. Choose Your Event and Package

- **Offers and Pricing**: On this page, you will see more information about the selected event.
- **Select a Package**: Choose the desired package for the event from the available options. 

### 4. Book the Event

- **Book Event**: Click the **Book** button to proceed with the booking process.
- **Fill in Details**: Complete the booking form with the required details such as:
  - **Name**: Your full name.
  - **Email**: Your email address.
  - **Phone Number**: Your contact number.
  - **Any Query?**: Provide any additional information or special requests related to the event.
  - Fill the other details mentioned in the form.

- **Submit Booking**: After filling in the details, submit the form to finalize your booking.

You will receive a confirmation of your booking, and any additional instructions or information regarding the event will be provided.


