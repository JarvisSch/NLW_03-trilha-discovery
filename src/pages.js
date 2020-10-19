const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports={

  index(req,res){   
    
    const is_regiao_setado = (req.query.regiao_setado == '1') ? true: false;
    const page = {
      regiao_setado : is_regiao_setado
    };
    return res.render('index',{page : page});
  }
  ,async orphanage(req,res){

    const id= req.query.id;

    try{
      const db = await Database;
      const results = await db.all(`SELECT * FROM orphanages WHERE ID = "${id}"`); 
      const orphanage = results[0]

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImage = orphanage.images[0]

      if(orphanage.open_on_weekends == "0"){
        orphanage.open_on_weekends = false
      }else{
        orphanage.open_on_weekends = true;
      }

      console.log('orphanage= ',orphanage)
      return res.render('orphanage',{ orphanage : orphanage});

    }catch(error){
      console.log('erro: ',error);
      return res.send('erro no banco de dados!')
    }    
  }

  ,async orphanages(req,res){
    try{
      const db = await Database;
      const selectedOrphanages = await db.all("SELECT * FROM orphanages"); 
      return res.render('orphanages',{ orphanages : selectedOrphanages});
    }catch(error){
      console.log('erro: ',error);
      return res.send('erro no banco de dados!')
    }
    
  }
  ,createOrphanage(req,res){
    return res.render('create-orphanage');
  },
  
   async saveOrphanage(req,res){
    const fields = req.body;
    console.log(fields);
 
    if(Object.values(fields).includes('')){
      return res.send('Todos os campos devem ser preenchidos');
    }

    try {
      const db = await Database;
      await saveOrphanage(db,{
        lat: fields.lat
        ,lng:fields.lng
        ,name : fields.name
        ,about : fields.about
        ,whatsapp : fields.whatsapp
        ,images : fields.images.toString()
        ,instructions : fields.instructions
        ,opening_hours : fields.opening_hours
        ,open_on_weekends : fields.open_on_weekends  
      });  

      return res.redirect('/orphanages');
    } catch (error) {
      console.log("erro: ",error);
      return res.send('erro no banco de dados!');
    }


  }

}