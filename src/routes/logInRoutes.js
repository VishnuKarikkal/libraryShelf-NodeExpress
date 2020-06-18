const express = require("express");

const app=new express();
const logInRouter=express.Router();

function router(nav)
{
    logInRouter.get('/',(req,res)=>
    {
      res.render('logIn',{nav});
    });

    return logInRouter;
}

module.exports = router;