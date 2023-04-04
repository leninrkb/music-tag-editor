<template>
    <div class="grid">
        <div>
            <img :src="datos.cover" alt="">
        </div>
        <div>
            <label>Title</label>
            <input type="text" v-model="title" :placeholder="datos.title">

            <label>Artist</label>
            <input type="text" v-model="artist" :placeholder="datos.artist">

            <label>Album</label>
            <input type="text" v-model="album" :placeholder="datos.album">

            <label>Genre</label>
            <input type="text" v-model="genre" :placeholder="datos.genre">

            <button @click="guardar">save</button>
            <button class="secondary" @click="cancelar">cancel</button>
        </div>
    </div>
</template>

<script>
import { canciones } from '../DatosCanciones';
export default {
    name: 'EditarCancion',
    props: {
        id: Number
    },
    data() {
        return {
            datos: canciones[this.id],
            title: '',
            artist: '',
            album: '',
            genre: '',
        }
    },
    methods: {
        cancelar() {
            this.$emit('editado', 'cancelado');
        },
        guardar() {
            /* eslint-disable */ 
            const jsmediatags = require('../jsmediatags');
            const nuevos = {
                title: this.title == '' ? this.datos.title : this.title,
                artist: this.artist == '' ? this.datos.artist : this.artist,
                album: this.album == '' ? this.datos.album : this.album,
                genre: this.genre == '' ? this.datos.genre : this.genre,
            };
            /*File.write()*/
            this.$emit('editado', 'guardado');
        }
    },
}
</script>
