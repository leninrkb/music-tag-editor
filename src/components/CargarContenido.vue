<template>
    <div class="grid">
        <div>
            <h2>Upload song</h2>
            <input type="file" :accept="formatos" @change="tomar_datos_cancion">

        </div>
        <div>
            <h2>Read directory</h2>
        </div>
    </div>
</template>
<script>
import { formatos_admitidos } from '../Datos';
export default {
    name: 'CargarContenido',
    data() {
        return {
            formatos: formatos_admitidos,
        }
    },
    methods: {
        tomar_datos_cancion(event) {
            const media = require('../jsmediatags');
            let cancion = event.target.files[0];
            media.read(cancion, {
                onSuccess: function (tag) {
                    console.log(tag);

                },
                onError: function (error) {
                    console.log(error);
                }
            });
        }
    }

}
</script>