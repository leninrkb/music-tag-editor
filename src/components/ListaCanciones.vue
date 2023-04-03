<template>
    <figure>
        <table>
            <thead>
                <tr>
                    <td>Cover</td>
                    <td>Title</td>
                    <td>Artist</td>
                    <td>Album</td>
                    <td>Genre</td>
                </tr>
            </thead>
            <tbody v-for="item,index in datos" :key="index">
                <tr @click="editar(index)">
                    <td><img :src="item.cover"></td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.artist }}</td>
                    <td>{{ item.album }}</td>
                    <td>{{ item.genre }}</td>
                </tr>
                <tr>
                    <td><a :href="item.cover" :download="item.artist">downolad cover</a></td>
                </tr>
                <tr v-if="mostrar_editar && editando==index">
                    <td colspan="4"><EditarCancion :id="index" @editado="editado"></EditarCancion></td>
                </tr>
            </tbody>
        </table>
    </figure>
</template>
<script>
import EditarCancion from './EditarCancion.vue';
import {canciones} from '../DatosCanciones';
export default {
    name: 'ListaCanciones',
    components:{
        EditarCancion
    },
    data() {
        return {
            mostrar_editar:false,
            datos: canciones,
            editando:-1
        }
    },
    methods: {
        editar(index){
            this.mostrar_editar = true;
            this.editando = index;
        },
        editado(emitido){
            if(emitido == 'cancelado' || emitido == 'guardado'){
                this.mostrar_editar = false;
            }

        }
    },
};
</script>