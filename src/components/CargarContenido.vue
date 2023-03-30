<template>
    <div class="grid">
        <div>
            <h2>Upload song</h2>
            <input type="file" :accept="formatos" @change="procesar_evento">
            <ListaCanciones v-if="mostrar_tabla" :datos="datos"></ListaCanciones>
        </div>
        <div>
            <h2>Read directory</h2>
        </div>
    </div>
</template>
<script>
import { formatos_admitidos } from '../Datos';
import ListaCanciones from '../components/ListaCanciones.vue';
export default {
    name: 'CargarContenido',
    components: {
        ListaCanciones
    },
    data() {
        return {
            formatos: formatos_admitidos,
            cancion: '',
            mostrar_tabla: false,
            datos: [],
            metadata: {}
        }
    },
    methods: {
        procesar_evento(event) {
            const media = require('../jsmediatags');
            let cancion = event.target.files[0];
            const aux_reference = this;
            media.read(cancion, {
                onSuccess: function (tag) {
                    aux_reference.metadata = {
                        cover: aux_reference.valido_cover(tag.tags.picture),
                        title: aux_reference.valido(tag.tags.title),
                        artist: aux_reference.valido(tag.tags.artist),
                        album: aux_reference.valido(tag.tags.album),
                        genre: aux_reference.valido(tag.tags.genre),
                    };
                    aux_reference.datos[0] = aux_reference.metadata;
                    aux_reference.mostrar_tabla = true;
                },
                onError: function (error) {
                    aux_reference.mostrar_tabla = false;
                    console.log(error);
                }
            });
        },
        valido(p) {
            let resp = 'empty';
            if (p === null || p === undefined) {
                return resp;
            }
            let val = p.toString().trim();
            let len = val.length;
            if (len === 0) {
                return resp;
            }
            return val;
        },
        valido_cover(p) {
            if (p === null || p === undefined) {
                return require('../assets/noimg.svg');
            }
            let data = p.data;
            let format = p.format;
            data = `data:${format};base64,${window.btoa(String.fromCharCode.apply(null, data))}`;
            return data;

        }
    },
}
</script>