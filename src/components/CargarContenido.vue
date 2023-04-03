<template>
    <div class="grid">
        <div>
            <h2>Upload song</h2>
            <input type="file" :accept="formatos" @change="procesar_evento">
            <ListaCanciones v-if="mostrar_tabla"></ListaCanciones>
        </div>
        <div>
            <h2>Read directory</h2>
        </div>
    </div>
</template>
<script>
import { formatos_admitidos } from '../Datos';
import ListaCanciones from '../components/ListaCanciones.vue';
import {canciones} from '../DatosCanciones';
export default {
    name: 'CargarContenido',
    components: {
        ListaCanciones
    },
    data() {
        return {
            formatos: formatos_admitidos,
            mostrar_tabla: false,
            sin_cover: require('../assets/noimg.png'),
            // cancion: '',
            // datos: [],
            // metadata: {},
        }
    },
    methods: {
        procesar_evento(event) {
            const media = require('../jsmediatags');
            const cancion = event.target.files[0];
            const aux_reference = this;
            media.read(cancion, {
                onSuccess: function (tag) {
                    canciones.push({
                        file: aux_reference.asignar(cancion),
                        cover: aux_reference.valido_cover(tag.tags.picture),
                        title: aux_reference.valido(tag.tags.title),
                        artist: aux_reference.valido(tag.tags.artist),
                        album: aux_reference.valido(tag.tags.album),
                        genre: aux_reference.valido(tag.tags.genre),
                    });
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
        asignar(p){
            return p;
        },
        valido_cover(p) {
            if (p === null || p === undefined) {
                return this.sin_cover;
            }
            //obtengo el vector que representa la img 
            let data_ = p.data;

            //obtengo su formato
            let format_ = p.format;

            //generamos la cadena de base64 con el formato recuperado
            let base64img = `data:${format_};base64,${window.btoa(this.s2base64(data_))}`;
            return base64img;
        },
        s2base64(data_) {
            //dado que el vector puede ser muy grande y podemos obtener un error 
            //de pila, recorremos la data_ y transformamos cada valor y lo agregamos
            let base64string = '';
            for (let index = 0; index < data_.length; index++) {
                base64string += String.fromCharCode(data_[index]);

            }
            return base64string;
        }
    },
}
</script>