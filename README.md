# palmirinha-api

## API public

https://palmirinha-api.herokuapp.com/


## Project setup


```
docker-compose up app
```

## Run tests

```
docker-compose up test
```

## API Description

Returns recipes that have the ingredients that were passed in the parameter.

- **URL:**
  recipes/

- **Method:**
  `GET`

- **Query Params:**

  **Required:**

  ```
  i
  ```
  must have up to 3 items

  **Example:**

  ```
  i=onions,garlic
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content example:**

    ```json
    {
    "keywords": [
        "garlic",
        "onions"
    ],
    "recipes": [
        {
            "title": "Roasted Garlic Grilling Sauce",
            "ingredients": [
                "garlic",
                "hot sauce",
                "onions"
            ],
            "link": "http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx",
            "gif": "https://giphy.com/gifs/cooking-Q4PcMC8apFXBm"
        },
        {
            "title": "Steamed Mussels I",
            "ingredients": [
                "garlic",
                "mussels",
                "onions"
            ],
            "link": "http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx",
            "gif": "https://giphy.com/gifs/i-bet-X7eBTCJdSltKg"
        }
      ]
    }
    ```

    or empty recipes array

    ```json
    {
    "keywords": [
        "garlic",
        "onions"
    ],
    "recipes": []
    }
    ```

- **Sample Call:**
  ```
   curl --location --request GET 'https://palmirinha-api.herokuapp.com/recipes/?i=onions,garlic'
  ```
