const Twit = require ('twit'); 

const T = new Twit({
    consumer_key:'toAtKQYnh4KGI19uInLVejigw',
    consumer_secret: '8SBRD8atUb5I7W6youLU0O1EMU8BU4PzJUraajJmPixSzoAwY4',
    access_token: '1768641516686180352-AnqNDvj7HCo3EVrAUm8L77p0xKcUOG',
    access_token_secret:'JGkBSD24m1gkxYuy5gyivSiDl5AUb3hHQTgMALGDKJaXr',
    timeout_ms: 60 * 1000, 
}); 

const fetchTwitterTrends = async(req,res) =>{
    try{
        const response = await T.get('trends/place', {id : 1});
        const trends = response.data[0].trends;
        res.json(trends);
    }catch(error){
        console.error('Error fetching Twitter Trends: ', error);
        res.status(500).json({error : 'Internal server error'});
    }
};

module.exports={
    fetchTwitterTrends,
};



