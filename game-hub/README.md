# Config

## Api Keys

1. This app supports `.env` files. We pass the API key as a environment variable, so creating a `.env` file in the root folder of the app is necessary.
2. This app requires a rawg.io API key. You can get it from the rawg.io website.
3. Once you have the API key, put the following line in the `.env` file:
    ```
    VITE_RAWG_API_KEY=your_api_key
    ```

# Running the app

## Using docker-compose

### Production
You can run the app using the `docker-compose up` command in the root folder of the app.

### Development
You can run the app in development mode using the `docker-compose -f docker-compose.dev.yml up` command in the root folder of the app.
This will use the conents of the `./src/` di
