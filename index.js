import express from 'express'
import graphqlServer from './graphql';
const port=10000;
const app=express();

const start= async() =>{
  try {
    await graphqlServer.start();
    console.log("Server is Running on ",port);
    graphqlServer.applyMiddleware({
      app
    });
    await new Promise(resolve => app.listen({port},resolve));
  } catch (error) {
    console.log("Error in GRAPHQL Server",error);
    
  }

}
start()