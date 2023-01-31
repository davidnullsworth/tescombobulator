# Tescombobulator  

Tesco wants you to give them your PPI to data-mine you in exchange for you being able to buy food at a reasonable price.  
Fuck that.  
This app generates a random clubcard barcode that you can scan at the checkout.  
Doesn't work? Generate a new one without even refreshing the page.  

## Installation  
This app was created with [create-react-app](https://create-react-app.dev/) so the usual built-in scripts apply.  
```shell
npm install
```

## Running  
Requires Node 18.x

### Running locally  
For dev build with hot-reloading  
```shell
npm run start
```

For production build 
```shell
npm run build

npx serve build
```

### Running with Docker
```
docker build -t tescombobulator .

docker run -p 3000:3000 tescombobulator
```




