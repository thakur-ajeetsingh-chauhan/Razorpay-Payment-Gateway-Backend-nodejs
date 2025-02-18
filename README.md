# Razorpay-Payment-Gateway-Backend-nodejs
Here's a detailed `README.md` file for your Razorpay Payment Gateway Backend (Node.js) integration, ready for GitHub:

---

# Razorpay Payment Gateway Backend - Node.js

This project is a backend implementation for integrating Razorpay's payment gateway with your web application. It handles the creation of payment orders, payment verification, and facilitates seamless payment transactions through Razorpay API.

## Features

- **Create Order**: Generate Razorpay order IDs based on the payment amount.
- **Verify Payment**: Verify payments by validating the payment signature received from Razorpay.
- **Payment Integration**: Full backend integration with Razorpay's payment system to manage and complete transactions.

## Prerequisites

- Node.js v14.x or higher
- npm (Node Package Manager)
- A Razorpay account for API keys (`RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`)

## Setup Instructions

Follow the steps below to set up the Razorpay Payment Gateway Backend:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/thakur-ajeetsingh-chauhan/razorpay-payment-backend-nodejs.git
cd razorpay-payment-backend-nodejs
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=5001
```

### 4. Start the Server

After setting up your environment variables, start the server with the following command:

```bash
npm start
```

The server will now be running on `http://localhost:5001`.

## API Endpoints

### 1. **Create Order**

- **URL**: `/create-order`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "amount": 500
  }
  ```
  - `amount`: The payment amount (in INR).
  
- **Response**:
  ```json
  {
    "orderId": "order_abc123",
    "amount": 50000
  }
  ```

### 2. **Verify Payment**

- **URL**: `/verify-payment`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "order_id": "order_abc123",
    "razorpay_payment_id": "payment_abc123",
    "razorpay_signature": "signature_xyz"
  }
  ```

- **Response**:
  ```json
  {
    "status": "success"
  }
  ```

## Troubleshooting

- Ensure you have the correct API keys from Razorpay. If you encounter issues with the `RAZORPAY_KEY_ID` or `RAZORPAY_KEY_SECRET`, double-check them in the Razorpay dashboard.
- Ensure that your server's port (default: `5001`) is not being used by other services.

## Security

For better security practices:

- Use `https` for production environments to prevent unauthorized access to payment details.
- Never expose your `RAZORPAY_KEY_SECRET` in the frontend or publicly.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Razorpay](https://razorpay.com) for the payment gateway API.

---

Let me know if you need further adjustments!
