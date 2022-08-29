const dbConnection = require('../../config/dbConnection');

module.exports =  app =>{

  const connection = dbConnection();

  connection.connect(function(err) {
  if (err){
      throw err;
  }else{
      console.log("BD Connected!");
  }
  });

  app.get('/',(req,res) =>{
    res.render('index')
  });

  app.get('/resolver',(req,res)=>{
    res.render('resolver')
  });

  app.get('/colorear',(req,res)=>{
    res.render('colorear')
  });

  app.get('/datos',(req,res)=>{
    res.render('datos')
  });

  app.get('/eleccion1',(req,res)=>{
    connection.query('SELECT MAX(IdParticipante) AS IdParticipante FROM Participante',(err,result) =>{
      res.render('eleccion1',{
        participante:result
      });
    });
  });

  app.get('/eleccion2',(req,res)=>{
    connection.query('SELECT MAX(IdParticipante) AS IdParticipante FROM Participante',(err,result) =>{
      res.render('eleccion2',{
        participante:result
      });
    });
  });

  app.get('/emax',(req,res)=>{
    connection.query('SELECT MAX(IdParticipante) AS IdParticipante FROM Participante',(err,result) =>{
      res.render('emax',{
        participante:result
      });
    });
  });

  app.get('/etd1',(req,res)=>{
    connection.query('SELECT MAX(IdEleccion) AS IdEleccion FROM Eleccion',(err,result) =>{
        res.render('etd1',{
          eleccion:result
        });
    });
  });

  app.get('/etd2',(req,res)=>{
    connection.query('SELECT MAX(IdEleccion) AS IdEleccion FROM Eleccion',(err,result)=>{
      res.render('etd2',{
        eleccion:result
      });
    });
  });

  app.get('/intermedio',(req,res)=>{
    res.render('intermedio')
  });

  app.get('/gracias',(req,res)=>{
    res.render('gracias')
  });

  app.post('/experimento/datos',(req,res) =>{
    const {n1,n2,n3,n4,n5,n6,n7} = req.body;
    connection.query('INSERT INTO Participante SET?',{
      Sexo: n1,
      Edad: n2,
      Escolaridad: n3,
      Ocupacion: n4,
      HorasAyuno: n5,
      HorasDespierto: n6,
      NumComidas: n7
    }, function(error,results){
        if(error){ throw error;}
        else{console.log('Registro agregado', results);res.redirect('/resolver');}
    });
  });

  app.post('/experimento/emax',(req,res) =>{
    const {n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,idp} = req.body;
    connection.query('INSERT INTO EMAX SET?',{
      P1: n1,
      P2: n2,
      P3: n3,
      P4: n4,
      P5: n5,
      P6: n6,
      P7: n7,
      P8: n8,
      P9: n9,
      P10: n10,
      P11: n11,
      P12: n12,
      P13: n13,
      IdParticipante: idp
    }, function(error,results){
        if(error){ throw error;}
        else{console.log('Registro agregado', results);res.redirect('/eleccion1');}
    });
  });

  app.post('/experimento/eleccion1',(req,res) =>{
    const{elegido,tipoe,numOpci,tiempo,idp}=req.body;
    connection.query('INSERT INTO Eleccion SET?',{
      TipoEstimulo: tipoe,
      NumOpciones: numOpci,
      Tiempo: tiempo,
      Elegido: elegido,
      IdParticipante: idp
    }, function(error,results){
        if(error){ throw error;}
        else{console.log('Registro agregado', results);res.redirect('/etd1');}
    });
  });

  app.post('/experimento/eleccion2',(req,res) =>{
    const{elegido,tipoe,numOpci,tiempo,idp}=req.body;
    connection.query('INSERT INTO Eleccion SET?',{
      TipoEstimulo: tipoe,
      NumOpciones: numOpci,
      Tiempo: tiempo,
      Elegido: elegido,
      IdParticipante: idp
    }, function(error,results){
        if(error){ throw error;}
        else{console.log('Registro agregado', results);res.redirect('/etd2');}
    });
  });

  app.post('/experimento/etd',(req,res) =>{
    const {n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,ide,ids} = req.body;
    connection.query('INSERT INTO ETD SET?',{
      P1: n1,
      P2: n2,
      P3: n3,
      P4: n4,
      P5: n5,
      P6: n6,
      P7: n7,
      P8: n8,
      P9: n9,
      P10: n10,
      P11: n11,
      P12: n12,
      P13: n13,
      P14: n14,
      P15: n15,
      IdEleccion: ide
    }, function(error,results){
        if(error){ throw error;}
        else{
          console.log('Registro agregado', results);
          if(ids=='ct1'){
            res.redirect('/intermedio');
          }else if(ids=='ct2'){
            res.redirect('/gracias');
          }else{
            console.log("Ayuda ",ids);
          }
        }
    });
  });

}
