const express = require("express");

const app=new express();
const signUpRouter=express.Router();

function router(nav)
{
    signUpRouter.get('/',(req,res)=>
    {
      res.render('signUp',{nav});
    });

    return signUpRouter;
}

module.exports = router;