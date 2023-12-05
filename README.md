### Javascript Object Prisma Generator for your Model

##  Installation

```
npm install --save 
```

## Usage

```
import schema from '@prisma/schema';

```

## Data Example

```
{
  "enums": [
    { "name": "Ingredient", "values": ["BUN", "PATTY", "LETTUCE", "TOMATO"] },
    { "name": "Preparation", "values": ["GRILL", "ASSEMBLE", "SEASON"] },
    { "name": "Status", "values": ["RAW", "COOKED", "ASSEMBLED"] }
  ],
  "models": [
    {
      "name": "Burger",
      "fields": [
        { "name": "type", "type": "Ingredient", "isRequired": true, "isId": true },
        { "name": "ingredients", "type": "Ingredient", "isList": true, "isRequired": true },
        { "name": "preparations", "type": "Preparation", "isList": true, "isRequired": true },
        { "name": "status", "type": "Status", "isRequired": true, "default": "RAW" }
      ]
    }
  ],
  "types": []
}

```