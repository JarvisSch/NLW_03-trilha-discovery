function saveOrphanage(db, orphanage) {
    
    return db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            images,
            whatsapp,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.images}",
            "${orphanage.whatsapp}",
            "${orphanage.instructions}",
            "${orphanage.opening_hours}",
            "${orphanage.open_on_weekends}"
        );
    `)
}

module.exports = saveOrphanage;
