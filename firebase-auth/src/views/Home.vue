<template>
    <div>
        <h1>route protected</h1>
        {{usuario.email}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Home',
    computed:{
        ...mapState(['usuario'])
    }
}
</script>