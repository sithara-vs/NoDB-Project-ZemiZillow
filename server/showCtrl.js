const data = require('./data.json');
let id = data.length + 1
  
  
module.exports = {
    getProperties: (req,res) => {
        res.status(200).send(data)
    },
    addProperties:(req,res) => {
        const {year,location,image,rate,favorite} = req.body;
        //console.log(body)
        const body = {
            year,
            location,
            image,
            favorite,
            rate,
            id
        }
        data.push(body)
        id++
        res.status(200).send(data)
       
    },
    updateProperty: (req,res) => {
        //const {rate} = req.body;
        const foundIndex = data.findIndex(element => element.id === +req.params.id)
        //console.log(foundIndex)
        if(foundIndex=== -1){
            res.status(404).send('Property not found!')
            return;
        }
    // data[foundIndex] = {...data[foundIndex],rate:req.body.rate}
      //  res.status(200).send(data)
      //  data[foundIndex]= {...data[foundIndex],favorite:req.body.favorite}
       // console.log(data)
       const updatedPropertyData = {...data[foundIndex],favorite:req.body.favorite}

        res.status(200).send(updatedPropertyData)
        //data[foundIndex] = {...data[foundIndex],rate:req.body.location}
        //res.status(200).send(data)
    
    },
    removeProperty:(req,res)=>{
        const foundIndex = data.findIndex(element => element.id === +req.params.id)
      
        if(foundIndex=== -1){
            res.status(404).send('Property not found!')
            return;
        }
   
         data.splice(foundIndex,1)
       //const finalProp =  data.splice(foundIndex,1)
       // console.log(data)
        res.status(200).send(data)
        
      }
    
}