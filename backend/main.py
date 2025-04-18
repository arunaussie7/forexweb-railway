from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from alpha_vantage.timeseries import TimeSeries
from alpha_vantage.foreignexchange import ForeignExchange
import pandas as pd
from datetime import datetime, timedelta
from typing import List, Dict
import asyncio
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Alpha Vantage clients
ts = TimeSeries(key=os.getenv('ALPHA_VANTAGE_API_KEY'), output_format='pandas')
fx = ForeignExchange(key=os.getenv('ALPHA_VANTAGE_API_KEY'), output_format='pandas')

# Define the symbols we want to track
STOCK_SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "META", "TSLA", "NVDA"]
FOREX_PAIRS = ["EUR/USD", "GBP/USD", "USD/JPY", "EUR/GBP"]
CRYPTO_SYMBOLS = ["BTC", "ETH"]

async def get_stock_data(symbol: str) -> Dict:
    try:
        data, _ = ts.get_quote_endpoint(symbol)
        if data.empty:
            return {
                "symbol": symbol,
                "price": 0,
                "change": 0,
                "changePercent": 0,
                "previousClose": 0,
                "error": "No data available"
            }
        
        price = float(data['05. price'].iloc[0])
        change = float(data['09. change'].iloc[0])
        change_percent = float(data['10. change percent'].iloc[0].replace('%', ''))
        previous_close = price - change
        
        return {
            "symbol": symbol,
            "price": round(price, 2),
            "change": round(change, 2),
            "changePercent": round(change_percent, 2),
            "previousClose": round(previous_close, 2),
            "lastUpdated": datetime.now().isoformat()
        }
    except Exception as e:
        return {
            "symbol": symbol,
            "price": 0,
            "change": 0,
            "changePercent": 0,
            "previousClose": 0,
            "error": str(e)
        }

async def get_forex_data(pair: str) -> Dict:
    try:
        from_currency, to_currency = pair.split('/')
        data, _ = fx.get_currency_exchange_rate(from_currency=from_currency, to_currency=to_currency)
        if data.empty:
            return {
                "symbol": pair,
                "price": 0,
                "change": 0,
                "changePercent": 0,
                "previousClose": 0,
                "error": "No data available"
            }
        
        price = float(data['5. Exchange Rate'].iloc[0])
        # For forex, we'll use a 24-hour change
        data_24h, _ = fx.get_currency_exchange_daily(from_symbol=from_currency, to_symbol=to_currency)
        if not data_24h.empty:
            previous_close = float(data_24h['4. close'].iloc[0])
            change = price - previous_close
            change_percent = (change / previous_close) * 100
        else:
            change = 0
            change_percent = 0
            previous_close = price
        
        return {
            "symbol": pair,
            "price": round(price, 4),
            "change": round(change, 4),
            "changePercent": round(change_percent, 2),
            "previousClose": round(previous_close, 4),
            "lastUpdated": datetime.now().isoformat()
        }
    except Exception as e:
        return {
            "symbol": pair,
            "price": 0,
            "change": 0,
            "changePercent": 0,
            "previousClose": 0,
            "error": str(e)
        }

async def get_crypto_data(symbol: str) -> Dict:
    try:
        data, _ = ts.get_digital_currency_daily(symbol=symbol, market='USD')
        if data.empty:
            return {
                "symbol": f"{symbol}-USD",
                "price": 0,
                "change": 0,
                "changePercent": 0,
                "previousClose": 0,
                "error": "No data available"
            }
        
        current_price = float(data['4a. close (USD)'].iloc[0])
        previous_close = float(data['4a. close (USD)'].iloc[1])
        change = current_price - previous_close
        change_percent = (change / previous_close) * 100
        
        return {
            "symbol": f"{symbol}-USD",
            "price": round(current_price, 2),
            "change": round(change, 2),
            "changePercent": round(change_percent, 2),
            "previousClose": round(previous_close, 2),
            "lastUpdated": datetime.now().isoformat()
        }
    except Exception as e:
        return {
            "symbol": f"{symbol}-USD",
            "price": 0,
            "change": 0,
            "changePercent": 0,
            "previousClose": 0,
            "error": str(e)
        }

@app.get("/api/market-data")
async def get_all_market_data():
    stock_tasks = [get_stock_data(symbol) for symbol in STOCK_SYMBOLS]
    forex_tasks = [get_forex_data(pair) for pair in FOREX_PAIRS]
    crypto_tasks = [get_crypto_data(symbol) for symbol in CRYPTO_SYMBOLS]
    
    results = await asyncio.gather(
        *stock_tasks,
        *forex_tasks,
        *crypto_tasks
    )
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 