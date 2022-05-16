<template>
    <div>
        <slot></slot>
        <button type="button" @click="$emit('close')" class="btn btn-danger">X Close</button>
    </div>
</template>

<script>
    export default {
        props:{
            open:{
                type: Boolean,
                default: true
            }
        }
    }
</script>
