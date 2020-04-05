module.exports.index=function(req,res)
{
    res.json(200,{
        message:"Lists of posts",
        posts=[]
    })
}