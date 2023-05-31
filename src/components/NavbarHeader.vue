<template>
    <nav class="container-fluid">
        <ul>
            <li><strong>Music TagEditor</strong></li>
        </ul>
        <ul>
            <li><router-link to="/">My lists</router-link></li>
            <li><router-link to="/cargar" role="button">Upload</router-link></li>
        </ul>
    </nav><hr>

</template>
<script>
export default {
    name:'NavbarHeader'
}
</script>