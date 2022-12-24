<template>
  <div class="edit-container d-flex">
    <v-card>
        <h1>Informacion del estudiante</h1>
        <v-form v-model="edit" ref="formEdit" lazy-validation>
            <v-card class="d-flex flex-column align-center">

            </v-card>
        </v-form>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.edit-container{
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>