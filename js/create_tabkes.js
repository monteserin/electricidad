	function createTables(tx){
		tx.executeSql("DROP TABLE IF EXISTS farola;");
		tx.executeSql("CREATE TABLE IF NOT EXISTS farola (id, latitud, longitud);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.39991, 2.171942);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 37.450332, -122.089033);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.38737, 2.175236);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.395612, 2.142963);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.395612, 2.142963);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.369546, 2.134606);");
		tx.executeSql("INSERT INTO farola (id,latitud, longitud) VALUES(0, 41.369756, 2.130378);");
	}