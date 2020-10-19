const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.5455874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"929292929",
        images: [
            "https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 8h as 18h",
        open_on_weekends: "1"
        
    })
    
    

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)

    // await db.run('DELETE FROM orphanages WHERE id = "4"')
})