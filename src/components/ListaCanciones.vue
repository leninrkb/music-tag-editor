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
            <tbody>
                <tr v-for="item in datos" :key="item">
                    <td><img :src="item.cover" alt=""></td>
                    <td>{{item.title}}</td>
                    <td>{{item.artist}}</td>
                    <td>{{item.album}}</td>
                    <td>{{item.genre}}</td>
                </tr>
            </tbody>
        </table>
    </figure>
</template>
<script>
export default {
    name: 'ListaCanciones',
    props: {
        datos: {
            type: Array,
            required: false
        }
    },
};
</script>