# Ethereum Unit Converter

The **Ethereum Unit Converter** is a simple and intuitive web application that allows users to convert between different Ethereum units, such as **Wei**, **Gwei**, and **Ether**. It also displays the current price of Ethereum in USD using the CoinGecko API.

## Features

- **Unit Conversion**
- **Current ETH Price**
- **User-Friendly Interface**
- **Modular Codebase**

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DappCoderr/Ethereum-Unit-Converter.git
   cd ethereum-unit-converter
   ```

2. **Install Dependencies**:
   ```bash
   npm i
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   The application will open automatically in your default browser at `http://localhost:3000`.

## How It Works

1. **Fetching ETH Price**:
   - On page load, the app fetches the current price of Ethereum in USD using the CoinGecko API.

2. **Unit Conversion**:
   - When you enter a value in any of the input fields (Wei, Gwei, or Ether), the app automatically converts it to the other two units.
   - The conversion logic is based on the following relationships:
     - 1 Ether = 10^18 Wei
     - 1 Gwei = 10^9 Wei
     - 1 Ether = 10^9 Gwei

3. **Input Validation**:
   - The app ensures that only valid numbers (including decimals) are accepted as input.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

## Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for providing Ethereum price data.
- [React](https://reactjs.org/) for the frontend framework.
