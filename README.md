This is a modification/fix from dwaring87-interface-human-readable-id
====

A Directus v9 Interface for generating a human-readable ID for a text or string field in a collection.
The ID takes the form of a unique 5-digit code with numbers.

![image](https://user-images.githubusercontent.com/65249675/206595889-a27ca831-042e-4e2b-8253-984711b6d27f.png)


## Use Case

The idea is that this provides a realtively large set of random combinations that can be used as easily-remembered codes or IDs.

## Installation

This repository contains a [custom Directus interface](https://docs.directus.io/extensions/interfaces/) that must be built and 
then installed into your Directus instance.

### Install

Install the node dependencies:

```
npm install
```

### Build

Build the extension (using rollup via directus-extension):

```
npm run build
```

### Deploy

The `dist/index.js` file must be moved to the directus `/extensions/interfaces` directory.  First, set the DIRECTUS_EXTENSIONS_PATH environment 
variable to the path of the Directus extensions directory (either directly or by setting it in a .env file in the repository root directory). 
Then, use the included deploy script to copy the appropriate files:

```
DIRECTUS_EXTENSIONS_PATH=/directus/extensions npm run deploy
```

## Usage

To use the interface, create a standard text or string field and select "Human Readable ID" as the interface for the field.

**1. Create a new Standard Field in a Collection**

![Screen Shot 2022-07-19 at 5 52 23 PM](https://user-images.githubusercontent.com/7526014/179855475-14a0c0c4-a0db-45f9-9a8e-0e2aada733f8.png)


**2. Set the type as either `String` or `Text`**

![Screen Shot 2022-07-19 at 5 53 27 PM](https://user-images.githubusercontent.com/7526014/179855494-54b79b19-2c7a-4939-a47e-0880288699a0.png)


**3. Select _Human Readable ID_ as the Interface**

![Screen Shot 2022-07-19 at 5 54 18 PM](https://user-images.githubusercontent.com/7526014/179855521-a64a5034-7c97-465d-9480-08ddc735e666.png)

