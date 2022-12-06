const express = require ("express");
const conectarDB = require  ("./config/db");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters")
const cors = require("cors");

//conectar base de datos
conectarDB();

const app = express();
//habilitar los cors
app.use(cors());

//habilitar express.json
app.use(express.json({extended : true}))
//rutas o routers
app.use("/api/usuarios", usuarioRouters);
app.use("/api/auth", authRouters);



app.listen( 4000, () => {
    console.log("servidor corriendo en el puerto 4000")
});